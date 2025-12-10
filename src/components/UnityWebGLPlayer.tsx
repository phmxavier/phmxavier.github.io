import { useEffect, useRef, useState } from "react";

type UnityStatus = "idle" | "loading" | "ready" | "error";

interface UnityWebGLPlayerProps {
  buildFolder: string; // pasta em public/unity-builds/<buildFolder>
  title: string;
}

interface UnityInstance {
  SetFullscreen: (value: number) => void;
  Quit?: () => Promise<void>;
}

interface UnityConfig {
  dataUrl: string;
  frameworkUrl: string;
  codeUrl: string;
  streamingAssetsUrl: string;
  companyName: string;
  productName: string;
  productVersion: string;
  showBanner?: (msg: string, type?: "error" | "warning") => void;
}

declare global {
  interface Window {
    createUnityInstance?: (
      canvas: HTMLCanvasElement,
      config: UnityConfig,
      onProgress?: (progress: number) => void
    ) => Promise<UnityInstance>;
  }
}

const getBasePath = (folder: string) => {
  const base = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");
  return `${base}/unity-builds/${folder}`;
};

const loadScriptOnce = (src: string) =>
  new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(`Erro ao carregar ${src}`)), { once: true });
      if (existing.dataset.ready === "true") resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.dataset.ready = "false";
    script.onload = () => {
      script.dataset.ready = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Erro ao carregar ${src}`));
    document.body.appendChild(script);
  });

const UnityWebGLPlayer = ({ buildFolder, title }: UnityWebGLPlayerProps) => {
  const [status, setStatus] = useState<UnityStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const instanceRef = useRef<UnityInstance | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const detectMobile = () => {
      if (typeof window === "undefined" || typeof navigator === "undefined") return false;
      const ua = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || "";
      const coarsePointer = typeof window.matchMedia === "function" && window.matchMedia("(pointer: coarse)").matches;
      return /android|ipad|iphone|ipod|iemobile|mobile|opera mini/i.test(ua) || coarsePointer;
    };

    let cancelled = false;
    let createdInstance: UnityInstance | null = null;
    const basePath = getBasePath(buildFolder);
    const buildPath = `${basePath}/Build`;
    const loaderUrl = `${buildPath}/build.loader.js`;

    const boot = async () => {
      try {
        const mobile = detectMobile();
        setIsMobile(mobile);
        if (mobile) {
          setStatus("error");
          setError("Este jogo está disponível apenas em navegadores desktop. Abra no computador para jogar.");
          return;
        }

        setStatus("loading");
        setProgress(5);
        await loadScriptOnce(loaderUrl);
        if (cancelled) return;

        const canvas = canvasRef.current;
        if (!canvas) {
          throw new Error("Canvas do Unity não encontrado");
        }

        const createUnityInstance = window.createUnityInstance;
        if (typeof createUnityInstance !== "function") {
          throw new Error("createUnityInstance não disponível");
        }

        const config: UnityConfig = {
          // Usamos arquivos descomprimidos porque o GitHub Pages não envia headers de Content-Encoding.
          dataUrl: `${buildPath}/build.data`,
          frameworkUrl: `${buildPath}/build.framework.js`,
          codeUrl: `${buildPath}/build.wasm`,
          streamingAssetsUrl: `${basePath}/StreamingAssets`,
          companyName: "DefaultCompany",
          productName: title,
          productVersion: "1.0",
          showBanner: (msg, type) => {
            // Replicamos o comportamento do template do Unity com logs simples.
            if (type === "error") {
              console.error(msg);
            } else {
              console.warn(msg);
            }
          }
        };

        const unityInstance = await createUnityInstance(canvas, config, (value: number) => {
          if (cancelled) return;
          setProgress(Math.round(value * 100));
        });

        createdInstance = unityInstance;
        instanceRef.current = unityInstance;
        if (!cancelled) setStatus("ready");
      } catch (err) {
        if (cancelled) return;
        setStatus("error");
        setError(err instanceof Error ? err.message : "Erro ao inicializar o WebGL");
      }
    };

    boot();

    return () => {
      cancelled = true;
      createdInstance?.Quit?.();
      instanceRef.current = null;
    };
  }, [buildFolder, title]);

  const isReady = status === "ready";
  const showProgress = status === "loading" && progress < 100;

  return (
    <div className="space-y-3 rounded-2xl border border-slate-800 bg-surface-2 p-4 shadow-lg shadow-black/20">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-accent-2">Unity Build WebGL</p>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <button
          type="button"
          onClick={() => {
            // Unity expõe SetFullscreen no instance. Mantemos type safety básica.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (instanceRef.current as any)?.SetFullscreen?.(1);
          }}
          disabled={!isReady}
          className="rounded-lg border border-accent px-3 py-2 text-sm font-medium text-accent transition hover:border-accent-2 hover:text-accent-2 disabled:border-slate-700 disabled:text-slate-500 disabled:hover:border-slate-700 disabled:hover:text-slate-500"
        >
          Tela cheia
        </button>
      </div>

      <div className="relative rounded-xl border border-slate-800 bg-black">
        {showProgress && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-black/70 text-center text-slate-100">
            <span className="text-sm font-medium">Carregando o build WebGL...</span>
            <div className="h-2 w-48 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full bg-accent transition-[width] duration-300"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <span className="text-xs text-slate-300">{progress}%</span>
          </div>
        )}

        {status === "error" && (
          <div
            className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 px-4 text-center ${
              isMobile ? "bg-amber-950/80" : "bg-red-950/80"
            }`}
          >
            <p
              className={`text-sm font-semibold ${
                isMobile ? "text-amber-100" : "text-red-200"
              }`}
            >
              {isMobile ? "Disponível apenas em navegadores desktop." : "Não foi possível iniciar o jogo."}
            </p>
            <p
              className={`text-xs ${isMobile ? "text-amber-100/80" : "text-red-100/80"}`}
            >
              {error}
            </p>
          </div>
        )}

        <div
          className="relative w-full"
          style={{ minHeight: "520px" }}
          aria-label={`Unity WebGL player para ${title}`}
        >
          <canvas
            ref={canvasRef}
            id={`${buildFolder}-unity-canvas`}
            className="h-[520px] w-full"
            tabIndex={-1}
          />
        </div>
      </div>
      <p className="text-xs text-slate-400">
        Dica: se algo travar, recarregue a página para limpar o cache do Unity Loader.
      </p>
    </div>
  );
};

export default UnityWebGLPlayer;
