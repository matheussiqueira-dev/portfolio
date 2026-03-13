import { projects as legacyProjects } from "@/data/projects";
import { projectsEn as legacyProjectsEn } from "@/data/projects.en";
import type { Project as LegacyProject } from "@/data/projects.types";
import type { Localized, ProjectCaseStudy, ProjectCategory, TechStackGroups } from "@/core/types";
import { featuredProjectSlugs, recruiterKeywords } from "@/core/constants";

const enBySlug = new Map(legacyProjectsEn.map((project) => [project.slug, project]));

const categoryOverrides: Record<string, ProjectCategory> = {
  "dashboard-vendas-power-bi": "Business Intelligence",
  "business-decision-simulator": "Data Analytics",
  "touchless-web-gesture-interface": "AI & Computer Vision",
  "hand-gesture-recognition-realtime": "AI & Computer Vision",
  "driver-monitoring-system": "AI & Computer Vision",
  "detector-de-stress": "AI & Computer Vision",
  "eye-tracking": "AI & Computer Vision",
  "chatbot-ia-api": "Automation",
  "library-api-advanced": "Full Stack",
  "gestor-de-notas": "Full Stack",
  "capa-da-invisibilidade": "AI & Computer Vision",
  "self-drive-car": "AI & Computer Vision",
  "deteccao-de-anomalias-operacionais": "Data Analytics",
};

const manualProjects: ProjectCaseStudy[] = [];

function localized<T>(pt: T, en: T): Localized<T> {
  return {
    "pt-BR": pt,
    en,
  };
}

function findMatchingSection(project: LegacyProject | undefined, pattern: RegExp) {
  return project?.intro?.sections.find((section) => pattern.test(section.title));
}

function detectCategory(slug: string, stack: string[]): ProjectCategory {
  if (categoryOverrides[slug]) {
    return categoryOverrides[slug];
  }

  const normalized = stack.join(" ").toLowerCase();

  if (/power bi|dax|power query/.test(normalized)) {
    return "Business Intelligence";
  }

  if (/tensorflow|mediapipe|opencv|computer vision|vision/.test(normalized)) {
    return "AI & Computer Vision";
  }

  if (/python|pandas|numpy|streamlit|sql/.test(normalized)) {
    return "Data Analytics";
  }

  if (/api|node|react|next|typescript|javascript/.test(normalized)) {
    return "Full Stack";
  }

  return "Automation";
}

function pushToGroup(groups: TechStackGroups, group: keyof TechStackGroups, value: string) {
  if (!groups[group].includes(value)) {
    groups[group].push(value);
  }
}

function groupStack(stack: string[]): TechStackGroups {
  const groups: TechStackGroups = {
    frontend: [],
    backend: [],
    data: [],
    ai: [],
    infra: [],
    tooling: [],
  };

  for (const item of stack) {
    const normalized = item.toLowerCase();

    if (/react|next|typescript|javascript|vite|html|css|canvas|three/.test(normalized)) {
      pushToGroup(groups, "frontend", item);
      continue;
    }

    if (/node|fastify|fastapi|flask|java|api|backend/.test(normalized)) {
      pushToGroup(groups, "backend", item);
      continue;
    }

    if (/sql|power bi|dax|power query|excel|pandas|numpy|plotly|streamlit|etl/.test(normalized)) {
      pushToGroup(groups, "data", item);
      continue;
    }

    if (/tensorflow|mediapipe|opencv|ai|llm|vision/.test(normalized)) {
      pushToGroup(groups, "ai", item);
      continue;
    }

    if (/docker|vercel|cloud|linux/.test(normalized)) {
      pushToGroup(groups, "infra", item);
      continue;
    }

    pushToGroup(groups, "tooling", item);
  }

  return groups;
}

function mapScreenshots(ptProject: LegacyProject, enProject: LegacyProject) {
  const maxLength = Math.max(ptProject.screenshots.length, enProject.screenshots.length);
  const screenshots = [];

  for (let index = 0; index < maxLength; index += 1) {
    const ptShot = ptProject.screenshots[index];
    const enShot = enProject.screenshots[index];

    if (!ptShot && !enShot) {
      continue;
    }

    screenshots.push({
      src: ptShot?.src ?? enShot?.src ?? "",
      type: ptShot?.type ?? enShot?.type ?? "image",
      poster: ptShot?.type === "video" ? ptShot.src : undefined,
      alt: localized(ptShot?.alt ?? ptProject.title, enShot?.alt ?? enProject.title),
      caption: localized(ptShot?.alt ?? ptProject.tagline, enShot?.alt ?? enProject.tagline),
    });
  }

  return screenshots;
}

