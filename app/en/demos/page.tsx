import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { projectsEn } from "@/data/projects.en";
import { siteEn } from "@/data/site.en";
import { baseUrl, siteName } from "@/lib/seo";

const pageTitle = "Demos | Matheus Siqueira";
const pageDescription =
  "Demos and repositories for data, BI, and automation projects, focused on real cases, fast technical validation, and objective recruiter and hiring manager review.";

const demosJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageTitle,
  url: `${baseUrl}/en/demos`,
  description: pageDescription,
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    name: siteName,
    url: baseUrl,
  },
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/en/demos",
    languages: {
      "pt-BR": "/demos",
      "en-US": "/en/demos",
      "x-default": "/demos",
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/en/demos",
    locale: "en_US",
    type: "website",
    siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Demos and repositories",
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

export default function DemosPageEn() {
  return (
    <main className="min-h-screen px-6 pt-28 pb-20">
      <JsonLd data={demosJsonLd} />
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 space-y-4">
          <p className="eyebrow">{siteEn.demos.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-[color:var(--foreground)]">
            {siteEn.demos.title}
          </h1>
          <p className="text-base md:text-lg text-[color:var(--muted)] max-w-3xl">
            {siteEn.demos.description}
          </p>
          <Link
            href="/en/projects"
            className="inline-flex w-fit text-sm text-[color:var(--accent)] underline decoration-[color:var(--accent-soft)]/60 underline-offset-4 transition hover:text-[color:var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            {siteEn.demos.viewProjectsLabel}
          </Link>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {projectsEn.map((project) => (
            <article
              key={project.slug}
              className="card p-6 flex flex-col gap-4"
            >
              <div>
                <h2 className="text-xl font-semibold text-[color:var(--foreground)]">
                  {project.title}
                </h2>
                <p className="text-sm text-[color:var(--muted)] mt-2">
                  {project.tagline}
                </p>
              </div>
              <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  {siteEn.demos.howToRunLabel}
                </p>
                <ol className="mt-3 list-decimal list-inside space-y-1 text-xs text-[color:var(--muted)]">
                  {project.howToRun.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-[color:var(--muted)]">
                <Link
                  href={`/en/projects/${project.slug}`}
                  className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                >
                  {siteEn.demos.fullCaseLabel}
                </Link>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[color:var(--border)] px-4 py-2 transition hover:border-[color:var(--accent)]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                >
                  {siteEn.projects.modal.githubLabel}
                </a>
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[color:var(--accent)]/40 px-4 py-2 text-[color:var(--accent)] transition hover:border-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                  >
                    {siteEn.demos.openDemoLabel}
                  </a>
                ) : (
                  <span className="rounded-full border border-[color:var(--border)] px-4 py-2 text-[color:var(--muted)]">
                    {siteEn.demos.demoSoonLabel}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <section className="mt-12 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)] mb-4">
            {siteEn.demos.publishTitle}
          </h2>
          <ul className="space-y-3 text-sm text-[color:var(--muted)]">
            {siteEn.demos.publishItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
