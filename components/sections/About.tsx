import type { Locale } from "@/lib/i18n";
import { siteCopy } from "@/lib/siteCopy";

type Props = {
  locale?: Locale;
};

export default function About({ locale = "pt" }: Props) {
  const copy = siteCopy[locale].about;

  return (
    <section id="about" className="scroll-mt-24 px-6 py-24">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              {copy.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mt-3">
              {copy.title}
            </h2>
          </div>

          <div className="space-y-4 text-base md:text-lg leading-relaxed text-slate-300">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <a
            href="https://www.linkedin.com/in/matheussiqueira-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit px-4 py-2 rounded-full border border-white/15 text-sm text-slate-200 transition hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            {copy.linkLabel}
          </a>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            {copy.listTitle}
          </h3>
          <ul className="space-y-4 text-sm text-slate-300">
            {copy.list.map((item) => (
              <li key={item.title}>
                <p className="text-white font-semibold">{item.title}</p>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
