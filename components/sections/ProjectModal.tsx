"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import type { Project } from "@/data/projects.types";
import type { SiteContent } from "@/data/site.types";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

type Props = {
  project: Project;
  labels: SiteContent["projects"];
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

export default function ProjectModal({
  project,
  labels,
  localePrefix = "",
}: Props) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const descId = useId();
  const dialogId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);
  const cover = getCover(project);
  const highlight = getHighlight(project);
  const caseHref = localePrefix
    ? `${localePrefix}/projects/${project.slug}`
    : `/projects/${project.slug}`;
  const trackCaseView = () =>
    trackEvent("view_case", "engagement", project.slug);
  const trackGithub = () =>
    trackEvent("click_github", "outbound", project.slug);

  useEffect(() => {
    if (open) {
      wasOpenRef.current = true;
      return;
    }

    if (wasOpenRef.current) {
      triggerRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const dialog = dialogRef.current;
    const focusable = dialog?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }

      if (event.key === "Tab" && focusable && focusable.length > 0) {
        const isFirst = document.activeElement === first;
        const isLast = document.activeElement === last;

        if (event.shiftKey && isFirst) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && isLast) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    first?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <article className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4 transition hover:-translate-y-1 hover:border-white/20">
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
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
            {labels.cardLabel}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-slate-300">
          {project.tagline}
        </p>

        {highlight ? (
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              {labels.highlightLabel}
            </p>
            <p className="text-sm text-slate-300">{highlight}</p>
          </div>
        ) : null}

        {project.demonstrates[0] ? (
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              {labels.modal.demonstratesTitle}
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
            ref={triggerRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-controls={dialogId}
            aria-expanded={open}
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            {labels.detailsLabel}
          </button>

          <Link
            href={caseHref}
            onClick={trackCaseView}
            className="text-xs text-slate-200 underline decoration-white/30 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
          >
            {labels.caseLabel}
          </Link>

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackGithub}
            className="text-xs text-slate-200 underline decoration-white/30 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
          >
            {labels.modal.githubLabel}
          </a>

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-200 underline decoration-white/30 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
            >
              {labels.modal.demoLabel}
            </a>
          ) : null}
        </div>
      </article>

      {open ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-6 py-10 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            ref={dialogRef}
            id={dialogId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            tabIndex={-1}
            className="w-full max-w-3xl rounded-3xl border border-white/10 bg-[#0b0d10] p-8 text-slate-100 shadow-2xl motion-safe:animate-fade-in"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {labels.modal.title}
                </p>
                <h3 id={titleId} className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {labels.modal.closeLabel}
              </button>
            </div>

            <div id={descId} className="mt-6 space-y-6">
              <section>
                <h4 className="text-sm font-semibold text-white mb-3">
                  {labels.modal.problemTitle}
                </h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {project.problem.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h4 className="text-sm font-semibold text-white mb-3">
                  {labels.modal.solutionTitle}
                </h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {project.solution.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h4 className="text-sm font-semibold text-white mb-3">
                  {labels.modal.featuresTitle}
                </h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {project.features.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h4 className="text-sm font-semibold text-white mb-3">
                  {labels.modal.demonstratesTitle}
                </h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  {project.demonstrates.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h4 className="text-sm font-semibold text-white mb-3">
                  {labels.modal.stackTitle}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={caseHref}
                onClick={trackCaseView}
                className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {labels.modal.caseCta}
              </Link>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackGithub}
                className="rounded-full border border-white/20 px-4 py-2 text-xs text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {labels.modal.githubLabel}
              </a>
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 px-4 py-2 text-xs text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  {labels.modal.demoLabel}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
