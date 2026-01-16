import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MediaGallery from "@/components/ui/MediaGallery";
import { getProjectBySlug, getProjectCopy, projects } from "@/data/projects";
import { localizeHref } from "@/lib/i18n";
import { siteCopy } from "@/lib/siteCopy";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = "en";
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project not found | Matheus Siqueira",
      description: "Project not found.",
    };
  }

  const projectCopy = getProjectCopy(project, locale);
  const firstSentence = projectCopy.description.split(".")[0]?.trim();
  const description = firstSentence
    ? `${projectCopy.tagline} ${firstSentence}.`
    : projectCopy.tagline;
  const cover =
    projectCopy.screenshots.find((shot) => shot.src.includes("/cover.")) ??
    projectCopy.screenshots[0];

  return {
    title: `${project.name} | Matheus Siqueira`,
    description,
    alternates: {
      canonical: `/en/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} | Matheus Siqueira`,
      description,
      url: `/en/projects/${project.slug}`,
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

export default function ProjectCaseStudyPageEn({ params }: PageProps) {
  const locale = "en";
  const copy = siteCopy[locale].caseStudy;
  const mediaCopy = siteCopy[locale].media;
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const projectCopy = getProjectCopy(project, locale);
  const cover =
    projectCopy.screenshots.find((shot) => shot.src.includes("/cover.")) ??
    projectCopy.screenshots[0];
  const galleryItems = projectCopy.screenshots.filter(
    (shot) => shot.src !== cover?.src
  );

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <header className="space-y-6">
          <Link
            href={localizeHref("/projects", locale)}
            className="inline-flex items-center gap-2 text-sm text-slate-300 underline decoration-white/20 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            {copy.backLink}
          </Link>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              {copy.label}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              {project.name}
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl">
              {projectCopy.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-4 py-2 text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              {copy.viewGithub}
            </a>
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {copy.openDemo}
              </a>
            ) : (
              <Link
                href="#como-executar"
                className="rounded-full border border-emerald-400/40 px-4 py-2 font-semibold text-emerald-200 transition hover:border-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
              >
                {copy.runLocal}
              </Link>
            )}
          </div>

          {cover ? (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-3">
              <Image
                src={cover.src}
                alt={cover.alt}
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
          <section id="o-que-e" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {copy.sections.what}
            </h2>
            <p className="text-base text-slate-300">{projectCopy.tagline}</p>
          </section>

          <section id="problema" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {copy.sections.problem}
            </h2>
            <ul className="space-y-2 text-slate-300">
              {projectCopy.problem.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="solucao" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {copy.sections.solution}
            </h2>
            <ul className="space-y-2 text-slate-300">
              {projectCopy.solution.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="funcionalidades" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {copy.sections.features}
            </h2>
            <ul className="space-y-2 text-slate-300">
              {projectCopy.features.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="stack" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {copy.sections.stack}
            </h2>
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

          <section id="como-executar" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {copy.sections.howToRun}
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-300">
              {projectCopy.howToRun.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <section id="links" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {copy.sections.links}
            </h2>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-4 py-2 text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {copy.viewGithub}
              </a>
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-4 py-2 font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  {copy.openDemo}
                </a>
              ) : (
                <span className="rounded-full border border-white/10 px-4 py-2 text-slate-400">
                  {copy.demoSoon}
                </span>
              )}
            </div>
          </section>

          <section id="capturas" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {copy.sections.screenshots}
            </h2>
            <MediaGallery
              items={galleryItems}
              fallbackSrc={cover?.src}
              fallbackAlt={cover?.alt ?? `Screenshot of ${project.name}`}
              videoFallbackText={mediaCopy.videoFallback}
            />
          </section>
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-white">
            {copy.ctaTitle}
          </h2>
          <p className="text-slate-300 max-w-2xl">{copy.ctaBody}</p>
          <Link
            href={localizeHref("/#contact", locale)}
            className="w-fit rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            {copy.ctaButton}
          </Link>
        </div>
      </div>
    </main>
  );
}
