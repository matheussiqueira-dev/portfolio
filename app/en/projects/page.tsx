import type { Metadata } from "next";
import Link from "next/link";
import { TrackedAnchor, TrackedLink } from "@/components/analytics/TrackedLink";
import JsonLd from "@/components/seo/JsonLd";
import { projectsEn } from "@/data/projects.en";
import { siteEn } from "@/data/site.en";
import { baseUrl, buildAlternates, siteName } from "@/lib/seo";

const pageTitle = "Data, BI, and Automation Projects";
const pageDescription =
  "Projects and case studies in data, BI, Big Data, and automation with Power BI, SQL, and Python, focused on data organization, dashboards, and business decisions.";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${baseUrl}/en`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: siteEn.projectsPage.title,
      item: `${baseUrl}/en/projects`,
    },
  ],
};

const projectsPageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    url: `${baseUrl}/en/projects`,
    description: pageDescription,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: baseUrl,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured projects",
    itemListElement: projectsEn.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: `${baseUrl}/en/projects/${project.slug}`,
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
    ...buildAlternates({ pt: "/projetos", en: "/en/projects", canonical: "/en/projects" }),
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/en/projects",
    locale: "en_US",
    type: "website",
    siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Projects by Matheus Siqueira",
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

export default function ProjectsPageEn({ searchParams }: PageProps) {
  const filters = siteEn.projectsPage.filters;
  const requested = searchParams?.stack;
  const activeFilter = filters.includes(requested ?? "") ? requested : "all";
  const filteredProjects =
    activeFilter && activeFilter !== "all"
      ? projectsEn.filter((project) => project.stack.includes(activeFilter))
      : projectsEn;

  return (
    <main className="min-h-screen px-6 pt-28 pb-20">
      <JsonLd data={projectsPageJsonLd} />
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 space-y-4">
          <p className="eyebrow">{siteEn.projectsPage.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-[color:var(--foreground)]">
            {siteEn.projectsPage.title}
          </h1>
          <p className="text-base md:text-lg text-[color:var(--muted)] max-w-3xl">
            {siteEn.projectsPage.description}
          </p>
          <Link
            href="/en/demos"
            className="inline-flex w-fit text-sm text-[color:var(--accent)] underline decoration-[color:var(--accent-soft)]/60 underline-offset-4 transition hover:text-[color:var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            {siteEn.projectsPage.demosLabel}
          </Link>
        </header>

        <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-[color:var(--muted)]">
          <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
            {siteEn.projectsPage.filterLabel}
          </span>
          <Link
            href="/en/projects"
            className={`rounded-full border px-3 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 ${
              activeFilter === "all"
                ? "border-[color:var(--accent)]/50 text-[color:var(--foreground)]"
                : "border-[color:var(--border)] text-[color:var(--muted)] hover:border-[color:var(--accent)]/50"
            }`}
          >
            {siteEn.projectsPage.allLabel}
          </Link>
          {filters.map((filter) => (
            <Link
              key={filter}
              href={`/en/projects?stack=${encodeURIComponent(filter)}`}
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

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="card p-6 flex flex-col gap-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-[color:var(--foreground)]">
                    {project.title}
                  </h2>
                  <p className="text-sm text-[color:var(--muted)] mt-2">
                    {project.tagline}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  {project.role}
                </span>
              </div>

              <p className="text-sm text-[color:var(--muted)] leading-relaxed">
                {project.highlights[0] ??
                  project.features[0] ??
                  project.problem[0]}
              </p>

              <div className="text-xs text-[color:var(--muted)]">
                <span className="uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  {siteEn.projectsPage.demonstratesLabel}
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

              <div className="flex flex-wrap gap-3 pt-2 text-xs text-[color:var(--muted)]">
                <TrackedLink
                  href={`/en/projects/${project.slug}`}
                  tracking={{
                    action: "view_case",
                    category: "engagement",
                    label: project.slug,
                  }}
                  className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                >
                  {siteEn.projectsPage.caseLabel}
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
                  className="rounded-full border border-[color:var(--border)] px-4 py-2 transition hover:border-[color:var(--accent)]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                >
                  {siteEn.projects.modal.githubLabel}
                </TrackedAnchor>
                {project.demoUrl ? (
                  <TrackedAnchor
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[color:var(--accent)]/40 px-4 py-2 text-[color:var(--accent)] transition hover:border-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                  >
                    {siteEn.projects.modal.demoLabel}
                  </TrackedAnchor>
                ) : (
                  <span className="rounded-full border border-[color:var(--border)] px-4 py-2 text-[color:var(--muted)]">
                    {siteEn.demos.demoSoonLabel}
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
