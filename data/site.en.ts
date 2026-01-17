import type { SiteContent } from "./site.types";

export const siteEn: SiteContent = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    resume: "Resume",
  },
  hero: {
    eyebrow: "Data Analyst | BI | Public Sector",
    title: "Turning public data into strategic decisions",
    subtitle:
      "Power BI, SQL, Python, and automation applied to public management and fiscal intelligence",
    description:
      "Junior Data Analyst with over one year of hands-on experience in applied Business Intelligence at the Municipal Treasury Department. I build strategic dashboards, data pipelines, and automations that reduce rework, increase operational efficiency, and support managerial decisions with reliable data.",
    ctas: {
      primary: "View data projects",
      secondary: "View resume",
      tertiary: "Get in touch",
    },
  },
  about: {
    eyebrow: "About",
    title: "BI and public data focus with decision support",
    who: {
      title: "Who I am",
      body: "I am a Junior Data Analyst focused on Business Intelligence, public data, and decision support in government. I currently intern in Data Analysis at the Municipal Treasury Department, working with tax revenue, fiscal data, and strategic indicators for public managers.",
    },
    deliver: {
      title: "What I deliver",
      bullets: [
        "Strategic Power BI dashboards to track municipal revenue.",
        "ETL routines with SQL and Python integrating public data sources.",
        "Report and process automation to reduce operational time and rework.",
        "Exploratory analysis to identify trends and fiscal anomalies.",
        "Decision-oriented visualizations beyond aesthetics.",
      ],
    },
    highlights: {
      title: "Professional highlights",
      items: [
        "+40% reduction in data consolidation time.",
        "Direct work with sensitive fiscal and public data.",
        "Real experience in government environments and large-scale data.",
        "Analytical interface with managers and cross-functional teams.",
        "Strong focus on data quality, organization, and traceability.",
      ],
    },
    stack: {
      title: "Technical stack",
      groups: [
        {
          title: "Analysis and BI",
          items: [
            "Power BI",
            "DAX",
            "Power Query",
            "Analytical modeling",
            "Indicators",
          ],
        },
        {
          title: "Data and Automation",
          items: ["SQL", "Python", "Pandas", "ETL", "Automation"],
        },
        {
          title: "Web and Analytical Systems",
          items: [
            "JavaScript",
            "React",
            "Next.js",
            "REST APIs",
            "Data consumption",
          ],
        },
        {
          title: "Tools and Methods",
          items: [
            "Git/GitHub",
            "Scrum",
            "Agile environments",
            "Public data",
            "Basic governance",
          ],
        },
      ],
    },
  },
  projects: {
    eyebrow: "Projects",
    title: "Data cases with decision impact",
    description:
      "Projects connecting public data, BI, and automation to support clear decisions and reduce rework.",
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
      "Full cases with context, data used, impact, technologies, and clear proof of analytical profile.",
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
      "I am open to Junior Data Analyst or BI opportunities, especially where data supports real decisions. If you need someone with practical experience, data responsibility, and analytical vision, let's connect.",
    ctaTitle: "Open to Data and BI opportunities",
    ctaSubtitle: "LinkedIn and email replies are fast.",
    cards: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
    },
  },
  demos: {
    eyebrow: "Demos",
    title: "Demos and repositories",
    description:
      "Demos and repositories for quick evaluation of data, BI, and automation projects.",
    viewProjectsLabel: "View projects",
    fullCaseLabel: "Full case",
    openDemoLabel: "Open demo",
    demoSoonLabel: "Demo soon",
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
