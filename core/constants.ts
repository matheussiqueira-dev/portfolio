import { siteConfig } from "@/core/config";
import type {
  ContactMethod,
  ProcessStep,
  ProjectCategory,
  ServiceOffering,
  SkillGroup,
} from "@/core/types";

export const recruiterKeywords = [
  ...siteConfig.recruiterFocus,
  "Portfolio Data Analyst",
  "Developer Portfolio Brazil",
  "Business Intelligence Recife",
  "Power BI DAX SQL Python",
  "AI Solutions Engineer Brazil",
];

export const ANALYTICS_EVENTS = {
  VIEW_RESUME: "view_resume",
  VIEW_PROJECTS: "view_projects",
  CONTACT_WHATSAPP: "contact_whatsapp",
  DOWNLOAD: "download",
  SCROLL_TO_SECTION: "scroll_to_section",
} as const;

export const ANALYTICS_CATEGORIES = {
  NAVIGATION: "navigation",
  ENGAGEMENT: "engagement",
  CONVERSION: "conversion",
  OUTBOUND: "outbound",
} as const;

export const projectCategoryLabels: Record<ProjectCategory, { "pt-BR": string; en: string }> = {
  "Business Intelligence": {
    "pt-BR": "Business Intelligence",
    en: "Business Intelligence",
  },
  "Data Analytics": {
    "pt-BR": "Data Analytics",
    en: "Data Analytics",
  },
  "Full Stack": {
    "pt-BR": "Full Stack",
    en: "Full Stack",
  },
  "AI & Computer Vision": {
    "pt-BR": "IA e Visão Computacional",
    en: "AI & Computer Vision",
  },
  Automation: {
    "pt-BR": "Automação",
    en: "Automation",
  },
};

export const skillGroups: SkillGroup[] = [
  {
    id: "data-bi",
    title: {
      "pt-BR": "Data & BI",
      en: "Data & BI",
    },
    description: {
      "pt-BR":
        "Estruturo indicadores executivos, modelos analíticos e narrativas orientadas à tomada de decisão.",
      en: "I structure executive indicators, analytical models, and decision-ready reporting narratives.",
    },
    items: ["Power BI", "DAX", "SQL", "Power Query", "Excel", "KPI Design", "Data Storytelling"],
    recruiterKeywords: [
      "Power BI Developer Brazil",
      "Business Intelligence Developer",
      "Portfolio Data Analyst",
    ],
  },
  {
    id: "data-automation",
    title: {
      "pt-BR": "Data Engineering / Automation",
      en: "Data Engineering / Automation",
    },
    description: {
      "pt-BR":
        "Automatizo ETL, integrações e tarefas operacionais para reduzir retrabalho e acelerar análises.",
      en: "I automate ETL, integrations, and operational workflows to reduce rework and speed up analysis.",
    },
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "ETL",
      "Data Pipelines",
      "API Integration",
      "Automation Scripts",
    ],
    recruiterKeywords: [
      "Python Automation Developer",
      "Remote Data Analyst Brazil",
      "SQL Python Portfolio",
    ],
  },
  {
    id: "ai-computer-vision",
    title: {
      "pt-BR": "AI & Computer Vision",
      en: "AI & Computer Vision",
    },
    description: {
      "pt-BR":
        "Desenvolvo experiências com visão computacional, gestos, inferência no navegador e integrações com IA generativa.",
      en: "I build computer vision experiences, gesture interfaces, in-browser inference, and generative AI integrations.",
    },
    items: ["OpenCV", "TensorFlow", "MediaPipe", "Computer Vision", "LLM Integration", "AI Agents"],
    recruiterKeywords: [
      "Computer Vision Developer",
      "AI Engineer Brazil",
      "MediaPipe Hand Tracking",
    ],
  },
  {
    id: "software-engineering",
    title: {
      "pt-BR": "Software Engineering",
      en: "Software Engineering",
    },
    description: {
      "pt-BR":
        "Construo interfaces, APIs e produtos web com foco em qualidade, clareza arquitetural e performance.",
      en: "I build interfaces, APIs, and web products with a strong focus on quality, architecture clarity, and performance.",
    },
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "FastAPI", "REST APIs"],
    recruiterKeywords: [
      "Full Stack Developer Brazil",
      "Next.js Portfolio",
      "Full Stack TypeScript",
    ],
  },
  {
    id: "infra-delivery",
    title: {
      "pt-BR": "Infrastructure / Delivery",
      en: "Infrastructure / Delivery",
    },
    description: {
      "pt-BR":
        "Conecto versionamento, cloud e operação para colocar soluções analíticas e aplicações em produção com confiabilidade.",
      en: "I connect versioning, cloud, and operations to ship analytics and application projects reliably.",
    },
    items: ["Git", "GitHub", "Docker", "Linux", "Vercel", "Networking", "Cloud"],
    recruiterKeywords: [
      "Developer Portfolio Brazil",
      "Vercel Deployment",
      "Remote Engineer Brazil",
    ],
  },
];

