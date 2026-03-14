"use client";

import { useLocale } from "next-intl";
import { FiArrowUpRight } from "react-icons/fi";
import { TrackedAnchor } from "@/ui/components/analytics/TrackedLink";

import { commandActionClass } from "@/ui/components/command/actionStyles";
import { TelemetryPill } from "@/ui/components/command/TelemetryPill";

export default function Footer() {
  const isEn = useLocale() === "en";

  const title = isEn ? "Lower diagnostics" : "Diagnosticos inferiores";
  const location = isEn ? "Brazil | Remote operations" : "Brasil | Operacoes remotas";
  const credit = isEn ? "Created by Matheus Siqueira" : "Criado por Matheus Siqueira";
  const emailLabel = isEn ? "Email" : "E-mail";
  const officialSite = "www.matheussiqueira.dev";

  return (
    <footer className="site-footer">
      <div className="section-inner site-footer__inner">
        <div className="site-footer__content">
          <p className="section-eyebrow">{title}</p>
          <p className="text-lg font-[family-name:var(--font-display)] uppercase tracking-[0.14em] text-[color:var(--foreground-strong)]">
            {credit}
          </p>
          <p className="text-sm text-[color:var(--muted)]">{location}</p>
          <p className="text-sm text-[color:var(--muted)]">{officialSite}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            <TelemetryPill label={isEn ? "Deployment ready" : "Deployment pronto"} tone="success" />
            <TelemetryPill
              label={isEn ? "Analytics synchronized" : "Analytics sincronizado"}
              tone="accent"
            />
          </div>
        </div>

        <div className="site-footer__actions">
          <TrackedAnchor
            href="mailto:matheussiqueirahub@gmail.com"
            ariaLabel={emailLabel}
            tracking={{ action: "footer_email", category: "engagement" }}
            className={commandActionClass("secondary")}
          >
            {emailLabel} <FiArrowUpRight aria-hidden="true" />
          </TrackedAnchor>

          <TrackedAnchor
            href="https://wa.me/5581999203683"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="WhatsApp"
            tracking={{ action: "footer_whatsapp", category: "engagement" }}
            className={commandActionClass("secondary")}
          >
            WhatsApp <FiArrowUpRight aria-hidden="true" />
          </TrackedAnchor>

          <TrackedAnchor
            href="https://www.linkedin.com/in/matheussiqueira-dev/"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="LinkedIn"
            tracking={{ action: "footer_linkedin", category: "engagement" }}
            className={commandActionClass("ghost")}
          >
            LinkedIn <FiArrowUpRight aria-hidden="true" />
          </TrackedAnchor>

          <TrackedAnchor
            href="https://github.com/matheussiqueira-dev"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="GitHub"
            tracking={{ action: "footer_github", category: "engagement" }}
            className={commandActionClass("ghost")}
          >
            GitHub <FiArrowUpRight aria-hidden="true" />
          </TrackedAnchor>
        </div>
      </div>
    </footer>
  );
}
