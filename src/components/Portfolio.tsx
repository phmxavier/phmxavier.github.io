import ItemPortfolio from './ItemPortfolio';

function Portfolio() {
  return (
    <div id="portfolio" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto mr-auto">
            <div className="h4 text-center mb-4 title">Portfolio</div>
            <div className="nav-align-center">
              <ul className="nav nav-pills nav-pills-primary" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#game-development" role="tablist">
                    <i className="fa fa-gamepad" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#game-development" role="tablist">
                    <i className="fa fa-code" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content gallery mt-5">
          <div className="tab-pane active" id="game-development">
            <div className="ml-auto mr-auto">
              <div className="row">
                <ItemPortfolio Name="Grid Games" Hint="Clique para Jogar"
                  Description="Jogo desenvolvido no tempo livre usando a engine Unity.
                              Projeto ainda em fase de desenvolvimento."
                  Thumb="images/gridgames_thumb.jpg"
                  Href="/gridgames.html" />
                <ItemPortfolio Name="Jogo da Vida (Conway)" Hint="Clique para mais detalhes"
                  Description="Projeto para aumentar a prática com o TypeScript. Primeira experiência com a biblioteca
                              p5.js."
                  Thumb="images/gameoflife_thumb.jpg"
                  Href="/game-of-life" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
