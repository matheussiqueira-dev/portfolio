import Image from "next/image";
import { FiArrowLeft, FiArrowUpRight, FiGithub, FiPlayCircle } from "react-icons/fi";

import type { Project } from "@/data/projects.types";
import type { SiteContent } from "@/data/site.types";
import { Link } from "@/core/i18n/navigation";
import {
  formatProjectPeriod,
  getProjectCategoryLabel,
  getProjectStatusLabel,
  inferProjectCategories,
  inferProjectStatus,
  projectSupportsDemo,
} from "@/system/config/project-intelligence";
import { commandActionClass } from "@/ui/components/command/actionStyles";
import { SectionFrame } from "@/ui/components/command/SectionFrame";
import { StatTile } from "@/ui/components/command/StatTile";
import { TelemetryPill } from "@/ui/components/command/TelemetryPill";

type Props = {
  project: Project;
  locale: "pt" | "en";
  copy: SiteContent["projectDetail"];
};

const renderMedia = (src: string, alt: string, type?: "image" | "gif" | "video") => {
  if (type === "video" || src.endsWith(".mp4")) {
    return (
      <video
        src={src}
        controls
        playsInline
        className="aspect-[16/10] w-full rounded-[1rem] object-cover"
      />
    );
  }

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[1rem]">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
    </div>
  );
};

