"use client";

import { useMemo, useState } from "react";
import type { Certificate, CertificatesPageContent } from "@/data/certificates.types";

type Props = {
  content: CertificatesPageContent;
  certificates: Certificate[];
};

export default function CertificatesContent({ content, certificates }: Props) {
  const [search, setSearch] = useState("");
  const [issuerFilter, setIssuerFilter] = useState("all");

  const issuers = useMemo(
    () => Array.from(new Set(certificates.map((c) => c.issuer))).sort(),
    [certificates]
  );

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return certificates.filter((cert) => {
      if (issuerFilter !== "all" && cert.issuer !== issuerFilter) return false;
      if (!q) return true;
      return (
        cert.title.toLowerCase().includes(q) ||
        cert.issuer.toLowerCase().includes(q) ||
        cert.areaTags.some((tag) => tag.toLowerCase().includes(q))
      );
    });
  }, [certificates, search, issuerFilter]);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={content.searchPlaceholder}
          className="flex-1 min-w-0 px-4 py-2.5 text-sm rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] text-[color:var(--foreground)] placeholder:text-[color:var(--muted)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-soft)]/40"
        />
        <select
          value={issuerFilter}
          onChange={(e) => setIssuerFilter(e.target.value)}
          aria-label={content.filterLabel}
          className="px-4 py-2.5 text-sm rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-soft)]/40"
        >
          <option value="all">{content.allLabel}</option>
          {issuers.map((issuer) => (
            <option key={issuer} value={issuer}>
              {issuer}
            </option>
          ))}
        </select>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <p className="text-sm text-[color:var(--muted)] text-center py-12">{content.emptyLabel}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((cert) => (
            <article
              key={cert.id}
              className="p-5 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] transition-colors hover:border-[color:var(--accent-soft)] flex flex-col"
            >
              <h3 className="text-sm font-semibold text-[color:var(--foreground)] mb-1 line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-xs text-[color:var(--accent-soft)] mb-2">{cert.issuer}</p>
              <div className="flex flex-wrap gap-1 mb-4 mt-auto">
                {cert.areaTags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full border border-[color:var(--border)] text-[color:var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
                {cert.areaTags.length > 3 && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-[color:var(--border)] text-[color:var(--muted)]">
                    +{cert.areaTags.length - 3}
                  </span>
                )}
              </div>

              {/* Details (expandable modules) */}
              {cert.details && (
                <details className="mb-3 text-xs">
                  <summary className="cursor-pointer text-[color:var(--accent-soft)] hover:text-[color:var(--foreground)] transition-colors">
                    {cert.details.summaryLabel}
                  </summary>
                  <ul className="mt-2 space-y-1.5 pl-3 border-l border-[color:var(--border)]">
                    {cert.details.modules.map((mod) => (
                      <li key={mod.title}>
                        <span className="font-medium text-[color:var(--foreground)]">{mod.title}</span>
                        {mod.subtitle && (
                          <span className="text-[color:var(--muted)]"> — {mod.subtitle}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </details>
              )}

              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[color:var(--accent-soft)] hover:text-[color:var(--foreground)] transition-colors mt-auto"
              >
                {content.openLabel} ↗
              </a>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
