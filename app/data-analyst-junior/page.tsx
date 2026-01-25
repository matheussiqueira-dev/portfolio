import type { Metadata } from "next";
import Link from "next/link";
import { buildAlternates, siteName } from "@/lib/seo";

const pageTitle =
  "Desenvolvedor Full Stack | Dados & IA | Matheus Siqueira";
const pageDescription =
  "Desenvolvedor Full Stack com base em dados, BI e automação. React/Next.js, Node.js, Python e SQL para produtos end-to-end.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    ...buildAlternates({
      pt: "/data-analyst-junior",
      en: "/en/junior-data-analyst",
      canonical: "/data-analyst-junior",
    }),
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/data-analyst-junior",
    locale: "pt_BR",
    type: "website",
    siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Desenvolvedor Full Stack | Matheus Siqueira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/og.png"],
  },
};

export default function DataAnalystJuniorPage() {
  return (
    <main className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-[color:var(--foreground)]">
            Desenvolvedor Full Stack | Dados • IA • Software
          </h1>
          <p className="text-base md:text-lg text-[color:var(--muted)]">
            Perfil full stack com base em dados, APIs e automação usando
            React/Next.js, Node.js, SQL e Python. Disponível para vagas no
            Brasil (remoto ou híbrido).
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            Como eu trabalho
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[color:var(--muted)]">
            <li>Transformo requisitos em soluções end-to-end (frontend + backend).</li>
            <li>Estruturo dados e métricas para decisões de produto.</li>
            <li>Automatizo integrações e pipelines com Python e SQL.</li>
            <li>Entrego dashboards quando necessário para visibilidade.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">Stack principal</h2>
          <p className="text-[color:var(--muted)]">
            React · Next.js · Node.js · TypeScript · Python · SQL · Power BI · APIs
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            Projetos relevantes
          </h2>
          <p className="text-[color:var(--muted)]">
            Veja os cases completos com contexto, solução e impacto técnico.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projetos"
              className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              Ver projetos
            </Link>
            <Link
              href="/resume"
              className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              Ver currículo
            </Link>
            <Link
              href="/contrate"
              className="rounded-full border border-[color:var(--accent)]/40 px-5 py-2 text-sm text-[color:var(--accent)] transition hover:border-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              Contrate
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
