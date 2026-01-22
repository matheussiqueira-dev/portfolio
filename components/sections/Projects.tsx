"use client";

import dynamic from "next/dynamic";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { projects } from "@/data/projects";
import { projectsEn } from "@/data/projects.en";
import { sitePt } from "@/data/site.pt";
import { siteEn } from "@/data/site.en";
import type { Project } from "@/data/projects.types";

const ProjectModal = dynamic(() => import("./ProjectModal"), {
  ssr: false,
  loading: () => null,
});

const getCover = (project: Project) =>
  project.screenshots.find((shot) => shot.src.includes("/cover.")) ??
  project.screenshots[0];

const getHighlights = (project: Project) => {
  const base = project.highlights.length > 0 ? project.highlights : project.demonstrates;
  return base.slice(0, 3);
};

export default function Projects() {
  const pathname = usePathname() ?? "/";
  const isEn = pathname.startsWith("/en");
  const content = isEn ? siteEn.projects : sitePt.projects;
  const data = useMemo(() => (isEn ? projectsEn : projects), [isEn]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const handleClose = useCallback(() => setSelectedProject(null), []);
  const projectsHref = isEn ? "/en/projects" : "/projects";

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
              : `/projects/${project.slug}`;

            return (
              <article
                key={project.slug}
                className="card p-6 flex flex-col gap-4 transition hover:-translate-y-1 hover:shadow-xl"
              >
                {cover ? (
                  <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-xl border border-[color:var(--border)]">
                    <ImageWithFallback
                      src={cover.src}
                      alt={cover.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      quality={85}
                      className="object-cover"
                    />
                  </div>
                ) : null}

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
                    {project.title}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                    {content.cardLabel}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                  {project.tagline}
                </p>

                {highlights.length > 0 ? (
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
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

                <div className="flex flex-wrap items-center gap-3 pt-2">
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
                    className="text-xs text-[color:var(--muted)] underline decoration-[color:var(--border)] underline-offset-4 transition hover:text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 rounded"
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
                    className="text-xs text-[color:var(--muted)] underline decoration-[color:var(--border)] underline-offset-4 transition hover:text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 rounded"
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
