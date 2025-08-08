import './Profile.css';
function Profile() {
    return (
        <div className="profile-page">
            <div className="wrapper">
                <div className="page-header page-header-small" filter-color="green">
                    <div className="page-header-image" data-parallax="true"></div>
                    <div className="container">
                        <div className="content-center">
                            <div className="cc-profile-image"><a href="#"><img src="images/0.jpg" alt="ProfileImage" /></a></div>
                            <div className="h2 title">Pedro Xavier</div>
                            <p className="category text-white">Líder técnico, Analista/Desenvoledor</p>
                            <a className="btn btn-primary" href="./files/Pedro_Xavier_Curriculo.pdf" download data-aos="zoom-in"
                                data-aos-anchor="data-aos-anchor">Download CV</a>
                        </div>
                    </div>
                    <div className="section">
                        <div className="container">
                            <div className="button-container">
                                <a className="btn btn-default btn-round btn-lg btn-icon" target="_blank"
                                    href="https://www.linkedin.com/in/phmxavier/" rel="tooltip noreferrer" title="Linkedin">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                                <a className="btn btn-default btn-round btn-lg btn-icon" target="_blank"
                                    href="https://github.com/phmxavier" rel="tooltip noreferrer" title="GitHub">
                                    <i className="fa fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;