import Link from "next/link";
import type { SiteContent } from "@/data/site.types";

type Props = {
  content: SiteContent["certificatesSection"];
  localePrefix?: string;
};

export default function CertificatesPreview({
  content,
  localePrefix = "",
}: Props) {
  const href = localePrefix ? `${localePrefix}/certificates` : "/certificates";

  return (
    <section className="px-6 py-20 content-auto">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              {content.eyebrow}
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              {content.title}
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl">
              {content.description}
            </p>
          </div>
          <div>
            <Link
              href={href}
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-xs font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              {content.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
