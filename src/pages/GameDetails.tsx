import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useParams, Link, useLocation } from "react-router-dom";
import { games } from "../data/games";
import UnityWebGLPlayer from "../components/UnityWebGLPlayer";

const GameDetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [showPlayer, setShowPlayer] = useState(false);
  const game = games.find((item) => item.id === id);

  useEffect(() => {
    if (location.hash === "#play" && game?.unityBuildFolder) {
      setShowPlayer(true);
    }
  }, [location.hash, game?.unityBuildFolder]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowPlayer(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  if (!game) {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-white">Jogo não encontrado</h1>
        <p className="text-slate-300">Verifique o link ou escolha outro projeto.</p>
        <Link to="/games" className="text-accent hover:text-accent-2">
          Voltar ao portfólio de jogos
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link to="/games" className="text-sm text-accent hover:text-accent-2">
        ← Voltar para portfólio
      </Link>
      <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-surface-2 shadow-lg shadow-black/20">
            <div className="h-72 w-full overflow-hidden bg-slate-950/60">
              <img
                src={game.thumbnailUrl}
                alt={game.title}
                className={`h-full w-full ${
                  game.thumbnailFit === "contain"
                    ? "object-contain object-center"
                    : "object-cover object-top"
                }`}
              />
            </div>
          </div>
          <div className="space-y-3 rounded-2xl border border-slate-800 bg-surface-2 p-6 shadow-lg shadow-black/20">
            <h1 className="text-3xl font-bold text-white">{game.title}</h1>
            <p className="text-slate-200">{game.longDescription}</p>
            <div className="flex flex-wrap gap-2">
              {game.techs.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-800/60 px-3 py-1 text-xs text-slate-100 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {game.unityBuildFolder ? (
                <button
                  type="button"
                  onClick={() => setShowPlayer(true)}
                  className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-2"
                >
                  Jogar online
                </button>
              ) : (
                <a
                  href={game.webBuildUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-2"
                >
                  Jogar online
                </a>
              )}
            </div>
          </div>
        </div>
        <aside className="space-y-4 rounded-2xl border border-slate-800 bg-surface-2 p-6 shadow-lg shadow-black/20">
          <h2 className="text-xl font-semibold text-white">Resumo</h2>
          <p className="text-slate-300">{game.shortDescription}</p>
          <div className="space-y-2 text-sm text-slate-300">
            <p>
              <span className="font-semibold text-white">Stack:</span> {game.techs.join(", ")}
            </p>
          </div>
        </aside>
      </div>

      {game.unityBuildFolder &&
        showPlayer &&
        createPortal(
          <div
            id="play"
            className="fixed inset-0 z-[120] overflow-y-auto bg-black/80 px-4 py-8 backdrop-blur"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex min-h-full items-center justify-center">
              <div className="relative w-full max-w-5xl">
                <button
                  type="button"
                  onClick={() => setShowPlayer(false)}
                  className="absolute -right-3 -top-3 z-10 rounded-full bg-slate-900 px-3 py-2 text-xs font-semibold text-slate-100 shadow-lg shadow-black/40 transition hover:bg-slate-800"
                >
                  Fechar
                </button>
                <UnityWebGLPlayer buildFolder={game.unityBuildFolder} title={game.title} />
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default GameDetailsPage;
