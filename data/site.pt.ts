import type { SiteContent } from "./site.types";

export const sitePt: SiteContent = {
  nav: {
    home: "Inicio",
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
    certificates: "Certificados",
    resume: "Curriculo",
  },
  hero: {
    eyebrow: "Analista de Dados Junior | Power BI | SQL | Python | BI",
    title: "Analista de Dados Junior especializado em Power BI, SQL e Python",
    subtitle:
      "Transformo dados em insights claros para apoiar decisoes de negocio.",
    description:
      "Profissional em formacao em Ciencia da Computacao, com experiencia pratica em Business Intelligence, analise de dados, automacao de processos e construcao de dashboards estrategicos. Atuo com Power BI, SQL e Python para organizar dados, gerar indicadores confiaveis e apoiar a tomada de decisao.",
    ctas: {
      primary: "Ver projetos de dados",
      secondary: "Ver curriculo profissional",
      tertiary: "Entrar em contato",
    },
  },
  about: {
    eyebrow: "Sobre",
    title: "Analista de Dados Junior com foco em BI e automacao",
    who: {
      title: "Quem sou",
      body: "Analista de Dados Junior com foco em Business Intelligence, automacao e visualizacao de dados. Em formacao em Ciencia da Computacao, trabalho com Power BI, SQL e Python para organizar dados, construir indicadores confiaveis e apoiar decisoes de negocio.",
    },
    deliver: {
      title: "O que entrego",
      bullets: [
        "Dashboards claros e executivos em Power BI para KPIs e performance.",
        "Analises orientadas a indicadores e metas de negocio.",
        "Automacao de rotinas analiticas com SQL e Python.",
        "Modelagem e transformacoes com DAX e Power Query.",
        "Documentacao e padronizacao para consistencia dos dados.",
      ],
    },
    highlights: {
      title: "Perfil profissional",
      items: [
        "+39 certificados em Dados, BI, IA, Cloud e Seguranca.",
        "Pensamento analitico e foco em indicadores acionaveis.",
        "Comunicacao clara com stakeholders e times tecnicos.",
        "Decisao baseada em dados e organizacao da informacao.",
        "Colaboracao em times ageis e multidisciplinares.",
        "Compromisso com qualidade e governanca de dados.",
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
          title: "Analise e Automacao",
          items: ["Python", "Pandas", "Data Analytics", "Automacao", "KPIs"],
        },
        {
          title: "Web e Integracoes",
          items: ["JavaScript", "TypeScript", "React", "Next.js", "APIs REST"],
        },
        {
          title: "Ferramentas e Metodologias",
          items: [
            "Git/GitHub",
            "Scrum",
            "Ambientes ageis",
            "Documentacao",
            "Governanca de dados",
          ],
        },
      ],
    },
  },
  projects: {
    eyebrow: "Projetos",
    title: "Cases de dados e BI com impacto em negocio",
    description:
      "Projetos que conectam BI, automacao e engenharia de dados para apoiar decisoes de negocio e gerar indicadores claros.",
    cardLabel: "Projeto",
    highlightLabel: "Impacto",
    detailsLabel: "Ver detalhes",
    caseLabel: "Case completo",
    viewAllLabel: "Ver todos os cases",
    modal: {
      title: "Detalhes do projeto",
      closeLabel: "Fechar",
      problemTitle: "Problema",
      solutionTitle: "Solucao",
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
      "Cases completos com contexto, dados utilizados, impacto, tecnologias e demonstracao clara de valor para o negocio.",
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
    solutionTitle: "Solucao",
    featuresTitle: "Funcionalidades",
    impactTitle: "Impacto e decisao",
    stackTitle: "Tecnologias aplicadas",
    demonstratesTitle: "O que este projeto demonstra",
    galleryTitle: "Capturas",
    howToRunTitle: "Como executar",
    linksTitle: "Links",
    roleLabel: "Papel",
    backLabel: "Voltar para projetos",
    ctaTitle: "Vamos conversar sobre este projeto?",
    ctaBody:
      "Posso detalhar decisoes, desafios e proximos passos. Se quiser conversar, estou a disposicao.",
    ctaButton: "Entrar em contato",
  },
  contact: {
    eyebrow: "Contato",
    title: "Vamos conversar?",
    description:
      "Estou aberto a oportunidades como Analista de Dados Junior ou BI. Entrego dashboards, automacao e analises orientadas a KPIs com Power BI, SQL e Python. Se busca alguem com organizacao de dados e comunicacao clara, vamos conversar.",
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
    title: "Certificados em Dados, BI, IA, Cloud e Seguranca",
    description:
      "Colecao completa com PDFs locais de Alura, Assimov e Ulife. Filtre por plataforma e encontre rapidamente certificacoes em Power BI, SQL, Python, IA e Cloud.",
    ctaLabel: "Ver certificados",
  },
  demos: {
    eyebrow: "Demos",
    title: "Demos e repositorios",
    description:
      "Demos e repositorios para avaliacao rapida de projetos de dados, BI e automacao, com instrucoes claras para rodar localmente.",
    viewProjectsLabel: "Ver projetos",
    fullCaseLabel: "Case completo",
    openDemoLabel: "Abrir demo",
    demoSoonLabel: "Demo em breve",
    howToRunLabel: "Como executar (local)",
    publishTitle: "Como disponibilizo demos",
    publishItems: [
      "Web (Next.js/React): Vercel com deploy automatico do GitHub.",
      "Front-end puro (HTML/JS): GitHub Pages ou Vercel.",
      "API FastAPI: Render ou Fly com /docs habilitado.",
    ],
  },
  language: {
    label: "Idiomas",
  },
  media: {
    videoFallback: "Seu navegador nao suporta video HTML5.",
  },
};
