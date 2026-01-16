import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type PageProps = {
  params: {
    slug: string;
  };
};

const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProject(params.slug);

  if (!project) {
    return {
      title: "Projeto não encontrado | Matheus Siqueira",
      description: "Projeto não encontrado.",
    };
  }

  const firstSentence = project.description.split(".")[0]?.trim();
  const description = firstSentence
    ? `${project.tagline} ${firstSentence}.`
    : project.tagline;
  const cover = project.screenshots[0];

  return {
    title: `${project.name} | Matheus Siqueira`,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} | Matheus Siqueira`,
      description,
      url: `/projects/${project.slug}`,
      type: "article",
      images: [
        {
          url: cover?.src ?? "/og.png",
          width: 1200,
          height: 630,
          alt: cover?.alt ?? project.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Matheus Siqueira`,
      description,
      images: [cover?.src ?? "/og.png"],
    },
  };
}

export default function ProjectCaseStudyPage({ params }: PageProps) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <header className="space-y-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-slate-300 underline decoration-white/20 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Voltar para projetos
          </Link>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Estudo de caso
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              {project.name}
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-4 py-2 text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              GitHub
            </a>
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                Abrir demo
              </a>
            ) : (
              <span className="rounded-full border border-white/10 px-4 py-2 text-slate-400">
                Demo: em breve
              </span>
            )}
          </div>

          {project.screenshots[0] ? (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-3">
              <Image
                src={project.screenshots[0].src}
                alt={project.screenshots[0].alt}
                width={1200}
                height={630}
                sizes="(max-width: 768px) 100vw, 960px"
                className="w-full rounded-2xl object-cover"
                priority
              />
            </div>
          ) : null}
        </header>

        <div className="mt-14 grid gap-12">
          <section className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">O que é</h2>
            <p className="text-base text-slate-300">{project.tagline}</p>
          </section>

          <section className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">Problema</h2>
            <ul className="space-y-2 text-slate-300">
              {project.problem.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">Solução</h2>
            <ul className="space-y-2 text-slate-300">
              {project.solution.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Funcionalidades
            </h2>
            <ul className="space-y-2 text-slate-300">
              {project.features.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 text-emerald-400">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Como rodar local
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-300">
              {project.howToRun.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">Links</h2>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-4 py-2 text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                GitHub
              </a>
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-4 py-2 font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  Abrir demo
                </a>
              ) : (
                <span className="rounded-full border border-white/10 px-4 py-2 text-slate-400">
                  Demo: em breve
                </span>
              )}
            </div>
          </section>

          <section className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Screenshots
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {project.screenshots.map((screenshot) => (
                <div
                  key={screenshot.src}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3"
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={1200}
                    height={630}
                    sizes="(max-width: 768px) 100vw, 520px"
                    className="w-full rounded-xl object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-white">
            Vamos conversar sobre este projeto?
          </h2>
          <p className="text-slate-300 max-w-2xl">
            Posso detalhar decisões técnicas, desafios e próximos passos. Se
            quiser conversar, é só chamar.
          </p>
          <Link
            href="/#contact"
            className="w-fit rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Entrar em contato
          </Link>
        </div>
      </div>
    </main>
  );
}
