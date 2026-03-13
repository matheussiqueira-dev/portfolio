import { siteEn } from "@/data/site.en";
import { sitePt } from "@/data/site.pt";

import ContactBriefBuilder from "@/components/ui/ContactBriefBuilder";
import EncomPanel from "@/components/ui/EncomPanel";
import SectionHeader from "@/components/ui/SectionHeader";
import TronButton from "@/components/ui/TronButton";
import { siteConfig } from "@/core/config";
import type { SiteLocale } from "@/core/types";

type ContactProps = {
  locale: SiteLocale;
  mode?: "preview" | "full";
};

const contactValues = {
  email: "matheussiqueirahub@gmail.com",
  linkedin: "linkedin.com/in/matheussiqueira-dev",
  github: "github.com/matheussiqueira-dev",
  whatsapp: "+55 81 99920-3683",
} as const;

export default function Contact({ locale, mode = "preview" }: ContactProps) {
  const site = locale === "en" ? siteEn : sitePt;
  const isFull = mode === "full";

  return (
    <section className="section-shell">
      <div className="layout-container space-y-8">
        <SectionHeader
          eyebrow={site.contact.eyebrow}
          title={site.contact.title}
          subtitle={site.contact.description}
        />

        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <EncomPanel className="p-6">
            <p className="ui-label text-xs text-[color:var(--muted)]">{site.contact.ctaTitle}</p>
            <p className="mt-4 text-sm text-[color:var(--foreground)]">
              {site.contact.ctaSubtitle}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <TronButton href={siteConfig.whatsappUrl} external>
                WhatsApp
              </TronButton>
              <TronButton href={`mailto:${siteConfig.email}`} variant="secondary">
                Email
              </TronButton>
            </div>
          </EncomPanel>

          <div className="grid gap-5">
            {Object.entries(site.contact.cards).map(([key, label]) => {
              const href =
                key === "email"
                  ? `mailto:${siteConfig.email}`
                  : key === "whatsapp"
                    ? siteConfig.whatsappUrl
                    : key === "linkedin"
                      ? siteConfig.sameAs[0]
                      : siteConfig.sameAs[1];

              return (
                <EncomPanel key={key} className="p-5">
                  <p className="ui-label text-xs text-[color:var(--muted)]">{label}</p>
                  <a
                    href={href}
                    target={key === "email" ? undefined : "_blank"}
                    rel={key === "email" ? undefined : "noreferrer"}
                    className="mt-3 block text-base text-[color:var(--foreground)]"
                  >
                    {contactValues[key as keyof typeof contactValues]}
                  </a>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">
                    {site.contact.description}
                  </p>
                </EncomPanel>
              );
            })}
          </div>
        </div>

        {isFull ? (
          <EncomPanel className="p-6">
            <SectionHeader
              eyebrow={site.contact.brief.title}
              title={site.contact.brief.title}
              subtitle={site.contact.brief.description}
            />
            <div className="mt-6">
              <ContactBriefBuilder
                brief={site.contact.brief}
                email={siteConfig.email}
                whatsappUrl={siteConfig.whatsappUrl}
                copyLabel={site.contact.copyLabel}
                copiedLabel={site.contact.copiedLabel}
              />
            </div>
          </EncomPanel>
        ) : null}
      </div>
    </section>
  );
}
