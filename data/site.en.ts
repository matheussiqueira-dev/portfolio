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
    eyebrow: "Data Analyst • Business Intelligence • Power BI",
    title: "Matheus Siqueira",
    subtitle: "Data Analyst | BI | Power BI, SQL & Python",
    description:
      "Data Analyst focused on Business Intelligence, Data Analytics, and data visualization. I turn fiscal, public, and organizational data into clear decisions using Power BI, SQL, DAX, Power Query, and Python automation.",
    stackHighlights: [
      { label: "Data Analytics", icon: "stack" },
      { label: "Business Intelligence", icon: "data" },
      { label: "Power BI & KPIs", icon: "ai" },
      { label: "SQL & Python", icon: "software" },
    ],
    ctas: {
      primary: "View projects",
      secondary: "View resume",
      tertiary: "Get in touch",
    },
  },
  about: {
    eyebrow: "About",
    title: "Data, BI, and technology applied to decision-making",
    summary: {
      title: "About",
      body:
        "I work in data analysis and Business Intelligence with experience in both public and private sectors. I worked as a Commercial Assistant at Grupo Moura, as a Compensation Analyst at the Jaboatão dos Guararapes City Hall, and I am currently a Data Analysis Intern at the Jaboatão dos Guararapes Treasury Department. My work is focused on KPIs, operational efficiency, and data-driven decision-making.",
    },
    who: {
      title: "Who I am",
      body:
        "I’m a Data Analyst with a hybrid profile (data + development). I’m pursuing a BSc in Computer Science and hold postgraduate studies in Artificial Intelligence and Data Science, Information Security, and Cloud & Edge Computing, plus a Full Stack AI technical program and a degree in Marketing. I work with analytical mindset, technical rigor, and clear communication to translate business needs into reliable data solutions.",
    },
    complexData: {
      title: "Experience with large-scale complex data",
      body:
        "Experience with Business Intelligence for public management, strategic Power BI dashboards, and large-scale fiscal data analysis. I handle public and organizational data from multiple sources, structuring ETL/ELT, Python automation, and strategic BI to support decision-making.",
    },
    differential: {
      title: "Differentiator",
      description:
        "End-to-end profile connecting modeling, automation, APIs, and visualization to deliver business intelligence with clarity and impact.",
    },
    deliver: {
      title: "What I do",
      bullets: [
        "Data Analysis and Data Analytics.",
        "Business Intelligence with Power BI, DAX, and Power Query.",
        "Data modeling, SQL, and KPI development.",
        "ETL / ELT and Python automation (Pandas, NumPy).",
        "Data visualization and analytical storytelling.",
        "REST APIs and Flask integrations.",
      ],
    },
    snapshot: {
      title: "Snapshot",
      items: [
        {
          value: "BI & Analytics",
          label: "Power BI, KPIs, DAX",
        },
        {
          value: "Data",
          label: "SQL, ETL/ELT, Python",
        },
        {
          value: "Automation",
          label: "Pipelines and efficiency",
        },
        {
          value: "Decisions",
          label: "Public and fiscal data",
        },
      ],
    },
    highlights: {
      title: "Differentiator",
      items: [
        "Hybrid profile (data + development) with end-to-end ownership.",
        "Experience with fiscal, public, and organizational data.",
        "Ability to integrate BI, automation, and APIs into complete solutions.",
        "Clear communication with technical and non-technical stakeholders.",
        "Public and private sector background with impact focus.",
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
            "Data Visualization",
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
    eyebrow: "Overview",
    title: "Strategic summary",
    paragraphs: [
      "Data Analyst and BI professional focused on Business Intelligence, Power BI, SQL, and Python. I work with Data Analytics, KPIs, ETL/ELT, and data visualization to support decision-making.",
      "Experience with fiscal, public, and organizational data, integrating modeling, automation, and strategic BI to deliver reliable, actionable insights.",
    ],
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
      { label: "Power BI", level: 5 },
      { label: "SQL", level: 5 },
      { label: "Python", level: 4 },
      { label: "DAX", level: 4 },
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
    title: "Let’s talk about data and BI",
    description:
      "Open to Data Analyst, Business Intelligence, and Data Analytics opportunities. I use Power BI, SQL, and Python to drive faster, more reliable decisions.",
    ctaTitle:
      "Professional summary: data analyst focused on BI, KPIs, and automation.",
    ctaSubtitle: "Connect on LinkedIn or send an email to start a conversation.",
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
