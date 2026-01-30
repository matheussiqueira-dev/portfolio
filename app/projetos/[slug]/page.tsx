import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/seo/JsonLd";
import MediaGallery from "@/components/ui/MediaGallery";
import SafeImage from "@/src/components/demo/SafeImage";
import DemoLauncher from "@/src/components/demo/DemoLauncher";
import { getProjectById } from "@/src/data/projects";
import { getProjectBySlug, projectSlugs } from "@/data/projects";
import type { Project } from "@/data/projects.types";
import { sitePt } from "@/data/site.pt";
import { baseUrl, buildAlternates, siteName } from "@/lib/seo";

const architectureLabel = "Arquitetura e decisões técnicas";
const takeawaysLabel = "Aprendizados e boas práticas";
const overviewLabel = "Visão geral";

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

const buildMetaDescription = (project: Project) => {
  if (project.seo?.description) {
    return project.seo.description;
  }

  const parts = [
    project.tagline,
    project.context,
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
      title: "Projeto não encontrado",
      description: "Projeto não encontrado.",
    };
  }

  const cover =
    project.screenshots.find((shot) => shot.src.includes("/cover.")) ??
    project.screenshots[0];

  const description = buildMetaDescription(project);
  const metaTitle = project.seo?.title ?? project.headline ?? project.title;

  return {
    title: metaTitle,
    description,
    alternates: {
      ...buildAlternates({
        pt: `/projetos/${project.slug}`,
        en: `/en/projects/${project.slug}`,
        canonical: `/projetos/${project.slug}`,
      }),
    },
    openGraph: {
      title: metaTitle,
      description,
      url: `/projetos/${project.slug}`,
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
      title: metaTitle,
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

  const demoProject = getProjectById(project.slug);

  const title = project.headline ?? project.title;
  const intro = project.intro;
  const cover =
    project.screenshots.find((shot) => shot.src.includes("/cover.")) ??
    project.screenshots[0];
  const showCover = Boolean(cover) && !intro?.video;
  const galleryItems = cover
    ? showCover
      ? project.screenshots.filter((shot) => shot.src !== cover.src)
      : project.screenshots
    : project.screenshots;
  const imageUrl = cover?.src ? `${baseUrl}${cover.src}` : `${baseUrl}/og.png`;
  const description = buildMetaDescription(project);
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description,
    url: `${baseUrl}/projetos/${project.slug}`,
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
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: `${baseUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: sitePt.projectsPage.title,
        item: `${baseUrl}/projetos`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${baseUrl}/projetos/${project.slug}`,
      },
    ],
  };
  const contactLinks = [
    {
      label: sitePt.contact.cards.email,
      href: "mailto:matheussiqueirahub@gmail.com",
      className:
        "btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40",
    },
    {
      label: sitePt.contact.cards.linkedin,
      href: "https://www.linkedin.com/in/matheussiqueira-dev/",
      className:
        "btn-outline btn-linkedin focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]/40",
      external: true,
    },
    {
      label: sitePt.contact.cards.github,
      href: "https://github.com/matheussiqueira-dev",
      className:
        "btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40",
      external: true,
    },
    {
      label: sitePt.contact.cards.whatsapp,
      href: "https://wa.me/5581999203683",
      className:
        "btn-whatsapp focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--whatsapp)]/40",
      external: true,
    },
  ];

  return (
    <main className="min-h-screen px-6 pt-28 pb-20">
      <JsonLd data={[projectJsonLd, breadcrumbJsonLd]} />
      <div className="max-w-6xl mx-auto">
        <header className="space-y-6">
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-sm text-[color:var(--muted)] underline decoration-[color:var(--border)] underline-offset-4 transition hover:text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            {sitePt.projectDetail.backLabel}
          </Link>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              {sitePt.projects.cardLabel}
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-[color:var(--foreground)]">
              {title}
            </h1>
            <p className="text-lg text-[color:var(--muted)] max-w-3xl">
              {project.tagline}
            </p>
            <p className="text-sm text-[color:var(--muted)]">
              {sitePt.projectDetail.roleLabel}: {project.role}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            {demoProject ? (
              <DemoLauncher project={demoProject} required={demoProject.isInteractive} />
            ) : null}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              {sitePt.projects.modal.githubLabel}
            </a>
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
              >
                {sitePt.projects.modal.demoLabel}
              </a>
            ) : (
              <span className="rounded-full border border-[color:var(--border)] px-4 py-2 text-[color:var(--muted)]">
                {sitePt.demos.demoSoonLabel}
              </span>
            )}
          </div>

          {showCover && cover ? (
            <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3 shadow-sm">
              <SafeImage
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

        {intro ? (
          <section className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-[color:var(--foreground)]">
                  {intro.title}
                </h2>
                {intro.paragraphs.map((paragraph, index) => (
                  <p
                    key={`intro-paragraph-${index}`}
                    className="text-base text-[color:var(--muted)] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {intro.sections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <h3 className="text-xl font-semibold text-[color:var(--foreground)]">
                    {section.title}
                  </h3>
                  {section.paragraphs?.map((paragraph, index) => (
                    <p
                      key={`${section.title}-paragraph-${index}`}
                      className="text-base text-[color:var(--muted)] leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.items ? (
                    <ul className="space-y-2 text-[color:var(--muted)]">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.subSections?.length ? (
                    <div className="grid gap-5 md:grid-cols-2">
                      {section.subSections.map((subSection) => (
                        <div key={subSection.title} className="space-y-2">
                          <p className="text-sm font-semibold text-[color:var(--foreground)]">
                            {subSection.title}
                          </p>
                          <ul className="space-y-2 text-[color:var(--muted)]">
                            {subSection.items.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-soft)]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {section.footer?.map((paragraph, index) => (
                    <p
                      key={`${section.title}-footer-${index}`}
                      className="text-base text-[color:var(--muted)] leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.link ? (
                    <div className="flex flex-wrap gap-3 text-sm">
                      <a
                        href={section.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                      >
                        {section.link.label}
                      </a>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              {intro.video ? (
                <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3 shadow-sm">
                  <p className="mb-3 text-xs uppercase tracking-[0.24em] text-[color:var(--accent-strong)]">
                    {sitePt.media.videoDemoLabel}
                  </p>
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={intro.video.poster ?? cover?.src}
                    className="w-full rounded-2xl object-cover"
                  >
                    <source src={intro.video.src} type="video/mp4" />
                    {sitePt.media.videoFallback}
                  </video>
                  {intro.video.caption ? (
                    <p className="mt-3 text-xs text-[color:var(--muted)]">
                      {intro.video.caption}
                    </p>
                  ) : null}
                </div>
              ) : null}

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  {sitePt.contact.eyebrow}
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className={link.className}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <div className="mt-14 grid gap-12">
          {project.longDescription?.length ? (
            <section id="visao-geral" className="scroll-mt-20 space-y-4">
              <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
                {overviewLabel}
              </h2>
              {project.longDescription.map((paragraph, index) => (
                <p
                  key={`${project.slug}-overview-${index}`}
                  className="text-base text-[color:var(--muted)] max-w-4xl"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ) : null}

          <section id="contexto" className="scroll-mt-20 space-y-4">
            <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
              {sitePt.projectDetail.contextTitle}
            </h2>
            <p className="text-base text-[color:var(--muted)] max-w-3xl">
              {project.context}
            </p>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
                {sitePt.projectDetail.problemTitle}
              </h3>
              <ul className="space-y-2 text-[color:var(--muted)]">
                {project.problem.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="solucao" className="scroll-mt-20 space-y-6">
            <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
              {sitePt.projectDetail.solutionTitle}
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
                  {architectureLabel}
                </h3>
                <ul className="space-y-2 text-[color:var(--muted)]">
                  {project.solution.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-soft)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
                  {sitePt.projectDetail.dataTitle}
                </h3>
                <ul className="space-y-2 text-[color:var(--muted)]">
                  {project.dataUsed.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-soft)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
                {sitePt.projectDetail.featuresTitle}
              </h3>
              <ul className="space-y-2 text-[color:var(--muted)]">
                {project.features.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="stack" className="scroll-mt-20 space-y-4">
            <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
              {sitePt.projectDetail.stackTitle}
            </h2>
            <p className="text-base text-[color:var(--muted)] max-w-3xl">
              {project.techSummary}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section id="impacto" className="scroll-mt-20 space-y-3">
            <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
              {sitePt.projectDetail.impactTitle}
            </h2>
            <ul className="space-y-2 text-[color:var(--muted)]">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section id="conclusao" className="scroll-mt-20 space-y-6">
            <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
              {sitePt.projectDetail.conclusionTitle}
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
                  {takeawaysLabel}
                </h3>
                <ul className="space-y-2 text-[color:var(--muted)]">
                  {project.conclusion.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-soft)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
                  {sitePt.projectDetail.demonstratesTitle}
                </h3>
                <ul className="space-y-2 text-[color:var(--muted)]">
                  {project.demonstrates.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent-soft)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="como-executar" className="scroll-mt-20 space-y-3">
            <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
              {sitePt.projectDetail.howToRunTitle}
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-[color:var(--muted)]">
              {project.howToRun.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <section id="links" className="scroll-mt-20 space-y-3">
            <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
              {sitePt.projectDetail.linksTitle}
            </h2>
            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
              >
                {sitePt.projects.modal.githubLabel}
              </a>
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                >
                  {sitePt.projects.modal.demoLabel}
                </a>
              ) : (
                <span className="rounded-full border border-[color:var(--border)] px-4 py-2 text-[color:var(--muted)]">
                  {sitePt.demos.demoSoonLabel}
                </span>
              )}
            </div>
          </section>

          <section id="capturas" className="scroll-mt-20 space-y-3">
            <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
              {sitePt.projectDetail.galleryTitle}
            </h2>
            <MediaGallery
              items={galleryItems}
              fallbackSrc={cover?.src}
              fallbackAlt={cover?.alt ?? `Captura de ${project.title}`}
              videoFallbackText={sitePt.media.videoFallback}
              videoLabel={sitePt.media.videoDemoLabel}
            />
          </section>
        </div>

        <div className="mt-16 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 flex flex-col gap-4 shadow-sm">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            {sitePt.projectDetail.ctaTitle}
          </h2>
          <p className="text-[color:var(--muted)] max-w-2xl">
            {sitePt.projectDetail.ctaBody}
          </p>
          <Link
            href="/#contact"
            className="btn-primary w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            {sitePt.projectDetail.ctaButton}
          </Link>
        </div>
      </div>
    </main>
  );
}
