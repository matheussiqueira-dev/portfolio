'use client';

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
                    <h1 className="text-4xl font-bold text-white">
                        Algo deu errado
                    </h1>
                    <p className="text-white/70 text-lg">
                        Ocorreu um erro inesperado
                    </p>
                </div>

                {process.env.NODE_ENV === 'development' && (
                    <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-left">
                        <p className="text-xs text-white/50 mb-2">Detalhes do erro (dev only):</p>
                        <p className="text-sm text-white/80 font-mono break-all">
                            {error.message}
                        </p>
                        {error.digest && (
                            <p className="text-xs text-white/40 mt-2">
                                Digest: {error.digest}
                            </p>
                        )}
                    </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                        onClick={reset}
                        className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                        Tentar novamente
                    </button>

                    <a
                        href="/"
                        className="px-6 py-3 border border-white/20 text-white rounded-lg font-medium hover:border-white/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                        Voltar ao início
                    </a>
                </div>
            </div>
        </div>
    );
}
