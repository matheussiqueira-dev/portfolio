import { resumeEn } from "@/data/resume.en";
import { resume } from "@/data/resume";

import EncomPanel from "@/components/ui/EncomPanel";
import SectionHeader from "@/components/ui/SectionHeader";
import TronButton from "@/components/ui/TronButton";
import type { SiteLocale } from "@/core/types";
import { getDictionary, getRoute } from "@/system/i18n";

type AcademicProps = {
  locale: SiteLocale;
};

export default function Academic({ locale }: AcademicProps) {
  const dict = getDictionary(locale);
  const content = locale === "en" ? resumeEn : resume;

  return (
    <section className="section-shell">
      <div className="layout-container space-y-8">
        <SectionHeader
          eyebrow={dict.nav.academic}
          title={dict.pages.academic.title}
          subtitle={dict.pages.academic.subtitle}
        />

        <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5">
            {content.education.groups.map((group) => (
              <EncomPanel key={group.title} className="p-6">
                <p className="section-title text-lg text-[color:var(--foreground)]">
                  {group.title}
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {group.items.map((item) => (
                    <div
                      key={`${item.course}-${item.period}`}
                      className="rounded-2xl border border-[color:var(--border)] p-4"
                    >
                      <p className="text-base text-[color:var(--foreground)]">{item.course}</p>
                      <p className="mt-1 text-sm text-[color:var(--muted)]">{item.institution}</p>
                      <p className="mt-2 text-xs text-[color:var(--muted)]">{item.period}</p>
                    </div>
                  ))}
                </div>
              </EncomPanel>
            ))}
          </div>

          <div className="space-y-5">
            <EncomPanel className="p-6">
              <p className="ui-label text-xs text-[color:var(--muted)]">
                {locale === "en" ? "Languages" : "Idiomas"}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {content.languages.map((language) => (
                  <span key={language} className="tron-badge">
                    {language}
                  </span>
                ))}
              </div>
            </EncomPanel>
            <EncomPanel className="p-6">
              <p className="ui-label text-xs text-[color:var(--muted)]">
                {locale === "en" ? "Technical focus" : "Foco técnico"}
              </p>
              <div className="mt-4 grid gap-3">
                {content.certifications.map((item) => (
                  <div key={item} className="rounded-2xl border border-[color:var(--border)] p-4">
                    <p className="text-sm text-[color:var(--foreground)]">{item}</p>
                  </div>
                ))}
              </div>
            </EncomPanel>
            <EncomPanel className="p-6">
              <p className="ui-label text-xs text-[color:var(--muted)]">
                {locale === "en" ? "Explore more" : "Explore mais"}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <TronButton href={getRoute("certificates", locale)}>
                  {dict.nav.certificates}
                </TronButton>
                <TronButton href={getRoute("projects", locale)} variant="secondary">
                  {dict.nav.projects}
                </TronButton>
              </div>
            </EncomPanel>
          </div>
        </div>
      </div>
    </section>
  );
}
