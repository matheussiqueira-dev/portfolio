import Link from "next/link";
import type { Project } from "@/data/projects.types";
import type { SiteContent } from "@/data/site.types";
import ProjectModal from "./ProjectModal";

type Props = {
  content: SiteContent["projects"];
  projects: Project[];
  localePrefix?: string;
};

export default function Projects({
  content,
  projects,
  localePrefix = "",
}: Props) {
  const projectsHref = localePrefix ? `${localePrefix}/projects` : "/projects";

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            {content.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            {content.title}
          </h2>
          <p className="text-base text-slate-300 max-w-2xl">
            {content.description}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectModal
              key={project.slug}
              project={project}
              labels={content}
              localePrefix={localePrefix}
            />
          ))}
        </div>

        <div className="mt-10">
          <Link
            href={projectsHref}
            className="inline-flex items-center gap-2 text-sm text-emerald-200 underline decoration-emerald-400/50 underline-offset-4 transition hover:text-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
          >
            {content.viewAllLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}