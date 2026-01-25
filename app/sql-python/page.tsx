import type { Metadata } from "next";
import Link from "next/link";
import { buildAlternates, siteName } from "@/lib/seo";

const pageTitle =
  "SQL e Python | Desenvolvedor Full Stack | Matheus Siqueira";
const pageDescription =
  "SQL e Python para ETL, automação e integrações em produtos full stack. Modelagem, qualidade e indicadores para dados confiáveis.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    ...buildAlternates({ pt: "/sql-python", en: "/en/sql-python", canonical: "/sql-python" }),
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/sql-python",
    locale: "pt_BR",
    type: "website",
    siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SQL e Python | Matheus Siqueira",
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

export default function SqlPythonPage() {
  return (
    <main className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-[color:var(--foreground)]">
            SQL e Python para ETL e automação de análises
          </h1>
          <p className="text-base md:text-lg text-[color:var(--muted)]">
            Uso SQL e Python para preparar dados, automatizar rotinas analíticas
            e garantir qualidade em pipelines de informação.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            O que entrego com SQL e Python
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[color:var(--muted)]">
            <li>ETL com extração, transformação e validação.</li>
            <li>Modelagem e organização de dados para KPIs.</li>
            <li>Automação de análises com scripts e rotinas.</li>
            <li>Integração de múltiplas fontes de dados.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">Stack</h2>
          <p className="text-[color:var(--muted)]">
            SQL · Python · Pandas · ETL · Data Modeling · Data Quality
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            Próximos passos
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
