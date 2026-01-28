"use client";

import dynamic from "next/dynamic";
import type { ComponentType, ReactNode } from "react";
import type { InteractiveDemoProps } from "./types";

type InteractiveDemoLoaderProps = InteractiveDemoProps & {
  slug: string;
  fallback?: ReactNode;
};

const LoadingSkeleton = () => (
  <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-6">
    <div className="animate-pulse space-y-3">
      <div className="h-3 w-32 rounded-full bg-[color:var(--border)]" />
      <div className="h-24 rounded-xl bg-[color:var(--border)]" />
      <div className="h-3 w-48 rounded-full bg-[color:var(--border)]" />
    </div>
  </div>
);

const demoRegistry: Record<string, ComponentType<InteractiveDemoProps>> = {
  "chatbot-ia-api": dynamic<InteractiveDemoProps>(
    () => import("./ApiPlaygroundDemo").then((mod) => mod.ApiPlaygroundDemo),
    { loading: LoadingSkeleton, ssr: false }
  ),
};

export function InteractiveDemo({
  slug,
  locale,
  fallback,
}: InteractiveDemoLoaderProps) {
  const DemoComponent = demoRegistry[slug];

  if (!DemoComponent) {
    return (
      fallback ?? (
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-6 text-sm text-[color:var(--muted)]">
          Demo unavailable.
        </div>
      )
    );
  }

  return <DemoComponent locale={locale} />;
}
