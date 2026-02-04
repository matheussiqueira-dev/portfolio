export type DemoAspectRatio = "16:9" | "4:3" | "1:1";

export type InlineDemoId =
  | "detector-de-stress"
  | "chatbot-ia-api"
  | "library-api-advanced"
  | "driver-monitoring-system"
  | "touchless-web-gesture-interface"
  | "self-drive-car"
  | "flappy-bird-com-gestos"
  | "reconhecimento-de-gestos-mao-tempo-real";

export type ProjectDemo =
  | {
      mode: "inline";
      inlineId: InlineDemoId;
      aspectRatio?: DemoAspectRatio;
      minHeight?: number;
    }
  | {
      mode: "iframe";
      iframeUrl: string;
      aspectRatio?: DemoAspectRatio;
      minHeight?: number;
    }
  | {
      mode: "video";
      videoUrl: string;
      aspectRatio?: DemoAspectRatio;
      minHeight?: number;
    }
  | { mode: "none" };

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  tags: string[];
  coverImage?: string;
  techStack?: string[];
  links?: { repo?: string; live?: string };
  demo: ProjectDemo;
  isInteractive?: boolean;
};

const defaultAspect: DemoAspectRatio = "16:9";

export const projects: Project[] = [
  {
    id: "business-decision-simulator",
    title: "Business Decision Simulator",
    shortDescription:
      "Simulador interativo para comparar estratégias e medir impacto financeiro com Monte Carlo e análise de sensibilidade.",
    tags: ["Python", "Streamlit", "Pandas", "NumPy", "Plotly"],
    techStack: ["Python", "Streamlit", "Pandas", "NumPy", "Plotly"],
    coverImage: "/Thmbnail/Thumbnail - English/Business Decision Simulator.png",
    links: {
      repo: "https://github.com/matheussiqueira-dev/Simulacao-Estrategica-de-Decisao-Empresarial.git",
    },
    demo: {
      mode: "video",
      videoUrl: "/Simulação Estratégica de Decisão Empresarial.mp4",
      aspectRatio: defaultAspect,
      minHeight: 420,
    },
  },
  {
    id: "deteccao-de-anomalias-operacionais",
    title: "Detecção de Anomalias Operacionais",
    shortDescription:
      "Sistema para detectar anomalias em métricas operacionais com alertas em tempo real e painel interativo.",
    tags: ["Python", "FastAPI", "Isolation Forest", "TimescaleDB", "React", "D3"],
    techStack: ["Python", "FastAPI", "Isolation Forest", "TimescaleDB", "React", "D3"],
    coverImage: "/Thmbnail/Thumbnail - English/Operational Anomaly Detection.png",
    links: {
      repo: "https://github.com/matheussiqueira-dev/Deteccao-de-Anomalias-Operacionais.git",
    },
    demo: {
      mode: "video",
      videoUrl: "/projects/deteccao-de-anomalias-operacionais/demo.mp4",
      aspectRatio: defaultAspect,
      minHeight: 420,
    },
  },
  {
    id: "dashboard-vendas-power-bi",
    title: "Dashboard de Vendas - Power BI",
    shortDescription:
      "Dashboard em Power BI para acompanhar vendas, metas e mix de produtos com filtros dinâmicos.",
    tags: ["Power BI", "DAX", "Power Query", "Excel"],
    techStack: ["Power BI", "DAX", "Power Query", "Excel"],
    coverImage: "/Thmbnail/Thumbnail - English/Sales Dashboard - Power BI.png",
    links: {
      repo: "https://github.com/matheussiqueira-dev/Dashboard-de-Vendas---Power-BI.git",
    },
    demo: {
      mode: "video",
      videoUrl: "/projects/dashboard-vendas-power-bi/demo.mp4",
      aspectRatio: defaultAspect,
      minHeight: 420,
    },
  },
  {
    id: "detector-de-stress",
    title: "Detector de Stress",
    shortDescription:
      "Pipeline modular que estima o nível de stress apenas com webcam, HUD, REST/WS e dashboard.",
    tags: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Streamlit",
      "WebSockets",
      "Machine Learning",
    ],
    techStack: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Streamlit",
      "WebSockets",
      "Machine Learning",
    ],
    coverImage: "/Thmbnail/Thumbnail - English/Stress Detector.png",
    isInteractive: true,
    links: {
      repo: "https://github.com/matheussiqueira-dev/Detector-de-Stress",
    },
    demo: {
      mode: "video",
      videoUrl: "/Detector de Stress.mp4",
      aspectRatio: defaultAspect,
      minHeight: 420,
    },
  },
  {
    id: "touchless-web-gesture-interface",
    title: "Interface Web de Gestos Sem Contato",
    shortDescription:
      "Interface web touchless com visão computacional para navegar dashboards e data apps.",
    tags: ["Python", "FastAPI", "OpenCV", "MediaPipe", "React"],
    techStack: ["Python", "FastAPI", "OpenCV", "MediaPipe", "React"],
    coverImage: "/Thmbnail/Thumbnail - English/Touchless Web Gesture Interface.png",
    isInteractive: true,
    links: {
      repo: "https://github.com/matheussiqueira-dev/Interface-Web-de-Gestos-Sem-Contato.git",
    },
    demo: {
      mode: "video",
      videoUrl: "/touchless-web-gesture-interface.mp4",
      aspectRatio: defaultAspect,
      minHeight: 420,
    },
  },
  {
    id: "driver-monitoring-system",
    title: "Driver Monitoring System",
    shortDescription:
      "Sistema de monitoramento do motorista utilizando visão computacional para atenção e fadiga.",
    tags: ["Python", "OpenCV", "MediaPipe", "TensorFlow"],
    techStack: ["Python", "OpenCV", "MediaPipe", "TensorFlow"],
    coverImage: "/Thmbnail/Thumbnail - English/Driver Monitoring System.png",
    isInteractive: true,
    links: {
      repo: "https://github.com/matheussiqueira-dev/Driver-Monitoring-System",
    },
    demo: {
      mode: "video",
      videoUrl: "/driver-monitoring-system.mp4",
      aspectRatio: defaultAspect,
      minHeight: 420,
    },
  },
  {
    id: "self-drive-car",
    title: "Self-Drive Car",
    shortDescription:
      "Simulador de direção autônoma com visão computacional e ML.",
    tags: ["Python", "OpenCV", "TensorFlow", "NumPy"],
    techStack: ["Python", "OpenCV", "TensorFlow", "NumPy"],
    coverImage: "/Thmbnail/Thumbnail - English/Self-Drive Car.png",
    isInteractive: true,
    links: {
      repo: "https://github.com/matheussiqueira-dev/self-drive-car",
    },
    demo: {
      mode: "video",
      videoUrl: "/projects/self-drive-car/demo.mp4",
      aspectRatio: defaultAspect,
      minHeight: 420,
    },
  },
  {
    id: "chatbot-ia-api",
    title: "Chatbot IA API",
    shortDescription:
      "API de chatbot com contexto, logs e dados para automação de suporte.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    techStack: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    coverImage: "/Thmbnail/Thumbnail - English/Chatbot IA API.png",
    isInteractive: true,
    links: {
      repo: "https://github.com/matheussiqueira-dev/chatbot-ia-api",
    },
    demo: {
      mode: "inline",
      inlineId: "chatbot-ia-api",
      aspectRatio: defaultAspect,
      minHeight: 420,
    },
  },
  {
    id: "library-api-advanced",
    title: "Library API Advanced",
    shortDescription:
      "API de biblioteca com autenticação, regras de empréstimo e auditoria.",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Fastify"],
    techStack: ["Node.js", "TypeScript", "PostgreSQL", "Fastify"],
    coverImage: "/Thmbnail/Thumbnail - English/Library API Advanced.png",
    isInteractive: true,
    links: {
      repo: "https://github.com/matheussiqueira-dev/library-api-advanced",
    },
    demo: {
      mode: "inline",
      inlineId: "library-api-advanced",
      aspectRatio: defaultAspect,
      minHeight: 420,
    },
  },
  {
    id: "hand-gesture-recognition-realtime",
    title: "Reconhecimento de Gestos de Mão em Tempo Real",
    shortDescription:
      "Sistema de visão computacional em tempo real para detectar mãos e contar dedos usando webcam.",
    tags: ["Python", "OpenCV", "MediaPipe"],
    techStack: ["Python", "OpenCV", "MediaPipe"],
    coverImage: "/Thmbnail/Thumbnail - English/Real-Time Hand Gesture Recognition.png",
    isInteractive: true,
    links: {
      repo: "https://github.com/matheussiqueira-dev/Reconhecimento-de-Gestos-de-Mao",
    },
    demo: {
      mode: "video",
      videoUrl: "/Hands Gesture.mp4",
      aspectRatio: defaultAspect,
      minHeight: 420,
    },
  },
  {
    id: "flappy-bird-gesture-control",
    title: "Flappy Bird com Gestos",
    shortDescription:
      "Versão do Flappy Bird controlada pela webcam, combinando MediaPipe Hands, OpenCV e Pygame.",
    tags: ["Python", "Pygame", "OpenCV", "MediaPipe", "NumPy"],
    techStack: ["Python", "Pygame", "OpenCV", "MediaPipe", "NumPy"],
    coverImage: "/Thmbnail/Thumbnail - English/Flappy Bird.png",
    isInteractive: true,
    links: {
      repo: "https://github.com/matheussiqueira-dev/Flappy-Bird",
    },
    demo: {
      mode: "video",
      videoUrl: "/Flappy-Bird.mp4",
      aspectRatio: defaultAspect,
      minHeight: 420,
    },
  },
  {
    id: "subway-surf",
    title: "Subway Surfers",
    shortDescription:
      "Jogo inspirado no Subway Surfers para estudo de lógica e desenvolvimento de games.",
    tags: ["JavaScript", "HTML5", "Canvas", "CSS"],
    techStack: ["JavaScript", "HTML5", "Canvas", "CSS"],
    coverImage: "/Thmbnail/Thumbnail - English/Subway Surfers.png",
    links: {
      repo: "https://github.com/matheussiqueira-dev/Subway-Surf",
    },
    demo: {
      mode: "video",
      videoUrl: "/Subway Surf.mp4",
      aspectRatio: defaultAspect,
      minHeight: 420,
    },
  },
  {
    id: "slingshot",
    title: "Slingshot",
    shortDescription:
      "Bubble shooter em canvas com mira por toque/mouse, ricochete e dicas táticas.",
    tags: ["JavaScript", "HTML5", "Canvas", "CSS", "Hammer.js"],
    techStack: ["JavaScript", "HTML5", "Canvas", "CSS", "Hammer.js"],
    coverImage: "/Thmbnail/Thumbnail - English/Slingshot.png",
    links: {
      repo: "https://github.com/matheussiqueira-dev/Slingshot.git",
    },
    demo: {
      mode: "video",
      videoUrl: "/projects/slingshot/demo.mp4",
      aspectRatio: defaultAspect,
      minHeight: 420,
    },
  },
  {
    id: "fruit-ninja",
    title: "Fruit Ninja",
    shortDescription:
      "Corte por gestos com rastreamento de mão em tempo real usando a câmera.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "MediaPipe Tasks Vision",
      "HTML5 Canvas",
      "Tailwind CSS",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "MediaPipe Tasks Vision",
      "HTML5 Canvas",
      "Tailwind CSS",
    ],
    coverImage: "/Thmbnail/Thumbnail - English/Fruit Ninja.png",
    links: {
      repo: "https://github.com/matheussiqueira-dev/Clone-Fruit-Ninja.git",
    },
    demo: {
      mode: "none",
    },
  },
  {
    id: "neon-runner-cyber-hand",
    title: "Neon Runner: Cyber Hand",
    shortDescription:
      "Infinite runner cyberpunk controlado por gestos com visualização da mão em tempo real.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Three.js",
      "@react-three/fiber",
      "Zustand",
      "MediaPipe Tasks Vision",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Three.js",
      "@react-three/fiber",
      "Zustand",
      "MediaPipe Tasks Vision",
    ],
    coverImage: "/Thmbnail/Thumbnail - English/Neon Runner Cyber Hand.png",
    links: {
      repo: "https://github.com/matheussiqueira-dev/Neon-Runner-Cyber-Hand.git",
    },
    demo: {
      mode: "video",
      videoUrl: "/projects/neon-runner-cyber-hand/demo.mp4",
      aspectRatio: defaultAspect,
      minHeight: 420,
    },
  },
  {
    id: "dino-chrome",
    title: "Dino Chrome",
    shortDescription:
      "Clone do jogo do Chrome para treinar lógica de colisão, pontuação e progressão.",
    tags: ["JavaScript", "HTML5", "Canvas", "CSS"],
    techStack: ["JavaScript", "HTML5", "Canvas", "CSS"],
    coverImage: "/Thmbnail/Thumbnail - English/Dino Chrome.png",
    links: {
      repo: "https://github.com/matheussiqueira-dev/Dino-Chrome.git",
    },
    demo: {
      mode: "video",
      videoUrl: "/projects/dino-chrome/demo.mp4",
      aspectRatio: defaultAspect,
      minHeight: 420,
    },
  },
  {
    id: "gestor-de-notas",
    title: "Gestor de Notas",
    shortDescription:
      "Aplicação para gerenciamento de notas, com criação, edição e organização simples.",
    tags: ["JavaScript", "HTML5", "CSS", "LocalStorage"],
    techStack: ["JavaScript", "HTML5", "CSS", "LocalStorage"],
    coverImage: "/Thmbnail/Thumbnail - English/Gestor de Notas.png",
    links: {
      repo: "https://github.com/matheussiqueira-dev/Gestor_de_Notas",
    },
    demo: {
      mode: "video",
      videoUrl: "/Gestor de Notas.mp4",
      aspectRatio: defaultAspect,
      minHeight: 420,
    },
  },
];

export const projectIds = projects.map((project) => project.id);

export const getProjectById = (id: string) =>
  projects.find((project) => project.id === id);

export const getProjectByRepo = (repoUrl?: string) =>
  projects.find((project) => project.links?.repo === repoUrl);

export const hasExecutableDemo = (project: Project) => project.demo.mode !== "none";

export const interactiveProjectIds = new Set(
  projects.filter((project) => project.isInteractive).map((project) => project.id)
);


