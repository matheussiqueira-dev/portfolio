import type { Metadata } from "next";
import Link from "next/link";
import ProjectGrid from "@/src/components/projects/ProjectGrid";
import { projects } from "@/src/data/projects";
import { buildAlternates, siteName } from "@/lib/seo";

const pageTitle = "Projects | Matheus Siqueira";
const pageDescription =
  "Portfolio projects with interactive demos, covering backend, frontend and data.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    ...buildAlternates({ pt: "/projetos", en: "/projects", canonical: "/projects" }),
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/projects",
    locale: "en_US",
    type: "website",
    siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Projects by Matheus Siqueira",
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

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="space-y-4">
          <p className="eyebrow">Projects</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-[color:var(--foreground)]">
            Interactive demos and technical cases
          </h1>
          <p className="text-base md:text-lg text-[color:var(--muted)] max-w-3xl">
            Browse the interactive demos or jump to the full Portuguese case study.
          </p>
          <Link
            href="/projetos"
            className="inline-flex w-fit text-sm text-[color:var(--accent)] underline decoration-[color:var(--accent-soft)]/60 underline-offset-4 transition hover:text-[color:var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            Ver versão completa em português
          </Link>
        </header>

        <ProjectGrid items={projects} />
      </div>
    </main>
  );
}
