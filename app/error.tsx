'use client';

import Link from 'next/link';

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
    if (process.env.NODE_ENV === 'development') {
        console.error('Error boundary caught:', error);
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-24">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold text-[color:var(--foreground)]">
                        Algo deu errado
                    </h1>
                    <p className="text-[color:var(--muted)] text-lg">
                        Ocorreu um erro inesperado
                    </p>
                </div>

                {process.env.NODE_ENV === 'development' && (
                    <div className="p-4 bg-[color:var(--surface)] rounded-lg border border-[color:var(--border)] text-left shadow-sm">
                        <p className="text-xs text-[color:var(--muted)] mb-2">Detalhes do erro (dev only):</p>
                        <p className="text-sm text-[color:var(--foreground)] font-mono break-all">
                            {error.message}
                        </p>
                        {error.digest && (
                            <p className="text-xs text-[color:var(--muted)] mt-2">
                                Digest: {error.digest}
                            </p>
                        )}
                    </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                        onClick={reset}
                        className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                    >
                        Tentar novamente
                    </button>

                    <Link
                        href="/"
                        className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                    >
                        Voltar ao início
                    </Link>
                </div>
            </div>
        </div>
    );
}
