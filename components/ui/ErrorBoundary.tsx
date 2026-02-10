"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

/**
 * Props for ErrorBoundary component
 */
interface ErrorBoundaryProps {
  /** Child components to render */
  children: ReactNode;
  /** Optional custom fallback UI */
  fallback?: ReactNode;
  /** Optional callback when error occurs */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

/**
 * State for ErrorBoundary component
 */
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary component to catch and handle React errors
 * 
 * Implements React's error boundary pattern to prevent the entire app
 * from crashing when a component throws an error. Provides a fallback UI
 * and optional error logging.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <ErrorBoundary>
 *   <MyComponent />
 * </ErrorBoundary>
 * 
 * // With custom fallback
 * <ErrorBoundary fallback={<CustomErrorUI />}>
 *   <MyComponent />
 * </ErrorBoundary>
 * 
 * // With error logging
 * <ErrorBoundary onError={(error, errorInfo) => {
 *   logErrorToService(error, errorInfo);
 * }}>
 *   <MyComponent />
 * </ErrorBoundary>
 * ```
 */
export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  private handleRetry = (): void => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div
          role="alert"
          className="flex min-h-[400px] flex-col items-center justify-center gap-4 px-6 py-12"
        >
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
              Algo deu errado
            </h2>
            <p className="mt-2 text-[color:var(--muted)]">
              Ocorreu um erro ao carregar este conteúdo.
            </p>
          </div>

          {process.env.NODE_ENV === "development" && this.state.error && (
            <details className="max-w-2xl rounded border border-[color:var(--border)] bg-[color:var(--background-subtle)] p-4">
              <summary className="cursor-pointer font-mono text-sm text-[color:var(--muted)]">
                Ver detalhes do erro
              </summary>
              <pre className="mt-4 overflow-auto text-xs">
                {this.state.error.toString()}
              </pre>
            </details>
          )}

          <button
            onClick={this.handleRetry}
            className="btn-primary mt-4"
          >
            Tentar novamente
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Higher-order component to wrap a component with ErrorBoundary
 * 
 * @param Component - Component to wrap
 * @param fallback - Optional custom fallback UI
 * @returns Wrapped component with error boundary
 * 
 * @example
 * ```tsx
 * const SafeComponent = withErrorBoundary(MyComponent);
 * 
 * // With custom fallback
 * const SafeComponent = withErrorBoundary(
 *   MyComponent,
 *   <CustomError />
 * );
 * ```
 */
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: ReactNode
): React.ComponentType<P> {
  return function WithErrorBoundary(props: P) {
    return (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}
