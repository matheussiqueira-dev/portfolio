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
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Analista de Dados Júnior | Power BI | SQL | Python | Business Intelligence
          </h1>
          <p className="text-base md:text-lg text-slate-300">
            Perfil focado em Business Intelligence, dashboards e automação de
            análises com Power BI, SQL, DAX e Python. Disponível para vagas no
            Brasil (remoto ou híbrido).
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">
            Como eu trabalho
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Transformo dados em KPIs claros e acionáveis.</li>
            <li>Estruturo modelos analíticos com SQL e DAX.</li>
            <li>Automatizo ETL e rotinas de qualidade com Python.</li>
            <li>Comunico resultados em dashboards executivos.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">Stack principal</h2>
          <p className="text-slate-300">
            Power BI · SQL · Python · DAX · Power Query · ETL · Dashboards · KPIs
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Projetos relevantes
          </h2>
          <p className="text-slate-300">
            Veja os cases completos com contexto, solução e impacto técnico.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full border border-white/20 px-5 py-2 text-sm text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Ver projetos
            </Link>
            <Link
              href="/resume"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Ver currículo
            </Link>
            <Link
              href="/contrate"
              className="rounded-full border border-emerald-400/40 px-5 py-2 text-sm text-emerald-200 transition hover:border-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
            >
              Contrate
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
