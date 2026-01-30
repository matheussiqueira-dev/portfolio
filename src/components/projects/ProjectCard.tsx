import Link from "next/link";
import SafeImage from "@/src/components/demo/SafeImage";
import type { Project } from "@/src/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="card card-hover flex h-full flex-col gap-5">
      {project.coverImage ? (
        <div className="card-media relative aspect-[1200/630] w-full">
          <SafeImage
            src={project.coverImage}
            alt={`Capa do projeto ${project.title}`}
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="card-header">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-subtitle">{project.shortDescription}</p>
      </div>

      <div className="flex flex-wrap gap-2 text-xs text-[color:var(--muted)]">
        {project.tags.map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 text-sm">
        <Link
          href={`/projects/${project.id}`}
          className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
        >
          Ver detalhes
        </Link>
        {project.links?.repo ? (
          <a
            href={project.links.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  );
}
