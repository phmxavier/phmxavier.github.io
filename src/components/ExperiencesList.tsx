import Experience from './Experience';

function ExperiencesList() {

    let experiencias = [
        {
            periodo: "Outubro 2024 - Agosto 2025",
            empresa: "Neon",
            cargo: "Tech Manager",
            descricao: [
                "Como Tech Manager, liderei as equipes responsáveis pelas frentes de investimentos e seguros, atuando como ponte entre times de engenharia, parceiros e fornecedores, com foco na entrega de novos produtos estratégicos. Realizei negociação e acompanhamento de fornecedores-chave, assegurando qualidade, inovação e aderência a prazos.",
                "Um dos destaques desse período foi a criação do seguro de vida da Neon, do conceito à implementação, coordenando o desenvolvimento do produto e alinhando todos os envolvidos — desde design e tecnologia até stakeholders de seguros e compliance."
            ]
        },
        {
            periodo: "Agosto 2023 - Outubro 2024",
            empresa: "Neon",
            cargo: "Staff Engineer",
            descricao: [
                "Atuando na equipe de Cadastro e Compliance, tive papel-chave no projeto de desidratação da base legada de cadastro, conduzindo o refactoring da estrutura de dados para melhorar performance, manutenção e qualidade. Também iniciei o desenho do sistema de prevenção à lavagem de dinheiro (PLD), traduzindo requisitos regulatórios em arquitetura técnica robusta e escalável.",                
                "Nesse papel, garanti entregas técnicas de ponta a ponta — desde o levantamento de requisitos até deploy e observabilidade — e atuei como mentor técnico, disseminando boas práticas e apoiando a decisão de trade‑offs com clareza e colaboração."
            ]
        },
        {
            periodo: "Setembro 2022 - Agosto 2023",
            empresa: "BMG Money",
            cargo: "Líder de Equipe",
            descricao: [
                "Como Tech Leader na BMG Money, liderei tecnicamente as frentes de Collections e DevExperience, garantindo entregas alinhadas às metas estratégicas da empresa e promovendo uma cultura de excelência técnica.",
                "Atuei como ponte entre a equipe de negócios em Miami e a equipe de tecnologia no Brasil, facilitando a comunicação e o alinhamento entre as necessidades de negócios e as soluções técnicas.",
                "Fiz a gestão direta de pessoas, com foco no acompanhamento técnico das entregas e no desenvolvimento profissional dos integrantes das equipes. Estruturei planos de crescimento individual, promovi feedbacks contínuos e incentivei a evolução de competências técnicas.",
                "Na frente de Collections, trabalhei para melhorar os sistemas de recuperação de crédito, garantindo eficiência e confiabilidade. Já na área de Developer Experience, impulsionei a adoção de boas práticas de engenharia, padronização de processos e melhorias nas ferramentas internas, elevando a produtividade e satisfação do time de desenvolvimento."
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
