"use client";

import type { ReactNode } from "react";
import { Component } from "react";

type DemoErrorBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

type DemoErrorBoundaryState = {
  hasError: boolean;
};

export class DemoErrorBoundary extends Component<
  DemoErrorBoundaryProps,
  DemoErrorBoundaryState
> {
  state: DemoErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-6 text-sm text-[color:var(--muted)]">
            Demo unavailable.
          </div>
        )
      );
    }

    return this.props.children;
  }
}
