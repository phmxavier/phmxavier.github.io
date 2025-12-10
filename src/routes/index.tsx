import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import ExperiencesPage from "../pages/Experiences";
import GamesPage from "../pages/Games";
import GameDetailsPage from "../pages/GameDetails";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/experiences" element={<ExperiencesPage />} />
    <Route path="/games" element={<GamesPage />} />
    <Route path="/games/:id" element={<GameDetailsPage />} />
    <Route path="*" element={<HomePage />} />
  </Routes>
);

export default AppRoutes;
