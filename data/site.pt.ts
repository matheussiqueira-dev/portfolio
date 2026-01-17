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
    eyebrow: "Analista de Dados | BI | Setor Publico",
    title: "Transformando dados publicos em decisoes estrategicas",
    subtitle:
      "Power BI, SQL, Python e automacao aplicados a gestao publica e inteligencia fiscal",
    description:
      "Analista de Dados Junior com mais de um ano de experiencia pratica em Business Intelligence aplicado, atuando na Secretaria Municipal da Fazenda. Desenvolvo dashboards estrategicos, pipelines de dados e automacoes que reduzem retrabalho, aumentam eficiencia operacional e apoiam decisoes gerenciais baseadas em dados confiaveis.",
    ctas: {
      primary: "Ver projetos de dados",
      secondary: "Ver curriculo",
      tertiary: "Entrar em contato",
    },
  },
  about: {
    eyebrow: "Sobre",
    title: "Perfil orientado a BI, dados publicos e decisao",
    who: {
      title: "Quem sou",
      body: "Sou Analista de Dados Junior com atuacao focada em Business Intelligence, dados publicos e apoio a tomada de decisao no setor governamental. Atualmente atuo como estagiario em Analise de Dados na Secretaria Municipal da Fazenda, trabalhando diretamente com arrecadacao tributaria, dados fiscais e indicadores estrategicos para gestores publicos.",
    },
    deliver: {
      title: "O que eu entrego",
      bullets: [
        "Dashboards estrategicos em Power BI para acompanhamento de arrecadacao municipal.",
        "Rotinas de ETL com SQL e Python, integrando multiplas bases publicas.",
        "Automacao de relatorios e processos, reduzindo tempo operacional e retrabalho.",
        "Analises exploratorias para identificacao de tendencias e anomalias fiscais.",
        "Visualizacoes orientadas a decisao gerencial, nao apenas estetica.",
      ],
    },
    highlights: {
      title: "Destaques profissionais",
      items: [
        "+40% de reducao no tempo de consolidacao de dados.",
        "Atuacao direta com dados fiscais e publicos sensiveis.",
        "Experiencia real em ambiente governamental e dados de grande escala.",
        "Interface analitica com gestores e times multidisciplinares.",
        "Foco em qualidade, organizacao e rastreabilidade dos dados.",
      ],
    },
    stack: {
      title: "Stack tecnica",
      groups: [
        {
          title: "Analise e BI",
          items: [
            "Power BI",
            "DAX",
            "Power Query",
            "Modelagem analitica",
            "Indicadores",
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
      "Estou aberto a oportunidades como Analista de Dados Junior ou BI, especialmente em contextos onde dados apoiam decisoes reais. Se voce busca alguem com experiencia pratica, responsabilidade com dados e visao analitica, vamos conversar.",
    ctaTitle: "Aberto a oportunidades em Dados e BI",
    ctaSubtitle: "LinkedIn e e-mail respondidos rapidamente.",
    cards: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
    },
  },
  demos: {
    eyebrow: "Demos",
    title: "Demos e repositorios",
    description:
      "Demos e repositorios para avaliacao rapida de projetos de dados, BI e automacao.",
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
