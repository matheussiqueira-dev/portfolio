"use client";

import Image from "next/image";

export type MediaItem = {
  src: string;
  alt: string;
  type?: "image" | "gif" | "video";
  caption?: string;
};

type Props = {
  items: MediaItem[];
  fallbackSrc?: string;
  fallbackAlt?: string;
  videoFallbackText?: string;
  videoLabel?: string;
};

const inferType = (src: string): MediaItem["type"] => {
  const lower = src.toLowerCase();
  if (lower.endsWith(".mp4")) {
    return "video";
  }
  if (lower.endsWith(".gif")) {
    return "gif";
  }
  return "image";
};

export default function MediaGallery({
  items,
  fallbackSrc,
  fallbackAlt,
  videoFallbackText,
  videoLabel,
}: Props) {
  const fallbackText =
    videoFallbackText ?? "Seu navegador não suporta vídeo HTML5.";
  const normalizedItems =
    items.length > 0
      ? items
      : fallbackSrc
        ? [
            {
              src: fallbackSrc,
              alt: fallbackAlt ?? "Captura do projeto",
              type: "image" as const,
            },
          ]
        : [];

  if (normalizedItems.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {normalizedItems.map((item) => {
        const type = item.type ?? inferType(item.src);

        return (
          <figure
            key={item.src}
            className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3 shadow-sm"
          >
            {type === "video" ? (
              <div className="space-y-2">
                {videoLabel ? (
                  <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--accent-strong)]">
                    {videoLabel}
                  </p>
                ) : null}
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={fallbackSrc}
                  className="w-full rounded-xl object-cover"
                >
                  <source src={item.src} type="video/mp4" />
                  {fallbackText}
                </video>
              </div>
            ) : type === "gif" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.src}
                alt={item.alt}
                width={1200}
                height={630}
                className="w-full rounded-xl object-cover"
                onError={(event) => {
                  if (fallbackSrc && event.currentTarget.src !== fallbackSrc) {
                    event.currentTarget.src = fallbackSrc;
                  }
                }}
              />
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                width={1200}
                height={630}
                sizes="(max-width: 768px) 100vw, 520px"
                className="w-full rounded-xl object-cover"
              />
            )}
            {item.caption ? (
              <figcaption className="mt-3 text-xs text-[color:var(--muted)]">
                {item.caption}
              </figcaption>
            ) : null}
          </figure>
        );
      })}
    </div>
  );
}
