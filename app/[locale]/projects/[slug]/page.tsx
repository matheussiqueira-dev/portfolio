import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { getProjectBySlug, projectSlugs } from "@/data/projects";
import { getProjectBySlugEn, projectSlugsEn } from "@/data/projects.en";
import type { Project, ProjectMedia } from "@/data/projects.types";
import { isValidLocale, type Locale } from "@/core/i18n/routing";
import { Link } from "@/core/i18n/navigation";
import SafeImage from "@/ui/components/demo/SafeImage";
import { StackIconList } from "@/ui/components/StackIcon";

import styles from "./project-detail.module.css";

type RouteParams = Promise<{ locale: string; slug: string }>;

type Props = {
  params: RouteParams;
};

type EmbeddedMedia = {
  kind: "local" | "embed";
  src: string;
  poster?: string;
  title: string;
  caption?: string;
};

const copy = {
  "pt-BR": {
    eyebrow: "Case de projeto",
    role: "Meu papel",
    stack: "Tecnologias utilizadas",
    overview: "Descrição completa",
    problem: "Problema resolvido",
    solution: "Solução implementada",
    features: "Funcionalidades principais",
    highlights: "Destaques",
    demonstrates: "Competências demonstradas",
    howToRun: "Como executar",
    media: "Vídeo e mídia",
    cover: "Capa do projeto",
    demo: "Ver demo",
    repo: "Ver repositório",
    video: "Abrir vídeo",
    contact: "Conversar sobre um projeto",
    back: "Voltar para projetos",
    unavailable: "Informação não cadastrada para este campo.",
    finalCtaTitle: "Quer transformar uma ideia em sistema funcional?",
    finalCtaDescription:
      "Posso conectar estratégia, engenharia de software e dados para tirar projetos reais do papel com clareza técnica.",
  },
  en: {
    eyebrow: "Project case study",
    role: "My role",
    stack: "Technologies used",
    overview: "Full description",
    problem: "Problem solved",
    solution: "Implemented solution",
    features: "Core features",
    highlights: "Highlights",
    demonstrates: "Skills demonstrated",
    howToRun: "How to run",
    media: "Video and media",
    cover: "Project cover",
    demo: "View demo",
    repo: "View repository",
    video: "Open video",
    contact: "Discuss a project",
    back: "Back to projects",
    unavailable: "No information registered for this field.",
    finalCtaTitle: "Want to turn an idea into a working system?",
    finalCtaDescription:
      "I can connect strategy, software engineering, and data to ship real projects with technical clarity.",
  },
} as const;

export function generateStaticParams() {
  return [
    ...projectSlugs.map((slug) => ({ locale: "pt-BR", slug })),
    ...projectSlugsEn.map((slug) => ({ locale: "en", slug })),
  ];
}

function getProject(locale: Locale, slug: string) {
  return locale === "en" ? getProjectBySlugEn(slug) : getProjectBySlug(slug);
}

function getUiCopy(locale: Locale) {
  return locale === "en" ? copy.en : copy["pt-BR"];
}

async function resolveProject(params: RouteParams) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const project = getProject(locale, slug);

  if (!project) {
    notFound();
  }

  return { locale, project };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    return {};
  }

  const project = getProject(locale, slug);

  if (!project) {
    return {
      title: locale === "en" ? "Project not found" : "Projeto não encontrado",
    };
  }

  return {
    title: project.seo?.title ?? project.headline ?? project.title,
    description: project.seo?.description ?? project.tagline,
    openGraph: {
      title: project.seo?.title ?? project.headline ?? project.title,
      description: project.seo?.description ?? project.tagline,
      images: [{ url: getCoverSrc(project, locale) }],
    },
  };
}

function getDemoHref(project: Project): string | undefined {
  if (project.demoUrl) {
    return project.demoUrl;
  }

  if (!project.demo) {
    return undefined;
  }

  switch (project.demo.kind) {
    case "external":
    case "embed":
      return project.demo.url;
    case "internal":
      return project.demo.path;
    case "video":
      return undefined;
  }
}

function getCoverSrc(project: Project, locale: Locale): string {
  const cover = project.screenshots.find((item) => item.type !== "video" && item.type !== "gif");

  if (cover) {
    return cover.src;
  }

  if (project.demo?.kind === "video" && project.demo.poster) {
    return project.demo.poster;
  }

  return `/thumbnails/${locale === "en" ? "en" : "pt"}/${project.slug}.png`;
}

