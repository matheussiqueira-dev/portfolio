export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export type CompetencyCategory = {
  key: "frontend" | "backend" | "devops";
  title: string;
  description: string;
  skills: string[];
};

type LocaleKey = "pt-BR" | "en";

export const experienceByLocale: Record<LocaleKey, { title: string; subtitle: string; items: ExperienceItem[] }> = {
  "pt-BR": {
    title: "Experiência Profissional",
    subtitle: "Atuação orientada por resultado técnico, eficiência operacional e qualidade de entrega.",
    items: [
      {
        company: "Secretaria de Educação de Jaboatão dos Guararapes",
        role: "Suporte de Infraestrutura de TI - Nível 2",
        period: "Fev/2026 - Atual",
        bullets: [
          "Padronizei troubleshooting de rede e endpoints, reduzindo escalonamentos desnecessários.",
          "Automatizei rotinas internas de chamados e inventário, aumentando rastreabilidade de ativos.",
          "Elevei estabilidade da conectividade com manutenção preventiva em LAN e cabeamento.",
        ],
      },
      {
        company: "Secretaria da Fazenda de Jaboatão dos Guararapes",
        role: "Estagiário em Análise de Dados",
        period: "Jan/2025 - Jan/2026",
        bullets: [
          "Construí dashboards Power BI com KPIs de arrecadação para acompanhamento executivo.",
          "Implementei pipelines ETL com SQL, Power Query e Python para integrar bases públicas.",
          "Automatizei relatórios fiscais recorrentes, reduzindo retrabalho operacional da equipe.",
        ],
      },
      {
        company: "Prefeitura Municipal de Jaboatão dos Guararapes",
        role: "Analista de Cargos e Salários",
        period: "Nov/2017 - Jun/2019",
        bullets: [
          "Modelei cenários de impacto financeiro para reajustes salariais e concursos públicos.",
          "Padronizei análises de folha e orçamento para apoiar decisões da alta gestão.",
          "Garanti conformidade com limites legais e diretrizes do TCE em propostas remuneratórias.",
        ],
      },
      {
        company: "Grupo Moura",
        role: "Assistente Comercial | Trade Marketing & BI",
        period: "Jan/2014 - Mar/2017",
        bullets: [
          "Estruturei relatórios e KPIs comerciais para revisão semanal de performance.",
          "Apoiei campanhas de trade marketing com análise de execução e uso de verba.",
          "Melhorei o controle de materiais promocionais e previsibilidade de orçamento.",
        ],
      },
    ],
  },
  en: {
    title: "Professional Experience",
    subtitle: "Execution focused on technical outcomes, operational efficiency, and delivery quality.",
    items: [
      {
        company: "Jaboatão dos Guararapes Municipal Education Department",
        role: "IT Infrastructure Support - Level 2",
        period: "Feb/2026 - Present",
        bullets: [
          "Standardized network and endpoint troubleshooting, reducing unnecessary escalations.",
          "Automated ticketing and inventory routines, improving asset traceability.",
          "Increased connectivity stability with preventive LAN and cabling maintenance.",
        ],
      },
      {
        company: "Jaboatão dos Guararapes Municipal Treasury Department",
        role: "Data Analyst Intern",
        period: "Jan/2025 - Jan/2026",
        bullets: [
          "Built Power BI dashboards with revenue KPIs for executive monitoring.",
          "Implemented ETL pipelines with SQL, Power Query, and Python across public datasets.",
          "Automated recurring fiscal reports, reducing operational rework for the team.",
        ],
      },
      {
        company: "Jaboatão dos Guararapes City Hall",
        role: "Job and Salary Analyst",
        period: "Nov/2017 - Jun/2019",
        bullets: [
          "Modeled financial-impact scenarios for salary adjustments and public hiring.",
          "Standardized payroll and budget analysis to support leadership decisions.",
          "Ensured legal and audit compliance in compensation proposals.",
        ],
      },
      {
        company: "Grupo Moura",
        role: "Commercial Assistant | Trade Marketing & BI",
        period: "Jan/2014 - Mar/2017",
        bullets: [
          "Structured commercial reports and KPIs for weekly performance reviews.",
          "Supported trade marketing campaigns with execution and budget analysis.",
          "Improved promotional material control and budget forecast predictability.",
        ],
      },
    ],
  },
};

export const competenciesByLocale: Record<
  LocaleKey,
  { title: string; subtitle: string; categories: CompetencyCategory[]; marqueeLabel: string; marqueeItems: string[] }
> = {
  "pt-BR": {
    title: "Competências Nucleares",
    subtitle: "Stack técnico organizada por domínio, sem ruído visual e com foco em entrega.",
    categories: [
      {
        key: "frontend",
        title: "Frontend",
        description: "Interfaces performáticas, acessíveis e com experiência consistente.",
        skills: [
          "React",
          "Next.js App Router",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "UX/UI Systems",
        ],
      },
      {
        key: "backend",
        title: "Backend",
        description: "APIs e integrações robustas, com modelagem e consistência de dados.",
        skills: [
          "Node.js",
          "Fastify",
          "Python",
          "REST APIs",
          "SQL",
          "PostgreSQL",
          "MongoDB",
        ],
      },
      {
        key: "devops",
        title: "DevOps/Cloud",
        description: "Entrega contínua, observabilidade e infraestrutura orientada a confiabilidade.",
        skills: [
          "Docker",
          "GitHub Actions",
          "CI/CD",
          "Azure",
          "Vercel",
          "Sentry",
          "Linux",
        ],
      },
    ],
    marqueeLabel: "Tecnologias e ferramentas",
    marqueeItems: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Fastify",
      "Python",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Azure",
      "Vercel",
      "GitHub Actions",
      "Power BI",
    ],
  },
  en: {
    title: "Core Competencies",
    subtitle: "Technical stack grouped by domain, with minimal UI and delivery focus.",
    categories: [
      {
        key: "frontend",
        title: "Frontend",
        description: "High-performance, accessible interfaces with consistent user experience.",
        skills: [
          "React",
          "Next.js App Router",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "UX/UI Systems",
        ],
      },
      {
        key: "backend",
        title: "Backend",
        description: "Robust APIs and integrations with reliable data modeling.",
        skills: [
          "Node.js",
          "Fastify",
          "Python",
          "REST APIs",
          "SQL",
          "PostgreSQL",
          "MongoDB",
        ],
      },
      {
        key: "devops",
        title: "DevOps/Cloud",
        description: "Continuous delivery, observability, and reliability-first infrastructure.",
        skills: [
          "Docker",
          "GitHub Actions",
          "CI/CD",
          "Azure",
          "Vercel",
          "Sentry",
          "Linux",
        ],
      },
    ],
    marqueeLabel: "Technologies and tools",
    marqueeItems: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Fastify",
      "Python",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "Azure",
      "Vercel",
      "GitHub Actions",
      "Power BI",
    ],
  },
};
