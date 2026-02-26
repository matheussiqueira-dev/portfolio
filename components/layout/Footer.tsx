"use client";

import { useLocale } from "next-intl";
import { TrackedAnchor } from "@/components/analytics/TrackedLink";

export default function Footer() {
  const isEn = useLocale() === "en";

  const title = isEn ? "Let’s connect" : "Vamos conversar";
  const location = isEn ? "Brazil | Remote" : "Brasil | Remoto";
  const credit = isEn
    ? "Site developed by Matheus Siqueira."
    : "Site desenvolvido por Matheus Siqueira.";
  const emailLabel = isEn ? "Email" : "E-mail";

  return (
    <footer className="site-footer">
      <div className="section-inner site-footer__inner">
        <div className="site-footer__content">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
            {title}
          </p>
          <p className="text-sm text-[color:var(--muted)]">{location}</p>
          <p className="text-xs text-[color:var(--muted)]">{credit}</p>
        </div>

        <div className="site-footer__actions">
          <TrackedAnchor
            href="mailto:matheussiqueirahub@gmail.com"
            ariaLabel={emailLabel}
            tracking={{ action: "footer_email", category: "engagement" }}
            className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            {emailLabel}
          </TrackedAnchor>

          <TrackedAnchor
            href="https://wa.me/5581999203683"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="WhatsApp"
            tracking={{ action: "footer_whatsapp", category: "engagement" }}
            className="btn-outline btn-whatsapp focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            WhatsApp
          </TrackedAnchor>

          <TrackedAnchor
            href="https://www.linkedin.com/in/matheussiqueira-dev/"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="LinkedIn"
            tracking={{ action: "footer_linkedin", category: "engagement" }}
            className="btn-outline btn-linkedin focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            LinkedIn
          </TrackedAnchor>

          <TrackedAnchor
            href="https://github.com/matheussiqueira-dev"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="GitHub"
            tracking={{ action: "footer_github", category: "engagement" }}
            className="btn-outline btn-github focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            GitHub
          </TrackedAnchor>
        </div>
      </div>
    </footer>
  );
}
