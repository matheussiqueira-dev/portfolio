import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";
import { siteCopy } from "@/lib/siteCopy";
import { projects } from "../../data/projects";
import ProjectModal from "./ProjectModal";

type Props = {
  locale?: Locale;
};

export default function Projects({ locale = "pt" }: Props) {
  const copy = siteCopy[locale].projectsSection;
  const featuredProjects = projects.filter((project) => project.featured);
  const projectsToShow = featuredProjects.length > 0 ? featuredProjects : projects;

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            {copy.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            {copy.title}
          </h2>
          <p className="text-base text-slate-300 max-w-2xl">
            {copy.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projectsToShow.map((project) => (
            <ProjectModal key={project.slug} project={project} locale={locale} />
          ))}
        </div>

        <div className="mt-10">
          <Link
            href={localizeHref("/projects", locale)}
            className="inline-flex items-center gap-2 text-sm text-emerald-200 underline decoration-emerald-400/50 underline-offset-4 transition hover:text-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
          >
            {copy.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
