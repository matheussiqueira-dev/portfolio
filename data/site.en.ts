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
    eyebrow: "Data Portfolio",
    title: "Matheus Siqueira",
    subtitle: "Data | BI | Automation | Web Development",
    description:
      "Junior Data Analyst with experience in Power BI, SQL, and Python, turning public and fiscal data into clear, decision-ready indicators.",
    ctas: {
      primary: "View projects",
      secondary: "View resume",
      tertiary: "LinkedIn",
    },
  },
  about: {
    eyebrow: "About",
    title: "Data with focus on decisions and impact",
    who: {
      title: "Who I am",
      body: "I am a Junior Data Analyst and intern at the Pernambuco State Treasury, with over one year in BI and public/fiscal data analysis. I use Power BI, SQL, DAX, and Python to deliver reliable indicators for decision makers.",
    },
    deliver: {
      title: "What I deliver",
      bullets: [
        "Power BI dashboards with executive and operational views.",
        "SQL modeling and queries for consistent analysis.",
        "ETL with Python and Power Query to integrate sources.",
        "Process automation to reduce rework.",
        "Fiscal indicators with clarity for decisions.",
      ],
    },
    highlights: {
      title: "Highlights",
      items: [
        "Power BI dashboards for municipal revenue.",
        "SQL + DAX + Power Query + Python daily.",
        "Automation and ETL to reduce rework.",
        "Government environment and fiscal data.",
        "Agile teams and Git versioning.",
      ],
    },
    stack: {
      title: "Core stack",
      items: [
        "Power BI",
        "SQL",
        "Python",
        "DAX",
        "Power Query",
        "Pandas",
        "FastAPI",
        "Git",
        "React/Next",
      ],
    },
  },
  projects: {
    eyebrow: "Projects",
    title: "Case studies with BI, automation, and public data",
    description:
      "Projects with clear context, solutions, and deliveries for fiscal data, automation, and decision-oriented interfaces.",
    cardLabel: "Project",
    highlightLabel: "Highlight",
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
    title: "Data Projects",
    description:
      "Explore full cases with context, solution, features, and media.",
    filterLabel: "Filter by stack",
    allLabel: "All",
    caseLabel: "Open case",
    demosLabel: "View demos",
    filters: ["Python", "Power BI", "FastAPI", "React"],
  },
  projectDetail: {
    contextTitle: "Context",
    problemTitle: "Problem",
    solutionTitle: "Solution",
    featuresTitle: "Features",
    stackTitle: "Stack",
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
      "Open to Data opportunities. If you need BI, analysis, or automation, let's connect.",
    ctaTitle: "Open to Data opportunities",
    ctaSubtitle: "Quick replies by email or LinkedIn.",
    cards: {
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      whatsapp: "WhatsApp",
    },
  },
  demos: {
    eyebrow: "Demos",
    title: "Links and demos",
    description:
      "Repositories, public demos, and quick ways to test each project.",
    viewProjectsLabel: "View projects",
    fullCaseLabel: "Full case",
    openDemoLabel: "Open demo",
    demoSoonLabel: "Demo coming soon",
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
