import type { Metadata } from "next";
import Link from "next/link";
import { siteName } from "@/lib/seo";

const pageTitle = "SQL and Python | Junior Data Analyst | Matheus Siqueira";
const pageDescription =
  "SQL and Python for ETL, automation, and data analysis. Modeling, quality checks, and KPI-ready data pipelines.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/en/sql-python",
    languages: {
      "pt-BR": "/sql-python",
      "en-US": "/en/sql-python",
      "x-default": "/sql-python",
    },
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
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            SQL and Python for ETL and analytics automation
          </h1>
          <p className="text-base md:text-lg text-slate-300">
            I use SQL and Python to prepare data, automate analytical workflows,
            and deliver reliable datasets for dashboards and KPIs.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">
            What I deliver with SQL and Python
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>ETL with extraction, transformation, and validation.</li>
            <li>Data modeling and KPI-ready structures.</li>
            <li>Automation of reports and analytical routines.</li>
            <li>Integration of multiple data sources.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">Stack</h2>
          <p className="text-slate-300">
            SQL · Python · Pandas · ETL · Data Modeling · Data Quality
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Next steps
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/en/projects"
              className="rounded-full border border-white/20 px-5 py-2 text-sm text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              View projects
            </Link>
            <Link
              href="/en/resume"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              View resume
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
