import type { SiteContent } from "./site.types";

export const sitePt: SiteContent = {
  nav: {
    home: "Início",
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
    certificates: "Certificados",
    resume: "Currículo",
  },
  hero: {
    eyebrow: "Analista de Dados Júnior | Power BI | SQL | Python | BI",
    title: "Analista de Dados Júnior especializado em Power BI, SQL e Python",
    subtitle:
      "Transformo dados em insights claros para apoiar decisões de negócio.",
    description:
      "Profissional em formação em Ciência da Computação, com experiência prática em Business Intelligence, análise de dados, automação de processos e construção de dashboards estratégicos. Atuo com Power BI, SQL e Python para organizar dados, gerar indicadores confiáveis e apoiar a tomada de decisão.",
    ctas: {
      primary: "Ver projetos de dados",
      secondary: "Ver currículo profissional",
      tertiary: "Entrar em contato",
    },
  },
  about: {
    eyebrow: "Sobre",
    title: "Analista de Dados Júnior com foco em BI e automação",
    who: {
      title: "Quem sou",
      body: "Analista de Dados Júnior com foco em Business Intelligence, automação e visualização de dados. Em formação em Ciência da Computação, trabalho com Power BI, SQL e Python para organizar dados, construir indicadores confiáveis e apoiar decisões de negócio.",
    },
    deliver: {
      title: "O que entrego",
      bullets: [
        "Dashboards claros e executivos em Power BI para KPIs e performance.",
        "Análises orientadas a indicadores e metas de negócio.",
        "Automação de rotinas analíticas com SQL e Python.",
        "Modelagem e transformações com DAX e Power Query.",
        "Documentação e padronização para consistência dos dados.",
      ],
    },
    highlights: {
      title: "Perfil profissional",
      items: [
        "+39 certificados em Dados, BI, IA, Cloud e Segurança.",
        "Pensamento analítico e foco em indicadores acionáveis.",
        "Comunicação clara com stakeholders e times técnicos.",
        "Decisão baseada em dados e organização da informação.",
        "Colaboração em times ágeis e multidisciplinares.",
        "Compromisso com qualidade e governança de dados.",
      ],
    },
    stack: {
      title: "Stack principal",
      groups: [
        {
          title: "Data e BI",
          items: [
            "Power BI",
            "DAX",
            "Power Query",
            "SQL",
            "ETL",
            "Dashboards",
          ],
        },
        {
          title: "Análise e Automação",
          items: [
            "Python",
            "Pandas",
            "Data Analytics",
            "Automação",
            "KPIs",
            "Data Visualization",
          ],
        },
        {
          title: "Web e Integrações",
          items: ["JavaScript", "TypeScript", "React", "Next.js", "APIs REST"],
        },
        {
          title: "Ferramentas e Metodologias",
          items: [
            "Git/GitHub",
            "Scrum",
            "Kanban",
            "Ambientes ágeis",
            "Documentação",
            "Governança de Dados",
          ],
        },
      ],
    },
  },
  projects: {
    eyebrow: "Projetos",
    title: "Cases de dados e BI com impacto em negócio",
    description:
      "Projetos que conectam BI, automação e engenharia de dados para apoiar decisões de negócio e gerar indicadores claros.",
    cardLabel: "Projeto",
    highlightLabel: "Impacto",
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
    title: "Projetos e cases em dados",
    description:
      "Cases completos com contexto, dados utilizados, impacto, tecnologias e demonstração clara de valor para o negócio.",
    filterLabel: "Filtrar por stack",
    allLabel: "Todos",
    caseLabel: "Abrir case",
    demosLabel: "Ver demos",
    demonstratesLabel: "O que demonstra",
    filters: ["Python", "Power BI", "FastAPI", "React"],
  },
  projectDetail: {
    contextTitle: "Contexto",
    problemTitle: "Problema",
    dataTitle: "Dados utilizados",
    solutionTitle: "Solução",
    featuresTitle: "Funcionalidades",
    impactTitle: "Impacto e decisão",
    stackTitle: "Tecnologias aplicadas",
    demonstratesTitle: "O que este projeto demonstra",
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
    title: "Vamos conversar?",
    description:
      "Estou aberto a oportunidades como Analista de Dados Júnior ou BI. Entrego dashboards, automação e análises orientadas a KPIs com Power BI, SQL e Python. Se busca alguém com organização de dados e comunicação clara, vamos conversar.",
    ctaTitle: "Aberto a oportunidades em Dados e BI",
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
      "Coleção completa com PDFs locais de Alura, Assimov e Ulife. Filtre por plataforma e encontre rapidamente certificações em Power BI, SQL, Python, IA e Cloud.",
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
