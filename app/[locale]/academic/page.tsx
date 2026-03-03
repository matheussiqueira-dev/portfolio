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
    title: locale === "pt-BR" ? "Acadêmico" : "Academic",
    description:
      locale === "pt-BR"
        ? "Educação e certificações"
        : "Education and certifications",
  };
}

export default async function AcademicPage({ params }: Props) {
  const locale = await resolveLocale(params);
  const data = locale === "pt-BR" ? resume : resumeEn;
  const t = {
    eyebrow: locale === "pt-BR" ? "Acadêmico" : "Academic",
    title: locale === "pt-BR" ? "Educação e Formação" : "Education & Training",
    subtitle:
      locale === "pt-BR"
        ? "Trajetória acadêmica com foco em Ciência da Computação, IA, Cloud, Segurança e Full Stack."
        : "Academic path focused on Computer Science, AI, Cloud, Security, and Full Stack.",
    certTitle: locale === "pt-BR" ? "Certificações" : "Certifications",
    langTitle: locale === "pt-BR" ? "Idiomas" : "Languages",
  };

  return (
    <main className="layout-container page-shell" style={{ paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}>
      {/* Header */}
      <header className="mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)] mb-2">
          {t.eyebrow}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-[color:var(--foreground)] mb-3">
          {t.title}
        </h1>
        <p className="text-sm text-[color:var(--muted)] max-w-2xl">{t.subtitle}</p>
      </header>

      {/* Education Groups */}
      <div className="space-y-10 mb-12">
        {data.education.groups.map((group) => (
          <section key={group.title}>
            <h2 className="text-xl font-semibold text-[color:var(--foreground)] mb-5 border-b border-[color:var(--border)] pb-2">
              {group.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {group.items.map((item) => (
                <article
                  key={item.course}
                  className="p-5 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] transition-colors hover:border-[color:var(--accent-soft)]"
                >
                  <h3 className="text-base font-semibold text-[color:var(--foreground)] mb-1">
                    {item.course}
                  </h3>
                  <p className="text-sm text-[color:var(--accent-soft)]">{item.institution}</p>
                  <p className="text-xs text-[color:var(--muted)] mt-1">{item.period}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Certifications + Languages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-xl font-semibold text-[color:var(--foreground)] mb-4 border-b border-[color:var(--border)] pb-2">
            {t.certTitle}
          </h2>
          <ul className="space-y-2">
            {data.certifications.map((cert) => (
              <li key={cert} className="text-sm text-[color:var(--muted)] flex gap-2">
                <span className="text-[color:var(--accent-soft)] shrink-0">▸</span>
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[color:var(--foreground)] mb-4 border-b border-[color:var(--border)] pb-2">
            {t.langTitle}
          </h2>
          <ul className="space-y-1">
            {data.languages.map((lang) => (
              <li key={lang} className="text-sm text-[color:var(--muted)]">{lang}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
