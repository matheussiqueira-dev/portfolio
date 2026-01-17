import { TrackedAnchor } from "@/components/analytics/TrackedLink";
import type { SiteContent } from "@/data/site.types";

type Props = {
  content: SiteContent["contact"];
};

export default function Contact({ content }: Props) {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-20 content-auto">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            {content.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            {content.title}
          </h2>
          <p className="text-base md:text-lg text-slate-300 leading-relaxed">
            {content.description}
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm font-semibold text-white">
              {content.ctaTitle}
            </p>
            <p className="text-sm text-slate-400">{content.ctaSubtitle}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="mailto:matheussiqueirahub@gmail.com"
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 transition hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <span>{content.cards.email}</span>
            <span className="text-slate-400">matheussiqueirahub@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/matheussiqueira-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 transition hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <span>{content.cards.linkedin}</span>
            <span className="text-slate-400">/matheussiqueira-dev</span>
          </a>
          <TrackedAnchor
            href="https://github.com/matheussiqueira-dev"
            target="_blank"
            rel="noopener noreferrer"
            tracking={{
              action: "click_github",
              category: "outbound",
              label: "github_profile",
            }}
            className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 transition hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <span>{content.cards.github}</span>
            <span className="text-slate-400">/matheussiqueira-dev</span>
          </TrackedAnchor>
          <a
            href="https://wa.me/5581999203683"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl border border-emerald-400/40 bg-emerald-500/10 px-5 py-4 text-sm text-emerald-200 transition hover:border-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
          >
            <span>{content.cards.whatsapp}</span>
            <span className="text-emerald-300">+55 81 99920-3683</span>
          </a>
        </div>
      </div>
    </section>
  );
}
