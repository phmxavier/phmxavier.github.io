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
    `Atuo como Especialista Master liderando iniciativas estratégicas de engenharia em ambiente de fintech, com foco em produtos financeiros de alto impacto, especialmente na modernização da frente de adquirência.

Meu papel vai além da execução técnica: trabalho na interseção entre engenharia, produto e negócio, direcionando decisões arquiteturais de forma estratégica para garantir impacto real na empresa e na experiência do cliente.

Lidero tecnicamente projetos complexos, da concepção à entrega, com ênfase em escalabilidade, qualidade e eficiência operacional. Também contribuo na evolução da cultura de engenharia, apoiando o desenvolvimento dos times e elevando o nível técnico da organização.

Minha atuação é guiada por uma visão pragmática: tecnologia é meio, não fim — o objetivo é resolver problemas reais com soluções simples, sustentáveis e que escalam.`,
    techs: ["Adquirência", "Arquitetura", "Microsserviços", "AWS", "Tech Strategy", "Mentoria"]
  },
  {
    id: "neon-tech-manager",
    role: "Tech Manager",
    company: "Neon",
    period: "Out 2024 - Ago 2025",
    description:
      `Liderou as equipes responsáveis pelas frentes de investimentos e seguros, atuando como ponte entre times de engenharia, parceiros e fornecedores, com foco na entrega de novos produtos estratégicos. Negociou e acompanhou fornecedores-chave, assegurando qualidade, inovação e aderência a prazos.

Um dos destaques desse período foi a criação do seguro de vida da Neon, do conceito à implementação, coordenando o desenvolvimento do produto e alinhando todos os envolvidos — desde design e tecnologia até stakeholders de seguros e compliance.`,
    techs: ["Tech Leadership", "Investimentos", "Seguros", "Gestão de Fornecedores", "Lançamento de Produto", "Desenvolvimento de Carreira"]
  },
  {
    id: "neon-staff",
    role: "Staff Engineer",
    company: "Neon",
    period: "Ago 2023 - Out 2024",
    description:
      `Na equipe de Cadastro e Compliance, teve papel-chave no projeto de desidratação da base legada de cadastro, conduzindo o refactoring da estrutura de dados para melhorar performance, manutenção e qualidade. Também iniciou o desenho do sistema de prevenção à lavagem de dinheiro (PLD), traduzindo requisitos regulatórios em arquitetura técnica robusta e escalável.

Garantiu entregas técnicas de ponta a ponta — desde o levantamento de requisitos até deploy e observabilidade — e atuou como mentor técnico, disseminando boas práticas e apoiando a decisão de trade-offs com clareza e colaboração.`,
    techs: ["Arquitetura de Software", "KYC/PLD", "Modelagem de Dados", "Observabilidade", "Comunicação Técnica"]
  },
  {
    id: "bmg-money-tech-leader",
    role: "Tech Leader",
    company: "BMG Money",
    period: "Set 2022 - Ago 2023",
    description:
      `Liderou tecnicamente as frentes de Collections e Developer Experience, garantindo entregas alinhadas às metas estratégicas da empresa e promovendo uma cultura de excelência técnica. Atuou como ponte entre a equipe de negócios em Miami e a equipe de tecnologia no Brasil.

Fez a gestão direta de pessoas, com planos de crescimento individual, feedbacks contínuos e incentivo à evolução de competências técnicas. Em Collections, melhorou os sistemas de recuperação de crédito; em Developer Experience, impulsionou boas práticas de engenharia, padronização de processos e melhorias nas ferramentas internas.`,
    techs: ["Collections", "DevEx", "People Management", "Microsserviços", "Boas Práticas"]
  },
  {
    id: "bmg-coordinator",
    role: "Coordenador de Desenvolvimento de Sistemas",
    company: "Banco Bmg",
    period: "Jul 2021 - Set 2022",
    description:
      `Coordenou times de desenvolvimento em diferentes frentes do banco, como investimentos, onboarding, open banking e arquitetura, chegando a liderar diretamente mais de 40 pessoas. Conduziu o planejamento de entregas, a gestão de pessoas e a priorização junto às áreas de negócio.

Destaques: entrega de diversos produtos de investimentos e escala das aplicações da plataforma de investimentos; campeão do HackaTech Bmg com a equipe BreakingBugs, com uma solução de segurança digital focada na experiência do cliente.`,
    techs: ["Gestão de Pessoas", "Investimentos", "Onboarding", "Open Banking", "Arquitetura"]
  },
  {
    id: "bmg-tech-lead",
    role: "Tech Lead",
    company: "Banco Bmg",
    period: "Ago 2019 - Jul 2021",
    description:
      "Referência técnica das squads do Bmg Digital, o banco digital do Banco Bmg, apoiando decisões de arquitetura, a adoção de boas práticas de engenharia e o desenvolvimento dos engenheiros dos times.",
    techs: ["Liderança Técnica", "Banco Digital", "Arquitetura", "Boas Práticas"]
  },
  {
    id: "bmg-analista",
    role: "Analista / Desenvolvedor",
    company: "Banco Bmg",
    period: "Jan 2018 - Ago 2019",
    description: "Desenvolvimento de sistemas para o Banco Bmg em Belo Horizonte.",
    techs: ["Desenvolvimento", "Banco Digital"]
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
    period: "Jan 2012 - Nov 2016",
    description:
      "Desenvolvimento de sistemas e atuação ao longo do ciclo de vida de software, com foco em modelagem e qualidade.",
    techs: ["Modelagem de Dados", "Sistemas", "Documentação", "Qualidade"]
  },
  {
    id: "alamo-desenvolvedor",
    role: "Desenvolvedor",
    company: "Álamo TI",
    period: "Nov 2010 - Jan 2012",
    description: "Desenvolvimento de sistemas.",
    techs: ["Desenvolvimento", "Sistemas"]
  },
  {
    id: "alamo-estagiario",
    role: "Estagiário",
    company: "Álamo TI",
    period: "Jul 2010 - Out 2010",
    description: "Estágio em desenvolvimento de software.",
    techs: ["Desenvolvimento"]
  }
];
