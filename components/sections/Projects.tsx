"use client";

import dynamic from "next/dynamic";
import SafeImage from "@/src/components/demo/SafeImage";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { CSSProperties } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { projects, projectOrder } from "@/data/projects";
import { projectsEn, projectOrderEn } from "@/data/projects.en";
import { projects as registryProjects } from "@/src/data/projects";
import { sitePt } from "@/data/site.pt";
import { siteEn } from "@/data/site.en";
import type { Project } from "@/data/projects.types";

const ProjectModal = dynamic(() => import("./ProjectModal"), {
  ssr: false,
  loading: () => null,
});

const isVideoMedia = (shot: Project["screenshots"][number]) =>
  shot.type === "video" || shot.src.endsWith(".mp4");

const getCover = (project: Project) => {
  const cover = project.screenshots.find((shot) =>
    shot.src.includes("/cover.")
  );
  if (cover) return cover;

  const firstImage = project.screenshots.find((shot) => !isVideoMedia(shot));
  if (firstImage) return firstImage;

  const demoPoster =
    project.demo && "poster" in project.demo ? project.demo.poster : undefined;

  return demoPoster ? { src: demoPoster, alt: project.title } : undefined;
};

const getHighlights = (project: Project) => {
  const base = project.highlights.length > 0 ? project.highlights : project.demonstrates;
  return base.slice(0, 3);
};

const repoStarsCache = new Map<string, number | null>();

const parseRepoSlug = (repoUrl: string) => {
  try {
    const url = new URL(repoUrl);
    if (url.hostname !== "github.com") return null;
    const [owner, repo] = url.pathname.replace(/^\/+/, "").split("/");
    if (!owner || !repo) return null;
    return `${owner}/${repo.replace(/\.git$/, "")}`;
  } catch {
    return null;
  }
};

