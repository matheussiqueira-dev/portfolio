import Image from "next/image";
import Link from "next/link";
import type { DemoExperience } from "@/data/projects.types";
import { buildInternalDemoPath } from "@/lib/demos";

type DemoPreviewProps = {
  demo?: DemoExperience;
  fallbackMedia?: { src: string; alt: string };
  locale: "pt" | "en";
  projectSlug: string;
  projectTitle: string;
};

export function DemoPreview({
  demo,
  fallbackMedia,
  locale,
  projectSlug,
  projectTitle,
}: DemoPreviewProps) {
  const labels =
    locale === "pt"
      ? {
          comingSoon: "Demo em breve",
          openDemo: "Abrir demo",
          openInteractive: "Abrir demo interativa",
          externalHint: "Demo externa disponível.",
          embedHint: "Abrir demo completa na página dedicada.",
          videoFallback: "Seu navegador não suporta vídeo HTML5.",
          interactiveTitle: "Demo interativa",
        }
      : {
          comingSoon: "Demo coming soon",
          openDemo: "Open demo",
          openInteractive: "Open interactive demo",
          externalHint: "External demo available.",
          embedHint: "Open the full demo on its dedicated page.",
          videoFallback: "Your browser does not support HTML5 video.",
          interactiveTitle: "Interactive demo",
        };

  const demoDetailPath =
    locale === "en" ? `/en/demos/${projectSlug}` : `/demos/${projectSlug}`;

  if (!demo) {
    if (previewImage) {
      return (
        <div className="space-y-2">
          {previewImage}
          <p className="text-xs text-[color:var(--muted)]">
            {labels.comingSoon}
          </p>
        </div>
      );
    }

    return (
      <div className="flex items-center justify-center rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] py-12 text-sm text-[color:var(--muted)]">
        <p>{labels.comingSoon}</p>
      </div>
    );
  }

  const previewImage = fallbackMedia ? (
    <div className="relative w-full overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] aspect-video">
      <Image
        src={fallbackMedia.src}
        alt={fallbackMedia.alt}
        fill
        sizes="(max-width: 768px) 100vw, 520px"
        className="object-cover"
      />
    </div>
  ) : null;

  if (demo.kind === "video") {
    const poster = demo.poster ?? fallbackMedia?.src;

    return (
      <div className="space-y-2">
        <video
          controls
          playsInline
          preload="metadata"
          poster={poster}
          className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)]"
          aria-label={`${projectTitle} demo`}
        >
          <source src={demo.src} />
          {labels.videoFallback}
        </video>
        {demo.caption ? (
          <p className="text-xs text-[color:var(--muted)]">{demo.caption}</p>
        ) : null}
      </div>
    );
  }

  if (demo.kind === "internal") {
    const path = buildInternalDemoPath({
      locale,
      projectSlug,
      demoPath: demo.path ?? demoDetailPath,
    });

    return (
      <div className="space-y-3">
        {previewImage}
        <div className="space-y-1">
          <p className="text-sm font-semibold text-[color:var(--foreground)]">
            {demo.title ?? labels.interactiveTitle}
          </p>
          {demo.description ? (
            <p className="text-xs text-[color:var(--muted)]">
              {demo.description}
            </p>
          ) : null}
        </div>
        <Link
          href={path}
          className="btn-primary w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
        >
          {labels.openInteractive}
        </Link>
      </div>
    );
  }

  if (demo.kind === "embed") {
    return (
      <div className="space-y-3">
        {previewImage}
        <div className="space-y-1">
          <p className="text-sm font-semibold text-[color:var(--foreground)]">
            {demo.title}
          </p>
          <p className="text-xs text-[color:var(--muted)]">{labels.embedHint}</p>
        </div>
        <Link
          href={demoDetailPath}
          className="btn-outline w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
        >
          {labels.openDemo}
        </Link>
      </div>
    );
  }

  if (demo.kind === "external") {
    return (
      <div className="space-y-3">
        {previewImage}
        <p className="text-xs text-[color:var(--muted)]">
          {labels.externalHint}
        </p>
        <a
          href={demo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
        >
          {demo.label ?? labels.openDemo}
        </a>
      </div>
    );
  }

  return null;
}
