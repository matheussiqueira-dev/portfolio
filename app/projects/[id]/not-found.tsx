import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-xl font-semibold">Projeto não encontrado</h1>
      <p className="mt-2 opacity-80">
        Verifique o link ou volte para a lista de projetos.
      </p>
      <Link className="mt-6 inline-block underline" href="/">
        Voltar
      </Link>
    </main>
  );
}
