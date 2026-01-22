import type { Metadata } from "next";
import Link from "next/link";
import { siteName } from "@/lib/seo";

const pageTitle =
  "Analista de Dados Júnior | Power BI, SQL, Python | Matheus Siqueira";
const pageDescription =
  "Analista de Dados Júnior com foco em Business Intelligence, Power BI, SQL e Python. Dashboards, ETL e automação de análises.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/data-analyst-junior",
    languages: {
      "pt-BR": "/data-analyst-junior",
      "en-US": "/en/junior-data-analyst",
      "x-default": "/data-analyst-junior",
    },
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
        alt: "Analista de Dados Júnior | Matheus Siqueira",
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
            Analista de Dados Júnior | Power BI | SQL | Python | Business Intelligence
          </h1>
          <p className="text-base md:text-lg text-[color:var(--muted)]">
            Perfil focado em Business Intelligence, dashboards e automação de
            análises com Power BI, SQL, DAX e Python. Disponível para vagas no
            Brasil (remoto ou híbrido).
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            Como eu trabalho
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[color:var(--muted)]">
            <li>Transformo dados em KPIs claros e acionáveis.</li>
            <li>Estruturo modelos analíticos com SQL e DAX.</li>
            <li>Automatizo ETL e rotinas de qualidade com Python.</li>
            <li>Comunico resultados em dashboards executivos.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">Stack principal</h2>
          <p className="text-[color:var(--muted)]">
            Power BI · SQL · Python · DAX · Power Query · ETL · Dashboards · KPIs
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
              href="/projects"
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
