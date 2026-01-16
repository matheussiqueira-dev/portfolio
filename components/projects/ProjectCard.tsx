import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects.types";

type Props = {
  project: Project;
  caseLabel: string;
  localePrefix?: string;
};

const getCover = (project: Project) =>
  project.screenshots.find((shot) => shot.src.includes("cover")) ??
  project.screenshots[0];

export default function ProjectCard({
  project,
  caseLabel,
  localePrefix = "",
}: Props) {
  const cover = getCover(project);
  const caseHref = localePrefix
    ? `${localePrefix}/projects/${project.slug}`
    : `/projects/${project.slug}`;

  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4 transition hover:-translate-y-1 hover:border-white/20">
      {cover ? (
        <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-xl border border-white/10">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 480px"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-slate-300">{project.tagline}</p>
        <p className="text-xs text-slate-400">{project.features[0]}</p>
      </div>

      <div className="flex flex-wrap gap-2 text-xs text-slate-200">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 px-3 py-1"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        <Link
          href={caseHref}
          className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          {caseLabel}
        </Link>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/20 px-4 py-2 text-xs text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          GitHub
        </a>
      </div>
    </article>
  );
}
