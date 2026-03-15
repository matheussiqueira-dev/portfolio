import type { Metadata } from "next";

import { resume } from "@/data/resume";
import { resumeEn } from "@/data/resume.en";

import { resolveLocale, type LocaleParams } from "../_lib";

type Props = {
  params: LocaleParams;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await resolveLocale(params);
  return {
    title: locale === "pt-BR" ? "Currículo" : "Resume",
    description:
      locale === "pt-BR" ? "Meu currículo profissional" : "My professional resume",
  };
}

export default async function ResumePage({ params }: Props) {
  const locale = await resolveLocale(params);
  const data = locale === "pt-BR" ? resume : resumeEn;
  const t = {
    skills: locale === "pt-BR" ? "Competências" : "Core Skills",
    experience: locale === "pt-BR" ? "Experiência" : "Experience",
    education: locale === "pt-BR" ? "Formação" : "Education",
    certifications: locale === "pt-BR" ? "Certificações" : "Certifications",
    languages: locale === "pt-BR" ? "Idiomas" : "Languages",
    contact: locale === "pt-BR" ? "Contato" : "Contact",
    download: locale === "pt-BR" ? "Baixar PDF" : "Download PDF",
  };

  return (
    <main className="layout-container page-shell" style={{ paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}>
      {/* Header */}
      <header className="mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)] mb-2">
          {locale === "pt-BR" ? "Currículo" : "Resume"}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-[color:var(--foreground)] mb-3">
          {data.name}
        </h1>
        <p className="text-lg text-[color:var(--accent-soft)] mb-4">{data.headline}</p>
        <p className="text-sm text-[color:var(--muted)] max-w-3xl leading-relaxed">{data.summary}</p>
      </header>

      {/* Core Skills */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[color:var(--foreground)] mb-4 border-b border-[color:var(--border)] pb-2">
          {t.skills}
        </h2>
        <div className="flex flex-wrap gap-2">
          {data.coreSkills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-3 py-1.5 rounded-full border border-[color:var(--border)] text-[color:var(--muted)] bg-[color:var(--surface-muted)]"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[color:var(--foreground)] mb-6 border-b border-[color:var(--border)] pb-2">
          {t.experience}
        </h2>
        <div className="space-y-8">
          {data.experience.map((job) => (
            <article key={`${job.company}-${job.period}`} className="relative pl-4 border-l-2 border-[color:var(--border)]">
              <div className="mb-2">
                <h3 className="text-base font-semibold text-[color:var(--foreground)]">{job.role}</h3>
                <p className="text-sm text-[color:var(--accent-soft)]">{job.company} — {job.location}</p>
                <p className="text-xs text-[color:var(--muted)]">{job.period}</p>
              </div>
              <ul className="space-y-1">
                {job.highlights.map((h) => (
                  <li key={h} className="text-sm text-[color:var(--muted)] flex gap-2">
                    <span className="text-[color:var(--accent-soft)] shrink-0">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[color:var(--foreground)] mb-6 border-b border-[color:var(--border)] pb-2">
          {t.education}
        </h2>
        <div className="space-y-6">
          {data.education.groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-base font-semibold text-[color:var(--foreground)] mb-3">{group.title}</h3>
              <div className="space-y-2">
                {group.items.map((item) => (
                  <div key={item.course} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 pl-4 border-l border-[color:var(--border)]">
                    <span className="text-sm font-medium text-[color:var(--foreground)]">{item.course}</span>
                    <span className="text-xs text-[color:var(--muted)]">{item.institution} · {item.period}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-[color:var(--foreground)] mb-4 border-b border-[color:var(--border)] pb-2">
          {t.certifications}
        </h2>
        <ul className="space-y-1">
          {data.certifications.map((cert) => (
            <li key={cert} className="text-sm text-[color:var(--muted)] flex gap-2">
              <span className="text-[color:var(--accent-soft)] shrink-0">▸</span>
              <span>{cert}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Languages + Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-xl font-semibold text-[color:var(--foreground)] mb-4 border-b border-[color:var(--border)] pb-2">
            {t.languages}
          </h2>
          <ul className="space-y-1">
            {data.languages.map((lang) => (
              <li key={lang} className="text-sm text-[color:var(--muted)]">{lang}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[color:var(--foreground)] mb-4 border-b border-[color:var(--border)] pb-2">
            {t.contact}
          </h2>
          <p className="text-sm text-[color:var(--muted)] mb-3">{data.contact.description}</p>
          <div className="space-y-1">
            {data.contact.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-sm text-[color:var(--accent-soft)] hover:text-[color:var(--foreground)] transition-colors block"
              >
                {link.label}: {link.value}
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
