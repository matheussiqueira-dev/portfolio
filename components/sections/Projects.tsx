"use client";

import dynamic from "next/dynamic";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { projects, projectOrder } from "@/data/projects";
import { projectsEn, projectOrderEn } from "@/data/projects.en";
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

export default function Projects() {
  const pathname = usePathname() ?? "/";
  const isEn = pathname.startsWith("/en");
  const content = isEn ? siteEn.projects : sitePt.projects;
  const data = useMemo(() => (isEn ? projectsEn : projects), [isEn]);
  const featured = useMemo(
    () => new Set((isEn ? projectOrderEn : projectOrder).slice(0, 3)),
    [isEn]
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const handleClose = useCallback(() => setSelectedProject(null), []);
  const projectsHref = isEn ? "/en/projects" : "/projetos";

  return (
    <section id="projects" className="page-section content-auto">
      <div className="section-inner">
        <div className="flex flex-col gap-4 mb-10">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[color:var(--foreground)]">
            {content.title}
          </h2>
          <p className="text-base text-[color:var(--muted)] max-w-2xl">
            {content.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {data.map((project) => {
            const cover = getCover(project);
            const highlights = getHighlights(project);
            const caseHref = isEn
              ? `/en/projects/${project.slug}`
              : `/projetos/${project.slug}`;
            const isFeatured = featured.has(project.slug);

            return (
              <article
                key={project.slug}
                className="card card-hover relative flex h-full flex-col gap-5"
              >
                {isFeatured ? (
                  <span className="card-badge rounded-full bg-[color:var(--accent)]/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-strong)]">
                    {content.featuredLabel}
                  </span>
                ) : null}
                {cover ? (
                  <div className="card-media relative aspect-[1200/630] w-full">
                    <ImageWithFallback
                      src={cover.src}
                      alt={cover.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      quality={85}
                      fallbackSrc="/projects/placeholder.webp"
                      className="object-cover"
                    />
                  </div>
                ) : null}

                <div className="card-header">
                  <span className="card-kicker">{content.cardLabel}</span>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-subtitle">{project.tagline}</p>
                </div>

                {highlights.length > 0 ? (
                  <div className="space-y-2 text-left">
                    <p className="card-meta text-center">
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
                    onClick={() => setSelectedProject(project)}
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
