"use client";

import { useMemo, useState } from "react";
import type {
  Certificate,
  CertificateArea,
  CertificatesPageContent,
} from "@/data/certificates.types";
import SafeImage from "@/ui/components/demo/SafeImage";

type Props = {
  content: CertificatesPageContent;
  certificates: Certificate[];
};

type CertificateSection = {
  area: CertificateArea;
  certificates: Certificate[];
};

const CERTIFICATE_AREA_ORDER: CertificateArea[] = ["technology", "marketing"];

function fileUrl(cert: Certificate): string {
  return cert.verificationUrl;
}

function issueDateLabel(cert: Certificate, content: CertificatesPageContent): string {
  if (cert.issuedAt.kind === "known") {
    return cert.issuedAt.label ?? cert.issuedAt.value;
  }

  return content.unknownIssueDateLabel;
}

function sortByWeight(a: Certificate, b: Certificate): number {
  return b.weight - a.weight || a.title.localeCompare(b.title);
}

function CertificateCard({
  cert,
  content,
}: {
  cert: Certificate;
  content: CertificatesPageContent;
}) {
  const certificateUrl = fileUrl(cert);

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] transition-colors hover:border-[color:var(--accent-soft)]">
      <div className="relative aspect-[4/3] w-full bg-[color:var(--bg)]">
        <SafeImage
          src={cert.thumbnailUrl}
          fallbackSrc="/placeholder.jpg"
          alt={cert.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-1 line-clamp-2 text-sm font-semibold text-[color:var(--foreground)]">
          {cert.title}
        </h3>
        <dl className="mb-2 grid gap-1 text-xs">
          <div className="flex items-center gap-1.5 text-[color:var(--accent-soft)]">
            <dt className="sr-only">{content.issuerLabel}</dt>
            <dd>{cert.issuer}</dd>
          </div>
          <div className="flex items-center gap-1.5 text-[color:var(--muted)]">
            <dt>{content.issueDateLabel}:</dt>
            <dd>{issueDateLabel(cert, content)}</dd>
          </div>
        </dl>
        <div className="mb-4 mt-auto flex flex-wrap gap-1">
          {cert.areaTags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[color:var(--border)] px-2 py-0.5 text-[10px] text-[color:var(--muted)]"
            >
              {tag}
            </span>
          ))}
          {cert.areaTags.length > 3 && (
            <span className="rounded-full border border-[color:var(--border)] px-2 py-0.5 text-[10px] text-[color:var(--muted)]">
              +{cert.areaTags.length - 3}
            </span>
          )}
        </div>

        {cert.details && (
          <details className="mb-3 text-xs">
            <summary className="cursor-pointer text-[color:var(--accent-soft)] transition-colors hover:text-[color:var(--foreground)]">
              {cert.details.summaryLabel}
            </summary>
            <ul className="mt-2 space-y-1.5 border-l border-[color:var(--border)] pl-3">
              {cert.details.modules.map((mod) => (
                <li key={mod.title}>
                  <span className="font-medium text-[color:var(--foreground)]">{mod.title}</span>
                  {mod.subtitle && (
                    <span className="text-[color:var(--muted)]"> - {mod.subtitle}</span>
                  )}
                </li>
              ))}
            </ul>
          </details>
        )}

        {certificateUrl ? (
          <a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-[color:var(--accent-soft)] transition-colors hover:text-[color:var(--foreground)]"
          >
            {content.openLabel} ↗
          </a>
        ) : (
          <p className="mt-auto text-xs text-[color:var(--muted)]">{content.unavailableLabel}</p>
        )}
      </div>
    </article>
  );
}

