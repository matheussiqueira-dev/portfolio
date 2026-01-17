import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { sitePt } from "@/data/site.pt";

export const metadata: Metadata = {
  title: "Demos | Matheus Siqueira",
  description:
    "Demos e repositorios dos projetos de dados, BI e automacao, com foco em casos reais, validacao tecnica rapida e avaliacao objetiva por recrutadores e gestores tecnicos.",
  alternates: {
    languages: {
      "pt-BR": "/demos",
      "en-US": "/en/demos",
    },
  },
  openGraph: {
    title: "Demos | Matheus Siqueira",
    description:
      "Demos e repositorios dos projetos de dados, BI e automacao, com foco em casos reais, validacao tecnica rapida e avaliacao objetiva por recrutadores e gestores tecnicos.",
    url: "/demos",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Demos e repositorios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Demos | Matheus Siqueira",
    description:
      "Demos e repositorios dos projetos de dados, BI e automacao, com foco em casos reais, validacao tecnica rapida e avaliacao objetiva por recrutadores e gestores tecnicos.",
    images: ["/og.png"],
  },
};

export default function DemosPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            {sitePt.demos.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            {sitePt.demos.title}
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl">
            {sitePt.demos.description}
          </p>
          <Link
            href="/projects"
            className="inline-flex w-fit text-sm text-emerald-200 underline decoration-emerald-400/50 underline-offset-4 transition hover:text-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
          >
            {sitePt.demos.viewProjectsLabel}
          </Link>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4"
            >
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {project.title}
                </h2>
                <p className="text-sm text-slate-300 mt-2">
                  {project.tagline}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-slate-200">
                <Link
                  href={`/projects/${project.slug}`}
                  className="rounded-full border border-white/20 px-4 py-2 font-semibold text-white transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  {sitePt.demos.fullCaseLabel}
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
                    {sitePt.demos.openDemoLabel}
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

        <section className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            {sitePt.demos.publishTitle}
          </h2>
          <ul className="space-y-3 text-sm text-slate-300">
            {sitePt.demos.publishItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
