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
  const backHref = localePrefix ? `${localePrefix}/projects` : "/projects";

  return (
    <main className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-5xl mx-auto space-y-10">
        <Link
          href={backHref}
          className="text-sm text-slate-300 underline decoration-white/30 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
        >
          {labels.backLabel}
        </Link>

        <header className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            {project.title}
          </h1>
          <p className="text-lg text-slate-300">{project.tagline}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span className="uppercase tracking-[0.2em] text-slate-500 text-xs">
              {labels.roleLabel}
            </span>
            <span>{project.role}</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-4 py-2 text-xs text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              GitHub
            </a>
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                Demo
              </a>
            ) : null}
          </div>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">
            {labels.contextTitle}
          </h2>
          <ul className="space-y-2 text-sm text-slate-300">
            {project.problem.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">
            {labels.solutionTitle}
          </h2>
          <ul className="space-y-2 text-sm text-slate-300">
            {project.solution.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">
            {labels.featuresTitle}
          </h2>
          <ul className="space-y-2 text-sm text-slate-300">
            {project.features.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">
            {labels.stackTitle}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            {labels.galleryTitle}
          </h2>
          <MediaGallery items={project.screenshots} />
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">
            {labels.howToRunTitle}
          </h2>
          <ol className="space-y-2 text-sm text-slate-300 list-decimal list-inside">
            {project.howToRun.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
