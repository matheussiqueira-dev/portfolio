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
    eyebrow: "Full Stack Developer • Data • AI • APIs",
    title: "Matheus Siqueira",
    subtitle: "Full Stack Developer with a strong foundation in data, AI, and software engineering.",
    description:
      "I build end-to-end web apps, APIs, and data products that connect backend, frontend, and analytics. Experience with React/Next.js, Node.js/TypeScript, Python, SQL, and cloud, focused on performance, security, and impact.",
    ctas: {
      primary: "View projects",
      secondary: "View resume",
      tertiary: "Get in touch",
    },
  },
  about: {
    eyebrow: "About",
    title: "Full stack profile with a product mindset and data foundation",
    who: {
      title: "Who I am",
      body: "Full stack developer studying Computer Science, with postgraduate studies in Cloud & Edge, Information Security, and AI. I worked as a Data Analyst intern at the Treasury Department of Pernambuco, dealing with large datasets, automation, and indicators. I now apply that foundation to build software end-to-end.",
    },
    deliver: {
      title: "How I deliver value",
      bullets: [
        "End-to-end web apps in React/Next.js with UX and performance in mind.",
        "Secure, well-documented REST APIs with Node.js and Python.",
        "Data pipelines, ETL, and automation with SQL and Python.",
        "Dashboards and metrics to guide decision-making.",
        "Versioning, quality, and clear documentation.",
      ],
    },
    highlights: {
      title: "Highlights",
      items: [
        "Data Analyst internship at the Pernambuco Treasury Department.",
        "Postgraduate studies in Cloud & Edge, Information Security, and AI.",
        "Full Stack A.I. Programming Technician.",
        "+39 certificates in Data, AI, Cloud, and Security.",
        "C1 English and clear communication with technical and business teams.",
        "Full stack projects with APIs, front-end, and data.",
      ],
    },
    stack: {
      title: "Core stack",
      groups: [
        {
          title: "Frontend",
          items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
        },
        {
          title: "Backend & APIs",
          items: [
            "Node.js",
            "REST APIs",
            "FastAPI",
            "Authentication",
            "Integrations",
          ],
        },
        {
          title: "Data & AI",
          items: [
            "Python",
            "SQL",
            "ETL",
            "Power BI",
            "Data Modeling",
            "Machine Learning",
          ],
        },
        {
          title: "Cloud & Process",
          items: [
            "Cloud Computing",
            "Oracle Cloud",
            "Security",
            "Git/GitHub",
            "Scrum",
            "Kanban",
          ],
        },
      ],
    },
  },
  projects: {
    eyebrow: "Projects",
    title: "Case studies in full stack, data, and AI",
    description:
      "Projects that combine software engineering, APIs, automation, and data, focused on product, performance, and decision-making.",
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
      "Complete cases with context, architecture, results, and technologies across full stack, data, and AI.",
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
      "Open to Full Stack Developer / Software Engineer opportunities with a data and AI foundation. I deliver end-to-end apps, APIs, automation, and analytics.",
    ctaTitle: "Available for Software Engineering opportunities",
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
    title: "Certificates in software engineering, data, AI, cloud, and security",
    description:
      "Local PDF collection from Alura, Assimov, and Ulife. Find certifications in development, data, AI, cloud, and security.",
    ctaLabel: "View certificates",
  },
  demos: {
    eyebrow: "Demos",
    title: "Demos and repositories",
    description:
      "Demos and repositories for quick evaluation of full stack projects, APIs, and data apps with clear local run steps.",
    viewProjectsLabel: "View projects",
    fullCaseLabel: "Full case",
    openDemoLabel: "Open demo",
    demoSoonLabel: "Demo soon",
    howToRunLabel: "How to run locally",
    publishTitle: "How I publish demos",
    publishItems: [
      "Web (Next.js/React): Vercel with automatic GitHub deploy.",
      "Vanilla front-end (HTML/JS): GitHub Pages or Vercel.",
      "APIs (Node/FastAPI): Render or Fly with /docs enabled.",
    ],
  },
  language: {
    label: "Languages",
  },
  media: {
    videoFallback: "Your browser does not support HTML5 video.",
  },
};
