"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useMemo, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { sitePt } from "@/data/site.pt";
import { siteEn } from "@/data/site.en";
import type { Project, ProjectMedia } from "@/data/projects.types";

type Props = {
  project: Project;
  onClose: () => void;
};

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const inferMediaType = (media: ProjectMedia) => {
  if (media.type) {
    return media.type;
  }

  const src = media.src.toLowerCase();
  if (src.endsWith(".mp4") || src.endsWith(".webm")) {
    return "video";
  }
  if (src.endsWith(".gif")) {
    return "gif";
  }
  return "image";
};

const getCover = (screenshots: ProjectMedia[]) =>
  screenshots.find((shot) => shot.src.includes("/cover.")) ?? screenshots[0];

export default function ProjectModal({ project, onClose }: Props) {
  const pathname = usePathname() ?? "/";
  const isEn = pathname.startsWith("/en");
  const labels = useMemo(() => {
    const content = isEn ? siteEn.projects.modal : sitePt.projects.modal;
    return {
      title: content.title,
      closeLabel: content.closeLabel,
      problemTitle: content.problemTitle,
      solutionTitle: content.solutionTitle,
      featuresTitle: content.featuresTitle,
      demonstratesTitle: content.demonstratesTitle,
      githubLabel: content.githubLabel,
      demoLabel: content.demoLabel,
      caseCta: content.caseCta,
      dataTitle: isEn ? "Data used" : "Dados utilizados",
      highlightsTitle: isEn ? "Highlights" : "Destaques",
      howToRunTitle: isEn ? "How to run" : "Como executar",
      roleLabel: isEn ? "Role" : "Papel",
      galleryTitle: isEn ? "Media" : "Midia",
      demoSoon: isEn ? "Demo: coming soon" : "Demo: em breve",
    };
  }, [isEn]);

  const titleId = useId();
  const descId = useId();
  const dialogId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const caseHref = isEn
    ? `/en/projects/${project.slug}`
    : `/projects/${project.slug}`;

  const cover = getCover(project.screenshots);
  const gallery = project.screenshots.filter((shot) => shot !== cover);
  const stackPreview = project.stack.slice(0, 6);

  useEffect(() => {
    const dialog = dialogRef.current;
    const focusable = dialog?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
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
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-6 py-10 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        id={dialogId}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        tabIndex={-1}
        className="w-full max-w-3xl rounded-2xl border border-white/10 bg-[#0b0d10] p-8 text-slate-100 shadow-2xl motion-safe:animate-fade-in"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              {labels.title}
            </p>
            <h3 id={titleId} className="text-2xl font-semibold text-white">
              {project.title}
            </h3>
            <p id={descId} className="text-sm text-slate-300">
              {project.tagline}
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            {labels.closeLabel}
          </button>
        </div>

        {cover ? (
          <div className="mt-6 relative aspect-[1200/630] w-full overflow-hidden rounded-xl border border-white/10">
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover"
            />
          </div>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200">
            {labels.roleLabel}: {project.role}
          </span>
          {stackPreview.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 space-y-6">
          <section>
            <h4 className="text-sm font-semibold text-white mb-3">
              {labels.highlightsTitle}
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="text-sm font-semibold text-white mb-3">
              {labels.problemTitle}
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
              {labels.dataTitle}
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {project.dataUsed.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h4 className="text-sm font-semibold text-white mb-3">
              {labels.solutionTitle}
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
              {labels.featuresTitle}
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
              {labels.demonstratesTitle}
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
              {labels.howToRunTitle}
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {project.howToRun.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {gallery.length > 0 ? (
          <section className="mt-8 space-y-4">
            <h4 className="text-sm font-semibold text-white">
              {labels.galleryTitle}
            </h4>
            <div className="grid gap-4 sm:grid-cols-2">
              {gallery.map((media) => {
                const mediaType = inferMediaType(media);
                if (mediaType === "video") {
                  return (
                    <div
                      key={media.src}
                      className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/40"
                    >
                      <video
                        controls
                        preload="metadata"
                        className="h-full w-full object-cover"
                      >
                        <source src={media.src} />
                      </video>
                    </div>
                  );
                }

                if (mediaType === "gif") {
                  return (
                    <div
                      key={media.src}
                      className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black/40"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={media.src}
                        alt={media.alt}
                        width={960}
                        height={540}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  );
                }

                return (
                  <div
                    key={media.src}
                    className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10"
                  >
                    <Image
                      src={media.src}
                      alt={media.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </section>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href={caseHref}
            onClick={() => trackEvent("view_case", "engagement", project.slug)}
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            {labels.caseCta}
          </Link>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("click_github", "outbound", project.slug)}
            className="rounded-full border border-white/20 px-4 py-2 text-xs text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            {labels.githubLabel}
          </a>
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-4 py-2 text-xs text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              {labels.demoLabel}
            </a>
          ) : (
            <span className="rounded-full border border-white/10 px-4 py-2 text-xs text-slate-400">
              {labels.demoSoon}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
