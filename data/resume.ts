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
  role: "Analista de Dados Junior",
  summary:
    "Analista de Dados Junior com foco em BI, SQL e automacao. Experiencia com Power BI, DAX, Power Query e Python para analise, ETL e indicadores de decisao em ambientes publicos e fiscais.",
  experience: [
    {
      company: "Secretaria da Fazenda do Estado de Pernambuco",
      role: "Analista de Dados (Estagio)",
      period: "2025 - Atual",
      description:
        "Dashboards em Power BI, analise SQL e automacao com Python para consolidar dados fiscais e apoiar decisoes gerenciais.",
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
  skills: [
    "Power BI",
    "SQL",
    "DAX",
    "Power Query",
    "Python",
    "Pandas",
    "FastAPI",
    "Git",
    "React",
    "Next.js",
  ],
};