const fetchRepoStars = async (repoUrl: string) => {
  if (repoStarsCache.has(repoUrl)) {
    return repoStarsCache.get(repoUrl);
  }

  const slug = parseRepoSlug(repoUrl);
  if (!slug) {
    repoStarsCache.set(repoUrl, null);
    return null;
  }

  try {
    const response = await fetch(`https://api.github.com/repos/${slug}`, {
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) {
      repoStarsCache.set(repoUrl, null);
      return null;
    }

    const data = (await response.json()) as { stargazers_count?: number };
    const stars = typeof data.stargazers_count === "number" ? data.stargazers_count : null;
    repoStarsCache.set(repoUrl, stars);
    return stars;
  } catch {
    repoStarsCache.set(repoUrl, null);
    return null;
  }
};

const getProjectBadges = (project: Project) => {
  const combined = [
    project.title,
    project.tagline,
    ...project.stack,
    ...project.highlights,
    ...project.demonstrates,
  ]
    .join(" ")
    .toLowerCase();

  const badges = new Set<string>();
  const hasFrontend =
    /react|next\.js|typescript|javascript|html|css|streamlit/.test(combined);
  const hasBackend =
    /node\.js|fastapi|api|mongodb|postgres|sql|python|websocket/.test(combined);

  if (hasFrontend && hasBackend) {
    badges.add("Full Stack");
  }

  if (/python|sql|power bi|pandas|numpy|etl|data|bi|dashboard/.test(combined)) {
    badges.add("Data");
  }

  if (/\bai\b|\bia\b|machine learning|ml|llm|chatbot|inteligência artificial/.test(combined)) {
    badges.add("AI");
  }

  if (
    /computer vision|visão computacional|opencv|mediapipe|gesture|gesto|hand|webcam/.test(
      combined
    )
  ) {
    badges.add("Computer Vision");
  }

  return ["Full Stack", "Data", "AI", "Computer Vision"].filter((badge) =>
    badges.has(badge)
  );
};

export default function Projects() {
  const pathname = usePathname() ?? "/";
  const isEn = pathname.startsWith("/en");
  const content = isEn ? siteEn.projects : sitePt.projects;
  const data = useMemo(() => (isEn ? projectsEn : projects), [isEn]);
  const featured = useMemo(
    () => new Set((isEn ? projectOrderEn : projectOrder).slice(0, 3)),
    [isEn]
  );
  const registryMap = useMemo(
    () => new Map(registryProjects.map((item) => [item.id, item])),
    []
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loadingSlug, setLoadingSlug] = useState<string | null>(null);
  const loadingTimeoutRef = useRef<number | null>(null);
  const handleClose = useCallback(() => {
    setSelectedProject(null);
    setLoadingSlug(null);
    if (loadingTimeoutRef.current !== null) {
      window.clearTimeout(loadingTimeoutRef.current);
      loadingTimeoutRef.current = null;
    }
  }, []);
  const [starsByRepo, setStarsByRepo] = useState<Record<string, number>>({});
  const projectsHref = isEn ? "/en/projects" : "/projetos";

  useEffect(() => {
    return () => {
      if (loadingTimeoutRef.current !== null) {
        window.clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, []);

  const openProject = useCallback((project: Project) => {
    setSelectedProject(project);
    setLoadingSlug(project.slug);
    if (loadingTimeoutRef.current !== null) {
      window.clearTimeout(loadingTimeoutRef.current);
    }
    loadingTimeoutRef.current = window.setTimeout(() => {
      setLoadingSlug(null);
      loadingTimeoutRef.current = null;
    }, 450);
  }, []);

  const isInteractiveTarget = (
    target: EventTarget | null,
    currentTarget?: HTMLElement
  ) => {
    if (!(target instanceof HTMLElement)) {
      return false;
    }
    const interactive = target.closest(
      "a, button, input, textarea, select, [data-interactive]"
    );
    if (!interactive) {
      return false;
    }
    return interactive !== currentTarget;
  };

  useEffect(() => {
    let isActive = true;

    const loadStars = async () => {
      const repos = Array.from(new Set(data.map((project) => project.repoUrl)));
      const entries = await Promise.all(
        repos.map(async (repoUrl) => {
          const stars = await fetchRepoStars(repoUrl);
          return [repoUrl, stars] as const;
        })
      );

      if (!isActive) return;

      setStarsByRepo((prev) => {
        const next = { ...prev };
        for (const [repoUrl, stars] of entries) {
          if (stars !== null && stars !== undefined) {
            next[repoUrl] = stars;
          }
        }
        return next;
      });
    };

    loadStars();

    return () => {
      isActive = false;
    };
  }, [data]);

  return (
    <section id="projects" className="page-section content-auto">
      <div className="section-inner">
        <div className="flex flex-col gap-4 mb-10" data-reveal>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[color:var(--foreground)]">
            {content.title}
          </h2>
          <p className="text-base text-[color:var(--muted)] max-w-2xl">
            {content.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {data.map((project, index) => {
            const registryProject = registryMap.get(project.slug);
            const registryCover = registryProject?.coverImage
              ? { src: registryProject.coverImage, alt: project.title }
              : undefined;
            const cover = registryCover ?? getCover(project);
            const highlights = getHighlights(project);
            const badges = getProjectBadges(project);
            const caseHref = isEn
              ? `/en/projects/${project.slug}`
              : `/projetos/${project.slug}`;
            const isFeatured = featured.has(project.slug);
            const stars = starsByRepo[project.repoUrl];
            const isOpen = selectedProject?.slug === project.slug;
            const isLoading = loadingSlug === project.slug;
            const openLabel = isEn ? "Open project details" : "Abrir detalhes do projeto";

            return (
              <article
                key={project.slug}
                className="card card-hover relative flex h-full flex-col gap-5 group"
                data-reveal
                style={
                  {
                    "--reveal-delay": `${index * 70}ms`,
                  } as CSSProperties
                }
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                aria-label={openLabel}
                onClick={(event) => {
                  if (
                    event.defaultPrevented ||
                    isInteractiveTarget(event.target, event.currentTarget)
                  ) {
                    return;
                  }
                  openProject(project);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openProject(project);
                  }
                }}
              >
                {isFeatured ? (
                  <span className="card-badge rounded-full bg-[color:var(--accent)]/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-strong)]">
                    {content.featuredLabel}
                  </span>
                ) : null}
                {cover ? (
                  <div className="card-media relative aspect-[4/3] w-full">
                    <SafeImage
                      src={cover.src}
                      alt={cover.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      quality={85}
                      className="object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 opacity-0 transition duration-200 group-hover:opacity-100">
                      <p className="max-h-24 overflow-hidden text-sm leading-relaxed text-[color:var(--foreground)]/90">
                        {project.techSummary}
                      </p>
                    </div>
                  </div>
                ) : null}

                <div className="card-header text-left items-start">
                  <span className="card-kicker text-left">{content.cardLabel}</span>
                  <h3 className="card-title text-left">{project.title}</h3>
                  <p className="card-subtitle text-left">{project.tagline}</p>
                </div>

                {badges.length > 0 ? (
                  <div className="flex flex-wrap justify-start gap-2 text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    {badges.map((badge) => (
                      <span key={badge} className="chip">
                        {badge}
                      </span>
                    ))}
                  </div>
                ) : null}

                {highlights.length > 0 ? (
                  <div className="space-y-2 text-left">
                    <p className="card-meta text-left">
                      {content.highlightLabel}
                    </p>
                    <ul className="space-y-1 text-sm text-[color:var(--muted)]">
                      {highlights.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-soft)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => openProject(project)}
                    data-state={
                      isLoading ? "loading" : isOpen ? "success" : "idle"
                    }
                    aria-busy={isLoading}
                    className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                  >
                    {content.detailsLabel}
                  </button>

                  <Link
                    href={caseHref}
                    onClick={() =>
                      trackEvent("view_case", "engagement", project.slug)
                    }
                    className="btn-ghost focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                  >
                    {content.caseLabel}
                  </Link>

                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("click_github", "outbound", project.slug)
                    }
                    className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                  >
                    {content.modal.githubLabel}
                  </a>
                </div>

                <div className="mt-2 flex items-center justify-center gap-2 text-xs text-[color:var(--muted)]">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                    <path
                      d="M12 2l2.9 6.2 6.8.6-5.1 4.4 1.5 6.7-6.1-3.5-6.1 3.5 1.5-6.7-5.1-4.4 6.8-.6L12 2z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>
                    {stars !== undefined
                      ? stars.toLocaleString(isEn ? "en-US" : "pt-BR")
                      : "GitHub"}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            href={projectsHref}
            className="inline-flex items-center gap-2 text-sm text-[color:var(--accent)] underline decoration-[color:var(--accent-soft)]/60 underline-offset-4 transition hover:text-[color:var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            {content.viewAllLabel}
          </Link>
        </div>
      </div>

      {selectedProject ? (
        <ProjectModal
          project={selectedProject}
          onClose={handleClose}
        />
      ) : null}
    </section>
  );
}
