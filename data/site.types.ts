export type SiteContent = {
  nav: {
    home: string;
    about: string;
    services: string;
    projects: string;
    contact: string;
    certificates: string;
    academic: string;
    demos: string;
    hire: string;
    resume: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    stackHighlights: {
      label: string;
      icon: "stack" | "data" | "ai" | "software";
    }[];
    facts: {
      label: string;
      value: string;
    }[];
    ctas: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    summary: {
      title: string;
      body: string;
    };
    who: {
      title: string;
      body: string;
    };
    complexData: {
      title: string;
      body: string;
    };
    differential: {
      title: string;
      description: string;
    };
    deliver: {
      title: string;
      bullets: string[];
    };
    snapshot: {
      title: string;
      items: {
        value: string;
        label: string;
      }[];
    };
    highlights: {
      title: string;
      items: string[];
    };
    stack: {
      title: string;
      groups: {
        title: string;
        icon: "data" | "languages" | "database" | "backend" | "frontend" | "tools";
        items: string[];
      }[];
    };
  };
  executiveSummary: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    cards: {
      icon: "education" | "projects" | "certifications";
      title: string;
    }[];
  };
  valueProposition: {
    eyebrow: string;
    title: string;
    description: string;
    pillars: {
      title: string;
      description: string;
      bullets: string[];
    }[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    offerings: {
      title: string;
      description: string;
      bullets: string[];
    }[];
    processTitle: string;
    process: {
      title: string;
      description: string;
    }[];
    cta: {
      title: string;
      description: string;
      primaryLabel: string;
      secondaryLabel: string;
    };
  };
  engagement: {
    eyebrow: string;
    title: string;
    description: string;
    cards: {
      label: string;
      value: string;
      detail: string;
    }[];
    cta: {
      primaryLabel: string;
      secondaryLabel: string;
    };
  };
  metrics: {
    eyebrow: string;
    title: string;
    items: {
      icon: "projects" | "github" | "experience" | "data";
      label: string;
    }[];
  };
  primaryStack: {
    eyebrow: string;
    title: string;
    items: {
      label: string;
      level: number;
    }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    cardLabel: string;
    highlightLabel: string;
    detailsLabel: string;
    caseLabel: string;
    viewAllLabel: string;
    featuredLabel: string;
    filters: {
      label: string;
      allLabel: string;
      searchPlaceholder: string;
      resultsLabel: string;
      emptyTitle: string;
      emptyDescription: string;
    };
    modal: {
      title: string;
      closeLabel: string;
      problemTitle: string;
      solutionTitle: string;
      featuresTitle: string;
      demonstratesTitle: string;
      stackTitle: string;
      githubLabel: string;
      demoLabel: string;
      caseCta: string;
    };
  };
  projectsPage: {
    eyebrow: string;
    title: string;
    description: string;
    filterLabel: string;
    allLabel: string;
    caseLabel: string;
    demosLabel: string;
    demonstratesLabel: string;
    filters: string[];
  };
  projectDetail: {
    contextTitle: string;
    problemTitle: string;
    dataTitle: string;
    solutionTitle: string;
    featuresTitle: string;
    impactTitle: string;
    stackTitle: string;
    demonstratesTitle: string;
    conclusionTitle: string;
    galleryTitle: string;
    howToRunTitle: string;
    linksTitle: string;
    roleLabel: string;
    backLabel: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    ctaTitle: string;
    ctaSubtitle: string;
    copyLabel: string;
    copiedLabel: string;
    cards: {
      email: string;
      linkedin: string;
      github: string;
      whatsapp: string;
    };
    brief: {
      title: string;
      description: string;
      fields: {
        name: {
          label: string;
          placeholder: string;
        };
        company: {
          label: string;
          placeholder: string;
        };
        email: {
          label: string;
          placeholder: string;
        };
        projectType: {
          label: string;
        };
        timeline: {
          label: string;
        };
        budget: {
          label: string;
        };
        goal: {
          label: string;
          placeholder: string;
        };
      };
      projectTypes: string[];
      timelines: string[];
      budgets: string[];
      summaryTitle: string;
      summaryHint: string;
      emptySummary: string;
      emailCta: string;
      whatsappCta: string;
    };
  };
  certificatesSection: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
  };
  demos: {
    eyebrow: string;
    title: string;
    description: string;
    viewProjectsLabel: string;
    fullCaseLabel: string;
    openDemoLabel: string;
    openInteractiveLabel: string;
    watchVideoLabel: string;
    demoSoonLabel: string;
    howToRunLabel: string;
    publishTitle: string;
    publishItems: string[];
  };
  language: {
    label: string;
  };
  media: {
    videoFallback: string;
    videoDemoLabel: string;
  };
};
