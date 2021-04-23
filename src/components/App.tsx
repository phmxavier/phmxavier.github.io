import Menu from './Menu';
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GameOfLife from './GameOfLife';

function App() {
    return (
        <div>
            <Menu />
            <Router>
                <Route path="/" exact component={Home} />
                <Route path="/game-of-life" exact component={GameOfLife} />
            </Router>
            <Footer />
        </div>
    );
}
export default App;
