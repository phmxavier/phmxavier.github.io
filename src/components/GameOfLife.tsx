function GameOfLife(props: any) {
    return (
        <div className="page-content">
            <a href="#about"
                className="btn btn-primary smooth-scroll"
                style={
                    {
                        position: "absolute",
                        top: "100px",
                        left: "10px",
                        zIndex: 999,
                        width: "70px",
                        height: "70px",
                        padding: "16px 16px",
                        fontSize: "14px",
                        lineHeight: "1.33",
                        borderRadius: "35px"
                    }
                }>
                Info<br /><span className="fa fa-arrow-down"></span>
            </a>

            <div style={{ height: "700px" }} id="gameOfLife">
                <iframe style={
                    {
                        marginTop: "100px",
                        width: "600px",
                        height: "600px",
                        position: "absolute",
                        left: "50%",
                        transform: "translate(-50%, 0%)"
                    }
                }
                    src="https://pedroxavier.com/game-of-life-p5/"></iframe>
            </div>
            <div className="section" id="about">
                <div className="container">
                    <div className="card" data-aos="fade-up" data-aos-offset="10">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card-body">
                                    <div className="h4 mt-0 title">Jogo da Vida - Conway</div>
                                    <a target="_blank"
                                        href="https://pt.wikipedia.org/wiki/Jogo_da_vida">https://pt.wikipedia.org/wiki/Jogo_da_vida</a>
                                    <p>O jogo da vida (Game of Life) é um <a target="_blank"
                                        href="https://pt.wikipedia.org/wiki/Aut%C3%B3mato_celular">Autómato celular</a> desenvolvido pelo
                                        matemático <a target="_blank" href="https://en.wikipedia.org/wiki/John_Horton_Conway">John Horton
                                        Conway</a> em 1970.</p>
                                    <p>Apesar de ter em seu nome a palavra jogo, o Jogo da Vida não tem nenhum jogador. A evolução dos
                                        estados são realizadas de forma automática tendo como base um estado inicial.</p>
                                    <p>As regras a serem implementadas são simples e bem definidas:</p>
                                    <ol>
                                        <li>Qualquer célula viva com menos de dois vizinhos vivos morre de solidão.</li>
                                        <li>Qualquer célula viva com mais de três vizinhos vivos morre de superpopulação.</li>
                                        <li>Qualquer célula morta com exatamente três vizinhos vivos se torna uma célula viva.</li>
                                        <li>Qualquer célula viva com dois ou três vizinhos vivos continua no mesmo estado para a próxima geração.</li>
                                    </ol>
                                    <p>Mas por quê desenvolver um jogo que não pode ser jogado? Qual o objetivo deste projeto? Resolvi implementar o Jogo da Vida para conhecer melhor o TypeScript
                                    e seu ambiente de desenvolvimento. Devido às regras do jogo serem muito simples, tive que me preocupar com muito pouca coisa que não fosse o TypeScript e seu
                                    ambiente (que eram o objetivo do projeto). Para implementar a interface gráfica, decidi utilizar a biblioteca <a target="_blank" href="https://p5js.org/">p5.js</a>
                                    pela sua enorme simplicidade e facilidade de configuração e publicação.
                                    </p>
                                    <p><b>Objetivo</b>: Aumentar a familiaridade com o TypeScript e seu ambiente de desenvolvimento.</p>
                                    <p><b>Linguagem</b>: TypeScript</p>
                                    <p><b>Softwares usados</b>: VSCode</p>
                                    <p><b>Bibliotecas usadas</b>: <a target="_blank" href="https://p5js.org/">p5.js</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default GameOfLife;
