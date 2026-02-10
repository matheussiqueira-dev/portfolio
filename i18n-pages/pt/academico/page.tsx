import type { Metadata } from "next";
import SafeImage from "@/src/components/demo/SafeImage";
import { certificatesPagePt, certificatesPt } from "@/data/certificates.pt";
import { buildAlternates, siteName } from "@/lib/seo";

const pageTitle = "Acadêmico | Matheus Siqueira";
const pageDescription =
  "Formação, especializações, certificados e skills de Matheus Siqueira — Desenvolvedor Full Stack com base em dados, IA, cloud e segurança.";

const education = [
  "Ciência da Computação (UNIFG) em andamento (3º período 2025–2029)",
  "Pós: Cloud & Edge Computing (UNIFG, 2025)",
  "Pós: Segurança da Informação (UNIFG, 2025)",
  "Pós: IA e Ciência de Dados (UNIFG, 2025)",
  "Técnico: Programação Full Stack AI (Infinity School, 2023–2025)",
  "MBA: Mídias Digitais, Performance e Analytics (UNINASSAU, 2023–2024)",
  "Graduação: Marketing (UNIFG, 2015–2017)",
  "ESL C1 (City College of San Francisco, 2019–2020)",
];

const skillGroups = [
  {
    title: "Data/BI",
    items: [
      "Power BI",
      "DAX",
      "Power Query",
      "Tableau",
      "KPIs",
      "Data Visualization",
      "Business Intelligence",
      "Dashboards",
    ],
  },
  {
    title: "SQL/DB",
    items: [
      "SQL",
      "Data Warehouse",
      "Oracle DB",
      "MongoDB",
      "Modelagem de Dados",
    ],
  },
  {
    title: "Python/Data",
    items: ["Python", "Pandas", "Dash", "Automação", "ETL"],
  },
  {
    title: "Eng/Cloud/Sec",
    items: ["Cloud Computing", "Oracle Cloud", "Segurança da Informação", "Shell Script"],
  },
  {
    title: "Web/Dev",
    items: ["JavaScript", "TypeScript", "Node.js", "React", "HTML5", "CSS", "APIs"],
  },
  {
    title: "Métodos/Processos",
    items: ["Scrum", "Kanban", "OKR", "A/B test", "Governança"],
  },
];


export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    ...buildAlternates({ pt: "/academico", en: "/en/academic", canonical: "/academico" }),
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/academico",
    locale: "pt_BR",
    type: "website",
    siteName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Formação acadêmica e certificados de Matheus Siqueira",
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

export default function AcademicoPage() {
  const { openLabel, downloadLabel } = certificatesPagePt;
  const getCertificatePreview = (pdfUrl: string) =>
    pdfUrl
      .replace("/certificates/", "/certificates/previews/")
      .replace(/\.pdf$/i, ".jpg");

  return (
    <main className="min-h-screen px-6 pt-28 pb-20">
      <div className="max-w-6xl mx-auto space-y-16">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-semibold text-[color:var(--foreground)]">
            Acadêmico
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-[color:var(--muted-strong)]">
            Formação e especializações em engenharia de software e dados
          </h2>
          <p className="text-base md:text-lg text-[color:var(--muted)] max-w-4xl">
            Desenvolvedor Full Stack com base em Ciência da Computação, Cloud,
            Segurança e IA.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">
            Formação Acadêmica
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[color:var(--muted)]">
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">Certificados</h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {certificatesPt.map((certificate) => {
              const previewSrc = getCertificatePreview(certificate.pdfUrl);
              const previewAlt = `${certificate.title} - ${certificate.issuer}`;

              return (
                <article
                  key={certificate.id}
                  className="card card-hover certificate-card"
                >
                  <div className="certificate-card__media">
                    <div className="certificate-card__frame">
                      <div className="certificate-card__placeholder" aria-hidden="true">
                        <span className="certificate-card__placeholder-label">
                          {certificate.issuer}
                        </span>
                        <span className="certificate-card__placeholder-stamp" />
                      </div>
                    <SafeImage
                      src={previewSrc}
                      alt={previewAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 620px"
                      className="certificate-card__preview"
                    />
                  </div>
                </div>

                  <div className="certificate-card__body">
                    <div className="space-y-2">
                      <h3 className="certificate-card__title">
                        {certificate.title}
                      </h3>
                      <p className="certificate-card__issuer">
                        {certificate.issuer}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 text-xs text-[color:var(--muted)]">
                      {certificate.areaTags.map((tag) => (
                        <span key={`${certificate.id}-${tag}`} className="chip">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {certificate.details ? (
                      <details className="panel">
                        <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                          {certificate.details.summaryLabel}
                        </summary>
                        <div className="mt-4 space-y-4 text-sm text-[color:var(--muted)]">
                          {certificate.details.modules.map((module) => (
                            <div key={`${certificate.id}-${module.title}`} className="space-y-1">
                              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                                {module.title}
                              </p>
                              {module.subtitle ? (
                                <p className="text-xs text-[color:var(--muted-strong)]">
                                  {module.subtitle}
                                </p>
                              ) : null}
                              <p className="leading-relaxed text-[color:var(--muted)]">
                                {module.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </details>
                    ) : null}

                    <div className="mt-auto flex flex-wrap gap-3">
                      <a
                        href={certificate.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                        aria-label={`${openLabel}: ${certificate.title}`}
                      >
                        {openLabel}
                      </a>
                      <a
                        href={certificate.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                        aria-label={`${downloadLabel}: ${certificate.title}`}
                      >
                        {downloadLabel}
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-[color:var(--foreground)]">Skills</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="card space-y-3"
              >
                <h3 className="card-kicker text-center">
                  {group.title}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-[color:var(--muted)]">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
