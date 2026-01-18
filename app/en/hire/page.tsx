import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { projectsEn } from "@/data/projects.en";
import { baseUrl, sameAsLinks, siteName } from "@/lib/seo";

const pageTitle = "Junior Data Analyst for Hire | Power BI, SQL, Python";
const pageDescription =
  "Junior Data Analyst with experience in Business Intelligence, Power BI, SQL, and Python. Open to remote opportunities.";

const quickFacts = [
  "🎯 Target role: Junior Data Analyst",
  "📊 Core stack: Power BI · SQL · Python · DAX · ETL",
  "📍 Location: Brazil (remote or hybrid)",
  "🧠 Focus: Business Intelligence & Data Analytics",
  "🌐 Languages: Portuguese (native) · English (C1)",
];

const valueDelivery = [
  "Interactive KPI-driven dashboards.",
  "Analytical data modeling and organization.",
  "ETL routines and automation with Python.",
  "Exploratory analysis and pattern detection.",
  "Clear reports to support decision-making.",
  "Technical communication with non-technical stakeholders.",
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
  "REST APIs",
];

const methodologies = [
  "Business Intelligence",
  "Data Analytics",
  "KPIs",
  "Agile Methods (Scrum, Kanban)",
];

const experienceHighlights = [
  "Hands-on data analysis and Business Intelligence delivery.",
  "Strategic and executive dashboards.",
  "Automation of analytics routines for operational efficiency.",
  "KPI standardization and data modeling.",
  "Exploratory analysis to identify trends and anomalies.",
  "Clear communication of results for decision-making.",
];

const featuredSlugs = [
  "nucleo-comercial-dados",
  "chatbot-ia-api",
  "self-drive-car",
];
const featuredProjects = featuredSlugs
  .map((slug) => projectsEn.find((project) => project.slug === slug))
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
    url: `${baseUrl}/en/hire`,
  },
];

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/en/hire",
    languages: {
      "pt-BR": "/hire",
      "en-US": "/en/hire",
      "x-default": "/hire",
    },
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
        alt: "Junior Data Analyst for hire",
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

export default function HirePageEn() {
  return (
    <main className="min-h-screen px-6 py-20">
      <JsonLd data={hireJsonLd} />
      <div className="max-w-6xl mx-auto space-y-16">
        <section className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Recruiters and BI leaders
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Junior Data Analyst ready to deliver value with Power BI, SQL, and Python
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl">
            Hands-on experience in Business Intelligence, executive dashboards,
            analytics automation, and data-driven decisions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/5581999203683"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Get in touch
            </a>
            <a
              href="mailto:matheussiqueirahub@gmail.com"
              className="rounded-full border border-white/20 px-6 py-3 text-sm text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Send email
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
          <h2 className="text-2xl font-semibold text-white">Quick facts</h2>
          <ul className="grid gap-3 md:grid-cols-2 text-sm text-slate-200">
            {quickFacts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              What I deliver
            </h2>
            <ul className="list-disc list-inside space-y-2 text-slate-300">
              {valueDelivery.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              Technical stack (SEO + ATS)
            </h2>
            <h3 className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Tools & Technologies
            </h3>
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
              {techStack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 className="text-sm uppercase tracking-[0.2em] text-slate-400">
              Methodologies
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
            Professional experience (executive summary)
          </h2>
          <ul className="list-disc list-inside space-y-2 text-slate-300">
            {experienceHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link
            href="/en/resume"
            className="inline-flex w-fit text-sm text-emerald-200 underline decoration-emerald-400/50 underline-offset-4 transition hover:text-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
          >
            View full resume (ATS-friendly)
          </Link>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-white">
              Relevant projects (technical proof)
            </h2>
            <p className="text-slate-300">
              Examples that demonstrate BI, data analysis, visualization, and automation.
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
                        Problem:
                      </span>{" "}
                      {problem}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-200">
                        Solution:
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
                    href={`/en/projects/${project.slug}`}
                    className="inline-flex w-fit text-sm text-emerald-200 underline decoration-emerald-400/50 underline-offset-4 transition hover:text-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
                  >
                    View full case
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Let’s talk about how I can help your data team
          </h2>
          <p className="text-slate-300">
            Available for interviews and hiring processes. Fast response.
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
              Email
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
