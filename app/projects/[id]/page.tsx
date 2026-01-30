import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DemoLauncher from "@/src/components/demo/DemoLauncher";
import SafeImage from "@/src/components/demo/SafeImage";
import { getProjectById, projectIds } from "@/src/data/projects";
import { buildAlternates, siteName } from "@/lib/seo";

const pageTitle = "Projects";

type PageProps = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return projectIds.map((id) => ({ id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectById(params.id);

  if (!project) {
    return {
      title: "Project not found",
      description: "Project not found.",
    };
  }

  const description = project.shortDescription;
  const title = `${project.title} | ${pageTitle}`;
  const cover = project.coverImage ?? "/og.png";

  return {
    title,
    description,
    alternates: {
      ...buildAlternates({
        pt: `/projetos/${project.id}`,
        en: `/projects/${project.id}`,
        canonical: `/projects/${project.id}`,
      }),
    },
    openGraph: {
      title,
      description,
      url: `/projects/${project.id}`,
      locale: "pt_BR",
      type: "article",
      siteName,
      images: [
        {
          url: cover,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [cover],
    },
  };
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="space-y-4">
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-sm text-[color:var(--muted)] underline decoration-[color:var(--border)] underline-offset-4 transition hover:text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            Voltar para projetos
          </Link>
          <h1 className="text-4xl md:text-5xl font-semibold text-[color:var(--foreground)]">
            {project.title}
          </h1>
          <p className="text-base md:text-lg text-[color:var(--muted)]">
            {project.shortDescription}
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-[color:var(--muted)]">
            {project.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
            <DemoLauncher
              project={project}
              label="Executar Demo"
              className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            />
            {project.links?.repo ? (
              <a
                href={project.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
              >
                GitHub
              </a>
            ) : null}
            {project.links?.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
              >
                Demo online
              </a>
            ) : null}
          </div>

          {project.coverImage ? (
            <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3 shadow-sm">
              <SafeImage
                src={project.coverImage}
                alt={`Capa do projeto ${project.title}`}
                width={1200}
                height={630}
                sizes="(max-width: 768px) 100vw, 960px"
                className="w-full rounded-2xl object-cover"
              />
            </div>
          ) : null}
        </header>

        {project.longDescription ? (
          <section className="card space-y-4">
            <h2 className="card-title text-2xl">Visão geral</h2>
            <p className="text-sm text-[color:var(--muted)] leading-relaxed">
              {project.longDescription}
            </p>
          </section>
        ) : null}

        <section className="card card-lg space-y-4">
          <h2 className="card-title text-2xl">Modo Demo</h2>
          <p className="text-sm text-[color:var(--muted)]">
            Clique em “Executar Demo” para abrir o ambiente interativo dentro do
            portfólio. A demo é carregada sob demanda para preservar performance.
          </p>
        </section>
      </div>
    </main>
  );
}
