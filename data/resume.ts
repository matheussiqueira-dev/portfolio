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
    "Analista de Dados Junior com experiencia pratica em Business Intelligence, Power BI, SQL e Python, atuando no setor publico com dados fiscais e de arrecadacao. Experiencia comprovada na criacao de dashboards estrategicos, automacao de processos e rotinas de ETL que apoiam decisoes gerenciais e aumentam a eficiencia operacional. Formacao multidisciplinar, com base em Marketing, Ciencia da Computacao e especializacoes em Dados, Cloud e Seguranca da Informacao.",
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
