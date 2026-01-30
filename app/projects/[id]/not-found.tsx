import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl font-semibold text-[color:var(--foreground)]">
          Projeto não encontrado
        </h1>
        <p className="text-[color:var(--muted)]">
          Não encontramos este projeto no portfólio. Verifique o link ou volte para a lista.
        </p>
        <Link
          href="/projetos"
          className="btn-outline w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
        >
          Voltar para projetos
        </Link>
      </div>
    </main>
  );
}
