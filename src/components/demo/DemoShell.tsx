"use client";

import { createPortal } from "react-dom";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Project, ProjectDemo } from "@/src/data/projects";
import InlineDemo from "@/src/components/demo/InlineDemo";
import IframeDemo from "@/src/components/demo/IframeDemo";
import VideoDemo from "@/src/components/demo/VideoDemo";

const iconStyles = "h-4 w-4";

const icons = {
  back: (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={iconStyles}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  ),
  refresh: (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={iconStyles}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 4v4h-4" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 20v-4h4" />
    </svg>
  ),
  external: (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={iconStyles}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M14 3h7v7" />
      <path d="M10 14L21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  ),
  fullscreen: (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={iconStyles}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M9 3H5a2 2 0 0 0-2 2v4" />
      <path d="M15 3h4a2 2 0 0 1 2 2v4" />
      <path d="M9 21H5a2 2 0 0 1-2-2v-4" />
      <path d="M15 21h4a2 2 0 0 0 2-2v-4" />
    </svg>
  ),
};

type DemoShellProps = {
  project: Project;
  onClose: () => void;
};

type DemoStatus = "loading" | "ready" | "error";

const resolveExternalUrl = (demo: ProjectDemo, project: Project) => {
  if (project.links?.live) {
    return project.links.live;
  }
  if (demo.mode === "iframe") {
    return demo.iframeUrl;
  }
  return null;
};

export default function DemoShell({ project, onClose }: DemoShellProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const [status, setStatus] = useState<DemoStatus>("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [instanceKey, setInstanceKey] = useState(0);
  const demo = project.demo;

  const externalUrl = useMemo(() => resolveExternalUrl(demo, project), [demo, project]);

  useEffect(() => {
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [onClose]);

  useEffect(() => {
    setErrorMessage(null);
    if (demo.mode === "inline" || demo.mode === "none") {
      setStatus("ready");
    } else {
      setStatus("loading");
    }
  }, [demo.mode, instanceKey]);

  const handleError = (message: string) => {
    setStatus("error");
    setErrorMessage(message);
  };

  const handleReady = () => {
    setStatus("ready");
  };

  const handleRestart = () => {
    setInstanceKey((prev) => prev + 1);
  };

  const handleFullscreen = async () => {
    const element = panelRef.current;
    if (!element) return;

    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    if (element.requestFullscreen) {
      await element.requestFullscreen();
    }
  };

  const renderDemo = () => {
    if (status === "error") {
      return (
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-6 text-sm text-[color:var(--muted)]">
          <p className="text-[color:var(--foreground)] font-semibold mb-2">Demo indisponível</p>
          <p>{errorMessage ?? "Não foi possível iniciar a demo."}</p>
        </div>
      );
    }

    if (demo.mode === "inline") {
      return (
        <InlineDemo inlineId={demo.inlineId} onError={handleError} />
      );
    }

    if (demo.mode === "iframe") {
      return (
        <IframeDemo
          url={demo.iframeUrl}
          title={`Demo ${project.title}`}
          aspectRatio={demo.aspectRatio}
          minHeight={demo.minHeight}
          onReady={handleReady}
          onError={handleError}
        />
      );
    }

    if (demo.mode === "video") {
      return (
        <VideoDemo
          url={demo.videoUrl}
          title={`Demo ${project.title}`}
          aspectRatio={demo.aspectRatio}
          minHeight={demo.minHeight}
          onReady={handleReady}
          onError={handleError}
        />
      );
    }

    return (
      <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-6 text-sm text-[color:var(--muted)]">
        Esta demo não está disponível.
      </div>
    );
  };

  if (typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[80] bg-black/55 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div className="flex min-h-full items-start justify-center p-4 sm:p-6">
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Demo ${project.title}`}
          className="w-full max-w-5xl rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 text-[color:var(--foreground)] shadow-2xl"
          onClick={(event) => event.stopPropagation()}
        >
          <header className="flex flex-wrap items-center justify-between gap-3 border-b border-[color:var(--border)] pb-4">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Demo interativa</p>
              <h3 className="text-lg font-semibold text-[color:var(--foreground)]">{project.title}</h3>
              <p className="text-sm text-[color:var(--muted)]">{project.shortDescription}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="btn-ghost flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
              >
                {icons.back}
                Voltar
              </button>
              <button
                type="button"
                onClick={handleRestart}
                className="btn-outline flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
              >
                {icons.refresh}
                Reiniciar
              </button>
              <button
                type="button"
                onClick={handleFullscreen}
                className="btn-outline flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
              >
                {icons.fullscreen}
                Fullscreen
              </button>
              {externalUrl ? (
                <a
                  href={externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                >
                  {icons.external}
                  Abrir em nova aba
                </a>
              ) : null}
            </div>
          </header>

          <div className="mt-5 space-y-4" key={instanceKey}>
            {status === "loading" ? (
              <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4 text-sm text-[color:var(--muted)]">
                Preparando demo…
              </div>
            ) : null}
            {renderDemo()}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
