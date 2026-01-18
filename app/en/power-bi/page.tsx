import type { Metadata } from "next";
import Link from "next/link";
import { siteName } from "@/lib/seo";

const pageTitle = "Power BI | Junior Data Analyst | Matheus Siqueira";
const pageDescription =
  "Power BI dashboards focused on KPIs, data modeling, and visualization. DAX, Power Query, and ETL for reliable analytics.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/en/power-bi",
    languages: {
      "pt-BR": "/power-bi",
      "en-US": "/en/power-bi",
      "x-default": "/power-bi",
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/en/power-bi",
    locale: "en_US",
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
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Power BI dashboards for KPIs and decision support
          </h1>
          <p className="text-base md:text-lg text-slate-300">
            Hands-on experience with Power BI, DAX, and Power Query to build
            executive dashboards and clear data visualizations.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">
            How I apply Power BI
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Data modeling for consistent reporting.</li>
            <li>DAX measures for reliable KPIs.</li>
            <li>Power Query for ETL and transformations.</li>
            <li>Dashboards oriented to performance and insights.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">
            Complementary tools
          </h2>
          <p className="text-slate-300">
            SQL · Python · ETL · Data Modeling · Data Visualization
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
          </div>
        </section>
      </div>
    </main>
  );
}
