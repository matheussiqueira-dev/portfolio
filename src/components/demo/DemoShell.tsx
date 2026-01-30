"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Project } from "@/data/projects";
import { IframeDemo } from "./IframeDemo";
import { InlineDemo } from "./InlineDemo";
import { VideoDemo } from "./VideoDemo";

type Props = {
  project: Project;
  onClose: () => void;
};

type DemoAspect = "16:9" | "4:3" | "1:1";

function aspectToPadding(aspect: DemoAspect) {
  if (aspect === "4:3") return "75%";
  if (aspect === "1:1") return "100%";
  return "56.25%";
}

export function DemoShell({ project, onClose }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [resetKey, setResetKey] = useState(0);

  const aspect =
    "aspectRatio" in project.demo && project.demo.aspectRatio
      ? project.demo.aspectRatio
      : "16:9";
  const minHeight =
    "minHeight" in project.demo && project.demo.minHeight
      ? project.demo.minHeight
      : 520;

  const openInNewTabUrl = useMemo(() => {
    if (project.demo.mode === "iframe") return project.demo.iframeUrl;
    return project.links?.live;
  }, [project.demo, project.links?.live]);

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  async function toggleFullscreen() {
    const el = containerRef.current;
    if (!el) return;

    const doc = document as Document & { fullscreenElement?: Element | null };

    if (!doc.fullscreenElement) {
      await el.requestFullscreen?.();
    } else {
      await document.exitFullscreen?.();
    }
  }

  return (
    <div
      ref={containerRef}
      tabIndex={-1}
      className="fixed inset-0 z-50 bg-black/70 p-3 backdrop-blur sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Demo: ${project.title}`}
    >
      <div className="mx-auto flex h-full max-w-6xl flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-950">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
          <div className="min-w-0">
            <div className="truncate text-sm font-medium">{project.title}</div>
            <div className="truncate text-xs opacity-70">Modo demo</div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {openInNewTabUrl ? (
              <a
                href={openInNewTabUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-white/10 px-3 py-1.5 text-xs hover:bg-white/5"
              >
                Abrir em nova aba
              </a>
            ) : null}

            <button
              onClick={() => setResetKey((key) => key + 1)}
              className="rounded-md border border-white/10 px-3 py-1.5 text-xs hover:bg-white/5"
              type="button"
            >
              Reiniciar
            </button>

            <button
              onClick={toggleFullscreen}
              className="rounded-md border border-white/10 px-3 py-1.5 text-xs hover:bg-white/5"
              type="button"
            >
              Fullscreen
            </button>

            <button
              onClick={onClose}
              className="rounded-md border border-white/10 px-3 py-1.5 text-xs hover:bg-white/5"
              type="button"
            >
              Voltar
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4">
          <div className="mx-auto w-full" style={{ minHeight }}>
            <div
              className="relative w-full overflow-hidden rounded-lg border border-white/10"
              style={{ paddingTop: aspectToPadding(aspect) }}
            >
              <div className="absolute inset-0" key={resetKey}>
                {project.demo.mode === "iframe" && (
                  <IframeDemo
                    url={project.demo.iframeUrl}
                    title={project.title}
                    className="h-full"
                  />
                )}

                {project.demo.mode === "inline" && (
                  <div className="h-full w-full">
                    <InlineDemo inlineId={project.demo.inlineId} />
                  </div>
                )}

                {project.demo.mode === "video" && (
                  <VideoDemo
                    videoUrl={project.demo.videoUrl}
                    title={project.title}
                    className="h-full"
                  />
                )}

                {project.demo.mode === "none" && (
                  <div className="grid h-full w-full place-items-center bg-white/5">
                    <div className="text-sm opacity-80">Sem demo disponivel.</div>
                  </div>
                )}
              </div>
            </div>

            <p className="mt-3 text-xs opacity-70">
              Se algo nao carregar, tente &quot;Reiniciar&quot; ou &quot;Abrir em nova
              aba&quot;.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoShell;
