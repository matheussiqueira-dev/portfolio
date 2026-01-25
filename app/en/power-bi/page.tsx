import type { Metadata } from "next";
import Link from "next/link";
import { buildAlternates, siteName } from "@/lib/seo";

const pageTitle = "Power BI | Junior Data Analyst | Matheus Siqueira";
const pageDescription =
  "Power BI dashboards focused on KPIs, data modeling, and visualization. DAX, Power Query, and ETL for reliable analytics.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    ...buildAlternates({ pt: "/power-bi", en: "/en/power-bi", canonical: "/en/power-bi" }),
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
    <main className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-[color:var(--foreground)]">
            Power BI dashboards for KPIs and decision support
          </h1>
          <p className="text-base md:text-lg text-[color:var(--muted)]">
            Hands-on experience with Power BI, DAX, and Power Query to build
            executive dashboards and clear data visualizations.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            How I apply Power BI
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[color:var(--muted)]">
            <li>Data modeling for consistent reporting.</li>
            <li>DAX measures for reliable KPIs.</li>
            <li>Power Query for ETL and transformations.</li>
            <li>Dashboards oriented to performance and insights.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            Complementary tools
          </h2>
          <p className="text-[color:var(--muted)]">
            SQL · Python · ETL · Data Modeling · Data Visualization
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            See projects and resume
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
