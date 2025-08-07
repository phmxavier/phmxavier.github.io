import Menu from './Menu';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameOfLife from './GameOfLife';

function App() {
    return (
        <div>
            <Router>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/game-of-life" element={<GameOfLife />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}
export default App;
