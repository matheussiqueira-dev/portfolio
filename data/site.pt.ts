import type { SiteContent } from "./site.types";

export const sitePt: SiteContent = {
  nav: {
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
    certificates: "Certificados",
    academic: "Acadêmico",
    demos: "Demos",
    hire: "Contrate",
    resume: "Currículo",
  },
  hero: {
    eyebrow: "Analista de Dados • Business Intelligence • Power BI",
    title: "Matheus Siqueira",
    subtitle: "Desenvolvedor FullStack | Analista de Dados | Infraestrutura",
    description:
      "Analista de Dados focado em Business Intelligence, Data Analytics e visualização de dados. Transformo dados fiscais, públicos e organizacionais em decisões claras com Power BI, SQL, DAX, Power Query e automações em Python.",
    stackHighlights: [
      { label: "Data Analytics", icon: "stack" },
      { label: "Business Intelligence", icon: "data" },
      { label: "Power BI & KPIs", icon: "ai" },
      { label: "SQL & Python", icon: "software" },
    ],
    ctas: {
      primary: "Ver projetos",
      secondary: "Ver currículo",
      tertiary: "Falar comigo",
    },
  },
  about: {
    eyebrow: "Sobre",
    title: "Dados, BI e tecnologia aplicados à tomada de decisão",
    summary: {
      title: "Sobre",
      body:
        "Atuo em análise de dados e Business Intelligence, com experiência no setor público e privado. Trabalhei como Assistente Comercial no Grupo Moura, Analista de Cargos e Salários na Prefeitura de Jaboatão dos Guararapes e, atualmente, Estagiário em Análise de Dados na Secretaria da Fazenda de Jaboatão dos Guararapes. Minha atuação é orientada a KPIs, eficiência operacional e decisão baseada em dados.",
    },
    who: {
      title: "Quem sou",
      body:
        "Sou Analista de Dados com perfil híbrido (dados + desenvolvimento). Bacharelando em Ciência da Computação, com pós-graduações em Inteligência Artificial e Ciência de Dados, Segurança da Informação e Cloud & Edge Computing, técnico em Programação Full Stack AI e graduação em Marketing. Trabalho com mentalidade analítica, rigor técnico e comunicação clara para traduzir necessidades de negócio em soluções de dados confiáveis.",
    },
    complexData: {
      title: "Experiência com dados complexos em larga escala",
      body:
        "Experiência com Business Intelligence aplicado à gestão pública, dashboards estratégicos em Power BI e análise de grandes volumes de dados fiscais. Atuo com dados públicos e organizacionais em múltiplas fontes, estruturando ETL/ELT, automações em Python e BI estratégico para apoiar a tomada de decisão.",
    },
    differential: {
      title: "Diferencial",
      description:
        "Perfil end-to-end que conecta modelagem, automação, APIs e visualização para entregar inteligência de negócio com clareza e impacto.",
    },
    deliver: {
      title: "O que faço",
      bullets: [
        "Análise de Dados e Data Analytics.",
        "Business Intelligence com Power BI, DAX e Power Query.",
        "Modelagem de dados, SQL e construção de KPIs.",
        "ETL / ELT e automações em Python (Pandas, NumPy).",
        "Visualização de dados e storytelling analítico.",
        "APIs REST e integrações com Flask.",
      ],
    },
    snapshot: {
      title: "Resumo",
      items: [
        {
          value: "BI e Analytics",
          label: "Power BI, KPIs, DAX",
        },
        {
          value: "Dados",
          label: "SQL, ETL/ELT, Python",
        },
        {
          value: "Automação",
          label: "Pipelines e eficiência",
        },
        {
          value: "Decisão",
          label: "Dados públicos e fiscais",
        },
      ],
    },
    highlights: {
      title: "Diferencial",
      items: [
        "Perfil híbrido (dados + desenvolvimento) com visão end-to-end.",
        "Experiência em dados fiscais, públicos e organizacionais.",
        "Capacidade de integrar BI, automação e APIs em soluções completas.",
        "Comunicação clara com stakeholders técnicos e não técnicos.",
        "Atuação no setor público e privado com foco em impacto.",
      ],
    },
    stack: {
      title: "Stacks",
      groups: [
        {
          title: "Dados & BI",
          icon: "data",
          items: [
            "Power BI",
            "DAX",
            "Power Query",
            "Modelagem de Dados",
            "KPIs",
            "ETL/ELT",
            "Visualização de dados",
          ],
        },
        {
          title: "Linguagens",
          icon: "languages",
          items: [
            "Python",
            "SQL",
            "HTML",
            "CSS",
            "JavaScript",
            "Java",
            "DAX",
            "Pandas",
            "NumPy",
          ],
        },
        {
          title: "Bancos de Dados",
          icon: "database",
          items: ["MySQL", "PostgreSQL"],
        },
        {
          title: "Backend",
          icon: "backend",
          items: ["Python", "Flask", "APIs REST"],
        },
        {
          title: "Frontend",
          icon: "frontend",
          items: [
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "HTML",
            "CSS",
            "Tailwind",
          ],
        },
        {
          title: "Ferramentas",
          icon: "tools",
          items: ["Git", "GitHub", "CI/CD", "Vercel", "Metodologias Ágeis"],
        },
      ],
    },
  },
  executiveSummary: {
    eyebrow: "Visão geral",
    title: "Síntese estratégica",
    paragraphs: [
      "Analista de Dados e BI com foco em Business Intelligence, Power BI, SQL e Python. Atuo em Data Analytics, KPIs, ETL/ELT e visualização de dados para apoiar tomada de decisão.",
      "Experiência com dados fiscais, públicos e organizacionais, integrando modelagem, automação e BI estratégico para gerar insights confiáveis e acionáveis.",
    ],
    cards: [
      {
        icon: "education",
        title: "Formação em Ciência da Computação",
      },
      {
        icon: "projects",
        title: "11+ Projetos Full Stack Entregues",
      },
      {
        icon: "certifications",
        title: "Certificações em Cloud, Segurança e IA",
      },
    ],
  },
  metrics: {
    eyebrow: "Métricas",
    title: "Credibilidade em números",
    items: [
      {
        icon: "projects",
        label: "11+ Projetos Concluídos",
      },
      {
        icon: "github",
        label: "Atividade consistente no GitHub",
      },
      {
        icon: "experience",
        label: "Experiência prática em desenvolvimento",
      },
      {
        icon: "data",
        label: "Projetos orientados a dados e decisão",
      },
    ],
  },
  primaryStack: {
    eyebrow: "Stack principal",
    title: "Stack principal",
    items: [
      { label: "Power BI", level: 5 },
      { label: "SQL", level: 5 },
      { label: "Python", level: 4 },
      { label: "DAX", level: 4 },
    ],
  },
  projects: {
    eyebrow: "Projetos",
    title: "Projetos full stack, dados e IA",
    description:
      "Cases que unem engenharia de software, APIs, automação e dados, com foco em produto, performance e decisões bem informadas.",
    cardLabel: "Case",
    highlightLabel: "Destaques",
    detailsLabel: "Ver detalhes",
    caseLabel: "Case completo",
    viewAllLabel: "Ver todos os cases",
    featuredLabel: "Destaque",
    modal: {
      title: "Detalhes do projeto",
      closeLabel: "Fechar",
      problemTitle: "Problema",
      solutionTitle: "Solução",
      featuresTitle: "Funcionalidades",
      demonstratesTitle: "O que demonstra",
      stackTitle: "Stack",
      githubLabel: "GitHub",
      demoLabel: "Demo",
      caseCta: "Ver case completo",
    },
  },
  projectsPage: {
    eyebrow: "Projetos",
    title: "Projetos e estudos de caso",
    description:
      "Cases completos com contexto, decisões técnicas, arquitetura e resultados em desenvolvimento full stack, dados e IA.",
    filterLabel: "Filtrar por stack",
    allLabel: "Todos",
    caseLabel: "Abrir case",
    demosLabel: "Ver demos",
    demonstratesLabel: "O que demonstra",
    filters: ["Python", "Power BI", "FastAPI", "React"],
  },
  projectDetail: {
    contextTitle: "Contexto e problema",
    problemTitle: "Desafios principais",
    dataTitle: "Dados e sinais analisados",
    solutionTitle: "Solução desenvolvida",
    featuresTitle: "Funcionalidades-chave",
    impactTitle: "Resultados e impacto",
    stackTitle: "Tecnologias e ferramentas utilizadas",
    demonstratesTitle: "Competências consolidadas",
    conclusionTitle: "Conclusão técnica",
    galleryTitle: "Capturas",
    howToRunTitle: "Como executar",
    linksTitle: "Links",
    roleLabel: "Papel",
    backLabel: "Voltar para projetos",
    ctaTitle: "Vamos conversar sobre este projeto?",
    ctaBody:
      "Posso detalhar decisões, desafios e próximos passos. Se quiser conversar, estou à disposição.",
    ctaButton: "Entrar em contato",
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos conversar sobre dados e BI?",
    description:
      "Aberto a oportunidades em Análise de Dados, Business Intelligence e Data Analytics. Atuo com Power BI, SQL e Python para gerar decisões mais rápidas e confiáveis.",
    ctaTitle:
      "Resumo profissional: analista de dados com foco em BI, KPIs e automação.",
    ctaSubtitle: "Conecte-se no LinkedIn ou envie um e-mail para conversar.",
    cards: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
    },
  },
  certificatesSection: {
    eyebrow: "Certificados",
    title: "Certificados em engenharia de software, dados, cloud e segurança",
    description:
      "Coleção com PDFs locais de Alura, Assimov e Ulife. Certificações em desenvolvimento, dados, IA, cloud e segurança.",
    ctaLabel: "Ver certificados",
  },
  demos: {
    eyebrow: "Demos",
    title: "Demos e repositórios",
    description:
      "Demos e repositórios para avaliação rápida de projetos full stack, APIs e data apps, com instruções claras para rodar localmente.",
    viewProjectsLabel: "Ver projetos",
    fullCaseLabel: "Case completo",
    openDemoLabel: "Abrir demo",
    openInteractiveLabel: "Abrir demo interativa",
    watchVideoLabel: "Ver vídeo",
    demoSoonLabel: "Demo em breve",
    howToRunLabel: "Como executar (local)",
    publishTitle: "Como disponibilizo demos",
    publishItems: [
      "Web (Next.js/React): Vercel com deploy automático do GitHub.",
      "Front-end puro (HTML/JS): GitHub Pages ou Vercel.",
      "APIs (Node/FastAPI): Render ou Fly com /docs habilitado.",
    ],
  },
  language: {
    label: "Idiomas",
  },
  media: {
    videoFallback: "Seu navegador não suporta vídeo HTML5.",
    videoDemoLabel: "Veja a demonstração em vídeo",
  },
};
