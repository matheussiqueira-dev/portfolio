"use client";

import { useMemo, useState } from "react";
import type {
  Certificate,
  CertificateIssuer,
  CertificatesPageContent,
} from "@/data/certificates.types";

type Props = {
  content: CertificatesPageContent;
  certificates: Certificate[];
};

const issuers: CertificateIssuer[] = ["Alura", "Assimov", "Ulife"];

const matchesQuery = (certificate: Certificate, query: string) => {
  const search = query.trim().toLowerCase();
  if (!search) {
    return true;
  }

  const haystack = [
    certificate.title,
    certificate.issuer,
    ...certificate.areaTags,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(search);
};

export default function CertificatesClient({ content, certificates }: Props) {
  const [activeIssuer, setActiveIssuer] = useState<CertificateIssuer | "all">(
    "all"
  );
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return certificates.filter((certificate) => {
      if (activeIssuer !== "all" && certificate.issuer !== activeIssuer) {
        return false;
      }
      return matchesQuery(certificate, query);
    });
  }, [activeIssuer, certificates, query]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="eyebrow">{content.filterLabel}</p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveIssuer("all")}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 ${
                activeIssuer === "all"
                  ? "border-[color:var(--accent)]/50 bg-[color:var(--surface-muted)] text-[color:var(--foreground)]"
                  : "border-[color:var(--border)] text-[color:var(--muted)] hover:border-[color:var(--accent)]/50"
              }`}
            >
              {content.allLabel}
            </button>
            {issuers.map((issuer) => (
              <button
                key={issuer}
                type="button"
                onClick={() => setActiveIssuer(issuer)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 ${
                  activeIssuer === issuer
                    ? "border-[color:var(--accent)]/50 bg-[color:var(--surface-muted)] text-[color:var(--foreground)]"
                    : "border-[color:var(--border)] text-[color:var(--muted)] hover:border-[color:var(--accent)]/50"
                }`}
              >
                {issuer}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full md:w-72">
          <label htmlFor="certificate-search" className="sr-only">
            {content.searchPlaceholder}
          </label>
          <input
            id="certificate-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={content.searchPlaceholder}
            className="w-full rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm text-[color:var(--foreground)] placeholder:text-[color:var(--muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            type="search"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-[color:var(--muted)]">{content.emptyLabel}</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((certificate) => (
            <article
              key={certificate.id}
              className="flex flex-col gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-sm"
            >
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  {certificate.issuer}
                </p>
                <h3 className="text-base font-semibold text-[color:var(--foreground)]">
                  {certificate.title}
                </h3>
                <div className="flex flex-wrap gap-2 text-xs text-[color:var(--muted)]">
                  {certificate.areaTags.map((tag) => (
                    <span key={`${certificate.id}-${tag}`} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-3">
                <a
                  href={certificate.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                  aria-label={`${content.openLabel}: ${certificate.title}`}
                >
                  {content.openLabel}
                </a>
                <a
                  href={certificate.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
                  aria-label={`${content.downloadLabel}: ${certificate.title}`}
                >
                  {content.downloadLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
