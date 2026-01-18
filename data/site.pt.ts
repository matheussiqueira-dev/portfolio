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
    eyebrow: "Analista de Dados | BI | Setor Publico",
    title: "Analista de Dados Junior | Power BI | SQL | Python | BI",
    subtitle:
      "Power BI, SQL, Python e automacao aplicados a dados publicos e gestao fiscal",
    description:
      "Analista de Dados Junior com experiencia pratica em Business Intelligence aplicado na Secretaria Municipal da Fazenda. Desenvolvo dashboards estrategicos, pipelines de dados e automacoes com Power BI, SQL e Python para apoiar decisoes gerenciais com dados confiaveis. Em formacao em desenvolvimento web para produtos de dados e sistemas analiticos.",
    ctas: {
      primary: "Ver projetos de dados",
      secondary: "Ver curriculo profissional",
      tertiary: "Entrar em contato",
    },
  },
  about: {
    eyebrow: "Sobre",
    title: "Analista de Dados Junior | Power BI | SQL | Python | BI",
    who: {
      title: "O que faco",
      body: "Atuo como Analista de Dados Junior com foco em Business Intelligence, dados publicos e apoio a tomada de decisao. Hoje trabalho com arrecadacao tributaria, dados fiscais e indicadores estrategicos na Secretaria Municipal da Fazenda, desenvolvendo visoes claras para gestores. Em paralelo, sigo em formacao em desenvolvimento web para fortalecer produtos de dados e sistemas analiticos.",
    },
    deliver: {
      title: "Como faco",
      bullets: [
        "Dashboards estrategicos em Power BI para acompanhamento de arrecadacao e gestao fiscal.",
        "Modelagem e transformacao com DAX e Power Query para dados confiaveis.",
        "Pipelines de ETL com SQL e Python integrando multiplas bases publicas.",
        "Automacao de relatorios com reducao de retrabalho e tempo operacional.",
        "Analises exploratorias para identificar tendencias e anomalias fiscais.",
      ],
    },
    highlights: {
      title: "Resultados",
      items: [
        "Reducao de retrabalho e tempo de consolidacao em rotinas recorrentes.",
        "+39 certificados em Dados, BI, IA, Cloud e Seguranca.",
        "Dashboards executivos e operacionais para acompanhamento de arrecadacao.",
        "Automacoes que aumentam consistencia e rastreabilidade dos dados.",
        "Padronizacao de indicadores para decisoes gerenciais.",
        "Colaboracao com gestores e times multidisciplinares.",
      ],
    },
    stack: {
      title: "Ferramentas",
      groups: [
        {
          title: "Analise e BI",
          items: [
            "Power BI",
            "DAX",
            "Power Query",
            "Data Visualization",
            "Data Analytics",
          ],
        },
        {
          title: "Dados e Automacao",
          items: ["SQL", "Python", "Pandas", "ETL", "Automacao"],
        },
        {
          title: "Web e Sistemas Analiticos",
          items: ["JavaScript", "React", "Next.js", "APIs REST", "Consumo de dados"],
        },
        {
          title: "Ferramentas e Metodologias",
          items: [
            "Git/GitHub",
            "Scrum",
            "Ambientes ageis",
            "Dados publicos",
            "Governanca basica",
          ],
        },
      ],
    },
  },
  projects: {
    eyebrow: "Projetos",
    title: "Cases de dados com impacto em decisao",
    description:
      "Projetos que conectam dados publicos, BI e automacao para apoiar decisoes claras e reduzir retrabalho.",
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
      "Cases completos com contexto, dados utilizados, impacto, tecnologias e demonstracao clara do perfil analitico.",
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
      "Estou aberto a oportunidades como Analista de Dados Junior ou BI, especialmente em contextos onde dados apoiam decisoes reais. Tenho experiencia pratica em dados publicos, automacao e BI, e estou em formacao em desenvolvimento web. Se busca alguem com responsabilidade com dados e visao analitica, vamos conversar.",
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
