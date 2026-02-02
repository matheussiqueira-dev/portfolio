import type { Metadata } from "next";
import Link from "next/link";
import { projectsEn } from "@/data/projects.en";
import { buildAlternates, siteName } from "@/lib/seo";

const pageTitle = "Full Stack Developer for Hire | Data & AI";
const pageDescription =
  "Full Stack Developer with a data and AI foundation. Web products, APIs, automation, and analytics. Open to remote or hybrid opportunities.";

const stackHighlights = [
  { label: "Full Stack", icon: "stack" },
  { label: "Data", icon: "data" },
  { label: "AI", icon: "ai" },
  { label: "Software", icon: "software" },
] as const;

const stackIcons = {
  stack: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 7L5 12l4 5" />
      <path d="M15 7l4 5-4 5" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l1.8 4.6L19 8l-5.2 1.8L12 14l-1.8-4.2L5 8l5.2-1.4L12 2z" />
      <path d="M6 16l1 2.5L9.5 20" />
      <path d="M18 16l-1 2.5L14.5 20" />
    </svg>
  ),
  software: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 7l9-4 9 4-9 4-9-4z" />
      <path d="M3 7v10l9 4 9-4V7" />
      <path d="M12 11v10" />
    </svg>
  ),
} as const;

const valueDelivery = [
  "End-to-end web apps focused on UX, performance, and SEO.",
  "REST APIs with authentication, logging, and integrations.",
  "Data pipelines and automation with Python and SQL.",
  "Dashboards and metrics to guide product decisions.",
  "Documentation and versioning to scale safely.",
];

const practicalStack = {
  "Software Engineering & Architecture": [
    "Full stack delivery with React/Next.js on the frontend, Node.js/FastAPI on the backend, and JavaScript/TypeScript across product-oriented REST APIs.",
    "Architecture and service integration with Python and Java, including authentication, logging, and reliability patterns.",
  ],
  "Data, Analytics & BI": [
    "Data engineering and analytics for KPIs and governance, using ETL/ELT, SQL analytics, and Python (Pandas/NumPy).",
    "BI and executive visualization with Power BI (DAX, Power Query) and Tableau, connecting metrics to decisions.",
  ],
  "Infrastructure, Cloud & Delivery": [
    "Infrastructure and networks focused on reliability, information security, and automation via shell scripts.",
    "Azure and Oracle Cloud with delivery practices, aligning UX/Web Design and Figma with communication and agile methods (Scrum/Kanban/OKRs).",
  ],
};

const featuredSlugs = [
  "touchless-web-gesture-interface",
  "chatbot-ia-api",
  "library-api-advanced",
  "driver-monitoring-system",
  "self-drive-car",
];

const featuredProjects = featuredSlugs
  .map((slug) => projectsEn.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

const howWeWorkSteps = [
  {
    title: "Initial Contact",
    description:
      "You reach out describing the role, project, or opportunity.",
  },
  {
    title: "Technical Conversation",
    description:
      "We align on stack, context, scope, and challenges.",
  },
  {
    title: "Terms Alignment",
    description:
      "We define availability, work model, and next steps.",
  },
  {
    title: "Execution Kickoff",
    description:
      "Work starts with clear communication and structure.",
  },
];

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
    <main className="hire-hero min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-6xl mx-auto space-y-16">
        <header className="space-y-6 md:space-y-7">
          <p className="eyebrow">Recruiters and tech leads</p>
          {/* Two-line title for clearer hierarchy */}
          <h1 className="hero-title">
            <span className="hero-title__name">Matheus Siqueira</span>
            <span className="hero-title__role">Full Stack Developer</span>
          </h1>
          {/* Stack badges with icons for quick scan */}
          <ul className="hero-stack justify-start" aria-label="Stack highlights">
            {stackHighlights.map((stack) => (
              <li key={stack.label} className="hero-stack__item">
                <span className="hero-stack__icon" aria-hidden="true">
                  {stackIcons[stack.icon]}
                </span>
                <span>{stack.label}</span>
              </li>
            ))}
          </ul>
          <p className="hero-description max-w-3xl mx-0 text-left">
            Technical profile with a{" "}
            <span className="text-[color:var(--muted-strong)] font-medium">
              data
            </span>{" "}
            and{" "}
            <span className="text-[color:var(--muted-strong)] font-medium">
              software engineering
            </span>{" "}
            foundation. I build web apps and APIs focused on outcomes, with
            product-minded execution in remote or hybrid collaboration.
            <span className="mt-3 block text-sm text-[color:var(--muted)]">
              🟢 Available for new projects | 📍 Brazil (UTC-3) | ⏱️ Reply within
              24h
            </span>
          </p>
          {/* Consistent CTAs */}
          <div className="hero-actions justify-start gap-4">
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
              className="btn-outline btn-linkedin focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]/40"
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

        <section className="card card-lg space-y-6">
          <h2 className="card-title text-2xl">
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

        <section className="card card-lg space-y-6">
          <h2 className="card-title text-2xl">How We Work</h2>
          <ol className="space-y-4">
            {howWeWorkSteps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--border)] text-sm font-semibold text-[color:var(--foreground)]">
                  {index + 1}
                </span>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-[color:var(--foreground)]">
                    {step.title}
                  </p>
                  <p className="text-sm text-[color:var(--muted)]">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            Projects that prove capability
          </h2>
          <div className="grid gap-6 md:grid-cols-2 projects-grid">
            {featuredProjects.map((project) => (
              <article
                key={project.slug}
                className="card card-hover project-card flex h-full flex-col gap-4"
              >
                <div className="card-header items-start text-left">
                  <h3 className="card-title text-left">{project.title}</h3>
                  <p className="card-subtitle text-left">{project.tagline}</p>
                </div>
                <p className="text-sm text-[color:var(--muted)] text-left">
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
                  className="mt-auto inline-flex w-fit text-sm text-[color:var(--accent)] underline decoration-[color:var(--accent-soft)]/60 underline-offset-4 transition hover:text-[color:var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                >
                  View full case
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="card card-lg space-y-4">
          <h2 className="card-title text-2xl">
            Let&apos;s talk
          </h2>
          <p className="text-[color:var(--muted)]">
            Open to roles, projects, or partnerships. Direct contact and a clear
            process from the first step.
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
              className="btn-outline btn-linkedin focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]/40"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
