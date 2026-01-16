import type { Metadata } from "next";
import Link from "next/link";
import { getProjectCopy, projects } from "@/data/projects";
import { localizeHref } from "@/lib/i18n";
import { siteCopy } from "@/lib/siteCopy";

export const metadata: Metadata = {
  title: "Demos | Matheus Siqueira",
  description:
    "Links de demonstrações e repositórios dos projetos de Matheus Siqueira.",
  openGraph: {
    title: "Demos | Matheus Siqueira",
    description:
      "Links de demonstrações e repositórios dos projetos de Matheus Siqueira.",
    url: "/demos",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Demos e links",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Demos | Matheus Siqueira",
    description:
      "Links de demonstrações e repositórios dos projetos de Matheus Siqueira.",
    images: ["/og.png"],
  },
};

export default function DemosPage() {
  const locale = "pt";
  const copy = siteCopy[locale].demos;

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            {copy.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            {copy.title}
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl">
            {copy.description}
          </p>
          <Link
            href={localizeHref("/projects", locale)}
            className="inline-flex w-fit text-sm text-emerald-200 underline decoration-emerald-400/50 underline-offset-4 transition hover:text-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
          >
            {copy.viewProjects}
          </Link>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const projectCopy = getProjectCopy(project, locale);

            return (
              <article
                key={project.slug}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4"
              >
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {project.name}
                  </h2>
                  <p className="text-sm text-slate-300 mt-2">
                    {projectCopy.tagline}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-slate-200">
                  <Link
                    href={localizeHref(`/projects/${project.slug}`, locale)}
                    className="rounded-full border border-white/20 px-4 py-2 font-semibold text-white transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    {copy.fullCase}
                  </Link>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    GitHub
                  </a>
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-emerald-400/40 px-4 py-2 text-emerald-200 transition hover:border-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
                    >
                      {copy.openDemo}
                    </a>
                  ) : (
                    <span className="rounded-full border border-white/10 px-4 py-2 text-slate-400">
                      {copy.demoSoon}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            {copy.publishTitle}
          </h2>
          <ul className="space-y-3 text-sm text-slate-300">
            {copy.publishItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
