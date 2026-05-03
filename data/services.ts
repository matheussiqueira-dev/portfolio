export type ServicePillar = {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  impact: string;
  tools: string[];
};

export type ServiceExperience = {
  eyebrow: string;
  title: string;
  intro: string;
  proofPoints: string[];
  pillars: ServicePillar[];
  process: {
    title: string;
    description: string;
  }[];
  cta: {
    title: string;
    description: string;
    button: string;
  };
};

const servicesPt: ServiceExperience = {
  eyebrow: "Serviços",
  title: "Sistemas digitais, dados e automações para decisões melhores",
  intro:
    "Estruturo produtos, fluxos de dados e ambientes de decisão para transformar problemas operacionais em soluções mensuráveis, escaláveis e sustentáveis.",
  proofPoints: [
    "Produto digital",
    "Dados confiáveis",
    "Automação operacional",
    "Arquitetura estratégica",
  ],
  pillars: [
    {
      id: "software-products",
      title: "Engenharia de Software & Produtos Digitais",
      description:
        "Construo sistemas web, APIs e produtos digitais escaláveis para resolver gargalos operacionais, integrar fluxos e transformar ideias em plataformas utilizáveis.",
      deliverables: [
        "Desenvolvimento Full Stack",
        "Desenvolvimento de APIs",
        "MVPs funcionais",
        "Arquitetura de sistemas",
        "Refatoração de legado",
        "Otimização de performance",
      ],
      impact:
        "Reduz dependência de processos manuais, melhora velocidade de entrega e cria uma base técnica preparada para evolução.",
      tools: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      id: "data-bi-analytics",
      title: "Dados, Business Intelligence & Analytics",
      description:
        "Crio ambientes de decisão confiáveis, não apenas dashboards. A entrega conecta modelagem, métricas e narrativa para apoiar gestão com evidência.",
      deliverables: [
        "Dashboards em Power BI",
        "Modelagem de dados",
        "Estruturação de KPIs",
        "Data storytelling",
        "Camada de métricas",
        "Governança analítica",
      ],
      impact:
        "Aumenta clareza executiva, reduz divergência de números e acelera decisões com indicadores auditáveis.",
      tools: ["Power BI", "SQL", "PostgreSQL", "Excel", "Python", "Pandas"],
    },
    {
      id: "automation-data-engineering",
      title: "Automação, Engenharia de Dados & Integrações",
      description:
        "Reduzo trabalho manual, conecto operações fragmentadas e crio fluxos de dados mais confiáveis para análise, monitoramento e resposta rápida.",
      deliverables: [
        "Pipelines ETL/ELT",
        "Automação com Python",
        "Workflows SQL",
        "Integrações por API",
        "Monitoramento",
        "Alertas operacionais",
      ],
      impact:
        "Diminui retrabalho, aumenta previsibilidade operacional e reduz risco de erro em tarefas recorrentes.",
      tools: ["Python", "SQL", "Docker", "Node.js", "PostgreSQL", "Power Automate"],
    },
    {
      id: "strategic-architecture",
      title: "Consultoria Estratégica & Arquitetura Digital",
      description:
        "Diagnostico lacunas de negócio, dados e tecnologia antes da implementação para que cada solução nasça com escopo, prioridade e retorno claros.",
      deliverables: [
        "Mapeamento de processos",
        "Arquitetura de decisão",
        "Estratégia de KPIs",
        "Roadmap técnico",
        "Transformação digital",
        "Estruturação operacional",
      ],
      impact:
        "Evita construir soluções isoladas, melhora priorização e conecta tecnologia aos objetivos estratégicos da operação.",
      tools: ["Figma", "Power BI", "Excel", "GitHub", "Visual Studio Code", "ChatGPT"],
    },
    {
      id: "performance-growth",
      title: "Performance & Growth Engineering",
      description:
        "Conecto marketing, produto e dados por meio de sistemas de mensuração, análise de funil e acompanhamento de eficiência comercial.",
      deliverables: [
        "Tracking GA4",
        "Mapeamento de eventos",
        "Análise de funil",
        "Dashboards de campanhas",
        "Análise de CAC, LTV e ROI",
        "Otimização de tráfego pago",
      ],
      impact:
        "Torna crescimento mais mensurável, identifica gargalos de aquisição e melhora decisões de investimento em canais.",
      tools: ["Google Ads", "Power BI", "JavaScript", "SQL", "Excel"],
    },
  ],
  process: [
    {
      title: "Diagnóstico",
      description: "Entendo contexto, gargalos, indicadores e restrições antes de definir solução.",
    },
    {
      title: "Arquitetura",
      description: "Transformo necessidades em desenho técnico, escopo e entregáveis claros.",
    },
    {
      title: "Implementação",
      description: "Construo com ciclos curtos, validação visual, testes e atenção à manutenção.",
    },
    {
      title: "Evolução",
      description: "Entrego documentação, próximos passos e base preparada para escalar.",
    },
  ],
  cta: {
    title: "Vamos construir sistemas que escalam decisões.",
    description:
      "Combino estratégia, engenharia de software e arquitetura de dados para transformar problemas de negócio em soluções digitais mensuráveis.",
    button: "Iniciar um projeto",
  },
};

