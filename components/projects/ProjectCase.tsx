import Link from "next/link";
import type { Project } from "@/data/projects.types";
import type { SiteContent } from "@/data/site.types";
import MediaGallery from "./MediaGallery";

type Props = {
  project: Project;
  labels: SiteContent["projectDetail"];
  localePrefix?: string;
};

export default function ProjectCase({ project, labels, localePrefix = "" }: Props) {
  const backHref = localePrefix ? `${localePrefix}/projects` : "/projetos";

  return (
    <main className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-5xl mx-auto space-y-10">
        <Link
          href={backHref}
          className="text-sm text-[color:var(--muted)] underline decoration-[color:var(--border)] underline-offset-4 transition hover:text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 rounded"
        >
          {labels.backLabel}
        </Link>

        <header className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-[color:var(--foreground)]">
            {project.title}
          </h1>
          <p className="text-lg text-[color:var(--muted)]">{project.tagline}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-[color:var(--muted)]">
            <span className="uppercase tracking-[0.2em] text-[color:var(--muted)] text-xs">
              {labels.roleLabel}
            </span>
            <span>{project.role}</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline btn-github focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              GitHub
            </a>
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
              >
                Demo
              </a>
            ) : null}
          </div>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            {labels.contextTitle}
          </h2>
          <ul className="space-y-2 text-sm text-[color:var(--muted)]">
            {project.problem.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            {labels.solutionTitle}
          </h2>
          <ul className="space-y-2 text-sm text-[color:var(--muted)]">
            {project.solution.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-soft)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            {labels.featuresTitle}
          </h2>
          <ul className="space-y-2 text-sm text-[color:var(--muted)]">
            {project.features.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            {labels.stackTitle}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            {labels.galleryTitle}
          </h2>
          <MediaGallery items={project.screenshots} />
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            {labels.howToRunTitle}
          </h2>
          <ol className="space-y-2 text-sm text-[color:var(--muted)] list-decimal list-inside">
            {project.howToRun.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}