export default function CertificatesContent({ content, certificates }: Props) {
  const [search, setSearch] = useState("");
  const [issuerFilter, setIssuerFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const issuers = useMemo(
    () => Array.from(new Set(certificates.map((c) => c.issuer))).sort(),
    [certificates]
  );

  const categories = useMemo(
    () => Array.from(new Set(certificates.flatMap((c) => c.areaTags))).sort(),
    [certificates]
  );

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return certificates
      .filter((cert) => {
        if (issuerFilter !== "all" && cert.issuer !== issuerFilter) return false;
        if (categoryFilter !== "all" && !cert.areaTags.includes(categoryFilter)) return false;
        if (!q) return true;
        return (
          cert.title.toLowerCase().includes(q) ||
          cert.issuer.toLowerCase().includes(q) ||
          cert.areaTags.some((tag) => tag.toLowerCase().includes(q))
        );
      })
      .sort(sortByWeight);
  }, [certificates, search, issuerFilter, categoryFilter]);

  const sections = useMemo<CertificateSection[]>(
    () =>
      CERTIFICATE_AREA_ORDER.map((area) => ({
        area,
        certificates: filtered.filter((cert) => cert.area === area),
      })).filter((section) => section.certificates.length > 0),
    [filtered]
  );

  return (
    <div>
      <div className="mb-8 flex flex-col gap-3 sm:flex-row">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={content.searchPlaceholder}
          className="min-w-0 flex-1 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-2.5 text-sm text-[color:var(--foreground)] placeholder:text-[color:var(--muted)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-soft)]/40"
        />
        <select
          value={issuerFilter}
          onChange={(e) => setIssuerFilter(e.target.value)}
          aria-label={content.filterLabel}
          className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-2.5 text-sm text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-soft)]/40"
        >
          <option value="all">{content.filterLabel}</option>
          {issuers.map((issuer) => (
            <option key={issuer} value={issuer}>
              {issuer}
            </option>
          ))}
        </select>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          aria-label={content.categoryFilterLabel}
          className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-2.5 text-sm text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-soft)]/40"
        >
          <option value="all">{content.categoryFilterLabel}</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {(issuerFilter !== "all" || categoryFilter !== "all") && (
        <div className="mb-5 flex flex-wrap items-center gap-2">
          {issuerFilter !== "all" && (
            <button
              onClick={() => setIssuerFilter("all")}
              className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--accent)]/20 bg-[color:var(--accent)]/10 px-3 py-1.5 text-xs text-[color:var(--accent)] transition-colors hover:bg-[color:var(--accent)]/20"
            >
              {issuerFilter}
              <span aria-hidden="true">×</span>
            </button>
          )}
          {categoryFilter !== "all" && (
            <button
              onClick={() => setCategoryFilter("all")}
              className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--accent)]/20 bg-[color:var(--accent)]/10 px-3 py-1.5 text-xs text-[color:var(--accent)] transition-colors hover:bg-[color:var(--accent)]/20"
            >
              {categoryFilter}
              <span aria-hidden="true">×</span>
            </button>
          )}
          <span className="text-xs text-[color:var(--muted)]">
            {filtered.length} / {certificates.length}
          </span>
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-sm text-[color:var(--muted)]">{content.emptyLabel}</p>
      ) : (
        <div className="space-y-12">
          {sections.map((section) => {
            const areaContent = content.areas[section.area];

            return (
              <section
                key={section.area}
                aria-labelledby={`certificates-${section.area}`}
                className="scroll-mt-24"
              >
                <div className="mb-5 flex flex-col gap-3 border-b border-[color:var(--border)] pb-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2
                      id={`certificates-${section.area}`}
                      className="text-xl font-semibold text-[color:var(--foreground)] md:text-2xl"
                    >
                      {areaContent.title}
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-[color:var(--muted)]">
                      {areaContent.description}
                    </p>
                  </div>
                  <span className="w-fit rounded-full border border-[color:var(--border)] px-3 py-1 text-xs text-[color:var(--muted)]">
                    {section.certificates.length}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {section.certificates.map((cert) => (
                    <CertificateCard key={cert.id} cert={cert} content={content} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
