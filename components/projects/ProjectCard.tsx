import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects.types";

type Props = {
  project: Project;
  caseLabel: string;
  localePrefix?: string;
};

const isVideoMedia = (shot: Project["screenshots"][number]) =>
  shot.type === "video" || shot.src.endsWith(".mp4");

const getCover = (project: Project) => {
  const cover = project.screenshots.find((shot) => shot.src.includes("cover"));
  if (cover) return cover;

  const firstImage = project.screenshots.find((shot) => !isVideoMedia(shot));
  if (firstImage) return firstImage;

  const demoPoster =
    project.demo && "poster" in project.demo ? project.demo.poster : undefined;

  return demoPoster ? { src: demoPoster, alt: project.title } : undefined;
};

export default function ProjectCard({
  project,
  caseLabel,
  localePrefix = "",
}: Props) {
  const cover = getCover(project);
  const caseHref = localePrefix
    ? `${localePrefix}/projects/${project.slug}`
    : `/projetos/${project.slug}`;

  return (
    <article className="card p-6 flex h-full flex-col gap-4 transition hover:-translate-y-1 hover:shadow-xl">
      {cover ? (
        <div className="relative aspect-[1200/630] w-full overflow-hidden rounded-xl border border-[color:var(--border)]">
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
        <h3 className="text-lg font-semibold text-[color:var(--foreground)]">{project.title}</h3>
        <p className="text-sm text-[color:var(--muted)]">{project.tagline}</p>
        <p className="text-xs text-[color:var(--muted)]">{project.features[0]}</p>
      </div>

      <div className="flex flex-wrap gap-2 text-xs text-[color:var(--muted)]">
        {project.stack.map((item) => (
          <span key={item} className="chip">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-4">
        <Link
          href={caseHref}
          className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
        >
          {caseLabel}
        </Link>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
        >
          GitHub
        </a>
      </div>
    </article>
  );
}
