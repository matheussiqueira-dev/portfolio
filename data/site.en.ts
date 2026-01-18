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
    title: "Data Analyst & BI for public decision-making",
    subtitle:
      "Power BI, SQL, Python, and automation applied to public data and fiscal management",
    description:
      "Junior Data Analyst with hands-on experience in applied Business Intelligence at the Municipal Treasury Department. I build strategic dashboards, data pipelines, and automations with Power BI, SQL, and Python to support managerial decisions with reliable data. I am also training in web development for data products and analytical systems.",
    ctas: {
      primary: "View data projects",
      secondary: "View professional resume",
      tertiary: "Get in touch",
    },
  },
  about: {
    eyebrow: "About",
    title: "Data Analyst and BI focused on public impact",
    who: {
      title: "What I do",
      body: "I work as a Junior Data Analyst focused on Business Intelligence, public data, and decision support. I handle tax revenue, fiscal data, and strategic indicators at the Municipal Treasury Department, building clear views for decision-makers. In parallel, I am training in web development to strengthen data products and analytical systems.",
    },
    deliver: {
      title: "How I do it",
      bullets: [
        "Strategic Power BI dashboards to track fiscal and revenue indicators.",
        "Modeling and transformations with DAX and Power Query.",
        "ETL pipelines with SQL and Python integrating public data sources.",
        "Report automation to reduce rework and operational time.",
        "Exploratory analysis to identify fiscal trends and anomalies.",
      ],
    },
    highlights: {
      title: "Results",
      items: [
        "Reduced rework and consolidation time in recurring routines.",
        "Executive and operational dashboards for revenue monitoring.",
        "Automations that improve consistency and traceability.",
        "Standardized indicators for managerial decisions.",
        "Collaboration with managers and cross-functional teams.",
      ],
    },
    stack: {
      title: "Tools",
      groups: [
        {
          title: "Analysis and BI",
          items: [
            "Power BI",
            "DAX",
            "Power Query",
            "Data Visualization",
            "Data Analytics",
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
      "I am open to Junior Data Analyst or BI opportunities, especially where data supports real decisions. I bring hands-on public data and BI experience and I am training in web development. If you need someone with practical experience and analytical ownership, let's connect.",
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
