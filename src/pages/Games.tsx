import GameCard from "../components/GameCard";
import { games } from "../data/games";

const GamesPage = () => {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-accent-2">Portfólio de Jogos</p>
        <h1 className="text-3xl font-bold text-white">Jogos em Unity</h1>
      </header>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GamesPage;
