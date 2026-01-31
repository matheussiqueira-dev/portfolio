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
    eyebrow: "Portfolio",
    title: "Matheus Siqueira",
    subtitle: "Full Stack Developer | Web, Data & Cloud Solutions",
    description:
      "I build end-to-end web products connecting backend, frontend, and analytics. Hands-on with automation, ETL, and dashboards using React/Next.js, Node.js, Python, SQL, and cloud.",
    stackHighlights: [
      { label: "Full Stack", icon: "stack" },
      { label: "Data", icon: "data" },
      { label: "AI", icon: "ai" },
      { label: "Software", icon: "software" },
    ],
    ctas: {
      primary: "View projects",
      secondary: "View resume",
      tertiary: "Get in touch",
    },
  },
  about: {
    eyebrow: "About",
    title: "Full stack solutions focused on data and product",
    who: {
      title: "Profile",
      body:
        "I work at the intersection of data and web development, connecting modeling, automation, and visualization to deliver clear, reliable products. Strong Computer Science foundation with hands-on BI, SQL, and Python.",
    },
    differential: {
      title: "Experience with large-scale complex data",
      description:
        "Hands-on work with large data volumes, analytical systems, and reliable automation, focused on performance, quality, and technical clarity.",
    },
    deliver: {
      title: "What I deliver",
      bullets: [
        "Strategic Power BI dashboards with KPIs, DAX, and Power Query.",
        "Data modeling and transformation with SQL, ETL/ELT, and Python automation.",
        "REST APIs and integrations to connect data to digital products.",
        "Pipelines and validations for reliability, traceability, and performance.",
        "Clear communication with business and engineering teams for fast decisions.",
      ],
    },
    snapshot: {
      title: "Snapshot",
      items: [
        {
          value: "Data & BI",
          label: "Power BI, DAX, KPIs",
        },
        {
          value: "Engineering",
          label: "ETL/ELT, SQL, Python",
        },
        {
          value: "Full Stack",
          label: "Frontend + APIs",
        },
        {
          value: "Quality",
          label: "Performance and reliability",
        },
      ],
    },
    highlights: {
      title: "Highlights",
      items: [
        "Hybrid profile spanning data and software engineering.",
        "Hands-on experience with BI, automation, and system integration.",
        "Certifications in Cloud, Security, and AI.",
        "Clear communication with technical and business teams.",
        "Focus on practical impact, quality, and predictable delivery.",
      ],
    },
    stack: {
      title: "Stacks",
      groups: [
        {
          title: "Data & BI",
          icon: "data",
          items: [
            "Power BI",
            "DAX",
            "Power Query",
            "Data Modeling",
            "KPIs",
            "ETL/ELT",
          ],
        },
        {
          title: "Languages",
          icon: "languages",
          items: ["Python", "SQL", "Pandas", "NumPy"],
        },
        {
          title: "Databases",
          icon: "database",
          items: ["MySQL", "PostgreSQL"],
        },
        {
          title: "Backend",
          icon: "backend",
          items: ["Python", "Flask", "REST APIs"],
        },
        {
          title: "Frontend",
          icon: "frontend",
          items: [
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "HTML",
            "CSS",
            "Tailwind",
          ],
        },
        {
          title: "Tools",
          icon: "tools",
          items: ["Git", "GitHub", "CI/CD", "Vercel", "Agile Methods"],
        },
      ],
    },
  },
  executiveSummary: {
    eyebrow: "Executive summary",
    title: "Executive summary",
    cards: [
      {
        icon: "education",
        title: "Computer Science background",
      },
      {
        icon: "projects",
        title: "11+ Full Stack Projects Delivered",
      },
      {
        icon: "certifications",
        title: "Certifications in Cloud, Security, and AI",
      },
    ],
  },
  metrics: {
    eyebrow: "Metrics",
    title: "Credibility at a glance",
    items: [
      {
        icon: "projects",
        label: "11+ Projects Completed",
      },
      {
        icon: "github",
        label: "Consistent GitHub activity",
      },
      {
        icon: "experience",
        label: "Hands-on development experience",
      },
      {
        icon: "data",
        label: "Data-driven, decision-focused projects",
      },
    ],
  },
  primaryStack: {
    eyebrow: "Core stack",
    title: "Core stack",
    items: [
      { label: "React", level: 5 },
      { label: "Next.js", level: 5 },
      { label: "Python", level: 4 },
      { label: "SQL", level: 4 },
    ],
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
    featuredLabel: "Featured",
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
    openInteractiveLabel: "Open interactive demo",
    watchVideoLabel: "Watch video",
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
    videoDemoLabel: "Watch the video demo",
  },
};
