import type { SiteContent } from "./site.types";

export const sitePt: SiteContent = {
  nav: {
    home: "Inicio",
    about: "Sobre",
    projects: "Projetos",
    contact: "Contato",
    resume: "Curriculo",
  },
  hero: {
    eyebrow: "Portfolio em Dados",
    title: "Matheus Siqueira",
    subtitle: "Dados | BI | Automacao | Desenvolvimento Web",
    description:
      "Analista de Dados Junior com experiencia em Power BI, SQL e Python, atuando com dados publicos e fiscais para gerar indicadores claros e apoiar decisoes.",
    ctas: {
      primary: "Ver projetos",
      secondary: "Ver curriculo",
      tertiary: "LinkedIn",
    },
  },
  about: {
    eyebrow: "Sobre",
    title: "Dados com foco em decisao e impacto",
    who: {
      title: "Quem eu sou",
      body: "Sou Analista de Dados Junior e estagiario na Secretaria da Fazenda de Pernambuco, com mais de um ano em BI e analise de dados publicos e fiscais. Atuo com Power BI, SQL, DAX e Python para gerar indicadores confiaveis e apoiar gestores.",
    },
    deliver: {
      title: "O que eu entrego",
      bullets: [
        "Dashboards em Power BI com visao executiva e operacional.",
        "Modelagem e consultas SQL para analises consistentes.",
        "ETL com Python e Power Query para integrar fontes.",
        "Automacao de processos para reduzir retrabalho.",
        "Indicadores fiscais com foco em decisao e clareza.",
      ],
    },
    highlights: {
      title: "Highlights",
      items: [
        "Dashboards em Power BI para arrecadacao municipal.",
        "SQL + DAX + Power Query + Python no dia a dia.",
        "Automacao e ETL para reduzir retrabalho.",
        "Ambiente governamental e dados fiscais.",
        "Times ageis e versionamento Git.",
      ],
    },
    stack: {
      title: "Stack principal",
      items: [
        "Power BI",
        "SQL",
        "Python",
        "DAX",
        "Power Query",
        "Pandas",
        "FastAPI",
        "Git",
        "React/Next",
      ],
    },
  },
  projects: {
    eyebrow: "Projetos",
    title: "Case studies com BI, automacao e dados publicos",
    description:
      "Projetos com contexto, solucao e entregas claras para dados fiscais, automacao e interfaces orientadas a decisao.",
    cardLabel: "Projeto",
    highlightLabel: "Destaque",
    detailsLabel: "Ver detalhes",
    caseLabel: "Case completo",
    viewAllLabel: "Ver todos os cases",
    modal: {
      title: "Detalhes do projeto",
      closeLabel: "Fechar",
      problemTitle: "Problema",
      solutionTitle: "Solucao",
      featuresTitle: "Funcionalidades",
      stackTitle: "Stack",
      githubLabel: "GitHub",
      demoLabel: "Demo",
      caseCta: "Ver case completo",
    },
  },
  projectsPage: {
    eyebrow: "Projetos",
    title: "Projetos em Dados",
    description:
      "Explore cases completos com contexto, solucao, funcionalidades e midia.",
    filterLabel: "Filtrar por stack",
    allLabel: "Todos",
    caseLabel: "Abrir case",
    demosLabel: "Ver demos",
    filters: ["Python", "Power BI", "FastAPI", "React"],
  },
  projectDetail: {
    contextTitle: "Contexto",
    problemTitle: "Problema",
    solutionTitle: "Solucao",
    featuresTitle: "Funcionalidades",
    stackTitle: "Stack",
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
      "Aberto a oportunidades em Dados. Se voce precisa de BI, analise ou automacao, vamos conversar.",
    ctaTitle: "Aberto a oportunidades em Dados",
    ctaSubtitle: "Respondo rapido por e-mail ou LinkedIn.",
    cards: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
    },
  },
  demos: {
    eyebrow: "Demos",
    title: "Links e demonstracoes",
    description:
      "Repositorios, demos publicas e caminhos rapidos para testar cada projeto.",
    viewProjectsLabel: "Ver projetos",
    fullCaseLabel: "Case completo",
    openDemoLabel: "Abrir demo",
    demoSoonLabel: "Demo em breve",
    publishTitle: "Como publico demos",
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
