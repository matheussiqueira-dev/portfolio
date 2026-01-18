import type { Metadata } from "next";
import Link from "next/link";
import { siteName } from "@/lib/seo";

const pageTitle =
  "Junior Data Analyst | Power BI, SQL, Python | Matheus Siqueira";
const pageDescription =
  "Junior Data Analyst focused on Business Intelligence, Power BI, SQL, and Python. Dashboards, ETL, and analytics automation.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/en/junior-data-analyst",
    languages: {
      "pt-BR": "/data-analyst-junior",
      "en-US": "/en/junior-data-analyst",
      "x-default": "/data-analyst-junior",
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/en/junior-data-analyst",
    locale: "en_US",
    type: "website",
    siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Junior Data Analyst | Matheus Siqueira",
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

export default function JuniorDataAnalystPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Junior Data Analyst | Power BI | SQL | Python | Business Intelligence
          </h1>
          <p className="text-base md:text-lg text-slate-300">
            Business Intelligence focus with dashboards and analytics automation
            using Power BI, SQL, DAX, and Python. Open to remote or hybrid roles.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">How I work</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Turn data into clear, actionable KPIs.</li>
            <li>Model analytical data with SQL and DAX.</li>
            <li>Automate ETL and quality routines with Python.</li>
            <li>Communicate insights through executive dashboards.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">Core stack</h2>
          <p className="text-slate-300">
            Power BI · SQL · Python · DAX · Power Query · ETL · Dashboards · KPIs
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            See projects and resume
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
            <Link
              href="/en/hire"
              className="rounded-full border border-emerald-400/40 px-5 py-2 text-sm text-emerald-200 transition hover:border-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
            >
              Hire me
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
