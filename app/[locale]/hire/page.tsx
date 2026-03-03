import type { Metadata } from "next";

import { sitePt } from "@/data/site.pt";
import { siteEn } from "@/data/site.en";

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
    <main className="layout-container page-shell" style={{ paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}>
      {/* Services */}
      <section className="mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)] mb-2">
          {services.eyebrow}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-[color:var(--foreground)] mb-3">
          {services.title}
        </h1>
        <p className="text-sm text-[color:var(--muted)] max-w-2xl mb-8">{services.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.offerings.map((offering) => (
            <article
              key={offering.title}
              className="p-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] transition-colors hover:border-[color:var(--accent-soft)]"
            >
              <h3 className="text-base font-semibold text-[color:var(--foreground)] mb-2">{offering.title}</h3>
              <p className="text-sm text-[color:var(--muted)] mb-4">{offering.description}</p>
              <ul className="space-y-1">
                {offering.bullets.map((b) => (
                  <li key={b} className="text-xs text-[color:var(--muted)] flex gap-2">
                    <span className="text-[color:var(--accent-soft)] shrink-0">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-[color:var(--foreground)] mb-6 border-b border-[color:var(--border)] pb-2">
          {services.processTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {services.process.map((step, i) => (
            <div key={step.title} className="flex items-start gap-3">
              <span className="text-2xl font-bold text-[color:var(--accent-soft)] leading-none shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-[color:var(--foreground)] mb-1">{step.title}</h3>
                <p className="text-xs text-[color:var(--muted)]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement */}
      <section className="mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)] mb-2">
          {engagement.eyebrow}
        </p>
        <h2 className="text-2xl font-bold text-[color:var(--foreground)] mb-3">
          {engagement.title}
        </h2>
        <p className="text-sm text-[color:var(--muted)] max-w-2xl mb-6">{engagement.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {engagement.cards.map((card) => (
            <article
              key={card.label}
              className="p-5 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)]"
            >
              <p className="text-xs uppercase tracking-wider text-[color:var(--muted)] mb-1">{card.label}</p>
              <p className="text-base font-semibold text-[color:var(--foreground)] mb-1">{card.value}</p>
              <p className="text-xs text-[color:var(--muted)]">{card.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)] mb-2">
          {contact.eyebrow}
        </p>
        <h2 className="text-2xl font-bold text-[color:var(--foreground)] mb-3">
          {contact.title}
        </h2>
        <p className="text-sm text-[color:var(--muted)] max-w-xl mx-auto mb-6">{contact.description}</p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="mailto:matheussiqueirahub@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl border border-[color:var(--border)] text-[color:var(--foreground)] bg-[color:var(--surface)] hover:bg-[color:var(--surface-strong)] transition-colors"
          >
            {contact.cards.email}
          </a>
          <a
            href="https://wa.me/5581999203683"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl border border-[color:var(--border)] text-[color:var(--foreground)] bg-[color:var(--surface)] hover:bg-[color:var(--surface-strong)] transition-colors"
          >
            {contact.cards.whatsapp}
          </a>
          <a
            href="https://www.linkedin.com/in/matheussiqueira-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl border border-[color:var(--border)] text-[color:var(--foreground)] bg-[color:var(--surface)] hover:bg-[color:var(--surface-strong)] transition-colors"
          >
            {contact.cards.linkedin}
          </a>
          <a
            href="https://github.com/matheussiqueira-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl border border-[color:var(--border)] text-[color:var(--foreground)] bg-[color:var(--surface)] hover:bg-[color:var(--surface-strong)] transition-colors"
          >
            {contact.cards.github}
          </a>
        </div>
      </section>
    </main>
  );
}
