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
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            {content.filterLabel}
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveIssuer("all")}
              className={`rounded-full border px-4 py-2 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                activeIssuer === "all"
                  ? "border-white/40 bg-white/10 text-white"
                  : "border-white/10 text-slate-300 hover:border-white/30"
              }`}
            >
              {content.allLabel}
            </button>
            {issuers.map((issuer) => (
              <button
                key={issuer}
                type="button"
                onClick={() => setActiveIssuer(issuer)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                  activeIssuer === issuer
                    ? "border-white/40 bg-white/10 text-white"
                    : "border-white/10 text-slate-300 hover:border-white/30"
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
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            type="search"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-slate-400">{content.emptyLabel}</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((certificate) => (
            <article
              key={certificate.id}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  {certificate.issuer}
                </p>
                <h3 className="text-base font-semibold text-white">
                  {certificate.title}
                </h3>
                <div className="flex flex-wrap gap-2 text-xs text-slate-200">
                  {certificate.areaTags.map((tag) => (
                    <span
                      key={`${certificate.id}-${tag}`}
                      className="rounded-full border border-white/10 px-3 py-1"
                    >
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
                  className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  aria-label={`${content.openLabel}: ${certificate.title}`}
                >
                  {content.openLabel}
                </a>
                <a
                  href={certificate.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="rounded-full border border-white/20 px-4 py-2 text-xs text-slate-200 transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
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