export default function ProjectCasePage({ project, locale, copy }: Props) {
  const categories = inferProjectCategories({
    slug: project.slug,
    title: project.title,
    stack: project.stack,
    links: {
      repo: project.repoUrl,
      live: project.demoUrl,
      demo: project.demo?.kind === "external" ? project.demo.url : undefined,
      caseStudy: `/projects/${project.slug}`,
    },
  });
  const status = inferProjectStatus({
    slug: project.slug,
    title: project.title,
    stack: project.stack,
    links: {
      repo: project.repoUrl,
      live: project.demoUrl,
      demo: project.demo?.kind === "external" ? project.demo.url : undefined,
      caseStudy: `/projects/${project.slug}`,
    },
  });
  const hasDemo = projectSupportsDemo(project);
  const heroVideo =
    project.demo?.kind === "video"
      ? {
          src: project.demo.src,
          poster: project.demo.poster,
        }
      : project.intro?.video;

  return (
    <main className="layout-container page-shell command-page">
      <section data-reveal className="grid gap-5 pb-[var(--section-y)] xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
        <div className="command-surface">
          <div className="command-surface__shell">
            <div className="mb-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <TelemetryPill
                  key={category}
                  label={getProjectCategoryLabel(category, locale)}
                />
              ))}
              <TelemetryPill
                label={getProjectStatusLabel(status, locale)}
                tone={status === "production_ready" ? "success" : "accent"}
              />
            </div>

            <p className="section-eyebrow">{project.role}</p>
            <h1 className="section-title mt-4 !text-[clamp(2.6rem,5vw,4.8rem)]">
              {project.title}
            </h1>
            <p className="mt-4 max-w-4xl font-[family-name:var(--font-ui)] text-xl font-semibold uppercase tracking-[0.12em] text-[color:var(--accent-soft)]">
              {project.tagline}
            </p>
            <p className="mt-5 max-w-4xl text-base leading-8 text-[color:var(--muted)]">
              {project.techSummary}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatTile label={copy.roleLabel} value={project.role} tone="accent" />
              <StatTile
                label={locale === "pt" ? "Stack" : "Stack"}
                value={`${project.stack.length} tech`}
              />
              <StatTile
                label={locale === "pt" ? "Periodo" : "Timeline"}
                value={formatProjectPeriod(undefined, locale)}
              />
              <StatTile
                label={locale === "pt" ? "Demo" : "Demo"}
                value={hasDemo ? "ONLINE" : "REPOSITORY"}
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/projects" className={commandActionClass("ghost")}>
                <FiArrowLeft aria-hidden="true" />
                {copy.backLabel}
              </Link>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={commandActionClass("secondary")}
              >
                <FiGithub aria-hidden="true" />
                GitHub
              </a>
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={commandActionClass("primary")}
                >
                  <FiPlayCircle aria-hidden="true" />
                  {copy.ctaButton}
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          {heroVideo ? (
            <div className="command-surface">
              <div className="command-surface__shell">
                <p className="section-eyebrow">{copy.galleryTitle}</p>
                <div className="mt-4 overflow-hidden rounded-[1.2rem] border border-[color:var(--border)] bg-black">
                  <video
                    src={heroVideo.src}
                    poster={heroVideo.poster}
                    controls
                    playsInline
                    className="aspect-video w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ) : null}

          <div className="command-surface">
            <div className="command-surface__shell">
              <p className="section-eyebrow">{copy.stackTitle}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <TelemetryPill key={item} label={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionFrame
        eyebrow={copy.contextTitle}
        title={project.intro?.title ?? project.title}
        description={project.context}
      >
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)]">
          <div className="grid gap-4">
            {project.intro?.paragraphs.map((paragraph) => (
              <div
                key={paragraph}
                className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5"
              >
                <p className="text-sm leading-8 text-[color:var(--muted)]">{paragraph}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-4">
            <StatTile
              label={locale === "pt" ? "Contexto" : "Context"}
              value={project.role}
              detail={project.context}
            />
            <StatTile
              label={locale === "pt" ? "Conclusao" : "Conclusion"}
              value={project.conclusion[0] ?? project.title}
              detail={project.conclusion[1]}
            />
          </div>
        </div>
      </SectionFrame>

      <SectionFrame
        eyebrow={copy.problemTitle}
        title={copy.solutionTitle}
        description={project.techSummary}
        className="mt-5"
      >
        <div className="grid gap-5 xl:grid-cols-2">
          <article className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <p className="section-eyebrow">{copy.problemTitle}</p>
            <ul className="command-bullets mt-4">
              {project.problem.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <p className="section-eyebrow">{copy.solutionTitle}</p>
            <ul className="command-bullets mt-4">
              {project.solution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <p className="section-eyebrow">{copy.dataTitle}</p>
            <ul className="command-bullets mt-4">
              {project.dataUsed.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <p className="section-eyebrow">{copy.featuresTitle}</p>
            <ul className="command-bullets mt-4">
              {project.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </SectionFrame>

      <SectionFrame
        eyebrow={copy.impactTitle}
        title={copy.demonstratesTitle}
        description={project.highlights[0]}
        className="mt-5"
      >
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <article className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <p className="section-eyebrow">{copy.impactTitle}</p>
            <ul className="command-bullets mt-4">
              {project.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <p className="section-eyebrow">{copy.demonstratesTitle}</p>
            <ul className="command-bullets mt-4">
              {project.demonstrates.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </SectionFrame>

      {project.screenshots.length > 0 ? (
        <SectionFrame
          eyebrow={copy.galleryTitle}
          title={copy.galleryTitle}
          description={project.tagline}
          className="mt-5"
        >
          <div className="grid gap-4 xl:grid-cols-2">
            {project.screenshots.map((item) => (
              <div
                key={item.src}
                className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4"
              >
                {renderMedia(item.src, item.alt, item.type)}
              </div>
            ))}
          </div>
        </SectionFrame>
      ) : null}

      {project.howToRun.length > 0 ? (
        <SectionFrame
          eyebrow={copy.howToRunTitle}
          title={copy.howToRunTitle}
          description={copy.ctaBody}
          className="mt-5"
        >
          <ul className="command-bullets">
            {project.howToRun.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SectionFrame>
      ) : null}

      <SectionFrame
        eyebrow={copy.linksTitle}
        title={copy.ctaTitle}
        description={project.conclusion.join(" ")}
        className="mt-5"
      >
        <div className="flex flex-wrap gap-3">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={commandActionClass("secondary")}
          >
            <FiGithub aria-hidden="true" />
            GitHub
          </a>
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={commandActionClass("primary")}
            >
              <FiArrowUpRight aria-hidden="true" />
              {copy.ctaButton}
            </a>
          ) : null}
        </div>
      </SectionFrame>
    </main>
  );
}
