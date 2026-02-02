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
  "Engenharia de Software & Arquitetura": [
    "Desenvolvimento full stack com React/Next.js no front, Node.js/FastAPI no backend e JavaScript/TypeScript em APIs REST orientadas a produto.",
    "Arquitetura e integração de serviços com Python e Java, incluindo autenticação, logs e padrões de confiabilidade.",
  ],
  "Dados, Analytics & BI": [
    "Engenharia e análise de dados para KPIs e governança, com ETL/ELT, SQL analytics e Python (Pandas/NumPy).",
    "BI e visualização executiva com Power BI (DAX, Power Query) e Tableau, conectando métricas à decisão.",
  ],
  "Infraestrutura, Cloud & Entrega": [
    "Infraestrutura e redes com foco em sustentação, segurança da informação e automação via shell script.",
    "Azure e Oracle Cloud com práticas de entrega, alinhando UX/Web Design e Figma a comunicação e métodos ágeis (Scrum/Kanban/OKRs).",
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
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

const howWeWorkSteps = [
  {
    title: "Contato Inicial",
    description:
      "Você envia a mensagem descrevendo a vaga, projeto ou parceria.",
  },
  {
    title: "Conversa Técnica",
    description:
      "Alinhamos stack, contexto, escopo e desafios.",
  },
  {
    title: "Alinhamento de Termos",
    description:
      "Definimos modelo de trabalho, disponibilidade e próximos passos.",
  },
  {
    title: "Início da Execução",
    description:
      "Começamos com comunicação clara e acompanhamento contínuo.",
  },
];

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
            Perfil técnico orientado por{" "}
            <span className="text-[color:var(--muted-strong)] font-medium">
              dados
            </span>{" "}
            e{" "}
            <span className="text-[color:var(--muted-strong)] font-medium">
              engenharia de software
            </span>
            . Entrego aplicações web e APIs com foco em resultados, com visão
            de produto e execução em colaboração remota ou híbrida.
            <span className="mt-3 block text-sm text-[color:var(--muted)]">
              🟢 Disponível para novos projetos | 📍 Brasil (UTC-3) | ⏱️ Respondo
              em até 24h
            </span>
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

        <section className="card card-lg space-y-6">
          <h2 className="card-title text-2xl">Stack na prática</h2>
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
          <h2 className="card-title text-2xl">Como Funcionamos</h2>
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
            Projetos que demonstram capacidade
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
                  href={`/projetos/${project.slug}`}
                  className="mt-auto inline-flex w-fit text-sm text-[color:var(--accent)] underline decoration-[color:var(--accent-soft)]/60 underline-offset-4 transition hover:text-[color:var(--accent-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                >
                  Ver case completo
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="card card-lg space-y-4">
          <h2 className="card-title text-2xl">
            Vamos conversar?
          </h2>
          <p className="text-[color:var(--muted)]">
            Aberto a conversas sobre vagas, projetos ou parcerias. Contato direto
            e processo claro desde o primeiro passo.
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
