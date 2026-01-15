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
  role: "Desenvolvedor Frontend",

  summary:
    "Desenvolvedor Frontend em formação, cursando Ciência da Computação, com foco em React, Next.js e TypeScript. Para um resumo completo da minha trajetória e experiências, consulte meu perfil no LinkedIn.",

  experience: [
    {
      company: "Secretaria da Fazenda",
      role: "Analista de Dados (Estágio)",
      period: "2025 - Atual",
      description:
        "Atuação com análise de dados, construção de dashboards em Power BI e suporte à tomada de decisão baseada em indicadores.",
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
      course: `Ciência da Computação - Bacharelado - ${getCurrentPeriod()}º período`,
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
    "Git",
    "Power BI",
    "SQL",
  ],
};
