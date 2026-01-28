import type { Metadata } from "next";
import Link from "next/link";
import { DemoPreview } from "@/components/demos/DemoPreview";
import JsonLd from "@/components/seo/JsonLd";
import { projectsEn } from "@/data/projects.en";
import type { DemoExperience, Project } from "@/data/projects.types";
import { siteEn } from "@/data/site.en";
import { buildInternalDemoPath } from "@/lib/demos";
import { baseUrl, buildAlternates, siteName } from "@/lib/seo";

const pageTitle = "Demos | Matheus Siqueira";
const pageDescription =
  "Demos and repositories for full stack, API, and data projects, focused on real cases, fast technical validation, and objective recruiter and hiring manager review.";

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

const isVideoMedia = (shot: Project["screenshots"][number]) =>
  shot.type === "video" || shot.src.endsWith(".mp4");

const getCover = (project: Project) => {
  const cover = project.screenshots.find((shot) =>
    shot.src.includes("/cover.")
  );
  if (cover) return cover;

  const firstImage = project.screenshots.find((shot) => !isVideoMedia(shot));
  if (firstImage) return firstImage;

  const demoPoster =
    project.demo && "poster" in project.demo ? project.demo.poster : undefined;

  return demoPoster ? { src: demoPoster, alt: project.title } : undefined;
};

const demoPreviewOverrides: Record<string, DemoExperience> = {
  "chatbot-ia-api": {
    kind: "video",
    src: "/Chatbot.mp4",
  },
};

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    ...buildAlternates({ pt: "/demos", en: "/en/demos", canonical: "/en/demos" }),
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
          {projectsEn.map((project) => {
            const cover = getCover(project);
            const libraryThumbnail =
              project.slug === "library-api-advanced"
                ? project.screenshots.find((shot) =>
                    shot.src.includes("library-api-advanced.png")
                  )
                : undefined;
            const previewCover = libraryThumbnail ?? cover;
            const fallbackMedia = previewCover
              ? { src: previewCover.src, alt: previewCover.alt }
              : undefined;
            const demoDetailPath = `/en/demos/${project.slug}`;
            const demo = project.demo;
            const previewDemo = demoPreviewOverrides[project.slug] ?? demo;
            const externalDemoUrl =
              demo?.kind === "external" ? demo.url : project.demoUrl;
            const internalDemoPath = buildInternalDemoPath({
              locale: "en",
              projectSlug: project.slug,
              demoPath: demo?.kind === "internal" ? demo.path : undefined,
            });
            const primaryCta =
              demo?.kind === "internal" ? (
                <Link
                  href={internalDemoPath}
                  className="rounded-full border border-[color:var(--accent)]/40 px-4 py-2 text-[color:var(--accent)] transition hover:border-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                >
                  {siteEn.demos.openInteractiveLabel}
                </Link>
              ) : demo?.kind === "video" ? (
                <Link
                  href={demoDetailPath}
                  className="rounded-full border border-[color:var(--accent)]/40 px-4 py-2 text-[color:var(--accent)] transition hover:border-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                >
                  {siteEn.demos.watchVideoLabel}
                </Link>
              ) : demo?.kind === "embed" ? (
                <Link
                  href={demoDetailPath}
                  className="rounded-full border border-[color:var(--accent)]/40 px-4 py-2 text-[color:var(--accent)] transition hover:border-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                >
                  {siteEn.demos.openDemoLabel}
                </Link>
              ) : demo?.kind === "external" && demo.url ? (
                <a
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[color:var(--accent)]/40 px-4 py-2 text-[color:var(--accent)] transition hover:border-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                >
                  {demo.label ?? siteEn.demos.openDemoLabel}
                </a>
              ) : externalDemoUrl ? (
                <a
                  href={externalDemoUrl}
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
              );
            const secondaryExternalCta =
              project.demoUrl && demo && demo.kind !== "external" ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[color:var(--border)] px-4 py-2 transition hover:border-[color:var(--accent)]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                >
                  {siteEn.demos.openDemoLabel}
                </a>
              ) : null;

            return (
              <article
                key={project.slug}
                className="card p-6 flex h-full flex-col gap-4"
              >
                <div>
                  <h2 className="text-xl font-semibold text-[color:var(--foreground)]">
                    {project.title}
                  </h2>
                  <p className="text-sm text-[color:var(--muted)] mt-2">
                    {project.tagline}
                  </p>
                </div>
                <div
                  className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4"
                  aria-label="Demo preview"
                >
                  <DemoPreview
                    demo={previewDemo}
                    fallbackMedia={fallbackMedia}
                    locale="en"
                    projectSlug={project.slug}
                    projectTitle={project.title}
                  />
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
                <div className="mt-auto flex flex-wrap gap-3 text-xs text-[color:var(--muted)]">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                  >
                    {siteEn.demos.fullCaseLabel}
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[color:var(--border)] px-4 py-2 transition hover:border-[color:var(--accent)]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                  >
                    {siteEn.projects.modal.githubLabel}
                  </a>
                  {primaryCta}
                  {secondaryExternalCta}
                </div>
              </article>
            );
          })}
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
