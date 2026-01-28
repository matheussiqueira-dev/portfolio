export type SiteContent = {
  nav: {
    home: string;
    about: string;
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
    ctas: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    who: {
      title: string;
      body: string;
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
        items: string[];
      }[];
    };
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
    cards: {
      email: string;
      linkedin: string;
      github: string;
      whatsapp: string;
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
  };
};
