export type BilingualText = {
  pt: string;
  en: string;
};

export type SeniorProjectCaseStudy = {
  slug: string;
  title: BilingualText;
  businessProblem: BilingualText;
  technicalArchitecture: BilingualText;
  impact: BilingualText;
  stack: string[];
};

export const seniorProjectCaseStudies: SeniorProjectCaseStudy[] = [
  {
    slug: "encom-gesture-console",
    title: {
      pt: "ENCOM Gesture Console",
      en: "ENCOM Gesture Console",
    },
    businessProblem: {
      pt: "Demonstrações de visão computacional costumam ficar fragmentadas entre câmera, logs e visualização. O desafio era reunir tudo em uma experiência executiva, sem instalação e pronta para demo ao vivo.",
      en: "Computer-vision demos are often fragmented across camera, logs, and visualization. The challenge was to bring everything together into an executive-ready experience with no installation and live-demo readiness.",
    },
    technicalArchitecture: {
      pt: "Aplicação estática em JavaScript com captura local da webcam, MediaPipe Hands para landmarks, TensorFlow.js para classificação de gestos e Three.js para feedback 3D em tempo real.",
      en: "Static JavaScript application with local webcam capture, MediaPipe Hands for landmarks, TensorFlow.js for gesture classification, and Three.js for real-time 3D feedback.",
    },
    impact: {
      pt: "Reduziu fricção de demonstração, centralizou telemetria e permitiu apresentar IA no navegador com baixa latência e sem setup adicional.",
      en: "Reduced demo friction, centralized telemetry, and enabled in-browser AI demos with low latency and no extra setup.",
    },
    stack: ["JavaScript", "MediaPipe Hands", "TensorFlow.js", "Three.js", "Vercel"],
  },
  {
    slug: "etl-pipeline-dashboard",
    title: {
      pt: "Pipeline de Dados ETL com Python e Dashboard Gerencial",
      en: "ETL Data Pipeline with Python and Management Dashboard",
    },
    businessProblem: {
      pt: "Times de gestão dependiam de planilhas manuais e relatórios dispersos, o que aumentava retrabalho, atrasava a leitura dos indicadores e dificultava a decisão executiva.",
      en: "Management teams relied on manual spreadsheets and scattered reports, which increased rework, delayed KPI reading, and made executive decisions harder.",
    },
    technicalArchitecture: {
      pt: "Pipeline ETL em SQL e Python com Power Query para tratamento, camada analítica padronizada e dashboard em Power BI para consumo executivo.",
      en: "ETL pipeline in SQL and Python with Power Query for transformation, a standardized analytics layer, and a Power BI dashboard for executive consumption.",
    },
    impact: {
      pt: "Automatizou rotinas recorrentes, reduziu horas de trabalho manual e entregou uma visão confiável de negócio com leitura mais rápida dos KPIs.",
      en: "Automated recurring routines, reduced hours of manual work, and delivered a trusted business view with faster KPI reading.",
    },
    stack: ["Python", "SQL", "Power Query", "Power BI", "DAX"],
  },
];
