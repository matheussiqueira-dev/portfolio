"use client";

import { useLocale } from "next-intl";
import { TrackedAnchor } from "@/components/analytics/TrackedLink";
import { cn } from "@/lib/cn";

export default function Footer() {
  const isEn = useLocale() === "en";

  const title = isEn ? "Let’s connect" : "Vamos conversar";
  const location = isEn ? "Brazil | Remote" : "Brasil | Remoto";
  const credit = isEn
    ? "Site developed by Matheus Siqueira."
    : "Site desenvolvido por Matheus Siqueira.";
  const emailLabel = isEn ? "Email" : "E-mail";

  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.28em] text-zinc-500">{title}</p>
          <p className="text-sm text-zinc-400">{location}</p>
          <p className="text-xs text-zinc-500">{credit}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <TrackedAnchor
            href="mailto:matheussiqueirahub@gmail.com"
            ariaLabel={emailLabel}
            tracking={{ action: "footer_email", category: "engagement" }}
            className={cn(
              "inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white/25 hover:text-white",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
            )}
          >
            {emailLabel}
          </TrackedAnchor>

          <TrackedAnchor
            href="https://wa.me/5581999203683"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="WhatsApp"
            tracking={{ action: "footer_whatsapp", category: "engagement" }}
            className={cn(
              "inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white/25 hover:text-white",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
            )}
          >
            WhatsApp
          </TrackedAnchor>

          <TrackedAnchor
            href="https://www.linkedin.com/in/matheussiqueira-dev/"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="LinkedIn"
            tracking={{ action: "footer_linkedin", category: "engagement" }}
            className={cn(
              "inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white/25 hover:text-white",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
            )}
          >
            LinkedIn
          </TrackedAnchor>

          <TrackedAnchor
            href="https://github.com/matheussiqueira-dev"
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel="GitHub"
            tracking={{ action: "footer_github", category: "engagement" }}
            className={cn(
              "inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-white/25 hover:text-white",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
            )}
          >
            GitHub
          </TrackedAnchor>
        </div>
      </div>
    </footer>
  );
}
