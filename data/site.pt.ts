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
    eyebrow: "Desenvolvedor Full Stack • Dados • IA • APIs",
    title: "Matheus Siqueira",
    subtitle: "Desenvolvedor Full Stack com base forte em dados, IA e engenharia de software.",
    description:
      "Crio aplicações web completas, APIs e produtos de dados que conectam backend, frontend e analytics. Experiência com React/Next.js, Node.js/TypeScript, Python, SQL e cloud, com foco em performance, segurança e impacto.",
    ctas: {
      primary: "Ver projetos",
      secondary: "Ver currículo",
      tertiary: "Entrar em contato",
    },
  },
  about: {
    eyebrow: "Sobre",
    title: "Perfil full stack com visão de produto e base em dados",
    who: {
      title: "Quem sou",
      body: "Sou desenvolvedor full stack em formação em Ciência da Computação, com pós-graduações em Cloud & Edge Computing, Segurança da Informação e IA. Atuei como estagiário em Análise de Dados na Secretaria da Fazenda de Pernambuco, trabalhando com grandes volumes, automação e indicadores. Hoje uso essa base para construir software de ponta a ponta.",
    },
    deliver: {
      title: "Como gero valor",
      bullets: [
        "Aplicações web completas em React/Next.js, com UX e performance.",
        "APIs REST seguras e bem documentadas com Node.js e Python.",
        "Pipelines de dados, ETL e automações com SQL e Python.",
        "Dashboards e métricas para tomada de decisão.",
        "Boas práticas de versionamento, qualidade e documentação.",
      ],
    },
    highlights: {
      title: "Destaques",
      items: [
        "Estágio em Análise de Dados na Secretaria da Fazenda de Pernambuco.",
        "Pós-graduações em Cloud & Edge, Segurança da Informação e IA.",
        "Técnico em Programação Full Stack A.I.",
        "+39 certificados em Dados, IA, Cloud e Segurança.",
        "Inglês C1 e comunicação com times técnicos e de negócio.",
        "Projetos full stack com APIs, front-end e dados.",
      ],
    },
    stack: {
      title: "Stack principal",
      groups: [
        {
          title: "Frontend",
          items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
        },
        {
          title: "Backend & APIs",
          items: [
            "Node.js",
            "APIs REST",
            "FastAPI",
            "Autenticação",
            "Integrações",
          ],
        },
        {
          title: "Dados & IA",
          items: [
            "Python",
            "SQL",
            "ETL",
            "Power BI",
            "Data Modeling",
            "Machine Learning",
          ],
        },
        {
          title: "Cloud & Processos",
          items: [
            "Cloud Computing",
            "Oracle Cloud",
            "Segurança",
            "Git/GitHub",
            "Scrum",
            "Kanban",
          ],
        },
      ],
    },
  },
  projects: {
    eyebrow: "Projetos",
    title: "Cases em desenvolvimento full stack, dados e IA",
    description:
      "Projetos que combinam engenharia de software, APIs, automação e dados, com foco em produto, performance e tomada de decisão.",
    cardLabel: "Case",
    highlightLabel: "Destaques",
    detailsLabel: "Ver detalhes",
    caseLabel: "Case completo",
    viewAllLabel: "Ver todos os cases",
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
      "Cases completos com contexto, arquitetura, resultados e tecnologias em desenvolvimento full stack, dados e IA.",
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
    title: "Pronto para conversar?",
    description:
      "Aberto a oportunidades como Desenvolvedor Full Stack / Software Engineer com base em dados e IA. Entrego aplicações completas, APIs, automação e analytics.",
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
    title: "Certificados em engenharia de software, dados, IA, cloud e segurança",
    description:
      "Coleção com PDFs locais de Alura, Assimov e Ulife. Encontre certificações em desenvolvimento, dados, IA, cloud e segurança.",
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
  },
};
