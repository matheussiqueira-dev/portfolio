"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { portfolioContent } from "@/data/portfolio";
import { useActiveSection } from "@/components/portfolio/useActiveSection";

export default function Header() {
  const pathname = usePathname() ?? "/";
  const locale = pathname.startsWith("/en") ? "en" : "pt";
  const content = portfolioContent[locale];
  const sectionIds = useMemo(() => content.nav.map((item) => item.id), [content.nav]);
  const activeId = useActiveSection(sectionIds);
  const [isOpen, setIsOpen] = useState(false);
  const basePath = locale === "en" ? "/en" : "";
  const navLabel = locale === "en" ? "Primary navigation" : "Navegação principal";
  const menuLabel = locale === "en" ? "Toggle menu" : "Abrir menu";

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[color:var(--border)]/70 bg-[color:var(--background)]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href={`${basePath}#home`}
          className="text-sm font-semibold uppercase tracking-[0.3em] text-[color:var(--foreground)]"
        >
          MS
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label={navLabel}>
          {content.nav.map((item) => {
            const isActive = activeId === item.id;
            return (
              <Link
                key={item.id}
                href={`${basePath}#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`relative text-sm font-medium transition ${
                  isActive
                    ? "text-[color:var(--accent-strong)]"
                    : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
                }`}
              >
                {item.label}
                {isActive ? (
                  <span className="absolute -bottom-3 left-0 h-0.5 w-full rounded-full bg-[color:var(--accent)]" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--foreground)] md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={menuLabel}
        >
          Menu
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[color:var(--border)]/70 bg-[color:var(--background)]/90 px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {content.nav.map((item) => (
                <Link
                  key={item.id}
                  href={`${basePath}#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition ${
                    activeId === item.id
                      ? "text-[color:var(--accent-strong)]"
                      : "text-[color:var(--muted)]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