function getCoverAlt(project: Project, locale: Locale): string {
  const cover = project.screenshots.find((item) => item.type !== "video" && item.type !== "gif");

  if (cover?.alt) {
    return cover.alt;
  }

  return locale === "en" ? `${project.title} cover` : `Capa do projeto ${project.title}`;
}

function youtubeEmbedUrl(url: URL): string | null {
  const host = url.hostname.replace(/^www\./, "");

  if (host === "youtu.be") {
    const id = url.pathname.split("/").filter(Boolean)[0];
    return id ? `https://www.youtube.com/embed/${id}` : null;
  }

  if (host === "youtube.com" || host === "m.youtube.com") {
    const id = url.searchParams.get("v") ?? url.pathname.split("/embed/")[1];
    return id ? `https://www.youtube.com/embed/${id}` : null;
  }

  return null;
}

function vimeoEmbedUrl(url: URL): string | null {
  const host = url.hostname.replace(/^www\./, "");

  if (host !== "vimeo.com" && host !== "player.vimeo.com") {
    return null;
  }

  const id = url.pathname.split("/").filter(Boolean).pop();
  return id ? `https://player.vimeo.com/video/${id}` : null;
}

function toEmbeddedMedia(
  src: string,
  title: string,
  poster?: string,
  caption?: string
): EmbeddedMedia {
  if (src.startsWith("/")) {
    return { kind: "local", src, poster, title, caption };
  }

  try {
    const url = new URL(src);
    const embedSrc = youtubeEmbedUrl(url) ?? vimeoEmbedUrl(url);

    if (embedSrc) {
      return { kind: "embed", src: embedSrc, title, caption };
    }
  } catch {
    return { kind: "local", src, poster, title, caption };
  }

  return { kind: "embed", src, title, caption };
}

function collectVideos(project: Project): EmbeddedMedia[] {
  const media = new Map<string, EmbeddedMedia>();

  const addMedia = (item: EmbeddedMedia) => {
    if (!media.has(item.src)) {
      media.set(item.src, item);
    }
  };

  if (project.demo?.kind === "video") {
    addMedia(
      toEmbeddedMedia(
        project.demo.src,
        project.demo.caption ?? project.title,
        project.demo.poster,
        project.demo.caption
      )
    );
  }

  if (project.demo?.kind === "embed") {
    addMedia(toEmbeddedMedia(project.demo.url, project.demo.title));
  }

  if (project.demo?.kind === "external") {
    try {
      const url = new URL(project.demo.url);
      const embedSrc = youtubeEmbedUrl(url) ?? vimeoEmbedUrl(url);
      if (embedSrc) {
        addMedia({
          kind: "embed",
          src: embedSrc,
          title: project.demo.label ?? project.title,
        });
      }
    } catch {
      // External demos that are not media embeds remain available through the CTA.
    }
  }

  if (project.intro?.video) {
    addMedia(
      toEmbeddedMedia(
        project.intro.video.src,
        project.intro.video.caption ?? project.title,
        project.intro.video.poster,
        project.intro.video.caption
      )
    );
  }

  project.screenshots
    .filter((item): item is ProjectMedia & { type: "video" } => item.type === "video")
    .forEach((item) => addMedia(toEmbeddedMedia(item.src, item.alt, undefined, item.alt)));

  return Array.from(media.values());
}

function getIntroParagraphs(project: Project): string[] {
  if (project.longDescription?.length) {
    return project.longDescription;
  }

  if (project.intro?.paragraphs.length) {
    return project.intro.paragraphs;
  }

  return [project.context, project.techSummary].filter(Boolean);
}

function ExternalOrInternalLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const isExternal = /^https?:\/\//i.test(href);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

