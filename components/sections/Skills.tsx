import { siteEn } from "@/data/site.en";
import { sitePt } from "@/data/site.pt";

import EncomPanel from "@/components/ui/EncomPanel";
import SectionHeader from "@/components/ui/SectionHeader";
import type { SiteLocale } from "@/core/types";

type SkillsProps = {
  locale: SiteLocale;
};

export default function Skills({ locale }: SkillsProps) {
  const site = locale === "en" ? siteEn : sitePt;

  return (
    <section className="section-shell">
      <div className="layout-container space-y-8">
        <SectionHeader
          eyebrow={site.primaryStack.eyebrow}
          title={site.about.stack.title}
          subtitle={site.about.highlights.title}
        />

        <div className="grid gap-5 lg:grid-cols-4">
          {site.primaryStack.items.map((item) => (
            <EncomPanel key={item.label} className="p-5">
              <p className="text-sm text-[color:var(--foreground)]">{item.label}</p>
              <div className="stack-meter mt-4">
                <span style={{ width: `${item.level * 20}%` }} />
              </div>
            </EncomPanel>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {site.about.stack.groups.map((group) => (
            <EncomPanel key={group.title} className="p-6">
              <p className="section-title text-lg text-[color:var(--foreground)]">{group.title}</p>
              <div className="mt-5 grid gap-3">
                {group.items.map((item) => (
                  <div key={item} className="rounded-2xl border border-[color:var(--border)] p-4">
                    <p className="text-sm text-[color:var(--foreground)]">{item}</p>
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
