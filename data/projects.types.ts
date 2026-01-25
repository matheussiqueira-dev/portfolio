export type ProjectMedia = {
  src: string;
  alt: string;
  type?: "image" | "gif" | "video";
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
  screenshots: ProjectMedia[];
  seo?: {
    title: string;
    description: string;
  };
};
