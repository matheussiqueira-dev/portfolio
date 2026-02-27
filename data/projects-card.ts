/**
 * Projects Card Data
 * Maps existing projects to enhanced ProjectCard format for the new UI
 * This file bridges the old `projects.ts` with the new expandable card system
 */

import type { ProjectCard } from "./projects-card.types";
import { projects } from "./projects";
import { projectsEn } from "./projects.en";
import type { Project } from "./projects.types";

/**
 * Portuguese projects in card format
 * Language: PT-BR
 */
export const projectsCardPt: ProjectCard[] = [
  {
    slug: "capa-da-invisibilidade",
    id: "capa-da-invisibilidade",
    title: {
      pt: "Capa da Invisibilidade",
      en: "Invisibility Cloak",
    },
    tagline: {
      pt: "Efeito de invisibilidade em tempo real no navegador com controles de calibração",
      en: "Real-time invisibility effect in the browser with calibration controls",
    },
    description: {
      pt: "Efeito de invisibilidade em tempo real no navegador com ajustes finos de cor e mascaramento.",
      en: "Real-time invisibility effect in the browser with fine-grained color masking controls.",
    },
    fullDescription: {
      pt: "Projeto full stack que aplica um efeito de invisibilidade em tempo real no navegador, com controles de calibração e mascaramento. O processamento acontece localmente via Canvas para reduzir latência e preservar privacidade, com backend opcional para snapshots e métricas.",
      en: "Full stack project that applies a real-time invisibility effect in the browser, with calibration controls and masking. Processing happens locally via Canvas to reduce latency and preserve privacy, with an optional backend for snapshots and metrics.",
    },
    thumbnail: {
      pt: "/thumbnails/pt/capa-da-invisibilidade.png",
      en: "/thumbnails/en/capa-da-invisibilidade.png",
    },
    videos: [
      {
        type: "local",
        src: "/Capa da Invisibilidade.mp4",
        poster: "/thumbnails/pt/capa-da-invisibilidade.png",
        caption: "Efeito de invisibilidade em tempo real com calibração visual",
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Canvas API",
      "Node.js",
      "Fastify",
      "Zod",
    ],
    role: "Desenvolvedor Full Stack",
    context: {
      pt: "A meta era criar um efeito de invisibilidade em tempo real que rodasse no navegador, com baixa latência, calibração visual e backend opcional para registrar resultados.",
      en: "The goal was to create a real-time invisibility effect that runs in the browser, with low latency, visual calibration, and an optional backend to record results.",
    },
    highlights: [
      "Processamento local de vídeo para privacidade e baixa latência",
      "Controles visuais para calibração precisa do efeito",
      "Backend modular e opcional para registrar resultados",
      "Setup simples para demonstrações e estudos",
    ],
    links: {
      repo: "https://github.com/matheussiqueira-dev/capa-da-invisibilidade.git",
      caseStudy: "/projetos/capa-da-invisibilidade",
    },
    featured: true,
    order: 1,
  },
  {
    slug: "hand-gesture-recognition-realtime",
    id: "hand-gesture-recognition-realtime",
    title: {
      pt: "Reconhecimento de Gestos em Tempo Real",
      en: "Real-Time Hand Gesture Recognition",
    },
    tagline: {
      pt: "Sistema de reconhecimento de gestos com IA usando a webcam",
      en: "AI-powered gesture recognition system using webcam",
    },
    description: {
      pt: "Sistema que reconhece gestos da mão em tempo real através da webcam, identificando movimentos e poses.",
      en: "System that recognizes hand gestures in real-time through the webcam, identifying movements and poses.",
    },
    fullDescription: {
      pt: "Aplicação que utiliza TensorFlow.js e MediaPipe para detectar e reconhecer gestos com as mãos capturados pela webcam em tempo real. Ideal para interfaces sem contato, controle de aplicações e acessibilidade.",
      en: "Application that uses TensorFlow.js and MediaPipe to detect and recognize hand gestures captured by the webcam in real-time. Ideal for contactless interfaces, application control, and accessibility.",
    },
    thumbnail: {
      pt: "/thumbnails/pt/hand-gesture-recognition-realtime.png",
      en: "/thumbnails/en/hand-gesture-recognition-realtime.png",
    },
    videos: [
      {
        type: "local",
        src: "/Hands Gesture.mp4",
        poster: "/thumbnails/pt/hand-gesture-recognition-realtime.png",
        caption: "Reconhecimento de gestos com as mãos em tempo real",
      },
    ],
    stack: ["React", "TensorFlow.js", "MediaPipe", "WebGL", "JavaScript"],
    role: "Desenvolvedor Full Stack",
    context: {
      pt: "Projectodesenvolvido para demonstrar capacidades de visão computacional no navegador utilizando modelos pré-treinados.",
      en: "Project developed to demonstrate computer vision capabilities in the browser using pre-trained models.",
    },
    highlights: [
      "Detecção em tempo real sem latência perceptível",
      "Modelos ML leves otimizados para o navegador",
      "Interface intuitiva e responsiva",
      "Pronto para integração em aplicações web",
    ],
    links: {
      repo: "https://github.com/matheussiqueira-dev",
      caseStudy: "/projetos/hand-gesture-recognition-realtime",
    },
    featured: true,
    order: 2,
  },
  {
    slug: "dashboard-vendas-power-bi",
    id: "dashboard-vendas-power-bi",
    title: {
      pt: "Dashboard de Vendas - Power BI",
      en: "Sales Dashboard - Power BI",
    },
    tagline: {
      pt: "Dashboard interativo com análise de vendas e KPIs",
      en: "Interactive dashboard with sales analysis and KPIs",
    },
    description: {
      pt: "Dashboard profissional em Power BI integrando múltiplas fontes de dados para análise de desempenho de vendas.",
      en: "Professional Power BI dashboard integrating multiple data sources for sales performance analysis.",
    },
    fullDescription: {
      pt: "Dashboard analítico com visualizações avançadas em Power BI, conectando dados de múltiplas fontes e apresentando KPIs, tendências e insights acionáveis para tomada de decisão estratégica.",
      en: "Analytical dashboard with advanced visualizations in Power BI, connecting data from multiple sources and presenting KPIs, trends, and actionable insights for strategic decision-making.",
    },
    thumbnail: {
      pt: "/thumbnails/pt/dashboard-vendas-power-bi.png",
      en: "/thumbnails/en/dashboard-vendas-power-bi.png",
    },
    videos: [],
    stack: ["Power BI", "DAX", "SQL", "Excel", "Data Analysis"],
    role: "BI Developer & Data Analyst",
    context: {
      pt: "Dashboard desenvolvido para melhorar visibilidade e tomada de decisão em operações de vendas.",
      en: "Dashboard developed to improve visibility and decision-making in sales operations.",
    },
    highlights: [
      "Múltiplas métricas de desempenho em uma visão unificada",
      "Filtros interativos para análise segmentada",
      "Atualização automática de dados",
      "Design otimizado para decisões rápidas",
    ],
    links: {
      caseStudy: "/projetos/dashboard-vendas-power-bi",
    },
    featured: true,
    order: 3,
  },
  {
    slug: "sql-python-analytics-pipeline",
    id: "sql-python-analytics-pipeline",
    title: {
      pt: "Pipeline de Analytics com SQL + Python",
      en: "Analytics Pipeline with SQL + Python",
    },
    tagline: {
      pt: "ETL automatizado com processamento de dados em tempo real",
      en: "Automated ETL with real-time data processing",
    },
    description: {
      pt: "Sistema de pipeline de dados que coleta, processa e analisa informações de múltiplas fontes usando SQL e Python.",
      en: "Data pipeline system that collects, processes, and analyzes information from multiple sources using SQL and Python.",
    },
    fullDescription: {
      pt: "Pipeline ETL robusto que integra dados de múltiplas APIs e bancos de dados, realiza transformações complexas em Python, armazena em PostgreSQL e expõe dashboards via Metabase. Inclui validação de dados, tratamento de erros e alertas em tempo real.",
      en: "Robust ETL pipeline that integrates data from multiple APIs and databases, performs complex transformations in Python, stores in PostgreSQL, and exposes dashboards via Metabase. Includes data validation, error handling, and real-time alerts.",
    },
    thumbnail: {
      pt: "/placeholder.jpg",
      en: "/placeholder.jpg",
    },
    videos: [],
    stack: ["Python", "PostgreSQL", "Pandas", "SQL", "Airflow", "Metabase", "Docker"],
    role: "Data Engineer & Python Developer",
    context: {
      pt: "Desenvolvimento de solução ETL para centralizar dados espalhados em diferentes sistemas legados.",
      en: "Development of ETL solution to centralize data scattered across different legacy systems.",
    },
    highlights: [
      "Processamento de 10M+ registros diários",
      "Latência de dados < 5 minutos",
      "Recuperação automática de falhas",
      "Schema validation e data quality checks",
    ],
    architecture: {
      pt: "Sistema em camadas: extração de APIs/BD → transformação Python → armazenamento PostgreSQL → visualização Metabase",
      en: "Layered system: extraction from APIs/DB → Python transformation → PostgreSQL storage → Metabase visualization",
      components: ["Data Extraction", "Transformation Engine", "Storage Layer", "Analytics Visualization"],
    },
    challenges: [
      {
        pt: "Sincronização de dados em tempo real sem picos de carga",
        en: "Real-time data synchronization without load spikes",
      },
      {
        pt: "Manutenção de consistência entre múltiplas fontes",
        en: "Maintaining consistency across multiple data sources",
      },
    ],
    metrics: {
      performance: "45ms average query time",
      users: "15 analyst users",
      uptime: "99.7%",
      responseTime: "<200ms dashboard loads",
    },
    links: {
      repo: "https://github.com/matheussiqueira-dev/analytics-pipeline",
      caseStudy: "/projetos/sql-python-analytics-pipeline",
    },
    featured: false,
    order: 4,
    status: "active",
    duration: {
      start: "2024-01",
      end: "ongoing",
    },
  },
  {
    slug: "data-analyst-dashboard",
    id: "data-analyst-dashboard",
    title: {
      pt: "Dashboard de Análise de Dados",
      en: "Data Analysis Dashboard",
    },
    tagline: {
      pt: "Visualização interativa de KPIs e métricas de negócio",
      en: "Interactive visualization of KPIs and business metrics",
    },
    description: {
      pt: "Dashboard analítico desenvolvido em React que integra dados de múltiplas fontes e apresenta visualizações avançadas.",
      en: "Analytical dashboard developed in React that integrates data from multiple sources and presents advanced visualizations.",
    },
    fullDescription: {
      pt: "Applied data analyst desenvolvendo dashboards interativos que conectam dados de CRM, e-commerce e sistemas de vendas. Interface responsiva com gráficos em tempo real, filtros avançados e exportação de relatórios em PDF.",
      en: "Applied data analyst developing interactive dashboards connecting data from CRM, e-commerce, and sales systems. Responsive interface with real-time charts, advanced filters, and PDF report export.",
    },
    thumbnail: {
      pt: "/placeholder.jpg",
      en: "/placeholder.jpg",
    },
    videos: [],
    stack: ["React", "TypeScript", "Recharts", "API REST", "PostgreSQL", "Node.js"],
    role: "Full Stack Data Analyst",
    context: {
      pt: "Desenvolvimento de ferramenta interna para visibilidade de métricas de negócio em tempo real.",
      en: "Development of internal tool for real-time business metrics visibility.",
    },
    highlights: [
      "Dashboard atualiza a cada 5 minutos",
      "Suporta 50+ métricas diferentes",
      "Filtros aninhados para análise granular",
      "Exportação automática de relatórios",
    ],
    architecture: {
      pt: "Frontend React com Redux para estado global → API Node.js → PostgreSQL com views pré-calculadas",
      en: "React frontend with Redux for global state → Node.js API → PostgreSQL with pre-calculated views",
      components: ["React UI Layer", "Node.js API", "Database Layer", "Cache Layer"],
    },
    challenges: [
      {
        pt: "Performance com grande volume de dados históricos",
        en: "Performance with large volume of historical data",
      },
      {
        pt: "Manutenção de cache sem inconsistências",
        en: "Cache maintenance without data inconsistencies",
      },
    ],
    metrics: {
      performance: "First paint: 1.2s",
      users: "45 analyst users",
      uptime: "99.9%",
      custom: {
        "daily_reports": "120+",
        "avg_filters": "3.5 per session",
      },
    },
    links: {
      live: "https://analytics.example.com",
      caseStudy: "/projetos/data-analyst-dashboard",
    },
    featured: false,
    order: 5,
    status: "active",
    duration: {
      start: "2023-06",
      end: "ongoing",
    },
  },
  {
    slug: "touchless-gesture-web-interface",
    id: "touchless-gesture-web-interface",
    title: {
      pt: "Interface Web sem Contato com Gestos",
      en: "Touchless Web Interface with Gesture Control",
    },
    tagline: {
      pt: "Controle de aplicações web através de gestos com detecção de mão em tempo real",
      en: "Web app control via hand gestures with real-time detection",
    },
    description: {
      pt: "Aplicação web que permite navegação e controle usando gestos feitos com as mãos, capturados via câmera.",
      en: "Web application that enables navigation and control using hand gestures captured via camera.",
    },
    fullDescription: {
      pt: "Sistema de interface sem contato que usa visão computacional para detectar gestos de mão em tempo real. Integra MediaPipe com WebGL para renderização de espaço 3D, permitindo controle intuitivo de elementos web. Aplicável em ambientes médicos, industriais ou públicos.",
      en: "Touchless interface system using computer vision to detect hand gestures in real-time. Integrates MediaPipe with WebGL for 3D space rendering, enabling intuitive control of web elements. Applicable in medical, industrial, or public environments.",
    },
    thumbnail: {
      pt: "/thumbnails/pt/touchless-web-gesture-interface.png",
      en: "/thumbnails/en/touchless-web-gesture-interface.png",
    },
    videos: [
      {
        type: "local",
        src: "/touchless-web-gesture-interface.mp4",
        poster: "/thumbnails/pt/touchless-web-gesture-interface.png",
        caption: "Demonstração de controle por gestos",
      },
    ],
    stack: ["React", "TypeScript", "MediaPipe", "WebGL", "Canvas API", "Tailwind CSS"],
    role: "Full Stack Developer",
    context: {
      pt: "Prototipagem de sistema de controle sem contato para ambientes sensíveis a higiene.",
      en: "Prototyping of touchless control system for hygiene-sensitive environments.",
    },
    highlights: [
      "Detecção de 21 pontos de mão com precisão 98%+",
      "Gestos customizáveis para diferentes ações",
      "Latência < 100ms de detecção para resposta",
      "Funciona no navegador, sem requis. de server",
    ],
    architecture: {
      pt: "MediaPipe detecta landmarks → Web Workers processam gestos → Events disparam ações no DOM",
      en: "MediaPipe detects hand landmarks → Web Workers process gestures → Events trigger DOM actions",
      components: ["MediaPipe Detection", "Gesture Recognition", "Action Dispatcher", "UI Layer"],
    },
    challenges: [
      {
        pt: "Reduzir latência de detecção para resposta imediata",
        en: "Reducing detection latency for immediate response",
      },
      {
        pt: "Permitir customização de gestos sem código",
        en: "Allowing gesture customization without coding",
      },
    ],
    metrics: {
      performance: "Detection latency: 85ms avg",
      custom: {
        "fps": "30+",
        "accuracy": "98.5%",
        "cpu_usage": "<40%",
      },
    },
    links: {
      repo: "https://github.com/matheussiqueira-dev/touchless-gesture",
      live: "https://touchless-gesture.vercel.app",
      demo: "https://touchless-gesture.vercel.app",
      caseStudy: "/projetos/touchless-gesture-web-interface",
    },
    featured: true,
    order: 6,
    status: "completed",
    duration: {
      start: "2024-03",
      end: "2024-06",
    },
  },
];

/**
 * English projects in card format
 * Language: EN-US
 */
export const projectsCardEn: ProjectCard[] = projectsCardPt.map((p) => ({
  ...p,
})); // Same structure, bilingual fields handle translation

const projectsBySlugPt = new Map(projects.map((project) => [project.slug, project]));
const projectsBySlugEn = new Map(projectsEn.map((project) => [project.slug, project]));

function isExternalUrl(value: string) {
  return /^https?:\/\//i.test(value);
}

function getDemoLink(project: Project): string | undefined {
  if (project.demoUrl) {
    return project.demoUrl;
  }

  if (!project.demo) {
    return undefined;
  }

  switch (project.demo.kind) {
    case "external":
    case "embed":
      return project.demo.url;
    case "internal":
      return project.demo.path;
    default:
      return undefined;
  }
}

function getThumbnail(project: Project): string {
  if (project.demo?.kind === "video" && project.demo.poster) {
    return project.demo.poster;
  }

  const imageShot = project.screenshots.find(
    (shot) => shot.type !== "video" && shot.type !== "gif"
  );
  if (imageShot) {
    return imageShot.src;
  }

  if (project.screenshots[0]) {
    return project.screenshots[0].src;
  }

  return "/placeholder.jpg";
}

function getVideos(project: Project, posterFallback: string): ProjectCard["videos"] {
  if (project.demo?.kind === "video") {
    return [
      {
        type: "local",
        src: project.demo.src,
        poster: project.demo.poster ?? posterFallback,
        caption: project.demo.caption,
      },
    ];
  }

  const screenshotVideo = project.screenshots.find((shot) => shot.type === "video");
  if (screenshotVideo) {
    return [
      {
        type: "local",
        src: screenshotVideo.src,
        poster: posterFallback,
        caption: screenshotVideo.alt,
      },
    ];
  }

  return [];
}

function toProjectCard(
  sourceProject: Project,
  translatedProject: Project | undefined,
  locale: "pt" | "en",
  index: number
): ProjectCard {
  const ptProject = locale === "pt" ? sourceProject : translatedProject ?? sourceProject;
  const enProject = locale === "en" ? sourceProject : translatedProject ?? sourceProject;

  const ptThumbnail = getThumbnail(ptProject);
  const enThumbnail = getThumbnail(enProject);
  const sourceThumbnail = locale === "pt" ? ptThumbnail : enThumbnail;
  const demoLink = getDemoLink(sourceProject);
  const externalDemo = demoLink ? isExternalUrl(demoLink) : false;

  return {
    slug: sourceProject.slug,
    id: sourceProject.slug,
    title: {
      pt: ptProject.title,
      en: enProject.title,
    },
    tagline: {
      pt: ptProject.tagline,
      en: enProject.tagline,
    },
    description: {
      pt: ptProject.tagline,
      en: enProject.tagline,
    },
    fullDescription: {
      pt: ptProject.context,
      en: enProject.context,
    },
    thumbnail: {
      pt: ptThumbnail,
      en: enThumbnail,
    },
    videos: getVideos(sourceProject, sourceThumbnail),
    stack: sourceProject.stack,
    role: sourceProject.role,
    context: {
      pt: ptProject.context,
      en: enProject.context,
    },
    highlights: sourceProject.highlights,
    links: {
      repo: sourceProject.repoUrl,
      live: externalDemo ? demoLink : undefined,
      demo: !externalDemo ? demoLink : undefined,
      caseStudy:
        locale === "en"
          ? "/en/projects/" + sourceProject.slug
          : "/projetos/" + sourceProject.slug,
    },
    featured: index < 6,
    order: index + 1,
  };
}

/**
 * Helper function to get correct language projects
 */
export function getProjectsCard(locale: "pt" | "en") {
  const source = locale === "pt" ? projects : projectsEn;
  const translated = locale === "pt" ? projectsBySlugEn : projectsBySlugPt;

  return source.map((project, index) =>
    toProjectCard(project, translated.get(project.slug), locale, index)
  );
}

/**
 * Sample: Shows how to extend with more projects
 * This is a template for adding new project cards
 */
export const projectCardTemplate: ProjectCard = {
  slug: "template",
  id: "template",
  title: {
    pt: "Título em Português",
    en: "Title in English",
  },
  tagline: {
    pt: "Descrição curta em português",
    en: "Short description in English",
  },
  description: {
    pt: "Descrição média em português",
    en: "Medium description in English",
  },
  fullDescription: {
    pt: "Descrição completa e detalhada em português. Explique o contexto, desafios e soluções.",
    en: "Complete and detailed description in English. Explain context, challenges, and solutions.",
  },
  thumbnail: {
    pt: "/thumbnails/pt/template.png",
    en: "/thumbnails/en/template.png",
  },
  videos: [
    {
      type: "local",
      src: "/path-to-video.mp4",
      poster: "/thumbnails/pt/template.png",
      caption: "Video caption",
    },
  ],
  stack: ["Tech1", "Tech2", "Tech3"],
  role: "Your role here",
  context: {
    pt: "Background context em português",
    en: "Background context in English",
  },
  highlights: ["Highlight 1", "Highlight 2", "Highlight 3"],
  links: {
    repo: "https://github.com/...",
    live: "https://...",
    demo: "https://...",
    caseStudy: "/projetos/slug",
  },
  featured: false,
  order: 999,
};
