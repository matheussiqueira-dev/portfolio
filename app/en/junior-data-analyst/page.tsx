import type { Metadata } from "next";
import Link from "next/link";
import { buildAlternates, siteName } from "@/lib/seo";

const pageTitle =
  "Full Stack Developer | Data & AI | Matheus Siqueira";
const pageDescription =
  "Full Stack Developer with a data and BI foundation. React/Next.js, Node.js, Python, and SQL for end-to-end products.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    ...buildAlternates({
      pt: "/data-analyst-junior",
      en: "/en/junior-data-analyst",
      canonical: "/en/junior-data-analyst",
    }),
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
        alt: "Full Stack Developer | Matheus Siqueira",
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
    <main className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-[color:var(--foreground)]">
            Full Stack Developer | Data • AI • Software
          </h1>
          <p className="text-base md:text-lg text-[color:var(--muted)]">
            Full stack profile with data, APIs, and automation using
            React/Next.js, Node.js, SQL, and Python. Open to remote or hybrid roles.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">How I work</h2>
          <ul className="list-disc list-inside space-y-2 text-[color:var(--muted)]">
            <li>Turn requirements into end-to-end solutions (frontend + backend).</li>
            <li>Structure data and metrics for decisions.</li>
            <li>Automate integrations and pipelines with Python and SQL.</li>
            <li>Deliver dashboards when visibility is needed.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">Core stack</h2>
          <p className="text-[color:var(--muted)]">
            React · Next.js · Node.js · TypeScript · Python · SQL · Power BI · APIs
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
            <Link
              href="/en/hire"
              className="rounded-full border border-[color:var(--accent)]/40 px-5 py-2 text-sm text-[color:var(--accent)] transition hover:border-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              Hire me
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
