"use client";

import Link from "next/link";

type ErrorFallbackProps = {
  title?: string;
  description?: string;
  error?: Error & { digest?: string };
  reset?: () => void;
  homeHref?: string;
};

export default function ErrorFallback({
  title = "Algo deu errado",
  description = "Ocorreu um erro inesperado.",
  error,
  reset,
  homeHref = "/",
}: ErrorFallbackProps) {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="mx-auto flex min-h-[55vh] max-w-3xl flex-col justify-center space-y-6 text-center">
        <div className="space-y-2">
          <p className="eyebrow">Falha de renderização</p>
          <h1 className="text-4xl font-bold text-[color:var(--foreground)] md:text-5xl">{title}</h1>
          <p className="text-base text-[color:var(--muted)] md:text-lg">{description}</p>
        </div>

        {process.env.NODE_ENV === "development" && error && (
          <div className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] p-4 text-left shadow-sm">
            <p className="mb-2 text-xs text-[color:var(--muted)]">Detalhes do erro (dev only):</p>
            <p className="break-all font-mono text-sm text-[color:var(--foreground)]">
              {error.message}
            </p>
            {error.digest && (
              <p className="mt-2 text-xs text-[color:var(--muted)]">Digest: {error.digest}</p>
            )}
          </div>
        )}

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          {reset && (
            <button
              onClick={reset}
              className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              Tentar novamente
            </button>
          )}

          <Link
            href={homeHref}
            className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </main>
  );
}
