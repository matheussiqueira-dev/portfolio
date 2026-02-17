import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";
import { TrackedAnchor } from "@/components/analytics/TrackedLink";
import JsonLd from "@/components/seo/JsonLd";
import SafeImage from "@/src/components/demo/SafeImage";
import { projects, projectOrder } from "@/data/projects";
import type { Project } from "@/data/projects.types";
import { sitePt } from "@/data/site.pt";
import { baseUrl, buildAlternates, siteName } from "@/lib/seo";

const pageTitle = "Projetos Full Stack, Dados e IA";
const pageDescription =
  "Portfólio de projetos em desenvolvimento full stack, dados e IA. Cases com APIs, automação, dashboards e visualização para decisões de produto.";

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
  ],
};

const projectsPageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    url: `${baseUrl}/projetos`,
    description: pageDescription,
    inLanguage: "pt-BR",
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: baseUrl,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projetos em destaque",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: `${baseUrl}/projetos/${project.slug}`,
    })),
  },
  breadcrumbJsonLd,
];

type PageProps = {
  searchParams?: {
    stack?: string;
  };
};

const isVideoMedia = (shot: Project["screenshots"][number]) =>
  shot.type === "video" || shot.src.endsWith(".mp4");

const getCover = (project: Project) => {
  const cover = project.screenshots.find((shot) => shot.src.includes("/cover."));
  if (cover) {
    return cover;
  }

  const firstImage = project.screenshots.find((shot) => !isVideoMedia(shot));
  if (firstImage) {
    return firstImage;
  }

  const demoPoster =
    project.demo && "poster" in project.demo ? project.demo.poster : undefined;

  return demoPoster ? { src: demoPoster, alt: project.title } : undefined;
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    ...buildAlternates({ pt: "/projetos", en: "/en/projects", canonical: "/projetos" }),
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/projetos",
    locale: "pt_BR",
    type: "website",
    siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Projetos de Matheus Siqueira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/og.png"],
  },
};

export default function ProjectsPage({ searchParams }: PageProps) {
  const filters = sitePt.projectsPage.filters;
  const requested = searchParams?.stack;
  const activeFilter = filters.includes(requested ?? "") ? requested : "all";
  const filteredProjects =
    activeFilter && activeFilter !== "all"
      ? projects.filter((project) => project.stack.includes(activeFilter))
      : projects;
  const featured = new Set(projectOrder.slice(0, 3));

  return (
    <main className="min-h-screen px-6 pt-28 pb-20">
      <JsonLd data={projectsPageJsonLd} />
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 space-y-4">
          <p className="eyebrow">{sitePt.projectsPage.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-[color:var(--foreground)]">
            {sitePt.projectsPage.title}
          </h1>
          <p className="text-base md:text-lg text-[color:var(--muted)] max-w-3xl">
            {sitePt.projectsPage.description}
          </p>
          <Link
            href="/demos"
            className="group inline-flex w-fit items-center gap-2 text-sm text-[color:var(--accent)] underline decoration-[color:var(--accent-soft)]/60 underline-offset-4 transition hover:text-[color:var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            <FaPlayCircle className="text-[0.95rem]" aria-hidden="true" />
            <span>{sitePt.projectsPage.demosLabel}</span>
            <FaArrowRight
              className="text-[0.75rem] transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </header>

        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-[color:var(--muted)]">
          <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
            {sitePt.projectsPage.filterLabel}
          </span>
          <Link
            href="/projetos"
            className={`rounded-full border px-3 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 ${
              activeFilter === "all"
                ? "border-[color:var(--accent)]/50 text-[color:var(--foreground)]"
                : "border-[color:var(--border)] text-[color:var(--muted)] hover:border-[color:var(--accent)]/50"
            }`}
          >
            {sitePt.projectsPage.allLabel}
          </Link>
          {filters.map((filter) => (
            <Link
              key={filter}
              href={`/projetos?stack=${encodeURIComponent(filter)}`}
              className={`rounded-full border px-3 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 ${
                activeFilter === filter
                  ? "border-[color:var(--accent)]/50 text-[color:var(--foreground)]"
                  : "border-[color:var(--border)] text-[color:var(--muted)] hover:border-[color:var(--accent)]/50"
              }`}
            >
              {filter}
            </Link>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 projects-grid">
          {filteredProjects.map((project) => {
            const isFeatured = featured.has(project.slug);
            const cover = getCover(project);

            return (
              <article
                key={project.slug}
                className="card card-hover project-card group relative flex h-full flex-col gap-5"
              >
                {isFeatured ? (
                  <span className="card-badge rounded-full bg-[color:var(--accent)]/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[color:var(--accent-strong)]">
                    {sitePt.projects.featuredLabel}
                  </span>
                ) : null}

                {cover ? (
                  <div className="card-media project-card__media relative w-full">
                    <SafeImage
                      src={cover.src}
                      alt={cover.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 560px"
                      quality={85}
                      className="object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                ) : null}

                <div className="card-header items-start text-left">
                  <span className="card-kicker text-left">{project.role}</span>
                  <h2 className="card-title text-left">{project.title}</h2>
                  <p className="card-subtitle text-left">{project.tagline}</p>
                </div>

                <p className="text-sm text-[color:var(--muted)] leading-relaxed text-left">
                  {project.highlights[0] ??
                    project.features[0] ??
                    project.problem[0]}
                </p>

                <div className="text-xs text-[color:var(--muted)] text-left">
                  <span className="card-meta block text-left">
                    {sitePt.projectsPage.demonstratesLabel}
                  </span>
                  <p className="mt-2 text-[color:var(--muted)]">
                    {project.demonstrates[0]}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-2 text-xs text-[color:var(--muted)]">
                  {project.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-3 pt-2 text-xs text-[color:var(--muted)]">
                  <TrackedAnchor
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    tracking={{
                      action: "view_case",
                      category: "engagement",
                      label: project.slug,
                    }}
                    className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                  >
                    {sitePt.projectsPage.caseLabel}
                  </TrackedAnchor>
                  <TrackedAnchor
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    tracking={{
                      action: "click_github",
                      category: "outbound",
                      label: project.slug,
                    }}
                    className="rounded-full border border-[color:var(--border)] px-4 py-2 transition hover:border-[color:var(--accent)]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                  >
                    {sitePt.projects.modal.githubLabel}
                  </TrackedAnchor>
                  {project.demoUrl ? (
                    <TrackedAnchor
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[color:var(--accent)]/40 px-4 py-2 text-[color:var(--accent)] transition hover:border-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                    >
                      {sitePt.projects.modal.demoLabel}
                    </TrackedAnchor>
                  ) : (
                    <span className="rounded-full border border-[color:var(--border)] px-4 py-2 text-[color:var(--muted)]">
                      {sitePt.demos.demoSoonLabel}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}


