"use client";

import ErrorFallback from "@/ui/components/ErrorFallback";

/**
 * Global error boundary for the application
 * Catches and displays errors in a user-friendly way
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Log error for debugging (only in development)
  if (process.env.NODE_ENV === "development") {
    console.error("Error boundary caught:", error);
  }

  return (
    <ErrorFallback
      error={error}
      reset={reset}
      description="Ocorreu um erro inesperado ao renderizar esta página."
    />
  );
}
