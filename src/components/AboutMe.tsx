import Idade from "./Idade";
import './AboutMe.css';

function AboutMe() {
    return (
        <div id="about" className="section white-background">
            <div className="section">
                <div className="container">
                    <div className="card" data-aos="fade-up" data-aos-offset="10">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="card-body">
                                    <div className="h4 mt-0 title">Informações básicas</div>
                                    <div className="row">
                                        <div className="col-sm-4"><strong className="text-uppercase">Idade:</strong></div>
                                        <Idade Nascimento={new Date("1987-11-15")} />
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                                        <div className="col-sm-8">phmxavier@gmail.com</div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-sm-4"><strong className="text-uppercase">Idiomas:</strong></div>
                                        <div className="col-sm-8">Português, Inglês</div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="h4 mt-0 title">Sobre mim</div>
                                    <p>
                                        Sou um líder de tecnologia com sólida experiência de mais de 15 anos na construção e evolução de produtos em ambientes dinâmicos e altamente regulados, como fintechs. Ao longo da minha carreira, liderei iniciativas estratégicas tanto do ponto de vista técnico quanto de liderança, ajudando equipes a entregarem soluções escaláveis e de alta qualidade alinhadas aos objetivos do negócio.
                                    </p>

                                    <p>
                                        Como <strong>Tech Manager</strong>, liderei times multidisciplinares nas áreas de investimentos e seguros, gerenciando relacionamento com fornecedores, lançando novos produtos — incluindo um produto de seguro de vida criado do zero — e alinhando os esforços de engenharia com a estratégia da empresa.
                                    </p>

                                    <p>
                                        Em meus papéis como <strong>Staff Engineer</strong> e <strong>Tech Leader</strong>, atuei como referência técnica em áreas como KYC, PLD, Cobrança e Experiência do Desenvolvedor. Desenhei e modernizei sistemas críticos, mentorei engenheiros e traduzi requisitos complexos em arquiteturas robustas.
                                    </p>

                                    <p>
                                        Sou apaixonado por construir times saudáveis e de alta performance, desenvolver pessoas e conectar engenharia com o negócio para gerar impacto real.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutMe;