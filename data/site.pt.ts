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
    eyebrow: "Analista de Dados Júnior • BI • Power BI • SQL • Python",
    title: "Matheus Siqueira",
    subtitle: "Analista de Dados Júnior focado em BI, automação e dashboards.",
    description:
      "Analista de Dados Júnior com experiência em Business Intelligence, análise de dados e automação. Trabalho com Power BI, SQL, DAX, Power Query e Python para ETL, organização de dados e dashboards executivos. Aberto a oportunidades no Brasil (remoto ou híbrido).",
    ctas: {
      primary: "Ver projetos de dados",
      secondary: "Ver currículo",
      tertiary: "Entrar em contato",
    },
  },
  about: {
    eyebrow: "Sobre",
    title: "Perfil orientado a BI, automação e visualização de dados",
    who: {
      title: "Quem sou",
      body: "Analista de Dados Júnior em formação em Ciência da Computação, com foco em Business Intelligence e Data Analytics. Atuo com Power BI, SQL e Python para estruturar dados, criar indicadores confiáveis e apoiar decisões de negócio.",
    },
    deliver: {
      title: "Como gero valor",
      bullets: [
        "Dashboards executivos em Power BI para KPIs e performance.",
        "Análises orientadas a indicadores e metas de negócio.",
        "ETL e automação de rotinas analíticas com SQL e Python.",
        "Modelagem analítica com DAX e Power Query.",
        "Documentação e padronização para consistência dos dados.",
      ],
    },
    highlights: {
      title: "Destaques",
      items: [
        "+39 certificados em Dados, BI, IA, Cloud e Segurança.",
        "Pensamento analítico com foco em KPIs acionáveis.",
        "Comunicação clara com stakeholders e times técnicos.",
        "Decisões orientadas por dados e organização da informação.",
        "Colaboração em times ágeis e multidisciplinares.",
        "Compromisso com qualidade e governança de dados.",
      ],
    },
    stack: {
      title: "Stack principal",
      groups: [
        {
          title: "Data & BI",
          items: ["Power BI", "DAX", "Power Query", "SQL", "ETL", "Dashboards"],
        },
        {
          title: "Python & Analytics",
          items: [
            "Python",
            "Pandas",
            "Data Analytics",
            "Data Visualization",
            "KPIs",
            "Automação",
          ],
        },
        {
          title: "Web & Integrações",
          items: ["JavaScript", "TypeScript", "React", "Next.js", "APIs REST"],
        },
        {
          title: "Ferramentas & Processos",
          items: [
            "Git/GitHub",
            "Scrum",
            "Kanban",
            "Documentação",
            "Governança de Dados",
            "Boas práticas",
          ],
        },
      ],
    },
  },
  projects: {
    eyebrow: "Projetos",
    title: "Case studies em dados, BI e desenvolvimento de software",
    description:
      "Projetos que combinam análise de dados, BI, automação, APIs e data apps, com versionamento em Git e foco em visualização de dados e tomada de decisão.",
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
      "Cases completos com contexto, dados utilizados, arquitetura, resultados e tecnologias em BI, data science, Big Data, automação e desenvolvimento full stack.",
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
      "Aberto a oportunidades como Analista de Dados Júnior ou BI. Entrego dashboards, automação e análises orientadas a KPIs com Power BI, SQL e Python.",
    ctaTitle: "Disponível para oportunidades em Dados e BI",
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
    title: "Certificados em Dados, BI, IA, Cloud e Segurança",
    description:
      "Coleção com PDFs locais de Alura, Assimov e Ulife. Encontre certificações em Power BI, SQL, Python, IA e Cloud.",
    ctaLabel: "Ver certificados",
  },
  demos: {
    eyebrow: "Demos",
    title: "Demos e repositórios",
    description:
      "Demos e repositórios para avaliação rápida de projetos de dados, BI e automação, com instruções claras para rodar localmente.",
    viewProjectsLabel: "Ver projetos",
    fullCaseLabel: "Case completo",
    openDemoLabel: "Abrir demo",
    demoSoonLabel: "Demo em breve",
    howToRunLabel: "Como executar (local)",
    publishTitle: "Como disponibilizo demos",
    publishItems: [
      "Web (Next.js/React): Vercel com deploy automático do GitHub.",
      "Front-end puro (HTML/JS): GitHub Pages ou Vercel.",
      "API FastAPI: Render ou Fly com /docs habilitado.",
    ],
  },
  language: {
    label: "Idiomas",
  },
  media: {
    videoFallback: "Seu navegador não suporta vídeo HTML5.",
  },
};
