import Idade from "./Idade";
import './AboutMe.css';

function AboutMe() {
    return (
        <div id="about" className="section white-background">
            <div className="section">
                <div className="container">
                    <div className="card" data-aos="fade-up" data-aos-offset="10">
                        <div className="row">
                            {/* <div className="col-lg-6 col-md-12">
                        <div className="card-body">
                            <div className="h4 mt-0 title">About</div>
                            <p>Hello! I am Anthony Barnett. Web Developer, Graphic Designer and Photographer.</p>
                            <p>Creative CV is a HTML resume template for professionals. Built with Bootstrap 4, Now UI Kit and
                            FontAwesome, this modern and responsive design template is perfect to showcase your portfolio,
                    skills and experience. <a href="https://templateflip.com/templates/creative-cv/"
                                    target="_blank">Learn More</a></p>
                        </div>
                    </div> */}
                            <div className="col-lg-6 col-md-12">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AboutMe;