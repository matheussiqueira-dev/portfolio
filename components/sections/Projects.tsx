import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20">
      <h2 className="text-3xl font-semibold mb-10">Projetos</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-border rounded-lg p-6 flex flex-col gap-4"
          >
            <h3 className="text-xl font-medium">{project.title}</h3>

            <p className="text-muted-foreground">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-2 text-sm">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="px-2 py-1 border rounded"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="flex gap-4 mt-2">
              <a
                href={project.github}
                target="_blank"
                className="underline"
              >
                GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  className="underline"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
