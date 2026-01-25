import type { Metadata } from "next";
import Link from "next/link";
import { projectsEn } from "@/data/projects.en";
import { buildAlternates, siteName } from "@/lib/seo";

const pageTitle = "Full Stack Developer for Hire | Data & AI";
const pageDescription =
  "Full Stack Developer with a data and AI foundation. Web apps, APIs, automation, and analytics. Open to remote or hybrid opportunities.";

const valueDelivery = [
  "End-to-end web apps with integrated frontend and backend.",
  "Secure REST APIs with auth, logging, and integrations.",
  "Data pipelines and automation with Python and SQL.",
  "Dashboards and metrics to guide product decisions.",
  "Versioning, documentation, and engineering quality.",
];

const practicalStack = {
  Frontend: ["React", "Next.js", "TypeScript", "UX", "Accessibility"],
  "Backend & APIs": [
    "Node.js",
    "REST APIs",
    "FastAPI",
    "Authentication",
    "Integrations",
  ],
  "Data & Cloud": ["Python", "SQL", "ETL", "Power BI", "Cloud Computing"],
};

const featuredSlugs = [
  "touchless-web-gesture-interface",
  "chatbot-ia-api",
  "library-api-advanced",
  "nucleo-comercial-dados",
  "self-drive-car",
];

const featuredProjects = featuredSlugs
  .map((slug) => projectsEn.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    ...buildAlternates({ pt: "/contrate", en: "/en/hire", canonical: "/en/hire" }),
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/en/hire",
    locale: "en_US",
    type: "website",
    siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Hire Matheus Siqueira — Full Stack Developer",
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

export default function HirePage() {
  return (
    <main className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-6xl mx-auto space-y-16">
        <header className="space-y-4">
          <p className="eyebrow">Recruiters and tech leads</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-[color:var(--foreground)]">
            Matheus Siqueira — Full Stack Developer | Data • AI • Software
          </h1>
          <p className="text-lg text-[color:var(--muted)] max-w-3xl">
            Experience in software development, APIs, and data for business
            decisions. Open to remote or hybrid roles.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/5581999203683"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              Contact me
            </a>
            <a
              href="mailto:matheussiqueirahub@gmail.com"
              className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/matheussiqueira-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#0A66C2]/50 bg-[color:var(--surface)] px-6 py-3 text-sm text-[#0A66C2] transition hover:border-[#0A66C2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]/40"
            >
              LinkedIn
            </a>
          </div>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            How I deliver value
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[color:var(--muted)]">
            {valueDelivery.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 space-y-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            Stack in practice
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {Object.entries(practicalStack).map(([title, items]) => (
              <div key={title} className="space-y-3">
                <h3 className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  {title}
                </h3>
                <ul className="list-disc list-inside text-sm text-[color:var(--muted)] space-y-1">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            Projects that prove capability
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <article
                key={project.slug}
                className="card p-6 space-y-4"
              >
                <div>
                  <h3 className="text-lg font-semibold text-[color:var(--foreground)]">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[color:var(--muted)]">{project.tagline}</p>
                </div>
                <p className="text-sm text-[color:var(--muted)]">
                  {project.highlights[0] ?? project.problem[0]}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-[color:var(--muted)]">
                  {project.stack.slice(0, 6).map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/en/projects/${project.slug}`}
                  className="inline-flex w-fit text-sm text-[color:var(--accent)] underline decoration-[color:var(--accent-soft)]/60 underline-offset-4 transition hover:text-[color:var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                >
                  View full case
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 space-y-4 shadow-sm">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            Let&apos;s talk
          </h2>
          <p className="text-[color:var(--muted)]">
            Available for interviews and selection processes. Fast response time.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/5581999203683"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              WhatsApp
            </a>
            <a
              href="mailto:matheussiqueirahub@gmail.com"
              className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/matheussiqueira-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#0A66C2]/50 bg-[color:var(--surface)] px-5 py-2 text-sm text-[#0A66C2] transition hover:border-[#0A66C2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]/40"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
