"use client";

import dynamic from "next/dynamic";
import SafeImage from "@/src/components/demo/SafeImage";
import Link from "next/link";
import { useLocale } from "next-intl";
import type { CSSProperties, ChangeEvent } from "react";
import {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";
import { trackEvent } from "@/core/analytics";
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

const FILTER_ORDER = ["Full Stack", "Data", "AI", "Computer Vision"] as const;

const formatResultsLabel = (template: string, count: number, total: number) =>
  template
    .replace("{count}", count.toString())
    .replace("{total}", total.toString());

export default function Projects() {
  const isEn = useLocale() === "en";
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
  const [activeFilter, setActiveFilter] = useState("all");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const [isPending, startTransition] = useTransition();
  const loadingTimeoutRef = useRef<number | null>(null);
  const repoSlugsByUrl = useMemo(() => {
    const map = new Map<string, string>();
    data.forEach((project) => {
      const slug = parseRepoSlug(project.repoUrl);
      if (slug) {
        map.set(project.repoUrl, slug);
      }
    });
    return map;
  }, [data]);
  const repoUrlBySlug = useMemo(() => {
    const map = new Map<string, string>();
    repoSlugsByUrl.forEach((slug, repoUrl) => {
      map.set(slug, repoUrl);
    });
    return map;
  }, [repoSlugsByUrl]);
  const projectMeta = useMemo(() => {
    return data.map((project) => {
      const registryProject = registryMap.get(project.slug);
      const registryCover = registryProject?.coverImage
        ? { src: registryProject.coverImage, alt: project.title }
        : undefined;
      const cover = getCover(project) ?? registryCover;
      const highlights = getHighlights(project);
      const badges = getProjectBadges(project);
      const searchable = [
        project.title,
        project.tagline,
        project.role,
        ...project.stack,
        ...project.highlights,
        ...project.demonstrates,
      ]
        .join(" ")
        .toLowerCase();

      return {
        project,
        cover,
        highlights,
        badges,
        searchable,
        isFeatured: featured.has(project.slug),
      };
    });
  }, [data, featured, registryMap]);
  const availableFilters = useMemo(() => {
    const categories = new Set<string>();
    projectMeta.forEach((item) => {
      item.badges.forEach((badge) => categories.add(badge));
    });
    return FILTER_ORDER.filter((label) => categories.has(label));
  }, [projectMeta]);
  const filteredProjects = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase();
    return projectMeta.filter((item) => {
      const matchesFilter =
        activeFilter === "all" || item.badges.includes(activeFilter);
      const matchesQuery =
        normalizedQuery.length === 0 || item.searchable.includes(normalizedQuery);
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, deferredQuery, projectMeta]);
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
    const loadStars = async () => {
      const slugs = Array.from(repoUrlBySlug.keys());
      if (slugs.length === 0) {
        return;
      }

      try {
        const response = await fetch(
          `/api/github-stars?repos=${encodeURIComponent(slugs.join(","))}`
        );
        if (!response.ok) {
          return;
        }
        const payload = (await response.json()) as {
          results?: Record<string, number | null>;
        };
        if (!payload.results) {
          return;
        }
        setStarsByRepo((prev) => {
          const next = { ...prev };
          Object.entries(payload.results ?? {}).forEach(([slug, stars]) => {
            const repoUrl = repoUrlBySlug.get(slug);
            if (!repoUrl) return;
            if (typeof stars === "number") {
              next[repoUrl] = stars;
            }
          });
          return next;
        });
      } catch {
        // ignore network errors
      }
    };

    loadStars();
  }, [repoUrlBySlug]);

  const handleFilterChange = useCallback((filter: string) => {
    startTransition(() => setActiveFilter(filter));
  }, [startTransition]);

  const handleQueryChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.target.value;
      startTransition(() => setQuery(nextValue));
    },
    [startTransition]
  );

  return (
    <section id="projects" className="page-section content-auto">
      <div className="section-inner">
        <div className="flex flex-col gap-3 items-start text-left" data-reveal>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="section-title md:whitespace-nowrap w-full text-center">
            {content.title}
          </h2>
          <p className="section-description max-w-3xl text-left">
            {content.description}
          </p>
        </div>

        <div className="project-controls" data-reveal>
          <div className="project-filters" role="group" aria-label={content.filters.label}>
            <button
              type="button"
              onClick={() => handleFilterChange("all")}
              className={`filter-pill ${activeFilter === "all" ? "is-active" : ""}`}
              aria-pressed={activeFilter === "all"}
            >
              {content.filters.allLabel}
            </button>
            {availableFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => handleFilterChange(filter)}
                className={`filter-pill ${activeFilter === filter ? "is-active" : ""}`}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="project-search">
            <input
              type="search"
              value={query}
              onChange={handleQueryChange}
              placeholder={content.filters.searchPlaceholder}
              aria-label={content.filters.searchPlaceholder}
              className="project-search__input"
            />
            <span className="project-search__meta" aria-live="polite">
              {formatResultsLabel(
                content.filters.resultsLabel,
                filteredProjects.length,
                projectMeta.length
              )}
              {isPending ? " ..." : ""}
            </span>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="project-empty card card-muted" data-reveal>
            <p className="card-title text-left">{content.filters.emptyTitle}</p>
            <p className="card-subtitle text-left">
              {content.filters.emptyDescription}
            </p>
          </div>
        ) : null}

        <div className="grid gap-5 lg:grid-cols-2 projects-grid">
          {filteredProjects.map((item, index) => {
            const { project, cover, highlights, badges, isFeatured } = item;
            const stars = starsByRepo[project.repoUrl];
            const isOpen = selectedProject?.slug === project.slug;
            const isLoading = loadingSlug === project.slug;
            const openLabel = isEn ? "Open project details" : "Abrir detalhes do projeto";

            return (
              <article
                key={project.slug}
                className="card card-hover project-card relative flex h-full flex-col gap-4 group"
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
                  <div className="card-media project-card__media relative w-full">
                    <SafeImage
                      src={cover.src}
                      alt={cover.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      quality={85}
                      className="object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
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

                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("click_github", "outbound", project.slug)
                    }
                    className="btn-outline btn-github focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                  >
                    {content.caseLabel}
                  </a>

                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("click_github", "outbound", project.slug)
                    }
                    className="btn-outline btn-github focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
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
                      ? stars.toLocaleString(isEn ? "en" : "pt-BR")
                      : "GitHub"}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8">
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

