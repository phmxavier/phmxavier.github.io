export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  techs: string[];
}

export const experiences: Experience[] = [
  {
    id: "inter-especialista-master",
    role: "Especialista Master",
    company: "Inter",
    period: "Ago 2025 - Atual",
    description:
      "Especialista em engenharia e arquitetura, contribuindo em projetos estratégicos e liderando iniciativas técnicas em produtos de adquirência (InterPag).",
    techs: ["Arquitetura", "Engenharia", "Fintech", "Tech Strategy", "Mentoria"]
  },
  {
    id: "neon-tech-manager",
    role: "Tech Manager",
    company: "Neon",
    period: "Out 2024 - Ago 2025",
    description:
      "Liderou as frentes de investimentos e seguros, atuando como elo entre engenharia, parceiros e fornecedores para lançar produtos estratégicos. Negociou e acompanhou fornecedores-chave para garantir qualidade, inovação e prazos, coordenando a criação de um seguro de vida do conceito à implementação com design, engenharia, stakeholders de seguros e compliance.",
    techs: ["Investimentos", "Seguros", "Gestão de Fornecedores", "Lançamento de Produto", "Stakeholder Mgmt"]
  },
  {
    id: "neon-staff",
    role: "Staff Engineer",
    company: "Neon",
    period: "Ago 2023 - Out 2024",
    description:
      "Garantiu entregas técnicas ponta a ponta, do levantamento de requisitos ao deploy e observabilidade. Atuou como mentor técnico, disseminando boas práticas de engenharia e apoiando decisões de trade-off, arquitetura e modelagem de dados. Competências destacadas: comunicação, resolução de problemas, comunicação técnica, observabilidade e qualidade.",
    techs: ["Entrega End-to-End", "Arquitetura", "Modelagem de Dados", "Observabilidade", "Qualidade"]
  },
  {
    id: "bmg-money-tech-leader",
    role: "Tech Leader",
    company: "BMG Money",
    period: "Set 2022 - Ago 2023",
    description:
      "Liderou tecnicamente as frentes de Collections e Developer Experience, garantindo entregas alinhadas às metas estratégicas. Atuou como ponte entre negócios em Miami e tecnologia no Brasil, com gestão direta de pessoas, planos de crescimento e feedbacks contínuos. Evoluiu sistemas de recuperação de crédito e impulsionou boas práticas de engenharia, padronização de processos e melhorias em ferramentas internas para elevar produtividade e satisfação do time.",
    techs: ["Collections", "DevEx", "People Management", "Recuperação de Crédito", "Boas Práticas"]
  },
  {
    id: "bmg-coordinator",
    role: "Coordenador",
    company: "Banco BMG",
    period: "Jul 2021 - Set 2022",
    description:
      "Coordenador da equipe responsável por cuidar dos sistemas de investimento do BMG Digital.",
    techs: ["Gestão", "Investimentos", "Gestão de Projetos", "Boas Práticas"]
  },
  {
    id: "bmg-tech-leader",
    role: "Tech Leader",
    company: "Banco BMG",
    period: "Jan 2018 - Jul 2021",
    description:
      "Líder técnico das equipes responsáveis pelo desenvolvimento do meu_BMG, solução de banco digital do BMG. As atividades consistem em dar apoio e direcionamento às equipes de desenvolvimento na evolução dos produtos. Responsável também por liderar os esforços de melhorias na qualidade de código e de processos. Utilização de práticas de mercado como code-review, pull-request, fluxo de CI/CD.",
    techs: ["Liderança Técnica", "Banco Digital", "Arquitetura", "Boas Práticas"]
  },
  {
    id: "stor-analista",
    role: "Analista / Desenvolvedor",
    company: "STOR Global",
    period: "Nov 2016 - Jan 2018",
    description: "Entrega de soluções de software e participação em projetos de tecnologia diversos.",
    techs: ["Fullstack", "Integrações", "Sustentação", "Automação"]
  },
  {
    id: "alamo-analista",
    role: "Analista / Desenvolvedor",
    company: "Álamo TI",
    period: "Jul 2010 - Nov 2016",
    description:
      "Desenvolvimento de sistemas e atuação ao longo do ciclo de vida de software, com foco em modelagem e qualidade.",
    techs: ["Modelagem de Dados", "Sistemas", "Documentação", "Qualidade"]
  }
];
