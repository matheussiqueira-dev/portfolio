import SafeImage from "@/src/components/demo/SafeImage";
import Link from "next/link";
import type { Project } from "@/data/projects.types";
import { getProjectById } from "@/src/data/projects";

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
  const registryProject = getProjectById(project.slug);
  const registryCover = registryProject?.coverImage
    ? { src: registryProject.coverImage, alt: project.title }
    : undefined;
  const cover = getCover(project) ?? registryCover;
  const caseHref = localePrefix
    ? `${localePrefix}/projects/${project.slug}`
    : `/projetos/${project.slug}`;

  return (
    <article className="card card-hover flex h-full flex-col gap-5">
      {cover ? (
        <div className="card-media relative aspect-[1200/630] w-full">
          <SafeImage
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 480px"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="card-header">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-subtitle">{project.tagline}</p>
        <p className="text-xs text-[color:var(--muted)] text-center">
          {project.features[0]}
        </p>
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
