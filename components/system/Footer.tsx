import Link from "next/link";

import { siteConfig } from "@/core/config";
import type { SiteLocale } from "@/core/types";
import { getDictionary, getStaticRoutes } from "@/system/i18n";

type FooterProps = {
  locale: SiteLocale;
};

export default function Footer({ locale }: FooterProps) {
  const dict = getDictionary(locale);
  const links = getStaticRoutes(locale);

  return (
    <footer className="footer-shell">
      <div className="layout-container grid gap-8 py-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="section-title text-lg text-[color:var(--foreground)]">
            {dict.footer.signature}
          </p>
          <p className="mt-3 max-w-2xl text-sm text-[color:var(--muted)]">{dict.footer.phrase}</p>
          <p className="mt-3 text-sm text-[color:var(--muted)]">{dict.footer.recruiterLine}</p>
          <a
            href={siteConfig.siteUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex text-sm text-[color:var(--glow)]"
          >
            {siteConfig.siteUrl}/
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="ui-label text-xs text-[color:var(--muted)]">Navigation</p>
            <ul className="mt-3 space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-[color:var(--foreground)] hover:text-[color:var(--glow)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="ui-label text-xs text-[color:var(--muted)]">Links</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={siteConfig.sameAs[0]} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={siteConfig.sameAs[1]} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`}>Email</a>
              </li>
              <li>
                <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