const servicesEn: ServiceExperience = {
  eyebrow: "Services",
  title: "Digital systems, data and automation for better decisions",
  intro:
    "I structure products, data flows and decision environments to turn operational problems into measurable, scalable and maintainable solutions.",
  proofPoints: [
    "Digital product",
    "Reliable data",
    "Operational automation",
    "Strategic architecture",
  ],
  pillars: [
    {
      id: "software-products",
      title: "Software Engineering & Digital Products",
      description:
        "I build scalable web systems, APIs and digital products designed to solve operational and business problems.",
      deliverables: [
        "Full Stack Web Development",
        "API Development",
        "MVP Development",
        "System Architecture",
        "Legacy Refactoring",
        "Performance Optimization",
      ],
      impact:
        "Reduces manual process dependency, improves delivery speed and creates a technical base ready to evolve.",
      tools: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      id: "data-bi-analytics",
      title: "Data, Business Intelligence & Analytics",
      description:
        "I create reliable decision environments, not just dashboards, connecting modeling, metrics and narrative.",
      deliverables: [
        "Power BI Dashboards",
        "Data Modeling",
        "KPI Structuring",
        "Data Storytelling",
        "Metrics Layer",
        "Governance",
      ],
      impact:
        "Improves executive clarity, reduces metric disputes and accelerates decisions with auditable indicators.",
      tools: ["Power BI", "SQL", "PostgreSQL", "Excel", "Python", "Pandas"],
    },
    {
      id: "automation-data-engineering",
      title: "Automation, Data Engineering & Integrations",
      description:
        "I reduce manual work, improve reliability and connect fragmented operations through data and integration flows.",
      deliverables: [
        "ETL/ELT Pipelines",
        "Python Automation",
        "SQL Workflows",
        "API Integrations",
        "Monitoring",
        "Alerts",
      ],
      impact:
        "Reduces rework, improves operational predictability and lowers risk in recurring tasks.",
      tools: ["Python", "SQL", "Docker", "Node.js", "PostgreSQL", "Power Automate"],
    },
    {
      id: "strategic-architecture",
      title: "Strategic Consulting & Digital Architecture",
      description:
        "I diagnose business, data and technology gaps before implementation so every solution has clear scope and return.",
      deliverables: [
        "Process Mapping",
        "Decision Architecture",
        "KPI Strategy",
        "Technical Roadmap",
        "Digital Transformation",
        "Operational Structuring",
      ],
      impact:
        "Avoids isolated solutions, improves prioritization and connects technology to strategic goals.",
      tools: ["Figma", "Power BI", "Excel", "GitHub", "Visual Studio Code", "ChatGPT"],
    },
    {
      id: "performance-growth",
      title: "Performance & Growth Engineering",
      description:
        "I connect marketing, product and data through measurement systems, funnel analysis and commercial efficiency tracking.",
      deliverables: [
        "GA4 Tracking",
        "Event Mapping",
        "Funnel Analysis",
        "Campaign Dashboards",
        "CAC, LTV and ROI Analysis",
        "Paid Traffic Optimization",
      ],
      impact:
        "Makes growth measurable, finds acquisition bottlenecks and improves channel investment decisions.",
      tools: ["Google Ads", "Power BI", "JavaScript", "SQL", "Excel"],
    },
  ],
  process: [
    {
      title: "Diagnosis",
      description: "I understand context, gaps, indicators and constraints first.",
    },
    {
      title: "Architecture",
      description: "I turn needs into technical design, scope and clear deliverables.",
    },
    {
      title: "Implementation",
      description: "I build in short cycles with visual validation, tests and maintainability.",
    },
    {
      title: "Evolution",
      description: "I deliver documentation, next steps and a base ready to scale.",
    },
  ],
  cta: {
    title: "Let’s build systems that scale decisions.",
    description:
      "I combine strategy, software engineering and data architecture to transform business problems into measurable digital solutions.",
    button: "Start a project",
  },
};

export function getServiceExperience(locale: "pt" | "en"): ServiceExperience {
  return locale === "en" ? servicesEn : servicesPt;
}
