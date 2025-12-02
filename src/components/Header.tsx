import { NavLink } from "react-router-dom";

const navBase =
  "px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200";
const navActive = "bg-accent/20 text-white border border-accent/40";
const navInactive = "text-slate-200 hover:text-white hover:bg-slate-700/40";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur border-b border-slate-800 bg-surface/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center font-bold text-lg">
            PX
          </div>
          <div>
            <p className="text-sm text-slate-300">Portfólio & Currículo</p>
            <p className="font-semibold text-white">Pedro Xavier</p>
          </div>
        </a>
        <nav className="flex items-center gap-2">
          <NavLink
            to="/"
            className={({ isActive }) => `${navBase} ${isActive ? navActive : navInactive}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/experiences"
            className={({ isActive }) => `${navBase} ${isActive ? navActive : navInactive}`}
          >
            Experiências
          </NavLink>
          <NavLink
            to="/games"
            className={({ isActive }) => `${navBase} ${isActive ? navActive : navInactive}`}
          >
            Portfólio de Jogos
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
