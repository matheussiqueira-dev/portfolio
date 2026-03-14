"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { Certificate, CertificatesPageContent } from "@/data/certificates.types";
import { TelemetryPill } from "@/ui/components/command/TelemetryPill";

type Props = {
  content: CertificatesPageContent;
  certificates: Certificate[];
};

function fileUrl(cert: Certificate): string {
  return cert.fileUrl ?? cert.pdfUrl ?? "";
}

/** Resolve the thumbnail URL for image assets and PDF previews. */
function thumbnailUrl(cert: Certificate): string {
  if (cert.thumbnailUrl) return cert.thumbnailUrl;
  if (cert.pdfUrl) {
    return cert.pdfUrl
      .replace("/certificates/", "/certificates/previews/")
      .replace(/\.pdf$/i, ".jpg");
  }

  return "";
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
    return certificates.filter((cert) => {
      if (issuerFilter !== "all" && cert.issuer !== issuerFilter) return false;
      if (categoryFilter !== "all" && !cert.areaTags.includes(categoryFilter)) return false;
      if (!q) return true;
      return (
        cert.title.toLowerCase().includes(q) ||
        cert.issuer.toLowerCase().includes(q) ||
        cert.areaTags.some((tag) => tag.toLowerCase().includes(q))
      );
    });
  }, [certificates, search, issuerFilter, categoryFilter]);

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 grid gap-3 xl:grid-cols-[minmax(0,1fr)_220px_220px]">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={content.searchPlaceholder}
          className="min-w-0 rounded-[1rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-3 text-sm text-[color:var(--foreground)] placeholder:text-[color:var(--muted)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-soft)]/40"
        />
        <select
          value={issuerFilter}
          onChange={(e) => setIssuerFilter(e.target.value)}
          aria-label={content.filterLabel}
          className="rounded-[1rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-3 text-sm text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-soft)]/40"
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
          className="rounded-[1rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-3 text-sm text-[color:var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-soft)]/40"
        >
          <option value="all">{content.categoryFilterLabel}</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Active filters indicator */}
      {(issuerFilter !== "all" || categoryFilter !== "all") && (
        <div className="mb-5 flex items-center gap-2 flex-wrap">
          {issuerFilter !== "all" && (
            <button
              onClick={() => setIssuerFilter("all")}
              className="telemetry-pill telemetry-pill--accent"
            >
              {issuerFilter}
              <span aria-hidden="true">×</span>
            </button>
          )}
          {categoryFilter !== "all" && (
            <button
              onClick={() => setCategoryFilter("all")}
              className="telemetry-pill telemetry-pill--accent"
            >
              {categoryFilter}
              <span aria-hidden="true">×</span>
            </button>
          )}
          <TelemetryPill label={`${filtered.length} / ${certificates.length}`} />
        </div>
      )}

      {/* Results */}
      {filtered.length === 0 ? (
        <p className="text-sm text-[color:var(--muted)] text-center py-12">{content.emptyLabel}</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cert) => (
            <article
              key={cert.id}
              className="flex flex-col overflow-hidden rounded-[1.35rem] border border-[color:var(--border)] bg-[color:var(--surface-muted)]"
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-[4/3] border-b border-[color:var(--border)] bg-[color:var(--background)]">
                {thumbnailUrl(cert) ? (
                  <Image
                    src={thumbnailUrl(cert)}
                    alt={cert.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center px-6 text-center text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
                    Preview pending
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-[family-name:var(--font-display)] text-lg uppercase tracking-[0.12em] text-[color:var(--foreground-strong)] mb-1 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-xs text-[color:var(--accent-soft)] mb-3">{cert.issuer}</p>
                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {cert.areaTags.slice(0, 3).map((tag) => (
                    <TelemetryPill key={tag} label={tag} />
                  ))}
                  {cert.areaTags.length > 3 && (
                    <TelemetryPill label={`+${cert.areaTags.length - 3}`} />
                  )}
                </div>

                {/* Details (expandable modules) */}
                {cert.details && (
                  <details className="mb-3 text-xs rounded-[1rem] border border-[color:var(--border)] bg-[color:rgba(0,229,255,0.03)] p-3">
                    <summary className="cursor-pointer text-[color:var(--accent-soft)] hover:text-[color:var(--foreground)] transition-colors">
                      {cert.details.summaryLabel}
                    </summary>
                    <ul className="mt-3 space-y-2 pl-3 border-l border-[color:var(--border)]">
                      {cert.details.modules.map((mod) => (
                        <li key={mod.title}>
                          <span className="font-medium text-[color:var(--foreground)]">
                            {mod.title}
                          </span>
                          {mod.subtitle && (
                            <span className="text-[color:var(--muted)]"> — {mod.subtitle}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </details>
                )}

                <a
                  href={fileUrl(cert)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[color:var(--accent-soft)] hover:text-[color:var(--foreground)] transition-colors mt-auto"
                >
                  {content.openLabel} ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
