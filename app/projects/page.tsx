import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Matheus Siqueira",
  description:
    "Lista de projetos e estudos de caso com foco em tecnologia, dados e desenvolvimento web.",
  openGraph: {
    title: "Projects | Matheus Siqueira",
    description:
      "Lista de projetos e estudos de caso com foco em tecnologia, dados e desenvolvimento web.",
    url: "/projects",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Projetos de Matheus Siqueira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Matheus Siqueira",
    description:
      "Lista de projetos e estudos de caso com foco em tecnologia, dados e desenvolvimento web.",
    images: ["/og.png"],
  },
};

export default function ProjectsPage() {
  const sortedProjects = [...projects].sort(
    (a, b) => Number(b.featured) - Number(a.featured)
  );

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Projects
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Estudos de caso e projetos
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl">
            Casos práticos que destacam soluções em dados, automação e
            desenvolvimento web, com foco em clareza e entrega.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {sortedProjects.map((project) => (
            <article
              key={project.slug}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {project.name}
                  </h2>
                  <p className="text-sm text-slate-300 mt-2">
                    {project.tagline}
                  </p>
                </div>
                {project.year ? (
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {project.year}
                  </span>
                ) : null}
              </div>

              <p className="text-sm text-slate-400 leading-relaxed">
                {project.description}
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
                  Detalhes
                </Link>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  Abrir GitHub
                </a>
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-emerald-400/40 px-4 py-2 text-emerald-200 transition hover:border-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
                  >
                    Abrir demo
                  </a>
                ) : (
                  <span className="rounded-full border border-white/10 px-4 py-2 text-slate-400">
                    Demo: em breve
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
