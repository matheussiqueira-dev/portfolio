import type { Metadata } from "next";

import { sitePt } from "@/data/site.pt";
import { siteEn } from "@/data/site.en";
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
    title: locale === "pt-BR" ? "Contrate-me" : "Hire Me",
    description:
      locale === "pt-BR" ? "Contrate meus serviços" : "Hire my services",
  };
}

export default async function HirePage({ params }: Props) {
  const locale = await resolveLocale(params);
  const site = locale === "pt-BR" ? sitePt : siteEn;
  const { services, engagement, contact } = site;

  return (
    <main className="layout-container page-shell command-page">
      <SectionFrame
        eyebrow={services.eyebrow}
        title={services.title}
        description={services.description}
        telemetry={
          <>
            <TelemetryPill label={engagement.eyebrow} tone="accent" />
            <TelemetryPill label={contact.eyebrow} tone="success" />
          </>
        }
      >
        <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_280px]">
          <div className="grid gap-4 md:grid-cols-3">
            {services.offerings.map((offering) => (
              <article
                key={offering.title}
                className="rounded-[1.2rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-5"
              >
                <p className="section-eyebrow">{services.eyebrow}</p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-xl uppercase tracking-[0.12em] text-[color:var(--foreground-strong)]">
                  {offering.title}
                </h2>
                <p className="mt-3 text-sm leading-8 text-[color:var(--muted)]">
                  {offering.description}
                </p>
                <ul className="command-bullets mt-4">
                  {offering.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="grid gap-4">
            {services.process.map((step, index) => (
              <StatTile
                key={step.title}
                label={`${services.processTitle} ${String(index + 1).padStart(2, "0")}`}
                value={step.title}
                detail={step.description}
                tone="accent"
              />
            ))}
          </div>
        </div>
      </SectionFrame>

      <SectionFrame
        eyebrow={engagement.eyebrow}
        title={engagement.title}
        description={engagement.description}
        className="mt-5"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {engagement.cards.map((card) => (
            <StatTile
              key={card.label}
              label={card.label}
              value={card.value}
              detail={card.detail}
            />
          ))}
        </div>
      </SectionFrame>

      <SectionFrame
        eyebrow={contact.eyebrow}
        title={contact.title}
        description={contact.description}
        className="mt-5"
      >
        <div className="flex flex-wrap gap-3">
          <a href="mailto:matheussiqueirahub@gmail.com" className={commandActionClass("secondary")}>
            {contact.cards.email}
          </a>
          <a
            href="https://wa.me/5581999203683"
            target="_blank"
            rel="noopener noreferrer"
            className={commandActionClass("primary")}
          >
            {contact.cards.whatsapp}
          </a>
          <a
            href="https://www.linkedin.com/in/matheussiqueira-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className={commandActionClass("ghost")}
          >
            {contact.cards.linkedin}
          </a>
          <a
            href="https://github.com/matheussiqueira-dev"
            target="_blank"
            rel="noopener noreferrer"
            className={commandActionClass("ghost")}
          >
            {contact.cards.github}
          </a>
        </div>
      </SectionFrame>
    </main>
  );
}
