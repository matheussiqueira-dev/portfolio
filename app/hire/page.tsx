import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { projects } from "@/data/projects";
import { baseUrl, sameAsLinks, siteName } from "@/lib/seo";

const pageTitle =
  "Analista de Dados Júnior | Power BI, SQL, Python | Contratação";
const pageDescription =
  "Analista de Dados Júnior com experiência em Business Intelligence, Power BI, SQL e Python. Disponível para contratação no Brasil ou remoto.";

const quickFacts = [
  "🎯 Cargo-alvo: Analista de Dados Júnior",
  "📊 Stack principal: Power BI · SQL · Python · DAX · ETL",
  "📍 Localização: Brasil (remoto ou híbrido)",
  "🧠 Foco: Business Intelligence & Data Analytics",
  "🌐 Idiomas: Português (nativo) · Inglês (C1)",
];

const valueDelivery = [
  "Dashboards interativos orientados a KPI.",
  "Modelagem e organização de dados analíticos.",
  "Rotinas de ETL e automação com Python.",
  "Análises exploratórias e identificação de padrões.",
  "Relatórios claros para tomada de decisão.",
  "Comunicação técnica com stakeholders não técnicos.",
];

const techStack = [
  "Power BI",
  "SQL",
  "Python",
  "DAX",
  "Power Query",
  "Pandas",
  "ETL",
  "Data Warehousing",
  "Git",
  "APIs REST",
];

const methodologies = [
  "Business Intelligence",
  "Data Analytics",
  "KPIs",
  "Metodologias Ágeis (Scrum, Kanban)",
];

const experienceHighlights = [
  "Atuação prática com análise de dados e Business Intelligence.",
  "Construção de dashboards estratégicos e executivos.",
  "Automação de rotinas analíticas para eficiência operacional.",
  "Padronização de KPIs e modelagem de dados.",
  "Análise exploratória para identificar tendências e anomalias.",
  "Comunicação clara de resultados para decisão.",
];

const featuredSlugs = [
  "nucleo-comercial-dados",
  "chatbot-ia-api",
  "self-drive-car",
];
const featuredProjects = featuredSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

const hireJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteName,
    url: baseUrl,
    jobTitle: "Junior Data Analyst",
    sameAs: sameAsLinks,
    knowsAbout: [
      "Data Analytics",
      "Business Intelligence",
      "Power BI",
      "SQL",
      "Python",
      "Data Visualization",
      "ETL",
      "Dashboards",
      "KPIs",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Junior Data Analyst",
    description: pageDescription,
    employmentType: ["FULL_TIME", "INTERN", "REMOTE"],
    hiringOrganization: {
      "@type": "Organization",
      name: siteName,
      sameAs: baseUrl,
    },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: {
      "@type": "Country",
      name: "Brazil",
    },
    skills: [
      "Power BI",
      "SQL",
      "Python",
      "Business Intelligence",
      "Data Analytics",
      "ETL",
      "Dashboards",
      "KPIs",
    ],
    directApply: true,
    url: `${baseUrl}/hire`,
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/hire",
    languages: {
      "pt-BR": "/hire",
      "en-US": "/en/hire",
      "x-default": "/hire",
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/hire",
    locale: "pt_BR",
    type: "website",
    siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Analista de Dados Júnior para contratação",
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
    <main className="min-h-screen px-6 py-20">
      <JsonLd data={hireJsonLd} />
      <div className="max-w-6xl mx-auto space-y-16">
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Recrutadores e gestores de BI
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Analista de Dados Júnior pronto para gerar valor com Power BI, SQL e Python
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl">
            Experiência prática em Business Intelligence, dashboards executivos,
            automação analítica e decisões orientadas por dados.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/5581999203683"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Entrar em contato
            </a>
            <a
              href="mailto:matheussiqueirahub@gmail.com"
              className="rounded-full border border-white/20 px-6 py-3 text-sm text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Enviar e-mail
            </a>
            <a
              href="https://www.linkedin.com/in/matheussiqueira-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-emerald-400/40 px-6 py-3 text-sm text-emerald-200 transition hover:border-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-white">Quick facts: decisão rápida</h2>
          <ul className="grid gap-3 md:grid-cols-2 text-sm text-slate-200">
            {quickFacts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              O que eu entrego
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              {valueDelivery.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              Stack técnica (SEO + ATS)
            </h2>
            <h3 className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Ferramentas & Tecnologias
            </h3>
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
              {techStack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Metodologias
            </h3>
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
              {methodologies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Experiência profissional (resumo executivo)
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            {experienceHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link
            href="/resume"
            className="inline-flex w-fit text-sm text-emerald-200 underline decoration-emerald-400/50 underline-offset-4 transition hover:text-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
          >
            Ver currículo completo (ATS-friendly)
          </Link>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-white">
              Projetos relevantes (prova técnica)
            </h2>
            <p className="text-slate-300">
              Exemplos que demonstram BI, análise de dados, visualização e automação.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project) => {
              const problem = project.problem[0] ?? project.tagline;
              const solution = project.solution[0] ?? project.features[0];
              return (
                <article
                  key={project.slug}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 space-y-4"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300">{project.tagline}</p>
                  </div>
                  <div className="text-sm text-slate-300 space-y-2">
                    <p>
                      <span className="font-semibold text-slate-200">
                        Problema:
                      </span>{" "}
                      {problem}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-200">
                        Solução:
                      </span>{" "}
                      {solution}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-200">
                        Stack:
                      </span>{" "}
                      {project.stack.join(" · ")}
                    </p>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex w-fit text-sm text-emerald-200 underline decoration-emerald-400/50 underline-offset-4 transition hover:text-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
                  >
                    Ver case completo
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Vamos conversar sobre como posso ajudar seu time de dados
          </h2>
          <p className="text-slate-300">
            Disponível para entrevistas e processos seletivos. Respondo rapidamente.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/5581999203683"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              WhatsApp
            </a>
            <a
              href="mailto:matheussiqueirahub@gmail.com"
              className="rounded-full border border-white/20 px-5 py-2 text-sm text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              E-mail
            </a>
            <a
              href="https://www.linkedin.com/in/matheussiqueira-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-emerald-400/40 px-5 py-2 text-sm text-emerald-200 transition hover:border-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
