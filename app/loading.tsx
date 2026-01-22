/**
 * Global loading state for the application
 * Displayed during page transitions
 */
export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-24">
            <div className="max-w-md w-full space-y-8">
                {/* Animated loading indicator */}
                <div className="flex flex-col items-center gap-4">
                    <div className="relative w-16 h-16">
                        <div className="absolute inset-0 rounded-full border-4 border-[color:var(--border)]"></div>
                        <div className="absolute inset-0 rounded-full border-4 border-[color:var(--accent)] border-t-transparent animate-spin"></div>
                    </div>

                    <p className="text-[color:var(--muted)] text-sm font-medium">
                        Carregando...
                    </p>
                </div>

                {/* Skeleton content */}
                <div className="space-y-4 animate-pulse">
                    <div className="h-8 bg-[color:var(--surface-muted)] rounded-lg w-3/4 mx-auto"></div>
                    <div className="h-4 bg-[color:var(--surface-muted)] rounded w-full"></div>
                    <div className="h-4 bg-[color:var(--surface-muted)] rounded w-5/6 mx-auto"></div>
                    <div className="h-4 bg-[color:var(--surface-muted)] rounded w-4/6 mx-auto"></div>
                </div>
            </div>
        </div>
    );
}
