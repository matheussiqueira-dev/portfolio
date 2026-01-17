import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import MediaGallery from "@/components/ui/MediaGallery";
import { getProjectBySlug, projectSlugs } from "@/data/projects";
import type { Project } from "@/data/projects.types";
import { sitePt } from "@/data/site.pt";
import { baseUrl, siteName } from "@/lib/seo";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

const buildMetaDescription = (project: Project) => {
  const parts = [
    project.tagline,
    project.highlights[0],
    project.demonstrates[0],
  ].filter(Boolean);
  const text = parts.join(" ").trim();

  if (text.length > 170) {
    return `${text.slice(0, 167).trimEnd()}...`;
  }

  return text;
};

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Projeto nao encontrado | Matheus Siqueira",
      description: "Projeto nao encontrado.",
    };
  }

  const cover =
    project.screenshots.find((shot) => shot.src.includes("/cover.")) ??
    project.screenshots[0];

  const description = buildMetaDescription(project);

  return {
    title: `${project.title} - Case Study`,
    description,
    alternates: {
      canonical: `/projects/${project.slug}`,
      languages: {
        "pt-BR": `/projects/${project.slug}`,
        "en-US": `/en/projects/${project.slug}`,
        "x-default": `/projects/${project.slug}`,
      },
    },
    openGraph: {
      title: `${project.title} - Case Study`,
      description,
      url: `/projects/${project.slug}`,
      locale: "pt_BR",
      type: "article",
      siteName: "Matheus Siqueira",
      images: [
        {
          url: cover?.src ?? "/og.png",
          width: 1200,
          height: 630,
          alt: cover?.alt ?? project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - Case Study`,
      description,
      images: [cover?.src ?? "/og.png"],
    },
  };
}

export default function ProjectCaseStudyPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const cover =
    project.screenshots.find((shot) => shot.src.includes("/cover.")) ??
    project.screenshots[0];
  const galleryItems = cover
    ? project.screenshots.filter((shot) => shot.src !== cover.src)
    : project.screenshots;
  const imageUrl = cover?.src ? `${baseUrl}${cover.src}` : `${baseUrl}/og.png`;
  const description = buildMetaDescription(project);
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description,
    url: `${baseUrl}/projects/${project.slug}`,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    codeRepository: project.repoUrl,
    programmingLanguage: project.stack,
    featureList: project.features,
    author: {
      "@type": "Person",
      name: siteName,
      url: baseUrl,
    },
    image: imageUrl,
  };

  return (
    <main className="min-h-screen px-6 py-24">
      <JsonLd data={projectJsonLd} />
      <div className="max-w-6xl mx-auto">
        <header className="space-y-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-slate-300 underline decoration-white/20 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            {sitePt.projectDetail.backLabel}
          </Link>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              {sitePt.projects.cardLabel}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              {project.title}
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl">
              {project.tagline}
            </p>
            <p className="text-sm text-slate-400">
              {sitePt.projectDetail.roleLabel}: {project.role}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-4 py-2 text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              {sitePt.projects.modal.githubLabel}
            </a>
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {sitePt.projects.modal.demoLabel}
              </a>
            ) : (
              <span className="rounded-full border border-white/10 px-4 py-2 text-slate-400">
                {sitePt.demos.demoSoonLabel}
              </span>
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
          <section id="contexto" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {sitePt.projectDetail.contextTitle}
            </h2>
            <p className="text-base text-slate-300">{project.tagline}</p>
          </section>

          <section id="problema" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {sitePt.projectDetail.problemTitle}
            </h2>
            <ul className="space-y-2 text-slate-300">
              {project.problem.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="dados" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {sitePt.projectDetail.dataTitle}
            </h2>
            <ul className="space-y-2 text-slate-300">
              {project.dataUsed.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="solucao" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {sitePt.projectDetail.solutionTitle}
            </h2>
            <ul className="space-y-2 text-slate-300">
              {project.solution.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="funcionalidades" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {sitePt.projectDetail.featuresTitle}
            </h2>
            <ul className="space-y-2 text-slate-300">
              {project.features.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="impacto" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {sitePt.projectDetail.impactTitle}
            </h2>
            <ul className="space-y-2 text-slate-300">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="stack" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {sitePt.projectDetail.stackTitle}
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

          <section id="demonstracao" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {sitePt.projectDetail.demonstratesTitle}
            </h2>
            <ul className="space-y-2 text-slate-300">
              {project.demonstrates.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="como-executar" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {sitePt.projectDetail.howToRunTitle}
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-300">
              {project.howToRun.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <section id="links" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {sitePt.projectDetail.linksTitle}
            </h2>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-4 py-2 text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                {sitePt.projects.modal.githubLabel}
              </a>
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-4 py-2 font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  {sitePt.projects.modal.demoLabel}
                </a>
              ) : (
                <span className="rounded-full border border-white/10 px-4 py-2 text-slate-400">
                  {sitePt.demos.demoSoonLabel}
                </span>
              )}
            </div>
          </section>

          <section id="capturas" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold text-white mb-4">
              {sitePt.projectDetail.galleryTitle}
            </h2>
            <MediaGallery
              items={galleryItems}
              fallbackSrc={cover?.src}
              fallbackAlt={cover?.alt ?? `Captura de ${project.title}`}
              videoFallbackText={sitePt.media.videoFallback}
            />
          </section>
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-white">
            {sitePt.projectDetail.ctaTitle}
          </h2>
          <p className="text-slate-300 max-w-2xl">
            {sitePt.projectDetail.ctaBody}
          </p>
          <Link
            href="/#contact"
            className="w-fit rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            {sitePt.projectDetail.ctaButton}
          </Link>
        </div>
      </div>
    </main>
  );
}
