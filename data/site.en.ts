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
    title: "Matheus Siqueira — Full Stack Developer",
    subtitle:
      "I build end-to-end web products with a strong foundation in data and software engineering.",
    description:
      "I connect backend, frontend, and analytics to deliver scalable applications. Hands-on experience with automation, ETL, and dashboards in the public sector, using React/Next.js, Node.js, Python, SQL, and cloud.",
    ctas: {
      primary: "View projects",
      secondary: "View resume",
      tertiary: "Get in touch",
    },
  },
  about: {
    eyebrow: "About",
    title: "Software + data to solve real problems",
    who: {
      title: "Who I am",
      body:
        "Full Stack Developer studying Computer Science, with postgraduate studies in Cloud & Edge, Information Security, and AI. I worked as a Data Analyst intern at the Pernambuco Treasury Department, handling large datasets, automation, and indicators. I now apply that foundation to build end-to-end systems focused on performance, security, and impact.",
    },
    deliver: {
      title: "How I deliver value",
      bullets: [
        "Translate requirements into complete solutions: UI, API, and data.",
        "Secure REST APIs with authentication, logs, and integrations.",
        "Data pipelines and automation to reduce manual work.",
        "Dashboards and metrics for product visibility.",
        "Documentation and versioning for agile teams.",
      ],
    },
    highlights: {
      title: "Highlights",
      items: [
        "Experience with large-scale public and fiscal data.",
        "Full stack projects with frontend, backend, and data.",
        "Postgraduate studies in Cloud, Security, and AI.",
        "Full Stack A.I. Programming Technician.",
        "C1 English and clear communication with stakeholders.",
        "Focus on quality, performance, and continuous delivery.",
      ],
    },
    stack: {
      title: "Core stack",
      groups: [
        {
          title: "Frontend (user experience)",
          items: [
            "React",
            "Next.js (SSR/SEO)",
            "TypeScript",
            "Design Systems",
            "Accessibility",
            "Web Performance",
          ],
        },
        {
          title: "Backend & APIs (scale and integration)",
          items: [
            "Node.js",
            "FastAPI",
            "REST APIs",
            "Authentication",
            "MongoDB",
            "Integrations",
            "Testing",
          ],
        },
        {
          title: "Data & AI (decision and automation)",
          items: [
            "Python",
            "SQL",
            "ETL",
            "Data Modeling",
            "Power BI",
            "ML (fundamentals)",
          ],
        },
        {
          title: "Cloud & Process (reliability)",
          items: [
            "Cloud Computing",
            "Oracle Cloud",
            "Security",
            "Git/GitHub",
            "CI/CD",
            "Scrum/Kanban",
          ],
        },
      ],
    },
  },
  projects: {
    eyebrow: "Projects",
    title: "Full stack, data, and AI projects",
    description:
      "Case studies combining software engineering, APIs, automation, and data, focused on product, performance, and informed decisions.",
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
      "Complete cases with context, technical decisions, architecture, and results across full stack, data, and AI.",
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
    title: "Let’s talk about your product",
    description:
      "Open to Full Stack Developer / Software Engineer opportunities. I can support web apps, APIs, and data from MVP to scale.",
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
    title: "Certificates in software engineering, data, cloud, and security",
    description:
      "Local PDF collection from Alura, Assimov, and Ulife. Certifications in development, data, AI, cloud, and security.",
    ctaLabel: "View certificates",
  },
  demos: {
    eyebrow: "Demos",
    title: "Demos and repositories",
    description:
      "Demos and repositories for quick evaluation of full stack projects, APIs, and data apps, with clear local run steps.",
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
