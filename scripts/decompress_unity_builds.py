#!/usr/bin/env python3
"""
Descomprime builds WebGL do Unity para uso em servidores que nao enviam
Content-Encoding (ex.: GitHub Pages).

Por padrao percorre `public/unity-builds` e remove compressao Brotli/Gzip dos
arquivos gerados pelo Unity (build.data, build.framework.js, build.wasm, etc).

Uso:
    python scripts/decompress_unity_builds.py
    python scripts/decompress_unity_builds.py --root public/unity-builds/wooly-way
    python scripts/decompress_unity_builds.py --dry-run
"""

from __future__ import annotations

import argparse
import gzip
import shutil
import subprocess
import sys
from pathlib import Path
from typing import Iterable, Optional


BROTLi_MARKER = b"UnityWeb Compressed Content (brotli)"


def sniff_compression(path: Path) -> Optional[str]:
    """Retorna 'brotli', 'gzip' ou None."""
    if path.suffix in {".br", ".unityweb"}:
        return "brotli"
    if path.suffix == ".gz":
        return "gzip"

    try:
        with path.open("rb") as fh:
            head = fh.read(128)
    except OSError:
        return None

    if head.startswith(b"\x1f\x8b\x08"):
        return "gzip"
    if BROTLi_MARKER in head:
        return "brotli"
    return None


def decompress_brotli(src: Path, dest: Path) -> None:
    """Descomprime usando o modulo brotli (se instalado) ou o binario `brotli`."""
    try:
        import brotli  # type: ignore

        dest.write_bytes(brotli.decompress(src.read_bytes()))
        return
    except ImportError:
        pass

    result = subprocess.run(
        ["brotli", "-d", str(src), "-o", str(dest)],
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        raise RuntimeError(
            f"Falha ao usar 'brotli' CLI ({src}): {result.stderr.strip()}"
        )


def decompress_gzip(src: Path, dest: Path) -> None:
    with gzip.open(src, "rb") as gz, dest.open("wb") as out:
        shutil.copyfileobj(gz, out)


def destination_for(path: Path) -> Path:
    if path.suffix in {".br", ".gz", ".unityweb"}:
        return path.with_suffix("")
    return path


def iter_candidate_files(root: Path) -> Iterable[Path]:
    yield from (p for p in root.rglob("*") if p.is_file())


def decompress_file(path: Path, *, dry_run: bool = False) -> bool:
    compression = sniff_compression(path)
    if not compression:
        return False

    dest = destination_for(path)
    tmp_dest = dest if dest != path else path.with_suffix(path.suffix + ".tmp")

    print(f"{'DRY-RUN ' if dry_run else ''}descomprimindo {path} -> {dest} ({compression})")
    if dry_run:
        return True

    if compression == "brotli":
        decompress_brotli(path, tmp_dest)
    elif compression == "gzip":
        decompress_gzip(path, tmp_dest)
    else:
        raise ValueError(f"Compressao desconhecida: {compression}")

    if dest == path:
        tmp_dest.replace(dest)
    else:
        path.unlink()
        tmp_dest.replace(dest)
    return True


def main() -> int:
    parser = argparse.ArgumentParser(description="Remove compressao de builds WebGL do Unity.")
    parser.add_argument(
        "--root",
        type=Path,
        default=Path(__file__).resolve().parent.parent / "public" / "unity-builds",
        help="Pasta raiz contendo os builds (padrao: public/unity-builds).",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Mostra o que seria feito sem alterar arquivos.",
    )
    args = parser.parse_args()

    root = args.root
    if not root.exists():
        print(f"Raiz '{root}' nao encontrada.", file=sys.stderr)
        return 1

    changed = 0
    for file_path in iter_candidate_files(root):
        if decompress_file(file_path, dry_run=args.dry_run):
            changed += 1

    if changed == 0:
        print("Nada para descomprimir.")
    else:
        print(f"Concluido: {changed} arquivo(s) descomprimido(s).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
