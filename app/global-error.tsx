"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";

import ErrorFallback from "@/ui/components/ErrorFallback";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="pt-BR">
      <body>
        <ErrorFallback
          error={error}
          reset={reset}
          description="A aplicação encontrou uma falha global e interrompeu a renderização."
        />
      </body>
    </html>
  );
}
