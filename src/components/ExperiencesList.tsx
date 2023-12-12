import Experience from './Experience';

function ExperiencesList() {

    let experiencias = [
        {
            periodo: "Agosto 2023 - Atualmente",
            empresa: "Neon",
            cargo: "Staff Engineer",
            descricao: [
                "Atuação propondo melhorias tecnológicas, ferramentas e práticas para resolver e garantir a segurança e qualidade. Orientando as direções técnicas da arquitetura e do planejamento das equipes criando cadência de entregas com foco no curto-médio prazo e mapeando riscos e trade-offs."
            ]
        },
        {
            periodo: "Setembro 2022 - Agosto 2023",
            empresa: "BMG Money",
            cargo: "Líder de Equipe",
            descricao: [
                "Responsável por liderar as equipes de Engenharia Interna e Reconciliação. Ajudando a equipe na priorização e desenho das soluções."
            ]
        },
        {
            periodo: "Julho 2021 - Setembro 2022",
            empresa: "Banco BMG",
            cargo: "Coordenador",
            descricao: [
                "Coordenador da equipe responsável por cuidar dos sistemas de investimento do BMG Digital."
            ]
        },
        {
            periodo: "Agosto 2019 - Julho 2021",
            empresa: "Banco BMG",
            cargo: "Líder Técnico",
            descricao: [
                "Líder técnico das equipes responsáveis pelo desenvolvimento do meu_BMG, solução de banco digital do\
                BMG.\
                As atividades consistem em dar apoio e direcionamento às equipes de desenvolvimento na evolução dos\
                produtos.",
                "Responsável também por liderar os esforços de melhorias na qualidade de código e de processos.\
                Utilização de práticas de mercado como code-review, pull-request, fluxo de CI/CD."
            ]
        },
        {
            periodo: "Janeiro 2018 - Agosto 2019",
            empresa: "Banco BMG",
            cargo: "Analista/Desenvolvedor",
            descricao: [
                "Desenvolvedor parte da equipe resposável pelo produto BMG Invest. Atuação em sistemas de front\
                (Site para clientes realizarm os investimentos) e sistemas de BackOffice (Sistemas de gestão\
                internos para o produto).",
                "Fui convidado a fazer parte da equipe responsável por construir o meu_BMG no início do projeto de\
                desenvolvimento.\
                Tive grande participação nas decisões arquiteturais do sistema e construção de toda a parte de\
                Onboarding do cliente."
            ]
        },
        {
            periodo: "Agosto 2015 - Agosto 2017",
            empresa: "Upstairs App",
            cargo: "Arquiteto de Sistemas",
            descricao: [
                "Arquiteto responsável pelo desenho da solução usando microsserviços hospedados no Azure e aplicação\
                móvel\
                desenvolvida utilizando Cordova.",
                "A publicação dos serviços e da aplicação era realizada utilizando CI/CD TFS Online flow."
            ]
        },
        {
            periodo: "Julho 2010 - Janeiro 2018",
            empresa: "STOR Global",
            cargo: "Analista/Desenvolvedor",
            descricao: [
                "Analista responsável por grande parte do projeto de modernização do principal sistema da empresa, o\
                Stor.",
                "Participando ativamente no processo de levantamento e especificação das alterações evolutivas do\
                sistema.\
                Desenvolvimento das atividades de Dev-Ops."
            ]
        },
    ];

    return (
        <div id="experience" className="section">
            <div className="container cc-experience">
                <div className="h4 text-center mb-4 title">Experiência de Trabalho</div>
                {
                    experiencias.map((experiencia, i) => {
                        return <Experience key={i} experiencia={experiencia} />;
                    })
                }
            </div>
        </div>
    );
}

export default ExperiencesList;
