import type { SiteContent } from "./site.types";

export const siteEn: SiteContent = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    certificates: "Certificates",
    resume: "Resume",
  },
  hero: {
    eyebrow: "Junior Data Analyst | Power BI | SQL | Python | BI",
    title: "Junior Data Analyst specialized in Power BI, SQL, and Python",
    subtitle: "I turn data into clear insights to support business decisions.",
    description:
      "Computer Science student with hands-on experience in Business Intelligence, data analysis, process automation, and strategic dashboards. Skilled in Power BI, SQL, and Python to transform data into actionable insights.",
    ctas: {
      primary: "View data projects",
      secondary: "View professional resume",
      tertiary: "Get in touch",
    },
  },
  about: {
    eyebrow: "About",
    title: "Junior Data Analyst focused on BI and analytics delivery",
    who: {
      title: "Who I am",
      body: "Junior Data Analyst focused on Business Intelligence, analytics automation, and data visualization. Currently studying Computer Science and working with Power BI, SQL, and Python to organize data, build reliable indicators, and support business decisions.",
    },
    deliver: {
      title: "What I deliver",
      bullets: [
        "Executive Power BI dashboards for KPIs and performance.",
        "KPI-driven analyses aligned with business goals.",
        "Analytics automation with SQL and Python.",
        "Data modeling and transformations with DAX and Power Query.",
        "Documentation and standardization for data consistency.",
      ],
    },
    highlights: {
      title: "Professional profile",
      items: [
        "+39 certificates in Data, BI, AI, Cloud, and Security.",
        "Analytical thinking and focus on actionable indicators.",
        "Clear communication with stakeholders and technical teams.",
        "Data-driven decision-making and information organization.",
        "Collaboration in agile, cross-functional teams.",
        "Commitment to data quality and governance.",
      ],
    },
    stack: {
      title: "Core stack",
      groups: [
        {
          title: "Data & BI",
          items: [
            "Power BI",
            "DAX",
            "Power Query",
            "SQL",
            "ETL",
            "Dashboards",
          ],
        },
        {
          title: "Analytics & Automation",
          items: [
            "Python",
            "Pandas",
            "Data Analytics",
            "Automation",
            "KPIs",
            "Data Visualization",
          ],
        },
        {
          title: "Web & Integrations",
          items: ["JavaScript", "TypeScript", "React", "Next.js", "REST APIs"],
        },
        {
          title: "Tools & Methods",
          items: [
            "Git/GitHub",
            "Scrum",
            "Kanban",
            "Agile environments",
            "Documentation",
            "Data governance",
          ],
        },
      ],
    },
  },
  projects: {
    eyebrow: "Projects",
    title: "Data and BI case studies for business impact",
    description:
      "Projects connecting BI, automation, and data engineering to support business decisions and clear indicators.",
    cardLabel: "Project",
    highlightLabel: "Impact",
    detailsLabel: "View details",
    caseLabel: "Full case",
    viewAllLabel: "View all cases",
    modal: {
      title: "Project details",
      closeLabel: "Close",
      problemTitle: "Problem",
      solutionTitle: "Solution",
      featuresTitle: "Features",
      demonstratesTitle: "What it shows",
      stackTitle: "Stack",
      githubLabel: "GitHub",
      demoLabel: "Demo",
      caseCta: "View full case",
    },
  },
  projectsPage: {
    eyebrow: "Projects",
    title: "Data projects and case studies",
    description:
      "Full cases with context, data used, impact, technologies, and clear business value.",
    filterLabel: "Filter by stack",
    allLabel: "All",
    caseLabel: "Open case",
    demosLabel: "View demos",
    demonstratesLabel: "What it shows",
    filters: ["Python", "Power BI", "FastAPI", "React"],
  },
  projectDetail: {
    contextTitle: "Context",
    problemTitle: "Problem",
    dataTitle: "Data used",
    solutionTitle: "Solution",
    featuresTitle: "Features",
    impactTitle: "Impact and decisions",
    stackTitle: "Applied technologies",
    demonstratesTitle: "What this project shows",
    galleryTitle: "Gallery",
    howToRunTitle: "How to run",
    linksTitle: "Links",
    roleLabel: "Role",
    backLabel: "Back to projects",
    ctaTitle: "Want to discuss this project?",
    ctaBody:
      "I can walk through decisions, challenges, and next steps. If you want to chat, just reach out.",
    ctaButton: "Get in touch",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk?",
    description:
      "I am open to Junior Data Analyst or BI opportunities. I deliver dashboards, automation, and KPI-driven analysis with Power BI, SQL, and Python. If you need someone with organized data work and analytical ownership, let's connect.",
    ctaTitle: "Open to Data and BI opportunities",
    ctaSubtitle: "LinkedIn and email replies are fast.",
    cards: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
    },
  },
  certificatesSection: {
    eyebrow: "Certificates",
    title: "Certificates in Data, BI, AI, Cloud, and Security",
    description:
      "Full local PDF collection from Alura, Assimov, and Ulife. Filter by provider and quickly find certifications in Power BI, SQL, Python, AI, and Cloud.",
    ctaLabel: "View certificates",
  },
  demos: {
    eyebrow: "Demos",
    title: "Demos and repositories",
    description:
      "Demos and repositories for quick evaluation of data, BI, and automation projects, with clear local run steps.",
    viewProjectsLabel: "View projects",
    fullCaseLabel: "Full case",
    openDemoLabel: "Open demo",
    demoSoonLabel: "Demo soon",
    howToRunLabel: "How to run locally",
    publishTitle: "How I publish demos",
    publishItems: [
      "Web (Next.js/React): Vercel with automatic GitHub deploy.",
      "Vanilla front-end (HTML/JS): GitHub Pages or Vercel.",
      "FastAPI API: Render or Fly with /docs enabled.",
    ],
  },
  language: {
    label: "Languages",
  },
  media: {
    videoFallback: "Your browser does not support HTML5 video.",
  },
};
