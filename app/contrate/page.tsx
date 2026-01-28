import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { buildAlternates, siteName } from "@/lib/seo";

const pageTitle =
  "Contrate | Matheus Siqueira | Desenvolvedor Full Stack | Dados & IA";
const pageDescription =
  "Desenvolvedor Full Stack com base em dados, IA e engenharia de software. Produtos web, APIs e automação orientados a resultado.";

const stackHighlights = [
  { label: "Full Stack", icon: "stack" },
  { label: "Dados", icon: "data" },
  { label: "IA", icon: "ai" },
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
  "Aplicações web completas com foco em UX, performance e SEO.",
  "APIs REST com autenticação, logs e integrações externas.",
  "Pipelines de dados e automações com Python e SQL.",
  "Dashboards e métricas para orientar decisões de produto.",
  "Documentação e versionamento para escalar com segurança.",
];

const practicalStack = {
  Frontend: ["React", "Next.js", "TypeScript", "UX", "Acessibilidade"],
  "Backend & APIs": [
    "Node.js",
    "APIs REST",
    "FastAPI",
    "Autenticação",
    "Integrações",
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
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    ...buildAlternates({ pt: "/contrate", en: "/en/hire", canonical: "/contrate" }),
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/contrate",
    locale: "pt_BR",
    type: "website",
    siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Contrate Matheus Siqueira — Desenvolvedor Full Stack",
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

export default function ContratePage() {
  return (
    <main className="hire-hero min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-6xl mx-auto space-y-16">
        <header className="space-y-6 md:space-y-7">
          <p className="eyebrow">Recrutadores e líderes de tecnologia</p>
          {/* Título em duas linhas para hierarquia visual clara */}
          <h1 className="hero-title">
            <span className="hero-title__name">Matheus Siqueira</span>
            <span className="hero-title__role">Desenvolvedor Full Stack</span>
          </h1>
          {/* Stacks em chips com ícones para leitura rápida */}
          <ul className="hero-stack justify-start" aria-label="Stacks em destaque">
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
            Perfil técnico com base em{" "}
            <span className="text-[color:var(--muted-strong)] font-medium">
              dados
            </span>{" "}
            e{" "}
            <span className="text-[color:var(--muted-strong)] font-medium">
              engenharia de software
            </span>
            . Entrego aplicações web e APIs orientadas a resultados. Disponível
            para oportunidades no Brasil (remoto ou híbrido).
          </p>
          {/* CTAs com espaçamento e altura uniformes */}
          <div className="hero-actions justify-start gap-4">
            <a
              href="https://wa.me/5581999203683"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              Entrar em contato
            </a>
            <a
              href="mailto:matheussiqueirahub@gmail.com"
              className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              Enviar e-mail
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
            Como eu gero valor
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[color:var(--muted)]">
            {valueDelivery.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 space-y-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">Stack na prática</h2>
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
            Projetos que demonstram capacidade
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
                  href={`/projetos/${project.slug}`}
                  className="inline-flex w-fit text-sm text-[color:var(--accent)] underline decoration-[color:var(--accent-soft)]/60 underline-offset-4 transition hover:text-[color:var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                >
                  Ver case completo
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 space-y-4 shadow-sm">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            Vamos conversar?
          </h2>
          <p className="text-[color:var(--muted)]">
            Aberto a processos seletivos e entrevistas. Respondo rapidamente.
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
              E-mail
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
