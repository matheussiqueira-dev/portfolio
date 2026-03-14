import type { Metadata } from "next";

import { resume } from "@/data/resume";
import { resumeEn } from "@/data/resume.en";
import { SectionFrame } from "@/ui/components/command/SectionFrame";
import { StatTile } from "@/ui/components/command/StatTile";
import { TelemetryPill } from "@/ui/components/command/TelemetryPill";

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
    <main className="layout-container page-shell command-page">
      <SectionFrame
        eyebrow={t.eyebrow}
        title={t.title}
        description={t.subtitle}
        telemetry={
          <>
            <TelemetryPill label={t.certTitle} tone="accent" />
            <TelemetryPill label={t.langTitle} tone="success" />
          </>
        }
      >
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
          <div className="grid gap-4">
            {data.education.groups.map((group) => (
              <article
                key={group.title}
                className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5"
              >
                <p className="section-eyebrow">{group.title}</p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {group.items.map((item) => (
                    <StatTile
                      key={item.course}
                      label={item.institution}
                      value={item.course}
                      detail={item.period}
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-4">
            <article className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
              <p className="section-eyebrow">{t.certTitle}</p>
              <ul className="command-bullets mt-4">
                {data.certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
              <p className="section-eyebrow">{t.langTitle}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {data.languages.map((lang) => (
                  <TelemetryPill key={lang} label={lang} />
                ))}
              </div>
            </article>
          </div>
        </div>
      </SectionFrame>
    </main>
  );
}
