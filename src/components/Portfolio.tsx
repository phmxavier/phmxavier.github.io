function Portfolio() {
  return (
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
              <div className="col-md-6">
                <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                  <a href="/gridgames.html">
                    <figure className="cc-effect"><img src="images/gridgames_thumb.jpg" alt="Image" />
                      <figcaption>
                        <div className="h4">Grid Games</div>
                        <p>Clique para Jogar</p>
                        <p>
                          Jogo desenvolvido no tempo livre usando a engine Unity.
                          Projeto ainda em fase de desenvolvimento.
                        </p>
                      </figcaption>
                    </figure>
                  </a>
                </div>
              </div><div className="col-md-6">
                <div className="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                  <a href="/game-of-life.html">
                    <figure className="cc-effect"><img src="images/gameoflife_thumb.jpg" alt="Image" />
                      <figcaption>
                        <div className="h4">Jogo da Vida (Conway)</div>
                        <p>Clique para mais detalhes</p>
                        <p>
                          Projeto para aumentar a prática com o TypeScript. Primeira experiência com a biblioteca
                          p5.js.
                        </p>
                      </figcaption>
                    </figure>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
