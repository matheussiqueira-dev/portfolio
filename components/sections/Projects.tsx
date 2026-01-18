"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import type { Project } from "@/data/projects.types";
import type { SiteContent } from "@/data/site.types";

const ProjectModal = dynamic(() => import("./ProjectModal"), {
  ssr: false,
  loading: () => null,
});

type Props = {
  content: SiteContent["projects"];
  projects: Project[];
  localePrefix?: string;
};

const getCover = (project: Project) =>
  project.screenshots.find((shot) => shot.src.includes("cover")) ??
  project.screenshots[0];

const getHighlight = (project: Project) =>
  project.highlights[0] ??
  project.demonstrates[0] ??
  project.features[0] ??
  project.solution[0] ??
  project.problem[0];

export default function Projects({
  content,
  projects,
  localePrefix = "",
}: Props) {
  const projectsHref = localePrefix ? `${localePrefix}/projects` : "/projects";
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const handleOpen = (project: Project, target: HTMLButtonElement) => {
    triggerRef.current = target;
    setSelectedProject(project);
  };

  const handleClose = useCallback(() => {
    setSelectedProject(null);
    const trigger = triggerRef.current;
    if (trigger) {
      requestAnimationFrame(() => trigger.focus());
    }
  }, []);

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-20 content-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            {content.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            {content.title}
          </h2>
          <p className="text-base text-slate-300 max-w-2xl">
            {content.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => {
            const cover = getCover(project);
            const highlight = getHighlight(project);
            const caseHref = localePrefix
              ? `${localePrefix}/projects/${project.slug}`
              : `/projects/${project.slug}`;
            const trackCaseView = () =>
              trackEvent("view_case", "engagement", project.slug);
            const trackGithub = () =>
              trackEvent("click_github", "outbound", project.slug);

            return (
              <article
                key={project.slug}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4 transition hover:-translate-y-1 hover:border-white/20"
              >
                {cover ? (
                  <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-xl border border-white/10">
                    <Image
                      src={cover.src}
                      alt={cover.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 520px"
                      className="object-cover"
                    />
                  </div>
                ) : null}

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {content.cardLabel}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-slate-300">
                  {project.tagline}
                </p>

                {highlight ? (
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      {content.highlightLabel}
                    </p>
                    <p className="text-sm text-slate-300">{highlight}</p>
                  </div>
                ) : null}

                {project.demonstrates[0] ? (
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      {content.modal.demonstratesTitle}
                    </p>
                    <p className="text-sm text-slate-300">
                      {project.demonstrates[0]}
                    </p>
                  </div>
                ) : null}

                <ul className="flex flex-wrap gap-2 text-xs text-slate-200">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={(event) => handleOpen(project, event.currentTarget)}
                    className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    {content.detailsLabel}
                  </button>

                  <Link
                    href={caseHref}
                    onClick={trackCaseView}
                    className="text-xs text-slate-200 underline decoration-white/30 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                  >
                    {content.caseLabel}
                  </Link>

                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={trackGithub}
                    className="text-xs text-slate-200 underline decoration-white/30 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                  >
                    {content.modal.githubLabel}
                  </a>

                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-200 underline decoration-white/30 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                    >
                      {content.modal.demoLabel}
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            href={projectsHref}
            className="inline-flex items-center gap-2 text-sm text-emerald-200 underline decoration-emerald-400/50 underline-offset-4 transition hover:text-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
          >
            {content.viewAllLabel}
          </Link>
        </div>
      </div>

      {selectedProject ? (
        <ProjectModal
          project={selectedProject}
          labels={content}
          localePrefix={localePrefix}
          onClose={handleClose}
        />
      ) : null}
    </section>
  );
}
