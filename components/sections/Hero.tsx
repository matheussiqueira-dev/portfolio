import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizeHref } from "@/lib/i18n";
import { siteCopy } from "@/lib/siteCopy";

type Props = {
  locale?: Locale;
};

export default function Hero({ locale = "pt" }: Props) {
  const copy = siteCopy[locale].hero;

  return (
    <section className="px-6 pt-28 pb-24">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400 motion-safe:animate-fade-up">
            {copy.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-white motion-safe:animate-fade-up [animation-delay:120ms]">
            {copy.title}
          </h1>
          <p className="text-lg md:text-xl font-medium text-slate-100 motion-safe:animate-fade-up [animation-delay:160ms]">
            {copy.subtitle}
          </p>
          <p className="text-base md:text-lg leading-relaxed text-slate-300 motion-safe:animate-fade-up [animation-delay:220ms]">
            {copy.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start motion-safe:animate-fade-up [animation-delay:320ms]">
            <Link
              href={localizeHref("/resume", locale)}
              className="px-6 py-3 rounded-full border border-white/20 text-sm font-medium text-white transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              {copy.ctaPrimary}
            </Link>

            <Link
              href={localizeHref("/#contact", locale)}
              className="px-6 py-3 rounded-full bg-white text-sm font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              {copy.ctaSecondary}
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end motion-safe:animate-fade-in">
          <Image
            src="/profile.jpg"
            alt="Matheus Siqueira"
            width={320}
            height={320}
            sizes="(max-width: 768px) 70vw, 320px"
            priority
            className="rounded-3xl object-cover border border-white/10 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
