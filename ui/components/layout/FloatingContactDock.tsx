"use client";

import { useLocale } from "next-intl";
import { FiFileText, FiGithub, FiLinkedin, FiMessageCircle } from "react-icons/fi";

import { TrackedAnchor, TrackedLink } from "@/ui/components/analytics/TrackedLink";

import { commandActionClass } from "@/ui/components/command/actionStyles";

export default function FloatingContactDock() {
  const isEn = useLocale() === "en";

  return (
    <aside className="floating-dock" aria-label={isEn ? "Contact dock" : "Dock de contato"}>
      <div className="floating-dock__status">
        <span className="floating-dock__pulse" aria-hidden="true" />
        <span>{isEn ? "Operator available" : "Operador disponível"}</span>
      </div>

      <div className="floating-dock__actions">
        <TrackedAnchor
          href="https://wa.me/5581999203683"
          target="_blank"
          rel="noopener noreferrer"
          ariaLabel="WhatsApp"
          tracking={{ action: "dock_whatsapp", category: "engagement" }}
          className={`${commandActionClass("icon")} floating-dock__action floating-dock__action--whatsapp`}
        >
          <FiMessageCircle aria-hidden="true" />
        </TrackedAnchor>

        <TrackedAnchor
          href="https://github.com/matheussiqueira-dev"
          target="_blank"
          rel="noopener noreferrer"
          ariaLabel="GitHub"
          tracking={{ action: "dock_github", category: "engagement" }}
          className={`${commandActionClass("icon")} floating-dock__action`}
        >
          <FiGithub aria-hidden="true" />
        </TrackedAnchor>

        <TrackedAnchor
          href="https://www.linkedin.com/in/matheussiqueira-dev/"
          target="_blank"
          rel="noopener noreferrer"
          ariaLabel="LinkedIn"
          tracking={{ action: "dock_linkedin", category: "engagement" }}
          className={`${commandActionClass("icon")} floating-dock__action`}
        >
          <FiLinkedin aria-hidden="true" />
        </TrackedAnchor>

        <TrackedLink
          href="/resume"
          ariaLabel={isEn ? "Open resume" : "Abrir currículo"}
          tracking={{ action: "dock_resume", category: "navigation" }}
          className={`${commandActionClass("icon")} floating-dock__action`}
        >
          <FiFileText aria-hidden="true" />
        </TrackedLink>
      </div>
    </aside>
  );
}
