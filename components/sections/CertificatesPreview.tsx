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
    <section className="page-section content-auto">
      <div className="section-inner">
        <div className="card card-lg flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="card-header">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 className="card-title text-2xl md:text-3xl">
              {content.title}
            </h2>
            <p className="card-subtitle text-sm md:text-base max-w-2xl">
              {content.description}
            </p>
          </div>
          <div>
            <Link
              href={href}
              className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              {content.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
