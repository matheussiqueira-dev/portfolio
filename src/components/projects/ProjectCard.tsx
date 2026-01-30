import Link from "next/link";
import type { Project } from "@/data/projects";
import { SafeImage } from "@/components/demo/SafeImage";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <div className="relative aspect-[16/9] w-full">
        <SafeImage
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="truncate text-sm font-semibold">{project.title}</h3>
          {project.isInteractive ? (
            <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px]">
              Interativo
            </span>
          ) : null}
        </div>

        <p className="text-sm opacity-80">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 px-2 py-0.5 text-[11px] opacity-80"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-2">
          <Link
            href={`/projects/${project.id}`}
            className="rounded-md border border-white/10 px-3 py-2 text-sm hover:bg-white/5"
          >
            Ver detalhes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
