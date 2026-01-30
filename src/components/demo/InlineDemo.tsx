"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { getDemoImport } from "@/src/demos/registry";

type InlineDemoProps = {
  inlineId: string;
  onError?: (message: string) => void;
};

type ErrorBoundaryProps = {
  onError?: (message: string) => void;
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class DemoErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    this.props.onError?.(error.message);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-6 text-sm text-[color:var(--muted)]">
          Não foi possível carregar a demo interativa. Tente novamente.
        </div>
      );
    }
    return this.props.children;
  }
}

const InlineLoading = () => (
  <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-6 text-sm text-[color:var(--muted)]">
    Carregando demo interativa…
  </div>
);

export default function InlineDemo({ inlineId, onError }: InlineDemoProps) {
  const demoImport = getDemoImport(inlineId);

  const DemoComponent = useMemo(() => {
    if (!demoImport) {
      return null;
    }
    return dynamic(demoImport, {
      ssr: false,
      loading: InlineLoading,
    });
  }, [demoImport]);

  if (!DemoComponent) {
    onError?.("Demo inline não encontrada.");
    return (
      <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-6 text-sm text-[color:var(--muted)]">
        Esta demo interativa não está disponível no momento.
      </div>
    );
  }

  return (
    <DemoErrorBoundary onError={onError}>
      <DemoComponent />
    </DemoErrorBoundary>
  );
}
