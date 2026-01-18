import type { Metadata } from "next";
import Link from "next/link";
import { TrackedAnchor, TrackedLink } from "@/components/analytics/TrackedLink";
import JsonLd from "@/components/seo/JsonLd";
import { projects } from "@/data/projects";
import { sitePt } from "@/data/site.pt";
import { baseUrl, siteName } from "@/lib/seo";

const pageTitle = "Projetos | Matheus Siqueira";
const pageDescription =
  "Projetos e estudos de caso em dados, BI e automação com Power BI, SQL e Python, focados em organização de dados, dashboards e decisão de negócio.";

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
      item: `${baseUrl}/projects`,
    },
  ],
};

const projectsPageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    url: `${baseUrl}/projects`,
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
      url: `${baseUrl}/projects/${project.slug}`,
    })),
  },
  breadcrumbJsonLd,
];

type PageProps = {
  searchParams?: {
    stack?: string;
  };
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/projects",
    languages: {
      "pt-BR": "/projects",
      "en-US": "/en/projects",
      "x-default": "/projects",
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/projects",
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

  return (
    <main className="min-h-screen px-6 py-24">
      <JsonLd data={projectsPageJsonLd} />
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            {sitePt.projectsPage.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            {sitePt.projectsPage.title}
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl">
            {sitePt.projectsPage.description}
          </p>
          <Link
            href="/demos"
            className="inline-flex w-fit text-sm text-emerald-200 underline decoration-emerald-400/50 underline-offset-4 transition hover:text-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
          >
            {sitePt.projectsPage.demosLabel}
          </Link>
        </header>

        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">
          <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
            {sitePt.projectsPage.filterLabel}
          </span>
          <Link
            href="/projects"
            className={`rounded-full border px-3 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
              activeFilter === "all"
                ? "border-white/30 text-white"
                : "border-white/10 text-slate-300 hover:border-white/30"
            }`}
          >
            {sitePt.projectsPage.allLabel}
          </Link>
          {filters.map((filter) => (
            <Link
              key={filter}
              href={`/projects?stack=${encodeURIComponent(filter)}`}
              className={`rounded-full border px-3 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                activeFilter === filter
                  ? "border-white/30 text-white"
                  : "border-white/10 text-slate-300 hover:border-white/30"
              }`}
            >
              {filter}
            </Link>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col gap-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {project.title}
                  </h2>
                  <p className="text-sm text-slate-300 mt-2">
                    {project.tagline}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {project.role}
                </span>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed">
                {project.highlights[0] ??
                  project.features[0] ??
                  project.problem[0]}
              </p>

              <div className="text-xs text-slate-400">
                <span className="uppercase tracking-[0.2em] text-slate-500">
                  {sitePt.projectsPage.demonstratesLabel}
                </span>
                <p className="mt-2 text-slate-300">
                  {project.demonstrates[0]}
                </p>
              </div>

              <ul className="flex flex-wrap gap-2 text-xs text-slate-200">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 pt-2 text-xs text-slate-200">
                <TrackedLink
                  href={`/projects/${project.slug}`}
                  tracking={{
                    action: "view_case",
                    category: "engagement",
                    label: project.slug,
                  }}
                  className="rounded-full border border-white/20 px-4 py-2 font-semibold text-white transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  {sitePt.projectsPage.caseLabel}
                </TrackedLink>
                <TrackedAnchor
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  tracking={{
                    action: "click_github",
                    category: "outbound",
                    label: project.slug,
                  }}
                  className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                >
                  {sitePt.projects.modal.githubLabel}
                </TrackedAnchor>
                {project.demoUrl ? (
                  <TrackedAnchor
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-emerald-400/40 px-4 py-2 text-emerald-200 transition hover:border-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
                  >
                    {sitePt.projects.modal.demoLabel}
                  </TrackedAnchor>
                ) : (
                  <span className="rounded-full border border-white/10 px-4 py-2 text-slate-400">
                    {sitePt.demos.demoSoonLabel}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
