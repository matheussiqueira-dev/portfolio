import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { siteName } from "@/lib/seo";

const pageTitle =
  "Contrate | Matheus Siqueira | Analista de Dados Júnior | Power BI | SQL | Python";
const pageDescription =
  "Analista de Dados Júnior com foco em Business Intelligence, Power BI, SQL e Python. Disponível para oportunidades no Brasil (remoto ou híbrido).";

const valueDelivery = [
  "Dashboards orientados a KPIs com Power BI para leitura executiva.",
  "Modelagem de dados e definição de indicadores confiáveis.",
  "ETL e automação de rotinas analíticas com SQL e Python.",
  "Análises exploratórias para identificar padrões e tendências.",
  "Documentação e padronização para consistência das análises.",
];

const practicalStack = {
  "BI & Analytics": ["Power BI", "DAX", "Power Query", "Dashboards", "KPIs"],
  "Dados & ETL": ["SQL", "Python", "Pandas", "ETL", "Data Modeling"],
  "Versão & Colaboração": ["Git/GitHub", "Scrum", "Kanban", "Documentação"],
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
    canonical: "/contrate",
    languages: {
      "pt-BR": "/contrate",
      "en-US": "/en/hire",
      "x-default": "/contrate",
    },
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
        alt: "Contrate Matheus Siqueira — Analista de Dados Júnior",
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
    <main className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-6xl mx-auto space-y-16">
        <header className="space-y-4">
          <p className="eyebrow">Recrutadores e gestores de dados</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-[color:var(--foreground)]">
            Matheus Siqueira — Analista de Dados Júnior | Power BI | SQL | Python
          </h1>
          <p className="text-lg text-[color:var(--muted)] max-w-3xl">
            Experiência em Business Intelligence, dashboards e automação de
            análises para decisões de negócio. Disponível para oportunidades no
            Brasil (remoto ou híbrido).
          </p>
          <div className="flex flex-wrap gap-4">
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
              className="rounded-full border border-[#0A66C2]/50 bg-[color:var(--surface)] px-6 py-3 text-sm text-[#0A66C2] transition hover:border-[#0A66C2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]/40"
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
