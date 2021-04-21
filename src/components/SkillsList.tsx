import Skill from './Skill';

function SkillsList() {
    return (
        <div className="container">
            <div className="h4 text-center mb-4 title">Skills</div>
            <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="card-body">
                    <div className="row">
                        <Skill Nome="C#" Valor="90" />
                        <Skill Nome=".NET / .NET Core" Valor="85" />
                    </div>
                    <div className="row">
                        <Skill Nome="Angular 2+" Valor="65" />
                        <Skill Nome="APIs Restfull" Valor="75" />
                    </div>
                    <div className="row">
                        <Skill Nome="Mobile (Flutter, Cordova)" Valor="45" />
                        <Skill Nome="Arquitetura de Sistemas" Valor="70" />
                    </div>
                    <div className="row">
                        <Skill Nome="Desenvolvimento de Jogos (UNITY)" Valor="30" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsList;
