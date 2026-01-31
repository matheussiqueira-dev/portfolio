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
    eyebrow: "Portfólio profissional",
    title: "Matheus Siqueira",
    subtitle: "Desenvolvedor Full Stack | Soluções Web, Dados e Cloud",
    description:
      "Combino backend, frontend e analytics para entregar aplicações escaláveis. Atuação prática com automação, ETL e dashboards usando React/Next.js, Node.js, Python, SQL e cloud.",
    stackHighlights: [
      { label: "Full Stack", icon: "stack" },
      { label: "Dados", icon: "data" },
      { label: "IA", icon: "ai" },
      { label: "Software", icon: "software" },
    ],
    ctas: {
      primary: "Ver projetos",
      secondary: "Ver currículo",
      tertiary: "Falar comigo",
    },
  },
  about: {
    eyebrow: "Sobre",
    title: "Soluções full stack orientadas a dados e produto",
    who: {
      title: "Perfil",
      body:
        "Atuo na interseção entre dados e desenvolvimento web, conectando modelagem, automação e visualização para entregar produtos claros e confiáveis. Base sólida em Ciência da Computação e experiência prática com BI, SQL e Python.",
    },
    differential: {
      title: "Experiência com dados complexos em larga escala",
      description:
        "Atuação prática com grandes volumes de dados, sistemas analíticos e automações confiáveis, com foco em performance, qualidade e clareza técnica.",
    },
    deliver: {
      title: "O que entrego",
      bullets: [
        "Dashboards estratégicos em Power BI com KPIs, DAX e Power Query.",
        "Modelagem e tratamento de dados com SQL, ETL/ELT e automações em Python.",
        "APIs REST e integrações para conectar dados a produtos digitais.",
        "Pipelines e validações para confiabilidade, rastreabilidade e performance.",
        "Comunicação clara com times de negócio e tecnologia para decisões rápidas.",
      ],
    },
    snapshot: {
      title: "Resumo",
      items: [
        {
          value: "Dados & BI",
          label: "Power BI, DAX, KPIs",
        },
        {
          value: "Engenharia",
          label: "ETL/ELT, SQL, Python",
        },
        {
          value: "Full Stack",
          label: "Frontend + APIs",
        },
        {
          value: "Qualidade",
          label: "Performance e confiabilidade",
        },
      ],
    },
    highlights: {
      title: "Destaques",
      items: [
        "Perfil híbrido com visão de dados e engenharia de software.",
        "Experiência prática em BI, automação e integração de sistemas.",
        "Certificações em Cloud, Segurança e IA.",
        "Comunicação clara com times técnicos e de negócio.",
        "Foco em impacto real, qualidade e previsibilidade de entrega.",
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
          ],
        },
        {
          title: "Linguagens",
          icon: "languages",
          items: ["Python", "SQL", "Pandas", "NumPy"],
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
    eyebrow: "Resumo executivo",
    title: "Resumo executivo",
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
      { label: "React", level: 5 },
      { label: "Next.js", level: 5 },
      { label: "Python", level: 4 },
      { label: "SQL", level: 4 },
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
    title: "Vamos conversar sobre seu produto?",
    description:
      "Aberto a oportunidades como Desenvolvedor Full Stack / Software Engineer. Posso apoiar aplicações web, APIs e dados do MVP à escala.",
    ctaTitle: "Disponível para oportunidades em Engenharia de Software",
    ctaSubtitle: "LinkedIn e e-mail respondidos rapidamente.",
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
