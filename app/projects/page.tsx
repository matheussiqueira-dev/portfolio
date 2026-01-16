import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { sitePt } from "@/data/site.pt";

type PageProps = {
  searchParams?: {
    stack?: string;
  };
};

export const metadata: Metadata = {
  title: "Projetos | Matheus Siqueira",
  description:
    "Lista de projetos e estudos de caso com foco em dados, BI e automacao.",
  alternates: {
    languages: {
      "pt-BR": "/projects",
      "en-US": "/en/projects",
    },
  },
};

export default function ProjectsPage({ searchParams }: PageProps) {
  const filters = sitePt.projectsPage.filters;
  const requested = searchParams?.stack;
  const activeFilter = filters.includes(requested ?? "") ? requested : "all";
  const filteredProjects =
    activeFilter && activeFilter !== "all"
      ? projects.filter((project) => project.stack.includes(activeFilter))
      : projects;

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            {sitePt.projectsPage.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            {sitePt.projectsPage.title}
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl">
            {sitePt.projectsPage.description}
          </p>
          <Link
            href="/demos"
            className="inline-flex w-fit text-sm text-emerald-200 underline decoration-emerald-400/50 underline-offset-4 transition hover:text-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
          >
            {sitePt.projectsPage.demosLabel}
          </Link>
        </header>

        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
            {sitePt.projectsPage.filterLabel}
          </span>
          <Link
            href="/projects"
            className={`rounded-full border px-3 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
              activeFilter === "all"
                ? "border-white/30 text-white"
                : "border-white/10 text-slate-300 hover:border-white/30"
            }`}
          >
            {sitePt.projectsPage.allLabel}
          </Link>
          {filters.map((filter) => (
            <Link
              key={filter}
              href={`/projects?stack=${encodeURIComponent(filter)}`}
              className={`rounded-full border px-3 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                activeFilter === filter
                  ? "border-white/30 text-white"
                  : "border-white/10 text-slate-300 hover:border-white/30"
              }`}
            >
              {filter}
            </Link>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {project.title}
                  </h2>
                  <p className="text-sm text-slate-300 mt-2">
                    {project.tagline}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {project.role}
                </span>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed">
                {project.features[0] ?? project.problem[0]}
              </p>

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

              <div className="flex flex-wrap gap-3 pt-2 text-xs text-slate-200">
                <Link
                  href={`/projects/${project.slug}`}
                  className="rounded-full border border-white/20 px-4 py-2 font-semibold text-white transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  {sitePt.projectsPage.caseLabel}
                </Link>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  {sitePt.projects.modal.githubLabel}
                </a>
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-emerald-400/40 px-4 py-2 text-emerald-200 transition hover:border-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
                  >
                    {sitePt.projects.modal.demoLabel}
                  </a>
                ) : (
                  <span className="rounded-full border border-white/10 px-4 py-2 text-slate-400">
                    {sitePt.demos.demoSoonLabel}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}