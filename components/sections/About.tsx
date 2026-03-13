import { siteEn } from "@/data/site.en";
import { sitePt } from "@/data/site.pt";

import EncomPanel from "@/components/ui/EncomPanel";
import SectionHeader from "@/components/ui/SectionHeader";
import type { SiteLocale } from "@/core/types";
import { getDictionary } from "@/system/i18n";

type AboutProps = {
  locale: SiteLocale;
  expanded?: boolean;
};

export default function About({ locale, expanded = false }: AboutProps) {
  const dict = getDictionary(locale);
  const content = locale === "en" ? siteEn.about : sitePt.about;

  return (
    <section className="section-shell">
      <div className="layout-container space-y-8">
        <SectionHeader
          eyebrow={dict.nav.about}
          title={dict.pages.about.title}
          subtitle={dict.pages.about.subtitle}
        />

        <div className="grid gap-5 lg:grid-cols-2">
          <EncomPanel className="p-6">
            <p className="ui-label text-xs text-[color:var(--muted)]">{content.summary.title}</p>
            <p className="mt-4 text-sm text-[color:var(--foreground)]">{content.summary.body}</p>
          </EncomPanel>
          <EncomPanel className="p-6">
            <p className="ui-label text-xs text-[color:var(--muted)]">{content.who.title}</p>
            <p className="mt-4 text-sm text-[color:var(--foreground)]">{content.who.body}</p>
          </EncomPanel>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <EncomPanel className="p-6">
            <p className="ui-label text-xs text-[color:var(--muted)]">
              {content.complexData.title}
            </p>
            <p className="mt-4 text-sm text-[color:var(--foreground)]">
              {content.complexData.body}
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {content.deliver.bullets.map((item) => (
                <div key={item} className="rounded-2xl border border-[color:var(--border)] p-4">
                  <p className="text-sm text-[color:var(--foreground)]">{item}</p>
                </div>
              ))}
            </div>
          </EncomPanel>

          <div className="grid gap-5">
            <EncomPanel className="p-6">
              <p className="ui-label text-xs text-[color:var(--muted)]">
                {content.differential.title}
              </p>
              <p className="mt-4 text-sm text-[color:var(--foreground)]">
                {content.differential.description}
              </p>
            </EncomPanel>
            <EncomPanel className="p-6">
              <p className="ui-label text-xs text-[color:var(--muted)]">{content.snapshot.title}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {content.snapshot.items.map((item) => (
                  <div
                    key={item.value}
                    className="rounded-2xl border border-[color:var(--border)] p-4"
                  >
                    <p className="text-sm text-[color:var(--foreground)]">{item.value}</p>
                    <p className="mt-1 text-xs text-[color:var(--muted)]">{item.label}</p>
                  </div>
                ))}
              </div>
            </EncomPanel>
          </div>
        </div>

        {expanded ? (
          <EncomPanel className="p-6">
            <p className="ui-label text-xs text-[color:var(--muted)]">{content.highlights.title}</p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {content.highlights.items.map((item) => (
                <div key={item} className="rounded-2xl border border-[color:var(--border)] p-4">
                  <p className="text-sm text-[color:var(--foreground)]">{item}</p>
                </div>
              ))}
            </div>
          </EncomPanel>
        ) : null}
      </div>
    </section>
  );
}