export const serviceOfferings: ServiceOffering[] = [
  {
    id: "data-diagnosis",
    title: {
      "pt-BR": "Diagnóstico e estratégia de dados",
      en: "Data diagnosis and strategy",
    },
    description: {
      "pt-BR":
        "Avaliação de dados, fluxos e indicadores para definir a arquitetura mínima que sustenta decisão executiva.",
      en: "Assessment of data, flows, and indicators to define the minimum architecture required for executive decision-making.",
    },
    bullets: {
      "pt-BR": [
        "Levantamento de fontes, riscos e lacunas",
        "Definição de KPIs e métricas operacionais",
        "Mapa de priorização para ganhos rápidos",
      ],
      en: [
        "Source audit, risks, and data gaps",
        "KPI and operational metric definition",
        "Prioritized roadmap for quick wins",
      ],
    },
    relatedProjectSlugs: ["dashboard-vendas-power-bi", "business-decision-simulator"],
  },
  {
    id: "executive-bi",
    title: {
      "pt-BR": "Dashboards executivos e BI",
      en: "Executive dashboards and BI",
    },
    description: {
      "pt-BR":
        "Design de dashboards Power BI e interfaces analíticas orientadas a metas, eficiência e storytelling para liderança.",
      en: "Power BI dashboard design and analytical interfaces focused on targets, efficiency, and leadership-ready storytelling.",
    },
    bullets: {
      "pt-BR": [
        "Modelagem de dados e DAX",
        "Visão executiva e drill-down operacional",
        "Templates reutilizáveis para novas áreas",
      ],
      en: [
        "Data modeling and DAX logic",
        "Executive view with operational drill-down",
        "Reusable templates for new teams",
      ],
    },
    relatedProjectSlugs: ["dashboard-vendas-power-bi", "touchless-web-gesture-interface"],
  },
  {
    id: "python-etl",
    title: {
      "pt-BR": "Automação Python e ETL",
      en: "Python automation and ETL",
    },
    description: {
      "pt-BR":
        "Rotinas de integração, tratamento e distribuição de dados para reduzir tarefas manuais e acelerar relatórios.",
      en: "Integration, transformation, and distribution routines to reduce manual work and accelerate reporting cycles.",
    },
    bullets: {
      "pt-BR": [
        "Pipelines ETL e validação de dados",
        "Integração com APIs e planilhas",
        "Alertas e rotinas programadas",
      ],
      en: [
        "ETL pipelines and data validation",
        "API and spreadsheet integrations",
        "Alerts and scheduled routines",
      ],
    },
    relatedProjectSlugs: ["business-decision-simulator", "chatbot-ia-api"],
  },
  {
    id: "ai-workflows",
    title: {
      "pt-BR": "IA aplicada e automação de workflows",
      en: "Applied AI and workflow automation",
    },
    description: {
      "pt-BR":
        "Soluções com visão computacional, LLMs e automações orientadas a produtividade e experiência digital.",
      en: "Solutions with computer vision, LLMs, and automation tailored to productivity and digital experience.",
    },
    bullets: {
      "pt-BR": [
        "Interfaces sem contato",
        "Assistentes e fluxos com IA",
        "Provas de conceito prontas para apresentação",
      ],
      en: [
        "Contactless interfaces",
        "Assistants and AI-driven workflows",
        "Showcase-ready proofs of concept",
      ],
    },
    relatedProjectSlugs: [
      "touchless-web-gesture-interface",
      "hand-gesture-recognition-realtime",
      "chatbot-ia-api",
    ],
  },
  {
    id: "analytical-systems",
    title: {
      "pt-BR": "Arquitetura de sistemas analíticos",
      en: "Analytical system design",
    },
    description: {
      "pt-BR":
        "Produtos internos e portais técnicos que conectam dados, frontend e lógica de negócio com clareza arquitetural.",
      en: "Internal products and technical portals that connect data, frontend, and business logic with architecture clarity.",
    },
    bullets: {
      "pt-BR": [
        "Arquitetura orientada a módulos",
        "SEO técnico e páginas de autoridade",
        "Entrega otimizada para Vercel e Next.js",
      ],
      en: [
        "Module-oriented architecture",
        "Technical SEO and authority pages",
        "Delivery optimized for Vercel and Next.js",
      ],
    },
    relatedProjectSlugs: [
      "touchless-web-gesture-interface",
      "library-api-advanced",
      "gestor-de-notas",
    ],
  },
];

