import Skill from './Skill';

function SkillsList() {
    return (
        <div id="skill" className="section">
            <div className="container">
                <div className="h4 text-center mb-4 title">Skills</div>
                <div className="card" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className="card-body">
                        <div className="row">
                            <Skill Nome="C#" Valor="95" />
                            <Skill Nome=".NET / .NET Core" Valor="90" />
                        </div>
                        <div className="row">
                            <Skill Nome="Liderança" Valor="85" />
                            <Skill Nome="Mobile (Flutter)" Valor="70" />
                        </div>
                        <div className="row">
                            <Skill Nome="Arquitetura de Sistemas" Valor="70" />
                            <Skill Nome="Desenvolvimento de Jogos (UNITY)" Valor="40" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsList;
