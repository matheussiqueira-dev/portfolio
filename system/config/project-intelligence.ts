import type { ProjectCard } from "@/data/projects-card.types";
import type { Project } from "@/data/projects.types";

export type ProjectCategory =
  | "full_stack"
  | "data_analytics"
  | "dashboard_system"
  | "ai_experiment"
  | "automation"
  | "computer_vision"
  | "frontend_system";

export type ProjectStatus = "production_ready" | "active" | "lab";

type LocalizedLabel = {
  pt: string;
  en: string;
};

const CATEGORY_LABELS: Record<ProjectCategory, LocalizedLabel> = {
  full_stack: {
    pt: "FULL STACK",
    en: "FULL STACK",
  },
  data_analytics: {
    pt: "DATA ANALYTICS",
    en: "DATA ANALYTICS",
  },
  dashboard_system: {
    pt: "DASHBOARD SYSTEM",
    en: "DASHBOARD SYSTEM",
  },
  ai_experiment: {
    pt: "AI EXPERIMENT",
    en: "AI EXPERIMENT",
  },
  automation: {
    pt: "AUTOMATION",
    en: "AUTOMATION",
  },
  computer_vision: {
    pt: "COMPUTER VISION",
    en: "COMPUTER VISION",
  },
  frontend_system: {
    pt: "INTERACTIVE UI",
    en: "INTERACTIVE UI",
  },
};

const STATUS_LABELS: Record<ProjectStatus, LocalizedLabel> = {
  production_ready: {
    pt: "PRODUCTION READY",
    en: "PRODUCTION READY",
  },
  active: {
    pt: "ACTIVE",
    en: "ACTIVE",
  },
  lab: {
    pt: "R&D LAB",
    en: "R&D LAB",
  },
};

type ProjectLike = {
  slug: string;
  title: ProjectCard["title"] | string;
  stack: string[];
  links: ProjectCard["links"];
} & Partial<Pick<ProjectCard, "status" | "architecture" | "videos" | "metrics">>;

const normalize = (value: string) => value.toLowerCase();

const includesAny = (source: string[], terms: string[]) =>
  terms.some((term) => source.some((value) => value.includes(term)));

const titleAsText = (title: ProjectLike["title"]) =>
  typeof title === "string" ? title : `${title.pt} ${title.en}`;

export const inferProjectCategories = (
  project: ProjectLike
): ProjectCategory[] => {
  const tokens = [
    ...project.stack.map(normalize),
    normalize(project.slug),
    normalize(titleAsText(project.title)),
  ];

  const categories = new Set<ProjectCategory>();

  if (includesAny(tokens, ["react", "next", "node", "fastify", "api"])) {
    categories.add("full_stack");
  }

  if (
    includesAny(tokens, [
      "data",
      "analytics",
      "sql",
      "python",
      "pandas",
      "etl",
      "warehouse",
      "power query",
      "dax",
      "excel",
    ])
  ) {
    categories.add("data_analytics");
  }

  if (includesAny(tokens, ["dashboard", "power bi", "metabase", "bi"])) {
    categories.add("dashboard_system");
  }

  if (
    includesAny(tokens, [
      "tensorflow",
      "mediapipe",
      "ai",
      "ml",
      "llm",
      "chatbot",
      "openai",
    ])
  ) {
    categories.add("ai_experiment");
  }

  if (includesAny(tokens, ["automation", "etl", "pipeline", "airflow", "python"])) {
    categories.add("automation");
  }

  if (
    includesAny(tokens, [
      "computer vision",
      "opencv",
      "mediapipe",
      "gesture",
      "tracking",
      "webcam",
      "canvas",
      "vision",
    ])
  ) {
    categories.add("computer_vision");
  }

  if (includesAny(tokens, ["three.js", "three", "framer", "ui", "frontend", "webgl"])) {
    categories.add("frontend_system");
  }

  if (categories.size === 0) {
    categories.add("full_stack");
  }

  return Array.from(categories);
};

export const inferProjectStatus = (project: ProjectLike): ProjectStatus => {
  if (project.status === "archived") {
    return "lab";
  }

  if (project.links.live || project.links.demo || project.links.caseStudy) {
    return "production_ready";
  }

  if (project.videos?.length || project.metrics || project.architecture) {
    return "active";
  }

  return "lab";
};

export const getProjectCategoryLabel = (
  category: ProjectCategory,
  locale: "pt" | "en"
) => CATEGORY_LABELS[category][locale];

export const getProjectStatusLabel = (
  status: ProjectStatus,
  locale: "pt" | "en"
) => STATUS_LABELS[status][locale];

export const formatProjectPeriod = (
  duration: { start: string; end: string } | undefined,
  locale: "pt" | "en"
) => {
  if (!duration) {
    return locale === "pt" ? "Monitoramento contínuo" : "Continuous monitoring";
  }

  const formatMonth = (value: string) => {
    if (value === "ongoing") {
      return locale === "pt" ? "Em andamento" : "Ongoing";
    }

    const [year, month] = value.split("-");
    if (!year || !month) {
      return value;
    }

    const date = new Date(Number(year), Number(month) - 1, 1);

    return new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", {
      month: "short",
      year: "numeric",
    }).format(date);
  };

  return `${formatMonth(duration.start)} - ${formatMonth(duration.end)}`;
};

export const projectSupportsDemo = (project: Project | ProjectCard) =>
  Boolean(
    ("demo" in project && project.demo) ||
      ("demoUrl" in project && project.demoUrl) ||
      ("links" in project && (project.links.demo || project.links.live))
  );
