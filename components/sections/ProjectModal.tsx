"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";
import { siteCopy } from "@/lib/siteCopy";
import { getProjectCopy, type Project } from "../../data/projects";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

type Props = {
  project: Project;
  locale?: Locale;
};

export default function ProjectModal({ project, locale = "pt" }: Props) {
  const copy = siteCopy[locale].modal;
  const projectCopy = getProjectCopy(project, locale);
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const descId = useId();
  const dialogId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wasOpenRef = useRef(false);

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
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
          <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
            {project.year ?? copy.projectLabel}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-slate-300">
          {projectCopy.tagline}
        </p>

        <ul className="space-y-2 text-sm text-slate-300">
          {projectCopy.highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

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
            {copy.viewDetails}
          </button>

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-200 underline decoration-white/30 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
          >
            {copy.github}
          </a>

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-200 underline decoration-white/30 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
            >
              {copy.openDemo}
            </a>
          ) : (
            <Link
              href={localizeHref(`/projects/${project.slug}#capturas`, locale)}
              className="text-xs text-emerald-200 underline decoration-emerald-400/50 underline-offset-4 transition hover:text-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 rounded"
            >
              {copy.viewDemo}
            </Link>
          )}
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
            className="w-full max-w-2xl rounded-3xl border border-white/10 bg-[#0b0d10] p-8 text-slate-100 shadow-2xl motion-safe:animate-fade-in"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {copy.projectDetails}
                </p>
                <h3 id={titleId} className="text-2xl font-semibold text-white">
                  {project.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {copy.close}
              </button>
            </div>

            <p id={descId} className="mt-4 text-sm text-slate-300">
              {projectCopy.description}
            </p>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">
                {copy.highlights}
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {projectCopy.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">
                {copy.features}
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {projectCopy.features.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">
                {copy.stack}
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
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-4 py-2 text-xs text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {copy.github}
              </a>
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  {copy.openDemo}
                </a>
              ) : (
                <Link
                  href={localizeHref(`/projects/${project.slug}#capturas`, locale)}
                  className="rounded-full border border-emerald-400/40 px-4 py-2 text-xs font-semibold text-emerald-200 transition hover:border-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
                >
                  {copy.viewDemo}
                </Link>
              )}
              <Link
                href={localizeHref(`/projects/${project.slug}`, locale)}
                className="rounded-full border border-emerald-400/40 px-4 py-2 text-xs font-semibold text-emerald-200 transition hover:border-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
              >
                {copy.fullCase}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
