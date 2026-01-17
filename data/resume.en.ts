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

export const resumeEn = {
  name: "Matheus Siqueira",
  role: "Junior Data Analyst | BI",
  summary:
    "Junior Data Analyst with experience in Business Intelligence, Power BI, SQL, and Python, working with public and fiscal data in government contexts. Focused on strategic dashboards, ETL, and automation to support managerial decisions. Training in web development for data products.",
  summaryBullets: [
    "Power BI dashboards for revenue and fiscal monitoring.",
    "ETL pipelines with SQL and Python integrating public data sources.",
    "Automation and data standardization to reduce rework.",
    "Documentation and basic governance for traceability.",
    "Collaboration with managers and cross-functional teams.",
  ],
  results: [
    "Estimated reduction in recurring consolidation time (~30%).",
    "Report automation saving hours per week.",
    "Standardized indicators for executive monitoring.",
  ],
  experience: [
    {
      company: "Municipal Treasury Department",
      role: "Data Analyst (Internship)",
      period: "2025 - Present",
      description:
        "Built Power BI dashboards, implemented SQL analysis, and automated Python routines to consolidate fiscal data and support managerial decisions.",
    },
  ],
  education: [
    {
      institution: "Infinity School",
      course: "Full Stack Development",
      period: "2024 - Present",
    },
    {
      institution: "UNIFG",
      course: `Computer Science (BSc) - ${getCurrentPeriod()}th semester`,
      period: "In progress",
    },
  ],
  skills: {
    groups: [
      {
        title: "Data and BI",
        items: ["Power BI", "DAX", "Power Query", "SQL", "Data Visualization"],
      },
      {
        title: "Backend and Automation",
        items: ["Python", "Pandas", "ETL", "REST APIs", "FastAPI"],
      },
      {
        title: "Web and Product",
        items: ["JavaScript", "React", "Next.js", "Git/GitHub"],
      },
    ],
  },
};