function buildProject(ptProject: LegacyProject, enProject: LegacyProject): ProjectCaseStudy {
  const category = detectCategory(ptProject.slug, ptProject.stack);
  const techStackGroups = groupStack(ptProject.stack);
  const architecturePt = findMatchingSection(ptProject, /arquitetura/i);
  const architectureEn = findMatchingSection(enProject, /architecture/i);
  const seoKeywords = Array.from(
    new Set([
      ...recruiterKeywords,
      ...ptProject.stack,
      category,
      ptProject.title,
      enProject.title,
      ptProject.slug.replace(/-/g, " "),
    ])
  );

  return {
    slug: ptProject.slug,
    title: localized(ptProject.title, enProject.title),
    shortDescription: localized(ptProject.tagline, enProject.tagline),
    oneLiner: localized(ptProject.techSummary, enProject.techSummary),
    longDescription: localized(
      ptProject.longDescription?.length
        ? ptProject.longDescription
        : (ptProject.intro?.paragraphs ?? [ptProject.context]),
      enProject.longDescription?.length
        ? enProject.longDescription
        : (enProject.intro?.paragraphs ?? [enProject.context])
    ),
    overview: localized(
      [ptProject.context, ...(ptProject.intro?.paragraphs ?? [])],
      [enProject.context, ...(enProject.intro?.paragraphs ?? [])]
    ),
    role: localized(ptProject.role, enProject.role),
    category,
    stack: ptProject.stack,
    problem: localized(ptProject.problem, enProject.problem),
    solution: localized(ptProject.solution, enProject.solution),
    architecture: {
      summary: localized(
        architecturePt?.items?.[0] ?? ptProject.context,
        architectureEn?.items?.[0] ?? enProject.context
      ),
      flow: localized(
        architecturePt?.items ?? ptProject.solution.slice(0, 3),
        architectureEn?.items ?? enProject.solution.slice(0, 3)
      ),
      modules: localized(
        ptProject.intro?.sections.flatMap((section) => section.items ?? []).slice(0, 5) ??
          ptProject.stack,
        enProject.intro?.sections.flatMap((section) => section.items ?? []).slice(0, 5) ??
          enProject.stack
      ),
      runtime: localized(ptProject.highlights, enProject.highlights),
    },
    implementation: {
      summary: localized(ptProject.techSummary, enProject.techSummary),
      bullets: localized(ptProject.demonstrates, enProject.demonstrates),
      challenges: localized(ptProject.problem, enProject.problem),
      tradeoffs: localized(
        ptProject.conclusion.length ? ptProject.conclusion : ptProject.highlights,
        enProject.conclusion.length ? enProject.conclusion : enProject.highlights
      ),
    },
    impact: localized(
      ptProject.conclusion.length ? ptProject.conclusion : ptProject.highlights,
      enProject.conclusion.length ? enProject.conclusion : enProject.highlights
    ),
    screenshots: mapScreenshots(ptProject, enProject),
    heroImage:
      ptProject.screenshots[0]?.src ??
      (ptProject.demo?.kind === "video" ? ptProject.demo.poster : undefined) ??
      `/thumbnails/pt/${ptProject.slug}.png`,
    videoUrl: ptProject.demo?.kind === "video" ? ptProject.demo.src : undefined,
    githubUrl: ptProject.repoUrl,
    demoUrl:
      ptProject.demo?.kind === "external"
        ? ptProject.demo.url
        : ptProject.demo?.kind === "internal"
          ? ptProject.demo.path
          : ptProject.demo?.kind === "embed"
            ? ptProject.demo.url
            : ptProject.demoUrl,
    repositorySummary: localized(ptProject.techSummary, enProject.techSummary),
    recruiterKeywords: Array.from(
      new Set([category, ...ptProject.stack.slice(0, 6), ...recruiterKeywords.slice(0, 6)])
    ),
    githubKeywords: Array.from(
      new Set([...ptProject.stack, ptProject.slug.replace(/-/g, " "), category])
    ),
    techStackGroups,
    featured: featuredProjectSlugs.includes(ptProject.slug),
    relatedSlugs: [],
    seo: {
      title: localized(
        ptProject.seo?.title ?? `${ptProject.title} | Case study`,
        enProject.seo?.title ?? `${enProject.title} | Case study`
      ),
      description: localized(
        ptProject.seo?.description ?? ptProject.tagline,
        enProject.seo?.description ?? enProject.tagline
      ),
      keywords: seoKeywords,
      ogImage:
        ptProject.screenshots[0]?.src ??
        (ptProject.demo?.kind === "video" ? ptProject.demo.poster : undefined) ??
        `/thumbnails/pt/${ptProject.slug}.png`,
    },
  };
}

const mappedProjects = legacyProjects
  .map((project) => {
    const enProject = enBySlug.get(project.slug);

    if (!enProject) {
      return null;
    }

    return buildProject(project, enProject);
  })
  .filter((project): project is ProjectCaseStudy => project !== null);

const combinedProjects = [...manualProjects, ...mappedProjects].map((project) => {
  const related = combinedProjectsFallback(project.slug, project.category);
  return {
    ...project,
    relatedSlugs: project.relatedSlugs.length ? project.relatedSlugs : related,
  };
});

function combinedProjectsFallback(currentSlug: string, category: ProjectCategory) {
  const manualRelated = [
    ...manualProjects.map((project) => project.slug),
    ...mappedProjects.map((project) => project.slug),
  ]
    .filter((slug) => slug !== currentSlug)
    .filter((slug) => {
      const current =
        mappedProjects.find((project) => project.slug === slug) ??
        manualProjects.find((project) => project.slug === slug);
      return current?.category === category;
    })
    .slice(0, 3);

  return manualRelated;
}

export const allProjects = combinedProjects;

export const featuredProjects = allProjects.filter((project) => project.featured);

export const projectSlugs = allProjects.map((project) => project.slug);

export function getProjectBySlug(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}
