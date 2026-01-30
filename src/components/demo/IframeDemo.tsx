"use client";

import { useState } from "react";
import type { DemoAspectRatio } from "@/src/data/projects";

type Props = {
  url: string;
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

export function IframeDemo({
  url,
  title,
  className,
  aspectRatio = "16:9",
  minHeight = 360,
  onReady,
  onError,
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const ratio = ratioMap[aspectRatio];

  return (
    <div
      className={`relative w-full ${className ?? ""}`}
      style={{ aspectRatio: ratio, minHeight }}
    >
      {!loaded && !failed ? (
        <div className="absolute inset-0 grid place-items-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)]">
          <div className="text-sm text-[color:var(--muted)]">Carregando demo…</div>
        </div>
      ) : null}

      {failed ? (
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4 text-sm text-[color:var(--muted)]">
          <p>Não foi possível carregar o iframe.</p>
          <a
            className="mt-2 inline-block underline decoration-[color:var(--accent-soft)]/60 underline-offset-4 text-[color:var(--accent)]"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir em nova aba
          </a>
        </div>
      ) : (
        <iframe
          key={url}
          src={url}
          title={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full rounded-2xl border border-[color:var(--border)]"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          onLoad={() => {
            setLoaded(true);
            onReady?.();
          }}
          onError={() => {
            setFailed(true);
            onError?.("Falha ao carregar a demo em iframe.");
          }}
        />
      )}
    </div>
  );
}

export default IframeDemo;
