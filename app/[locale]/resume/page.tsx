import type { Metadata } from "next";

import { resume } from "@/data/resume";
import { resumeEn } from "@/data/resume.en";
import { commandActionClass } from "@/ui/components/command/actionStyles";
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
    title: locale === "pt-BR" ? "Currículo" : "Resume",
    description: locale === "pt-BR" ? "Meu currículo profissional" : "My professional resume",
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
    <main className="layout-container page-shell command-page">
      <SectionFrame
        eyebrow={locale === "pt-BR" ? "Curriculo" : "Resume"}
        title={data.name}
        description={data.summary}
        telemetry={
          <>
            <TelemetryPill label={t.skills} tone="accent" />
            <TelemetryPill label={t.experience} tone="success" />
          </>
        }
      >
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
          <div>
            <p className="font-[family-name:var(--font-ui)] text-xl font-semibold uppercase tracking-[0.12em] text-[color:var(--accent-soft)]">
              {data.headline}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {data.coreSkills.map((skill) => (
                <TelemetryPill key={skill} label={skill} />
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <StatTile
              label={t.experience}
              value={String(data.experience.length).padStart(2, "0")}
              tone="accent"
            />
            <StatTile
              label={t.education}
              value={String(data.education.groups.length).padStart(2, "0")}
            />
            <StatTile label={t.languages} value={data.languages.join(" / ")} />
          </div>
        </div>
      </SectionFrame>

      <SectionFrame
        eyebrow={t.experience}
        title={t.experience}
        description={data.contact.description}
        className="mt-5"
      >
        <div className="grid gap-4">
          {data.experience.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5"
            >
              <p className="section-eyebrow">{job.period}</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-xl uppercase tracking-[0.12em] text-[color:var(--foreground-strong)]">
                {job.role}
              </h2>
              <p className="mt-2 text-sm text-[color:var(--accent-soft)]">
                {job.company} - {job.location}
              </p>
              <ul className="command-bullets mt-4">
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </SectionFrame>

      <SectionFrame
        eyebrow={t.education}
        title={t.education}
        description={data.summary}
        className="mt-5"
      >
        <div className="grid gap-4 xl:grid-cols-3">
          {data.education.groups.map((group) => (
            <article
              key={group.title}
              className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5"
            >
              <p className="section-eyebrow">{group.title}</p>
              <div className="mt-4 grid gap-3">
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
      </SectionFrame>

      <SectionFrame
        eyebrow={t.certifications}
        title={t.contact}
        description={data.contact.description}
        className="mt-5"
      >
        <div className="grid gap-5 xl:grid-cols-2">
          <article className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <p className="section-eyebrow">{t.certifications}</p>
            <ul className="command-bullets mt-4">
              {data.certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5">
            <p className="section-eyebrow">{t.contact}</p>
            <div className="mt-4 grid gap-3">
              {data.contact.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className={commandActionClass("secondary")}
                >
                  {link.label}: {link.value}
                </a>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {data.languages.map((lang) => (
                <TelemetryPill key={lang} label={lang} />
              ))}
            </div>
          </article>
        </div>
      </SectionFrame>
    </main>
  );
}
