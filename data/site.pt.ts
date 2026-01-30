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
    subtitle: "Desenvolvedor Full Stack",
    description:
      "Combino backend, frontend e analytics para entregar aplicações escaláveis. Experiência prática com automação, ETL e dashboards no setor público, usando React/Next.js, Node.js, Python, SQL e cloud.",
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
    title: "Desenvolvedor Full Stack com foco em dados e IA",
    who: {
      title: "Quem sou",
      body:
        "Atuo de forma integrada entre backend, frontend e analytics, desenvolvendo aplicações escaláveis e data-driven. Possuo experiência prática em automação, ETL e visualização de dados no setor público, utilizando React/Next.js, Node.js, Python, SQL e cloud computing.",
    },
    deliver: {
      title: "Como eu gero valor",
      bullets: [
        "Traduzo requisitos em soluções completas: UI, API e dados.",
        "APIs REST com autenticação, logs e integrações.",
        "Pipelines de dados e automação para reduzir trabalho manual.",
        "Dashboards e métricas para visibilidade de produto.",
        "Documentação e versionamento para times ágeis.",
      ],
    },
    snapshot: {
      title: "Resumo",
      items: [
        {
          value: "Full stack",
          label: "UI, APIs e dados",
        },
        {
          value: "ETL & automação",
          label: "Eficiência operacional",
        },
        {
          value: "Dashboards & BI",
          label: "Decisões baseadas em dados",
        },
        {
          value: "Setor público",
          label: "Dados fiscais em escala",
        },
      ],
    },
    highlights: {
      title: "Destaques",
      items: [
        "Experiência com dados públicos e fiscais em grande escala.",
        "Projetos full stack com front-end, back-end e dados.",
        "Pós-graduações em Cloud, Segurança e IA.",
        "Técnico em Programação Full Stack A.I.",
        "Inglês C1 e comunicação clara com stakeholders.",
        "Foco em qualidade, performance e entrega contínua.",
      ],
    },
    stack: {
      title: "Stack Principal",
      groups: [
        {
          title: "Frontend",
          items: [
            "React",
            "Next.js (SSR/SEO)",
            "TypeScript",
            "Design Systems",
            "Acessibilidade",
            "Web Performance",
          ],
        },
        {
          title: "Backend & APIs",
          items: [
            "Node.js",
            "FastAPI",
            "APIs REST",
            "Autenticação",
            "MongoDB",
            "Integrações",
            "Testes",
          ],
        },
        {
          title: "Dados & IA",
          items: [
            "Python",
            "SQL",
            "ETL",
            "Modelagem de dados",
            "Power BI",
            "ML (fundamentos)",
          ],
        },
        {
          title: "Cloud & Processo",
          items: [
            "Cloud Computing",
            "Oracle Cloud",
            "Segurança",
            "Git/GitHub",
            "CI/CD",
            "Scrum/Kanban",
          ],
        },
      ],
    },
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
