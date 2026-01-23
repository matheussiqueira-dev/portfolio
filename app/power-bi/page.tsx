import type { Metadata } from "next";
import Link from "next/link";
import { siteName } from "@/lib/seo";

const pageTitle =
  "Power BI | Analista de Dados Júnior | Matheus Siqueira";
const pageDescription =
  "Dashboards em Power BI com foco em KPIs, modelagem e visualização. DAX, Power Query e ETL para análises confiáveis.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/power-bi",
    languages: {
      "pt-BR": "/power-bi",
      "en-US": "/en/power-bi",
      "x-default": "/power-bi",
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/power-bi",
    locale: "pt_BR",
    type: "website",
    siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Power BI | Matheus Siqueira",
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

export default function PowerBiPage() {
  return (
    <main className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-[color:var(--foreground)]">
            Power BI para dashboards e KPIs
          </h1>
          <p className="text-base md:text-lg text-[color:var(--muted)]">
            Experiência com Power BI, DAX e Power Query para transformar dados
            em dashboards executivos, com foco em indicadores e visualização
            clara.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            Como eu aplico Power BI
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[color:var(--muted)]">
            <li>Modelagem de dados para relatórios consistentes.</li>
            <li>DAX para métricas e KPIs confiáveis.</li>
            <li>Power Query para ETL e transformação de dados.</li>
            <li>Dashboards orientados a decisão e performance.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            Tecnologias complementares
          </h2>
          <p className="text-[color:var(--muted)]">
            SQL · Python · ETL · Data Modeling · Data Visualization
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            Ver projetos e currículo
          </h2>
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
          </div>
        </section>
      </div>
    </main>
  );
}
