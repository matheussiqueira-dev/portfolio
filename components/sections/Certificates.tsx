"use client";

import { useState } from "react";

import type { Certificate } from "@/data/certificates.types";
import TronCard from "@/components/ui/TronCard";
import SectionHeader from "@/components/ui/SectionHeader";
import type { SiteLocale } from "@/core/types";
import { getDictionary, getRoute } from "@/system/i18n";

type CertificatesProps = {
  locale: SiteLocale;
  items: Certificate[];
  mode?: "preview" | "full";
};

function resolveCertificateImage(certificate: Certificate) {
  if (certificate.thumbnailUrl) {
    return certificate.thumbnailUrl;
  }

  if (certificate.fileUrl) {
    return certificate.fileUrl;
  }

  if (!certificate.pdfUrl) {
    return "/placeholder.jpg";
  }

  const previewPath = certificate.pdfUrl.replace(/^\/certificates\//, "/certificates/previews/");

  return previewPath.replace(/\.pdf$/i, ".jpg");
}

export default function Certificates({ locale, items, mode = "full" }: CertificatesProps) {
  const dict = getDictionary(locale);
  const [search, setSearch] = useState("");
  const [issuer, setIssuer] = useState("all");
  const [category, setCategory] = useState("all");
  const previewMode = mode === "preview";

  const issuers = Array.from(new Set(items.map((item) => item.issuer))).sort();
  const categories = Array.from(new Set(items.flatMap((item) => item.areaTags))).sort();
  const normalizedSearch = search.trim().toLowerCase();

  const filtered = items
    .filter((item) => (issuer === "all" ? true : item.issuer === issuer))
    .filter((item) => (category === "all" ? true : item.areaTags.includes(category)))
    .filter((item) => {
      if (!normalizedSearch) {
        return true;
      }

      return (
        item.title.toLowerCase().includes(normalizedSearch) ||
        item.issuer.toLowerCase().includes(normalizedSearch) ||
        item.areaTags.join(" ").toLowerCase().includes(normalizedSearch)
      );
    })
    .slice(0, previewMode ? 6 : items.length);

  return (
    <section className="section-shell">
      <div className="layout-container space-y-8">
        <SectionHeader
          eyebrow={dict.nav.certificates}
          title={dict.pages.certificates.title}
          subtitle={dict.pages.certificates.subtitle}
        />

        {!previewMode ? (
          <div className="grid gap-4 rounded-[1.25rem] border border-[color:var(--border)] bg-[color:var(--glow-soft)] p-4 md:grid-cols-3">
            <label className="grid gap-2">
              <span className="ui-label text-xs text-[color:var(--muted)]">
                {dict.pages.certificates.searchPlaceholder}
              </span>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={dict.pages.certificates.searchPlaceholder}
                className="rounded-full border border-[color:var(--border)] bg-transparent px-4 py-3 text-sm text-[color:var(--foreground)] outline-none"
              />
            </label>
            <label className="grid gap-2">
              <span className="ui-label text-xs text-[color:var(--muted)]">
                {dict.pages.certificates.filterIssuer}
              </span>
              <select
                value={issuer}
                onChange={(event) => setIssuer(event.target.value)}
                className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--foreground)] outline-none"
              >
                <option value="all">{dict.pages.certificates.filterAll}</option>
                {issuers.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2">
              <span className="ui-label text-xs text-[color:var(--muted)]">
                {dict.pages.certificates.filterCategory}
              </span>
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--foreground)] outline-none"
              >
                <option value="all">{dict.pages.certificates.filterAll}</option>
                {categories.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ) : null}

        {filtered.length ? (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((certificate) => (
              <TronCard
                key={certificate.id}
                title={certificate.title}
                description={`${certificate.issuer} · ${certificate.areaTags.join(" · ")}`}
                imageSrc={resolveCertificateImage(certificate)}
                imageAlt={certificate.title}
                badges={certificate.areaTags.slice(0, 4)}
                href={certificate.fileUrl ?? certificate.pdfUrl}
                external
                ctaLabel={dict.pages.certificates.open}
              />
            ))}
          </div>
        ) : (
          <p className="text-sm text-[color:var(--muted)]">{dict.pages.certificates.empty}</p>
        )}

        {previewMode ? (
          <div className="pt-2">
            <a
              href={getRoute("certificates", locale)}
              className="tron-button"
              data-variant="secondary"
            >
              {dict.nav.certificates}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
