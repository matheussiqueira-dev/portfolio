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

const issuers: CertificateIssuer[] = ["Alura", "Assimov", "Ulife", "Infinity School"];

const matchesQuery = (certificate: Certificate, query: string) => {
  const search = query.trim().toLowerCase();
  if (!search) {
    return true;
  }

  const details = certificate.details
    ? [
        certificate.details.summaryLabel,
        ...certificate.details.modules.flatMap((module) => [
          module.title,
          module.subtitle ?? "",
          module.description,
        ]),
      ]
    : [];

  const haystack = [
    certificate.title,
    certificate.issuer,
    ...certificate.areaTags,
    ...details,
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
            className="w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--foreground)] placeholder:text-[color:var(--muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            type="search"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-[color:var(--muted)]">{content.emptyLabel}</p>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          {filtered.map((certificate) => {
            const previewSrc =
              `${certificate.pdfUrl}#page=1&view=FitH&toolbar=0&navpanes=0&scrollbar=0`;
            const previewTitle = `${content.openLabel}: ${certificate.title}`;

            return (
              <article
                key={certificate.id}
                className="card card-hover certificate-card"
              >
                <div className="certificate-card__media">
                  <div className="certificate-card__frame">
                    <div className="certificate-card__placeholder" aria-hidden="true">
                      <span className="certificate-card__placeholder-label">
                        {certificate.issuer}
                      </span>
                      <span className="certificate-card__placeholder-stamp" />
                    </div>
                    <iframe
                      className="certificate-card__preview"
                      title={previewTitle}
                      src={previewSrc}
                      loading="lazy"
                      aria-hidden="true"
                      tabIndex={-1}
                    />
                  </div>
                </div>

                <div className="certificate-card__body">
                  <div className="space-y-2">
                    <h3 className="certificate-card__title">
                      {certificate.title}
                    </h3>
                    <p className="certificate-card__issuer">
                      {certificate.issuer}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs text-[color:var(--muted)]">
                    {certificate.areaTags.map((tag) => (
                      <span key={`${certificate.id}-${tag}`} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {certificate.details ? (
                    <details className="panel">
                      <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                        {certificate.details.summaryLabel}
                      </summary>
                      <div className="mt-4 space-y-4 text-sm text-[color:var(--muted)]">
                        {certificate.details.modules.map((module) => (
                          <div key={`${certificate.id}-${module.title}`} className="space-y-1">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                              {module.title}
                            </p>
                            {module.subtitle ? (
                              <p className="text-xs text-[color:var(--muted-strong)]">
                                {module.subtitle}
                              </p>
                            ) : null}
                            <p className="leading-relaxed text-[color:var(--muted)]">
                              {module.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </details>
                  ) : null}

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
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