export const deliveryStages: ProcessStep[] = [
  {
    id: "discovery",
    title: {
      "pt-BR": "Discovery",
      en: "Discovery",
    },
    description: {
      "pt-BR":
        "Entendimento do contexto, metas, fontes de dados e restrições técnicas ou operacionais.",
      en: "Understanding the context, goals, data sources, and technical or operational constraints.",
    },
  },
  {
    id: "architecture",
    title: {
      "pt-BR": "Architecture",
      en: "Architecture",
    },
    description: {
      "pt-BR": "Definição de arquitetura, escopo, fluxo de entrega e critérios de qualidade.",
      en: "Definition of architecture, scope, delivery flow, and quality criteria.",
    },
  },
  {
    id: "build",
    title: {
      "pt-BR": "Build",
      en: "Build",
    },
    description: {
      "pt-BR":
        "Implementação modular, instrumentação de métricas e revisão contínua para entrega consistente.",
      en: "Modular implementation, metric instrumentation, and continuous review for consistent delivery.",
    },
  },
  {
    id: "evolve",
    title: {
      "pt-BR": "Evolve",
      en: "Evolve",
    },
    description: {
      "pt-BR": "Ajustes pós-entrega, documentação, priorização de melhorias e próximos ciclos.",
      en: "Post-delivery refinements, documentation, improvement prioritization, and next cycles.",
    },
  },
];

export const contactMethods: ContactMethod[] = [
  {
    id: "whatsapp",
    label: {
      "pt-BR": "WhatsApp",
      en: "WhatsApp",
    },
    value: "+55 81 99920-3683",
    href: siteConfig.whatsappUrl,
    note: {
      "pt-BR": "Canal mais rápido para projetos, recrutamento e consultoria.",
      en: "Fastest channel for projects, recruiting, and consulting.",
    },
  },
  {
    id: "email",
    label: {
      "pt-BR": "E-mail",
      en: "Email",
    },
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    note: {
      "pt-BR": "Ideal para propostas formais, entrevistas e oportunidades remotas.",
      en: "Best for formal proposals, interviews, and remote opportunities.",
    },
  },
  {
    id: "linkedin",
    label: {
      "pt-BR": "LinkedIn",
      en: "LinkedIn",
    },
    value: "linkedin.com/in/matheussiqueira-dev",
    href: siteConfig.sameAs[0],
  },
  {
    id: "github",
    label: {
      "pt-BR": "GitHub",
      en: "GitHub",
    },
    value: "github.com/matheussiqueira-dev",
    href: siteConfig.sameAs[1],
  },
  {
    id: "website",
    label: {
      "pt-BR": "Website",
      en: "Website",
    },
    value: siteConfig.siteUrl,
    href: siteConfig.siteUrl,
    note: {
      "pt-BR": "Disponível para atuação remota no Brasil e no exterior.",
      en: "Available for remote work in Brazil and internationally.",
    },
  },
];

export const featuredProjectSlugs = [
  "dashboard-vendas-power-bi",
  "business-decision-simulator",
  "touchless-web-gesture-interface",
  "hand-gesture-recognition-realtime",
  "chatbot-ia-api",
];
