import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DemoErrorBoundary } from "@/components/demos/DemoErrorBoundary";
import { InteractiveDemo } from "@/components/demos/interactive/InteractiveDemo";
import { isDemoSlug } from "@/components/demos/interactive/registry";
import { getProjectBySlugEn, projectSlugsEn } from "@/data/projects.en";
import type { Project, ProjectMedia } from "@/data/projects.types";
import { siteEn } from "@/data/site.en";
import { buildAlternates, siteName } from "@/lib/seo";

type PageProps = {
  params: {
    slug: string;
  };
};

const demoFallbackCopy = {
  title: "Demo not published yet",
  description:
    "This demo is not published yet. You can review the full case or repository.",
};

const interactiveFallbackCopy = {
  title: "Interactive demo unavailable",
  description:
    "This interactive demo is still being prepared. Meanwhile, check the case study and repository.",
};

const getCover = (project: Project) =>
  project.screenshots.find((shot) => shot.src.includes("/cover.")) ??
  project.screenshots[0];

const getFallbackVideo = (project: Project) =>
  project.screenshots.find(
    (shot) => shot.type === "video" || shot.src.endsWith(".mp4")
  );

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

export function generateStaticParams() {
  return projectSlugsEn.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlugEn(params.slug);

  if (!project) {
    return {
      title: "Demo not found",
      description: "Demo not found.",
    };
  }

  const cover = getCover(project);
  const description = buildMetaDescription(project);
  const baseTitle = project.seo?.title ?? project.headline ?? project.title;
  const metaTitle = `${baseTitle} | Demo`;

  return {
    title: metaTitle,
    description,
    alternates: {
      ...buildAlternates({
        pt: `/demos/${project.slug}`,
        en: `/en/demos/${project.slug}`,
        canonical: `/en/demos/${project.slug}`,
      }),
    },
    openGraph: {
      title: metaTitle,
      description,
      url: `/en/demos/${project.slug}`,
      locale: "en_US",
      type: "website",
      siteName,
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

const DemoFallbackPanel = ({
  title,
  description,
  project,
}: {
  title: string;
  description: string;
  project: Project;
}) => (
  <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-sm">
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-[color:var(--foreground)]">
        {title}
      </h2>
      <p className="text-sm text-[color:var(--muted)]">{description}</p>
    </div>
    <div className="mt-6 flex flex-wrap gap-3 text-sm">
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
        className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
      >
        {siteEn.projects.modal.githubLabel}
      </a>
    </div>
  </div>
);

const DemoVideo = ({
  demo,
  cover,
}: {
  demo: { src: string; caption?: string; poster?: string };
  cover?: ProjectMedia;
}) => (
  <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm">
    <video
      controls
      playsInline
      preload="metadata"
      poster={demo.poster ?? cover?.src}
      className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)]"
    >
      <source src={demo.src} />
      {siteEn.media.videoFallback}
    </video>
    {demo.caption ? (
      <p className="mt-3 text-sm text-[color:var(--muted)]">{demo.caption}</p>
    ) : null}
  </div>
);

export default function DemoDetailPageEn({ params }: PageProps) {
  const project = getProjectBySlugEn(params.slug);

  if (!project) {
    notFound();
  }

  const cover = getCover(project);
  const demo = project.demo;
  const fallbackVideo = !demo ? getFallbackVideo(project) : undefined;
  const resolvedDemo =
    demo ??
    (fallbackVideo
      ? {
          kind: "video" as const,
          src: fallbackVideo.src,
          caption: fallbackVideo.alt,
        }
      : undefined);
  const externalDemoUrl =
    demo?.kind === "external" ? demo.url : project.demoUrl;
  const hasInteractiveDemo = isDemoSlug(project.slug);

  return (
    <main className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-6xl mx-auto">
        <header className="space-y-6">
          <Link
            href="/en/demos"
            className="inline-flex items-center gap-2 text-sm text-[color:var(--muted)] underline decoration-[color:var(--border)] underline-offset-4 transition hover:text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            Back to demos
          </Link>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Demo
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-[color:var(--foreground)]">
              {project.title}
            </h1>
            <p className="text-lg text-[color:var(--muted)] max-w-3xl">
              {project.tagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm">
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
              className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              {siteEn.projects.modal.githubLabel}
            </a>
            {externalDemoUrl ? (
              <a
                href={externalDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
              >
                {siteEn.demos.openDemoLabel}
              </a>
            ) : null}
          </div>
        </header>

        <section className="mt-10 space-y-8">
          {resolvedDemo?.kind === "internal" ? (
            <div className="space-y-6">
              <div className="space-y-2">
                {resolvedDemo.title ? (
                  <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
                    {resolvedDemo.title}
                  </h2>
                ) : null}
                {resolvedDemo.description ? (
                  <p className="text-sm text-[color:var(--muted)] max-w-3xl">
                    {resolvedDemo.description}
                  </p>
                ) : null}
              </div>
              {hasInteractiveDemo ? (
                <DemoErrorBoundary
                  fallback={
                    <DemoFallbackPanel
                      title={interactiveFallbackCopy.title}
                      description={interactiveFallbackCopy.description}
                      project={project}
                    />
                  }
                >
                  <InteractiveDemo
                    slug={project.slug}
                    locale="en"
                    fallback={
                      <DemoFallbackPanel
                        title={interactiveFallbackCopy.title}
                        description={interactiveFallbackCopy.description}
                        project={project}
                      />
                    }
                  />
                </DemoErrorBoundary>
              ) : (
                <DemoFallbackPanel
                  title={interactiveFallbackCopy.title}
                  description={interactiveFallbackCopy.description}
                  project={project}
                />
              )}
            </div>
          ) : resolvedDemo?.kind === "embed" ? (
            <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
                  {resolvedDemo.title}
                </h2>
              </div>
              <div className="relative w-full overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] aspect-video">
                <iframe
                  title={resolvedDemo.title}
                  src={resolvedDemo.url}
                  sandbox={
                    resolvedDemo.sandbox ??
                    "allow-scripts allow-same-origin allow-forms"
                  }
                  loading="lazy"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          ) : resolvedDemo?.kind === "video" ? (
            <DemoVideo demo={resolvedDemo} cover={cover} />
          ) : resolvedDemo?.kind === "external" ? (
            <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 shadow-sm space-y-4">
              <h2 className="text-xl font-semibold text-[color:var(--foreground)]">
                External demo
              </h2>
              <p className="text-sm text-[color:var(--muted)]">
                This demo is hosted outside the site. You can access it using
                the link below.
              </p>
              <a
                href={resolvedDemo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
              >
                {resolvedDemo.label ?? siteEn.demos.openDemoLabel}
              </a>
            </div>
          ) : (
            <DemoFallbackPanel
              title={demoFallbackCopy.title}
              description={demoFallbackCopy.description}
              project={project}
            />
          )}
        </section>
      </div>
    </main>
  );
}
