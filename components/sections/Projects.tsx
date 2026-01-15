import { projects } from "../../data/projects";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Projetos
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Entregas com foco em impacto e clareza
          </h2>
          <p className="text-base text-slate-300 max-w-2xl">
            Cada projeto traz um desafio diferente, com soluções pensadas para
            performance, dados confiáveis e uma experiência consistente.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectModal key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
