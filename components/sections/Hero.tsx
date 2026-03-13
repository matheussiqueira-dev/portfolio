import Image from "next/image";

import { siteEn } from "@/data/site.en";
import { sitePt } from "@/data/site.pt";

import EncomPanel from "@/components/ui/EncomPanel";
import FloatingTechOrbit from "@/components/ui/FloatingTechOrbit";
import GlowBadge from "@/components/ui/GlowBadge";
import TronButton from "@/components/ui/TronButton";
import { siteConfig } from "@/core/config";
import type { SiteLocale } from "@/core/types";
import { getRoute } from "@/system/i18n";

type HeroProps = {
  locale: SiteLocale;
};

export default function Hero({ locale }: HeroProps) {
  const site = locale === "en" ? siteEn : sitePt;
  const orbitItems = [
    ...site.hero.stackHighlights.map((item) => item.label),
    ...site.primaryStack.items.map((item) => item.label.replace(/\s*\(.+?\)/g, "")),
  ];

  return (
    <section className="section-shell">
      <div className="layout-container grid items-center gap-8 xl:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="ui-label mb-4 text-sm text-[color:var(--muted)]">{site.hero.eyebrow}</p>
          <h1 className="section-title text-4xl text-[color:var(--foreground)] sm:text-6xl">
            {site.hero.title}
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-[color:var(--foreground)] sm:text-2xl">
            {site.hero.subtitle}
          </p>
          <p className="mt-5 max-w-3xl text-base text-[color:var(--muted)] sm:text-lg">
            {site.hero.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {site.hero.stackHighlights.map((badge) => (
              <GlowBadge key={badge.label}>{badge.label}</GlowBadge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <TronButton href={getRoute("projects", locale)}>{site.hero.ctas.primary}</TronButton>
            <TronButton href={siteConfig.resumeUrl} variant="secondary">
              {site.hero.ctas.secondary}
            </TronButton>
            <TronButton href={siteConfig.whatsappUrl} external variant="secondary">
              {site.hero.ctas.tertiary}
            </TronButton>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {site.hero.facts.map((fact) => (
              <EncomPanel key={fact.label} className="p-4">
                <p className="ui-label text-xs text-[color:var(--muted)]">{fact.label}</p>
                <p className="mt-2 text-sm text-[color:var(--foreground)]">{fact.value}</p>
              </EncomPanel>
            ))}
          </div>
        </div>

        <EncomPanel className="p-4 sm:p-6">
          <div className="grid gap-6">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[color:var(--border)]">
              <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.55))]" />
              <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.18),transparent_40%)]" />
              <div className="relative aspect-[5/4]">
                <Image
                  src="/profile.webp"
                  alt="Retrato de Matheus Siqueira"
                  fill
                  priority
                  sizes="(min-width: 1280px) 38vw, (min-width: 768px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-x-6 bottom-6 z-20 flex flex-wrap gap-2">
                {site.primaryStack.items.map((item) => (
                  <span key={item.label} className="tron-badge">
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            <FloatingTechOrbit
              items={orbitItems}
              centerTitle={siteConfig.siteUrl.replace(/^https?:\/\//, "")}
              centerSubtitle={site.executiveSummary.title}
            />
          </div>
        </EncomPanel>
      </div>
    </section>
  );
}
