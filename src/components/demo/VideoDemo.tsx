"use client";

import { useEffect, useMemo, useState } from "react";
import type { DemoAspectRatio } from "@/src/data/projects";

type VideoDemoProps = {
  url: string;
  title: string;
  aspectRatio?: DemoAspectRatio;
  minHeight?: number;
  onReady?: () => void;
  onError?: (message: string) => void;
};

const ratioMap: Record<DemoAspectRatio, number> = {
  "16:9": 16 / 9,
  "4:3": 4 / 3,
  "1:1": 1,
};

const getYouTubeId = (source: string) => {
  const url = source.trim();
  if (url.includes("youtu.be/")) {
    return url.split("youtu.be/")[1]?.split("?")[0] ?? null;
  }
  if (url.includes("youtube.com")) {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : null;
  }
  return null;
};

export default function VideoDemo({
  url,
  title,
  aspectRatio = "16:9",
  minHeight = 360,
  onReady,
  onError,
}: VideoDemoProps) {
  const ratio = ratioMap[aspectRatio];
  const [loaded, setLoaded] = useState(false);
  const youtubeId = useMemo(() => getYouTubeId(url), [url]);
  const isYouTube = Boolean(youtubeId);

  useEffect(() => {
    setLoaded(false);
  }, [url]);

  if (isYouTube && youtubeId) {
    const embedUrl = `https://www.youtube.com/embed/${youtubeId}`;
    return (
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)]"
        style={{ aspectRatio: ratio, minHeight }}
      >
        {!loaded ? (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-[color:var(--muted)]">
            Carregando vídeo…
          </div>
        ) : null}
        <iframe
          title={title}
          src={embedUrl}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="absolute inset-0 h-full w-full"
          onLoad={() => {
            setLoaded(true);
            onReady?.();
          }}
          onError={() => {
            setLoaded(true);
            onError?.("Não foi possível carregar o vídeo.");
          }}
        />
      </div>
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)]"
      style={{ aspectRatio: ratio, minHeight }}
    >
      {!loaded ? (
        <div className="absolute inset-0 flex items-center justify-center text-sm text-[color:var(--muted)]">
          Carregando vídeo…
        </div>
      ) : null}
      <video
        controls
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
        onLoadedData={() => {
          setLoaded(true);
          onReady?.();
        }}
        onError={() => {
          setLoaded(true);
          onError?.("Não foi possível carregar o vídeo.");
        }}
      >
        <source src={url} />
      </video>
    </div>
  );
}
