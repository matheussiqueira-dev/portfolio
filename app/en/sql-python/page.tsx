import type { Metadata } from "next";
import Link from "next/link";
import { buildAlternates, siteName } from "@/lib/seo";

const pageTitle = "SQL and Python | Full Stack Developer | Matheus Siqueira";
const pageDescription =
  "SQL and Python for ETL, automation, and integrations in full stack products. Modeling, quality checks, and KPI-ready data pipelines.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    ...buildAlternates({ pt: "/sql-python", en: "/en/sql-python", canonical: "/en/sql-python" }),
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/en/sql-python",
    locale: "en_US",
    type: "website",
    siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SQL and Python | Matheus Siqueira",
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
            SQL and Python for ETL and analytics automation
          </h1>
          <p className="text-base md:text-lg text-[color:var(--muted)]">
            I use SQL and Python to prepare data, automate analytical workflows,
            and deliver reliable datasets for dashboards and KPIs.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            What I deliver with SQL and Python
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[color:var(--muted)]">
            <li>ETL with extraction, transformation, and validation.</li>
            <li>Data modeling and KPI-ready structures.</li>
            <li>Automation of reports and analytical routines.</li>
            <li>Integration of multiple data sources.</li>
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
            Next steps
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/en/projects"
              className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              View projects
            </Link>
            <Link
              href="/en/resume"
              className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              View resume
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
