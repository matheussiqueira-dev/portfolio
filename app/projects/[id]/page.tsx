import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectById, interactiveProjectIds } from "@/data/projects";
import { SafeImage } from "@/components/demo/SafeImage";
import { DemoLauncher } from "@/components/demo/DemoLauncher";

type PageProps = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Projeto não encontrado" };

  return {
    title: `${project.title} | Portfolio`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  const required = interactiveProjectIds.has(project.id);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">{project.title}</h1>
          <p className="opacity-80">
            {project.longDescription ?? project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/10 px-2 py-0.5 text-[11px] opacity-80"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.links?.repo ? (
              <a
                className="underline"
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
              >
                Código
              </a>
            ) : null}
            {project.links?.live ? (
              <a
                className="underline"
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            ) : null}
          </div>

          <section className="pt-4">
            <h2 className="mb-2 text-lg font-semibold">Demo</h2>
            <div className="flex items-center gap-3">
              <DemoLauncher project={project} required={required} />
              {required && project.demo.mode === "none" ? (
                <span className="text-xs text-red-400">
                  (Config inválida: projeto obrigatório sem demo. Ajuste o
                  registry.)
                </span>
              ) : null}
            </div>
          </section>
        </div>

        <aside className="space-y-3">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <SafeImage
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm font-medium">Stack</div>
            <div className="mt-2 text-sm opacity-80">
              {project.techStack?.length ? project.techStack.join(" • ") : "—"}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
