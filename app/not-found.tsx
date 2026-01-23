import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-3xl mx-auto space-y-6">
        <p className="eyebrow">Página não encontrada</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-[color:var(--foreground)]">
          Não encontramos este conteúdo.
        </h1>
        <p className="text-base text-[color:var(--muted)]">
          O endereço pode ter mudado. Explore os projetos ou volte para a página inicial.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/projetos"
            className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            Ver projetos
          </Link>
          <Link
            href="/"
            className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </main>
  );
}
