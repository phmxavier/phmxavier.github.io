import { Link } from "react-router-dom";
import { Game } from "../data/games";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const fitClass = game.thumbnailFit === "contain" ? "object-contain" : "object-cover";
  const fitBackground = game.thumbnailFit === "contain" ? "bg-slate-950/60" : "";

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-800 bg-surface-2 shadow-lg shadow-black/20">
      <div className={`aspect-[3/2] w-full overflow-hidden ${fitBackground}`}>
        <img
          src={game.thumbnailUrl}
          alt={game.title}
          className={`h-full w-full ${fitClass} object-center transition-transform duration-300 hover:scale-105`}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{game.title}</h3>
          <p className="mt-1 text-sm text-slate-300">{game.shortDescription}</p>
        </div>
        <div className="mt-auto flex gap-2">
          <Link
            to={`/games/${game.id}`}
            className="flex-1 rounded-lg bg-accent px-3 py-2 text-center text-sm font-medium text-white transition hover:bg-accent-2  hover:text-surface"
          >
            Ver detalhes
          </Link>
          {game.unityBuildFolder ? (
            <Link
              to={`/games/${game.id}#play`}
              className="flex-1 rounded-lg border border-accent px-3 py-2 text-center text-sm font-medium text-accent transition hover:border-accent-2 hover:text-accent-2"
            >
              Jogar online
            </Link>
          ) : (
            <a
              href={game.webBuildUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-lg border border-accent px-3 py-2 text-center text-sm font-medium text-accent transition hover:border-accent-2 hover:text-accent-2"
            >
              Jogar online
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
