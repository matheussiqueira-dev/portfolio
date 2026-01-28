export type ProjectMedia = {
  src: string;
  alt: string;
  type?: "image" | "gif" | "video";
};

export type ProjectIntroSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
  subSections?: {
    title: string;
    items: string[];
  }[];
  footer?: string[];
  link?: {
    label: string;
    href: string;
  };
};

export type ProjectIntroVideo = {
  src: string;
  poster?: string;
  caption?: string;
};

export type ProjectIntro = {
  title: string;
  paragraphs: string[];
  sections: ProjectIntroSection[];
  video?: ProjectIntroVideo;
};

export type DemoExperience =
  | {
      kind: "external";
      url: string;
      label?: string;
    }
  | {
      kind: "video";
      src: string;
      poster?: string;
      caption?: string;
    }
  | {
      kind: "embed";
      url: string;
      title: string;
      sandbox?: string;
    }
  | {
      kind: "internal";
      path: string;
      title?: string;
      description?: string;
    };

export type Project = {
  slug: string;
  title: string;
  headline?: string;
  tagline: string;
  role: string;
  stack: string[];
  repoUrl: string;
  demoUrl?: string;
  demo?: DemoExperience;
  context: string;
  problem: string[];
  dataUsed: string[];
  solution: string[];
  features: string[];
  highlights: string[];
  demonstrates: string[];
  techSummary: string;
  conclusion: string[];
  howToRun: string[];
  longDescription?: string[];
  intro?: ProjectIntro;
  screenshots: ProjectMedia[];
  seo?: {
    title: string;
    description: string;
  };
};
