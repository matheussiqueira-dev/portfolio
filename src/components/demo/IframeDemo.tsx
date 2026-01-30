"use client";

import { useEffect, useState } from "react";
import type { DemoAspectRatio } from "@/src/data/projects";

type IframeDemoProps = {
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

export default function IframeDemo({
  url,
  title,
  aspectRatio = "16:9",
  minHeight = 360,
  onReady,
  onError,
}: IframeDemoProps) {
  const [loaded, setLoaded] = useState(false);
  const ratio = ratioMap[aspectRatio];

  useEffect(() => {
    setLoaded(false);
  }, [url]);

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)]"
      style={{ aspectRatio: ratio, minHeight }}
    >
      {!loaded ? (
        <div className="absolute inset-0 flex items-center justify-center text-sm text-[color:var(--muted)]">
          Carregando demo…
        </div>
      ) : null}
      <iframe
        title={title}
        src={url}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        className="absolute inset-0 h-full w-full"
        onLoad={() => {
          setLoaded(true);
          onReady?.();
        }}
        onError={() => {
          setLoaded(true);
          onError?.("Falha ao carregar a demo em iframe.");
        }}
      />
    </div>
  );
}
