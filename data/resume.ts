function getCurrentPeriod(): number {
  const startPeriod = 3;
  const startYear = 2026;
  const startMonth = 0;

  const now = new Date();
  const monthsDiff =
    (now.getFullYear() - startYear) * 12 +
    (now.getMonth() - startMonth);

  const periodsPassed = Math.max(0, Math.floor(monthsDiff / 6));

  return startPeriod + periodsPassed;
}

export const resume = {
  name: "Matheus Siqueira",
  role: "Analista de Dados Junior | BI",
  summary:
    "Analista de Dados Junior com experiencia em Business Intelligence, Power BI, SQL e Python, atuando com dados publicos e fiscais em ambiente governamental. Foco em dashboards estrategicos, ETL e automacao para apoiar decisoes gerenciais. Em formacao em desenvolvimento web para produtos de dados.",
  summaryBullets: [
    "Dashboards em Power BI para arrecadacao e gestao fiscal.",
    "ETL com SQL e Python integrando bases publicas.",
    "Automacao de rotinas e padronizacao de dados.",
    "Documentacao e governanca basica para rastreabilidade.",
    "Colaboracao com gestores e times multidisciplinares.",
  ],
  results: [
    "Reducao estimada de tempo de consolidacao em rotinas recorrentes (~30%).",
    "Automacao de relatorios com economia de horas semanais.",
    "Padronizacao de indicadores para acompanhamento executivo.",
  ],
  experience: [
    {
      company: "Secretaria Municipal da Fazenda",
      role: "Analista de Dados (Estagio)",
      period: "2025 - Atual",
      description:
        "Desenvolvi dashboards em Power BI, implementei analises SQL e automatizei rotinas com Python para consolidar dados fiscais e apoiar decisoes gerenciais.",
    },
  ],
  education: [
    {
      institution: "Infinity School",
      course: "Programacao Full Stack",
      period: "2024 - Atual",
    },
    {
      institution: "UNIFG",
      course: `Ciencia da Computacao - Bacharelado - ${getCurrentPeriod()} periodo`,
      period: "Em andamento",
    },
  ],
  skills: {
    groups: [
      {
        title: "Dados e BI",
        items: ["Power BI", "DAX", "Power Query", "SQL", "Data Visualization"],
      },
      {
        title: "Backend e Automacao",
        items: ["Python", "Pandas", "ETL", "APIs REST", "FastAPI"],
      },
      {
        title: "Web e Produto",
        items: ["JavaScript", "React", "Next.js", "Git/GitHub"],
      },
    ],
  },
};
