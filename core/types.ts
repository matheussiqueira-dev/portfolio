export type SiteLocale = "pt-BR" | "en";

export type Localized<T> = Record<SiteLocale, T>;

export type RouteKey =
  | "home"
  | "about"
  | "projects"
  | "academic"
  | "certificates"
  | "hire"
  | "contact";

export type ProjectCategory =
  | "Business Intelligence"
  | "Data Analytics"
  | "Full Stack"
  | "AI & Computer Vision"
  | "Automation";

export type TechStackGroupKey = "frontend" | "backend" | "data" | "ai" | "infra" | "tooling";

export type MediaAsset = {
  src: string;
  alt: Localized<string>;
  type?: "image" | "video" | "gif";
  poster?: string;
  caption?: Localized<string>;
};

export type ProjectArchitecture = {
  summary: Localized<string>;
  flow: Localized<string[]>;
  modules: Localized<string[]>;
  runtime: Localized<string[]>;
};

export type ProjectImplementation = {
  summary: Localized<string>;
  bullets: Localized<string[]>;
  challenges: Localized<string[]>;
  tradeoffs: Localized<string[]>;
};

export type TechStackGroups = Record<TechStackGroupKey, string[]>;

export type ProjectCaseStudy = {
  slug: string;
  title: Localized<string>;
  shortDescription: Localized<string>;
  oneLiner: Localized<string>;
  longDescription: Localized<string[]>;
  overview: Localized<string[]>;
  role: Localized<string>;
  category: ProjectCategory;
  stack: string[];
  problem: Localized<string[]>;
  solution: Localized<string[]>;
  architecture: ProjectArchitecture;
  implementation: ProjectImplementation;
  impact: Localized<string[]>;
  screenshots: MediaAsset[];
  heroImage: string;
  videoUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  repositorySummary: Localized<string>;
  recruiterKeywords: string[];
  githubKeywords: string[];
  techStackGroups: TechStackGroups;
  featured: boolean;
  relatedSlugs: string[];
  seo: {
    title: Localized<string>;
    description: Localized<string>;
    keywords: string[];
    ogImage: string;
  };
};

export type SkillGroup = {
  id: string;
  title: Localized<string>;
  description: Localized<string>;
  items: string[];
  recruiterKeywords: string[];
};

export type ServiceOffering = {
  id: string;
  title: Localized<string>;
  description: Localized<string>;
  bullets: Localized<string[]>;
  relatedProjectSlugs: string[];
};

export type ProcessStep = {
  id: string;
  title: Localized<string>;
  description: Localized<string>;
};

export type ContactMethod = {
  id: string;
  label: Localized<string>;
  value: string;
  href: string;
  note?: Localized<string>;
};
