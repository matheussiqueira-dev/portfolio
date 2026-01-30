"use client";

import type { DemoAspectRatio } from "@/src/data/projects";

type Props = {
  videoUrl?: string;
  url?: string;
  title: string;
  className?: string;
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

function isYouTubeEmbed(url: string) {
  return url.includes("youtube.com/embed/");
}

export function VideoDemo({
  videoUrl,
  url,
  title,
  className,
  aspectRatio = "16:9",
  minHeight = 360,
  onReady,
  onError,
}: Props) {
  const sourceUrl = videoUrl ?? url ?? "";
  const ratio = ratioMap[aspectRatio];

  if (!sourceUrl) {
    onError?.("URL de vídeo não fornecida.");
    return (
      <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4 text-sm text-[color:var(--muted)]">
        URL de vídeo não fornecida.
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${className ?? ""}`}
      style={{ aspectRatio: ratio, minHeight }}
    >
      {isYouTubeEmbed(sourceUrl) ? (
        <iframe
          src={sourceUrl}
          title={title}
          className="h-full w-full rounded-2xl border border-[color:var(--border)]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          onLoad={() => onReady?.()}
          onError={() => onError?.("Não foi possível carregar o vídeo.")} 
        />
      ) : (
        <video
          className="h-full w-full rounded-2xl border border-[color:var(--border)]"
          controls
          preload="metadata"
          onLoadedData={() => onReady?.()}
          onError={() => onError?.("Não foi possível carregar o vídeo.")}
        >
          <source src={sourceUrl} />
          Seu navegador não suporta vídeo.
        </video>
      )}
    </div>
  );
}

export default VideoDemo;
