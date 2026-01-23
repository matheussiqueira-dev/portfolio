import type { SiteContent } from "./site.types";

export const siteEn: SiteContent = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    certificates: "Certificates",
    academic: "Academic",
    demos: "Demos",
    hire: "Hire",
    resume: "Resume",
  },
  hero: {
    eyebrow: "Junior Data Analyst | Power BI | SQL | Python | BI",
    title: "Junior Data Analyst | Power BI | SQL | Python | Business Intelligence",
    subtitle: "I turn data into clear insights to support business decisions.",
    description:
      "Junior Data Analyst with experience in Business Intelligence, data analysis, and automation. I work with Power BI, SQL, DAX, Power Query, and Python for ETL, data organization, and executive dashboards. Open to remote or hybrid roles.",
    ctas: {
      primary: "View data projects",
      secondary: "View resume",
      tertiary: "Get in touch",
    },
  },
  about: {
    eyebrow: "About",
    title: "Profile focused on BI, automation, and data visualization",
    who: {
      title: "Who I am",
      body: "Junior Data Analyst studying Computer Science, focused on Business Intelligence and Data Analytics. I use Power BI, SQL, and Python to structure data, build reliable indicators, and support business decisions.",
    },
    deliver: {
      title: "How I deliver value",
      bullets: [
        "Executive Power BI dashboards for KPIs and performance.",
        "KPI-driven analysis aligned with business goals.",
        "ETL and analytics automation with SQL and Python.",
        "Analytical modeling with DAX and Power Query.",
        "Documentation and standardization for consistent data.",
      ],
    },
    highlights: {
      title: "Highlights",
      items: [
        "+39 certificates in Data, BI, AI, Cloud, and Security.",
        "Analytical thinking focused on actionable KPIs.",
        "Clear communication with stakeholders and technical teams.",
        "Data-driven decisions and information organization.",
        "Collaboration in agile, cross-functional teams.",
        "Commitment to data quality and governance.",
      ],
    },
    stack: {
      title: "Core stack",
      groups: [
        {
          title: "Data & BI",
          items: ["Power BI", "DAX", "Power Query", "SQL", "ETL", "Dashboards"],
        },
        {
          title: "Python & Analytics",
          items: [
            "Python",
            "Pandas",
            "Data Analytics",
            "Data Visualization",
            "KPIs",
            "Automation",
          ],
        },
        {
          title: "Web & Integrations",
          items: ["JavaScript", "TypeScript", "React", "Next.js", "REST APIs"],
        },
        {
          title: "Tools & Process",
          items: [
            "Git/GitHub",
            "Scrum",
            "Kanban",
            "Documentation",
            "Data governance",
            "Best practices",
          ],
        },
      ],
    },
  },
  projects: {
    eyebrow: "Projects",
    title: "Case studies in data, BI, and software development",
    description:
      "Projects combining data analysis, BI, automation, APIs, and data apps, with Git versioning and a focus on data visualization and decision-making.",
    cardLabel: "Case",
    highlightLabel: "Highlights",
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
    title: "Projects and case studies",
    description:
      "Complete cases with context, data used, architecture, results, and technologies across BI, data science, Big Data, automation, and full stack development.",
    filterLabel: "Filter by stack",
    allLabel: "All",
    caseLabel: "Open case",
    demosLabel: "View demos",
    demonstratesLabel: "What it shows",
    filters: ["Python", "Power BI", "FastAPI", "React"],
  },
  projectDetail: {
    contextTitle: "Context and problem",
    problemTitle: "Key challenges",
    dataTitle: "Data and signals",
    solutionTitle: "Solution developed",
    featuresTitle: "Key features",
    impactTitle: "Results and impact",
    stackTitle: "Technologies and tools used",
    demonstratesTitle: "Skills consolidated",
    conclusionTitle: "Technical conclusion",
    galleryTitle: "Gallery",
    howToRunTitle: "How to run",
    linksTitle: "Links",
    roleLabel: "Role",
    backLabel: "Back to projects",
    ctaTitle: "Want to discuss this project?",
    ctaBody:
      "I can walk through decisions, challenges, and next steps. If you'd like to chat, reach out anytime.",
    ctaButton: "Get in touch",
  },
  contact: {
    eyebrow: "Contact",
    title: "Ready to connect?",
    description:
      "Open to Junior Data Analyst or BI opportunities. I deliver dashboards, automation, and KPI-driven analysis with Power BI, SQL, and Python.",
    ctaTitle: "Available for Data and BI opportunities",
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
      "Local PDF collection from Alura, Assimov, and Ulife. Find certifications in Power BI, SQL, Python, AI, and Cloud.",
    ctaLabel: "View certificates",
  },
  demos: {
    eyebrow: "Demos",
    title: "Demos and repositories",
    description:
      "Demos and repositories for quick evaluation of data, BI, and automation projects with clear local run steps.",
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
