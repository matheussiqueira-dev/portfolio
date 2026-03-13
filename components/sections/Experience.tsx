import { resumeEn } from "@/data/resume.en";
import { resume } from "@/data/resume";

import EncomPanel from "@/components/ui/EncomPanel";
import SectionHeader from "@/components/ui/SectionHeader";
import type { SiteLocale } from "@/core/types";

type ExperienceProps = {
  locale: SiteLocale;
};

export default function Experience({ locale }: ExperienceProps) {
  const content = locale === "en" ? resumeEn : resume;

  return (
    <section className="section-shell">
      <div className="layout-container space-y-8">
        <SectionHeader
          eyebrow={locale === "en" ? "Experience" : "Experiência"}
          title={locale === "en" ? "Professional trajectory" : "Trajetória profissional"}
          subtitle={content.summary}
        />

        <div className="timeline-line grid gap-5 pl-8">
          {content.experience.map((item) => (
            <EncomPanel key={`${item.company}-${item.period}`} className="relative p-6">
              <div className="absolute -left-[1.95rem] top-7 h-3 w-3 rounded-full bg-[color:var(--glow)] shadow-[0_0_12px_var(--glow)]" />
              <p className="ui-label text-xs text-[color:var(--muted)]">{item.period}</p>
              <h3 className="mt-2 text-xl font-semibold text-[color:var(--foreground)]">
                {item.role}
              </h3>
              <p className="mt-1 text-sm text-[color:var(--muted)]">
                {item.company} · {item.location}
              </p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {item.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-2xl border border-[color:var(--border)] p-4"
                  >
                    <p className="text-sm text-[color:var(--foreground)]">{highlight}</p>
                  </div>
                ))}
              </div>
            </EncomPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
