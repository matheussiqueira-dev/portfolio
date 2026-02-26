/**
 * Projects Card Data
 * Maps existing projects to enhanced ProjectCard format for the new UI
 * This file bridges the old `projects.ts` with the new expandable card system
 */

import type { ProjectCard } from "./projects-card.types";

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
];

/**
 * English projects in card format
 * Language: EN-US
 */
export const projectsCardEn: ProjectCard[] = projectsCardPt.map((p) => ({
  ...p,
})); // Same structure, bilingual fields handle translation

/**
 * Helper function to get correct language projects
 */
export function getProjectsCard(locale: "pt" | "en") {
  return locale === "pt" ? projectsCardPt : projectsCardEn;
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
