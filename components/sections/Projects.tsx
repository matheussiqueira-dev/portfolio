import Link from "next/link";
import { projects } from "../../data/projects";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const projectsToShow = featuredProjects.length > 0 ? featuredProjects : projects;

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Projetos
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Estudos de caso em destaque
          </h2>
          <p className="text-base text-slate-300 max-w-2xl">
            Projetos que combinam produto digital, dados e automação, com foco em
            clareza, performance e manutenção.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projectsToShow.map((project) => (
            <ProjectModal key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-emerald-200 underline decoration-emerald-400/50 underline-offset-4 transition hover:text-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
          >
            Ver todos os projetos
          </Link>
        </div>
      </div>
    </section>
  );
}