function ValueList({
  items,
  fallback,
  ordered = false,
}: {
  items: string[];
  fallback: string;
  ordered?: boolean;
}) {
  const visibleItems = items.filter(Boolean);
  const Tag = ordered ? "ol" : "ul";

  if (visibleItems.length === 0) {
    return <p className={styles.fallback}>{fallback}</p>;
  }

  return (
    <Tag className={styles.list}>
      {visibleItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </Tag>
  );
}

function VideoFrame({ media }: { media: EmbeddedMedia }) {
  return (
    <figure className={styles.videoFrame}>
      {media.kind === "local" ? (
        <video
          controls
          preload="metadata"
          playsInline
          poster={media.poster}
          className={styles.video}
        >
          <source src={media.src} />
        </video>
      ) : (
        <iframe
          src={media.src}
          title={media.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.video}
        />
      )}
      {media.caption ? <figcaption>{media.caption}</figcaption> : null}
    </figure>
  );
}

function Section({
  title,
  children,
  wide = false,
}: {
  title: string;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <section className={`${styles.section} ${wide ? styles.wide : ""}`}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default async function ProjectsSlugPage({ params }: Props) {
  const { locale, project } = await resolveProject(params);
  const t = getUiCopy(locale);
  const demoHref = getDemoHref(project);
  const videos = collectVideos(project);
  const coverSrc = getCoverSrc(project, locale);
  const coverAlt = getCoverAlt(project, locale);
  const primaryVideoHref = videos[0]?.src;

  return (
    <main className={`layout-container page-shell ${styles.page}`}>
      <Link href="/projects" className={styles.backLink}>
        ← {t.back}
      </Link>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{project.headline ?? project.title}</h1>
          <p className={styles.tagline}>{project.tagline}</p>

          <div className={styles.metaGrid}>
            <div>
              <span>{t.role}</span>
              <strong>{project.role}</strong>
            </div>
            <div>
              <span>{t.stack}</span>
              <StackIconList items={project.stack} limit={7} size="sm" />
            </div>
          </div>

          <div className={styles.actions}>
            {demoHref ? (
              <ExternalOrInternalLink href={demoHref} className={styles.primaryAction}>
                {t.demo} ↗
              </ExternalOrInternalLink>
            ) : null}
            {project.repoUrl ? (
              <ExternalOrInternalLink href={project.repoUrl} className={styles.secondaryAction}>
                {t.repo} ↗
              </ExternalOrInternalLink>
            ) : null}
            {!demoHref && primaryVideoHref ? (
              <ExternalOrInternalLink href={primaryVideoHref} className={styles.secondaryAction}>
                {t.video} ↗
              </ExternalOrInternalLink>
            ) : null}
          </div>
        </div>

        <figure className={styles.cover}>
          <SafeImage
            src={coverSrc}
            fallbackSrc="/projects/placeholder.png"
            alt={coverAlt}
            fill
            sizes="(max-width: 900px) 100vw, 44vw"
            priority
            className={styles.coverImage}
          />
          <figcaption>{t.cover}</figcaption>
        </figure>
      </section>

      <section className={styles.mediaSection} aria-labelledby="project-media">
        <div>
          <p className="eyebrow">{t.media}</p>
          <h2 id="project-media">{videos.length > 0 ? t.media : t.cover}</h2>
        </div>
        {videos.length > 0 ? (
          <div className={styles.videoGrid}>
            {videos.map((media) => (
              <VideoFrame key={media.src} media={media} />
            ))}
          </div>
        ) : (
          <figure className={styles.staticCover}>
            <SafeImage
              src={coverSrc}
              fallbackSrc="/projects/placeholder.png"
              alt={coverAlt}
              fill
              sizes="100vw"
              className={styles.coverImage}
            />
          </figure>
        )}
      </section>

      <section className={styles.contentGrid}>
        <Section title={t.overview} wide>
          <div className={styles.prose}>
            {getIntroParagraphs(project).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>{project.techSummary}</p>
          </div>
        </Section>

        <Section title={t.problem}>
          <ValueList items={project.problem} fallback={t.unavailable} />
        </Section>

        <Section title={t.solution}>
          <ValueList items={project.solution} fallback={t.unavailable} />
        </Section>

        <Section title={t.features}>
          <ValueList items={project.features} fallback={t.unavailable} />
        </Section>

        <Section title={t.highlights}>
          <ValueList items={project.highlights} fallback={t.unavailable} />
        </Section>

        <Section title={t.demonstrates}>
          <ValueList items={project.demonstrates} fallback={t.unavailable} />
        </Section>

        <Section title={t.howToRun}>
          <ValueList items={project.howToRun} fallback={t.unavailable} ordered />
        </Section>
      </section>

      <section className={styles.finalCta}>
        <div>
          <h2>{t.finalCtaTitle}</h2>
          <p>{t.finalCtaDescription}</p>
        </div>
        <div className={styles.actions}>
          {demoHref ? (
            <ExternalOrInternalLink href={demoHref} className={styles.primaryAction}>
              {t.demo} ↗
            </ExternalOrInternalLink>
          ) : null}
          <Link href="/hire" className={styles.secondaryAction}>
            {t.contact} →
          </Link>
        </div>
      </section>
    </main>
  );
}
