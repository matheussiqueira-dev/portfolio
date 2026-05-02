const skeletonCards = Array.from({ length: 3 }, (_, index) => index);
const skeletonSections = Array.from({ length: 2 }, (_, index) => index);

export default function CertificatesLoading() {
  return (
    <main
      className="layout-container page-shell"
      style={{ paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}
      aria-busy="true"
    >
      <header className="mb-8">
        <div className="mb-3 h-3 w-36 rounded-full bg-[color:var(--surface-muted)]" />
        <div className="mb-4 h-10 w-64 rounded-xl bg-[color:var(--surface-muted)]" />
        <div className="h-4 max-w-2xl rounded-full bg-[color:var(--surface-muted)]" />
      </header>

      <div className="mb-8 grid gap-3 sm:grid-cols-[1fr_auto_auto]" aria-hidden="true">
        <div className="h-12 rounded-xl bg-[color:var(--surface-muted)]" />
        <div className="h-12 rounded-xl bg-[color:var(--surface-muted)] sm:w-52" />
        <div className="h-12 rounded-xl bg-[color:var(--surface-muted)] sm:w-52" />
      </div>

      <div className="space-y-12" aria-hidden="true">
        {skeletonSections.map((section) => (
          <section key={section}>
            <div className="mb-5 border-b border-[color:var(--border)] pb-4">
              <div className="mb-3 h-7 w-72 rounded-xl bg-[color:var(--surface-muted)]" />
              <div className="h-4 max-w-2xl rounded-full bg-[color:var(--surface-muted)]" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skeletonCards.map((card) => (
                <div
                  key={`${section}-${card}`}
                  className="overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)]"
                >
                  <div className="aspect-[4/3] bg-[color:var(--bg)]" />
                  <div className="space-y-3 p-5">
                    <div className="h-4 w-4/5 rounded-full bg-[color:var(--border)]" />
                    <div className="h-3 w-24 rounded-full bg-[color:var(--border)]" />
                    <div className="flex gap-2">
                      <div className="h-5 w-16 rounded-full bg-[color:var(--border)]" />
                      <div className="h-5 w-20 rounded-full bg-[color:var(--border)]" />
                    </div>
                    <div className="h-4 w-32 rounded-full bg-[color:var(--border)]" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
