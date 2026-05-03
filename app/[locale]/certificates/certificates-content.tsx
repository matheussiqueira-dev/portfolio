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
    <article className="certificate-card card card-hover">
      <div className="certificate-card__media">
        <div className="certificate-card__frame">
          <SafeImage
            src={cert.thumbnailUrl}
            fallbackSrc="/placeholder.jpg"
            alt={cert.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="certificate-card__preview"
          />
        </div>
      </div>

      <div className="certificate-card__body">
        <div>
          <h3 className="certificate-card__title">{cert.title}</h3>
          <dl className="certificate-card__meta">
            <div>
              <dt className="sr-only">{content.issuerLabel}</dt>
              <dd className="certificate-card__issuer">{cert.issuer}</dd>
            </div>
            <div>
              <dt>{content.issueDateLabel}:</dt>
              <dd>{issueDateLabel(cert, content)}</dd>
            </div>
          </dl>
        </div>

        <div className="certificate-card__tags">
          {cert.areaTags.slice(0, 3).map((tag) => (
            <span key={tag} className="certificate-card__tag">
              {tag}
            </span>
          ))}
          {cert.areaTags.length > 3 && (
            <span className="certificate-card__tag">+{cert.areaTags.length - 3}</span>
          )}
        </div>

        {cert.details && (
          <details className="certificate-card__details">
            <summary>{cert.details.summaryLabel}</summary>
            <ul>
              {cert.details.modules.map((mod) => (
                <li key={mod.title}>
                  <span>{mod.title}</span>
                  {mod.subtitle && <span> - {mod.subtitle}</span>}
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
            className="certificate-card__link"
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

  const hasActiveFilters = issuerFilter !== "all" || categoryFilter !== "all";

  return (
    <div className="certificates-content">
      <div className="certificates-controls" data-reveal>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={content.searchPlaceholder}
          aria-label={content.searchPlaceholder}
          className="certificates-control certificates-control--search"
        />
        <select
          value={issuerFilter}
          onChange={(e) => setIssuerFilter(e.target.value)}
          aria-label={content.filterLabel}
          className="certificates-control"
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
          className="certificates-control"
        >
          <option value="all">{content.categoryFilterLabel}</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <span className="certificates-count">
          {filtered.length} / {certificates.length}
        </span>
      </div>

      {hasActiveFilters && (
        <div className="certificates-active-filters" data-reveal>
          {issuerFilter !== "all" && (
            <button
              type="button"
              onClick={() => setIssuerFilter("all")}
              className="certificates-filter-pill"
              aria-label={`${content.filterLabel}: ${issuerFilter}`}
            >
              {issuerFilter}
              <span aria-hidden="true">×</span>
            </button>
          )}
          {categoryFilter !== "all" && (
            <button
              type="button"
              onClick={() => setCategoryFilter("all")}
              className="certificates-filter-pill"
              aria-label={`${content.categoryFilterLabel}: ${categoryFilter}`}
            >
              {categoryFilter}
              <span aria-hidden="true">×</span>
            </button>
          )}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="certificates-empty">{content.emptyLabel}</p>
      ) : (
        <div className="certificates-sections">
          {sections.map((section) => {
            const areaContent = content.areas[section.area];

            return (
              <section
                key={section.area}
                aria-labelledby={`certificates-${section.area}`}
                className="certificates-section"
                data-reveal
              >
                <div className="certificates-section__head">
                  <div>
                    <h2 id={`certificates-${section.area}`}>{areaContent.title}</h2>
                    <p>{areaContent.description}</p>
                  </div>
                  <span>{section.certificates.length}</span>
                </div>

                <div className="certificates-grid">
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
