"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sitePt } from "@/data/site.pt";
import { siteEn } from "@/data/site.en";
import LanguageSwitch from "@/components/ui/LanguageSwitch";
import ThemeToggle from "@/components/ui/ThemeToggle";
import MobileMenu from "./MobileMenu";
import { buildNavItems, getActiveNavId } from "./navigation";

export default function HeaderNav() {
  const pathname = usePathname() ?? "/";
  const hash = useSyncExternalStore(
    (callback) => {
      window.addEventListener("hashchange", callback);
      window.addEventListener("popstate", callback);
      return () => {
        window.removeEventListener("hashchange", callback);
        window.removeEventListener("popstate", callback);
      };
    },
    () => window.location.hash,
    () => ""
  );
  const isEn = pathname.startsWith("/en");
  const content = isEn ? siteEn : sitePt;
  const navItems = buildNavItems(isEn, content.nav);
  const activeId = getActiveNavId(navItems, pathname, hash);
  const navLabel = isEn ? "Main navigation" : "Navegação principal";
  const menuLabel = isEn ? "Main menu" : "Menu principal";
  const toggleLabel = isEn ? "Toggle menu" : "Abrir menu";
  const closeLabel = isEn ? "Close menu" : "Fechar menu";

  return (
    <>
      <div className="hidden md:flex items-center gap-6">
        <nav
          className="flex items-center gap-8 text-sm text-[color:var(--muted)]"
          aria-label={navLabel}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                activeId === item.id ? (item.type === "page" ? "page" : "location") : undefined
              }
              className={`relative rounded transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 ${
                activeId === item.id
                  ? "text-[color:var(--foreground)]"
                  : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
              }`}
            >
              {item.label}
              {activeId === item.id ? (
                <span className="pointer-events-none absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[color:var(--accent)]" />
              ) : null}
            </Link>
          ))}
        </nav>

        <span className="h-6 w-px bg-[color:var(--border)]/70" aria-hidden="true" />

        <div className="flex items-center gap-4 text-sm text-[color:var(--muted)]">
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </div>

      <MobileMenu
        navItems={navItems}
        activeId={activeId}
        languageLabel={content.language.label}
        menuLabel={menuLabel}
        toggleLabel={toggleLabel}
        closeLabel={closeLabel}
      />
    </>
  );
}
