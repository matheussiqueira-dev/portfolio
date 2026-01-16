export type ProjectMedia = {
  src: string;
  alt: string;
  type?: "image" | "gif" | "video";
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  stack: string[];
  repoUrl: string;
  demoUrl?: string;
  problem: string[];
  solution: string[];
  features: string[];
  howToRun: string[];
  screenshots: ProjectMedia[];
};
