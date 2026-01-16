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
  role: "Desenvolvedor Web e Dados",

  summary:
    "Estudante de Ciência da Computação com foco em desenvolvimento web, dados e automação. Experiência com React, Next.js, APIs e análise de dados para apoiar decisões. Busco entregar soluções claras, escaláveis e fáceis de manter.",

  experience: [
    {
      company: "Secretaria da Fazenda",
      role: "Analista de Dados (Estágio)",
      period: "2025 - Atual",
      description:
        "Análise de dados, construção de dashboards no Power BI e suporte à tomada de decisão com indicadores de desempenho.",
    },
  ],

  education: [
    {
      institution: "Infinity School",
      course: "Programação Full Stack",
      period: "2024 - Atual",
    },
    {
      institution: "UNIFG",
      course: `Ciência da Computação — Bacharelado — ${getCurrentPeriod()}º período`,
      period: "Em andamento",
    },
  ],

  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Python",
    "FastAPI",
    "SQL",
    "Power BI",
    "Git",
  ],
};
