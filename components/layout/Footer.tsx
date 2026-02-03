"use client";

import { usePathname } from "next/navigation";
import { portfolioContent } from "@/data/portfolio";

export default function Footer() {
  const pathname = usePathname() ?? "/";
  const locale = pathname.startsWith("/en") ? "en" : "pt";
  const content = portfolioContent[locale].footer;

  return (
    <footer className="border-t border-[color:var(--border)]/70 px-6 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm text-[color:var(--foreground)]">
            {content.tagline}
          </p>
          <p className="text-xs text-[color:var(--muted)]">
            {content.copyright}
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {content.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[color:var(--muted)] transition hover:text-[color:var(--foreground)]"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
