"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { SiteLocale } from "@/core/types";
import { cn } from "@/core/utils";
import { getDictionary, getRoute, getStaticRoutes } from "@/system/i18n";
import ThemeToggle from "@/components/system/ThemeToggle";
import LanguageSwitcher from "@/components/system/LanguageSwitcher";

type NavbarProps = {
  locale: SiteLocale;
};

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/" || pathname === "/pt-BR";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar({ locale }: NavbarProps) {
  const pathname = usePathname() ?? getRoute("home", locale);
  const [isOpen, setIsOpen] = useState(false);
  const dict = getDictionary(locale);
  const routes = getStaticRoutes(locale);
  const menuLabel = locale === "en" ? "Menu" : "Menu";
  const closeLabel = locale === "en" ? "Close" : "Fechar";
  const menuAria = isOpen
    ? locale === "en"
      ? "Close navigation"
      : "Fechar navegação"
    : locale === "en"
      ? "Open navigation"
      : "Abrir navegação";

  return (
    <header className="site-nav">
      <div className="layout-container site-nav__inner">
        <Link href={getRoute("home", locale)} className="site-nav__brand">
          <span className="site-nav__brand-name">Matheus Siqueira</span>
          <span className="site-nav__brand-tag">ENCOM Technical Portfolio</span>
        </Link>

        <nav className="hidden items-center gap-2 xl:flex" aria-label="Main navigation">
          {routes.map((route) => (
            <Link
              key={route.key}
              href={route.href}
              className={cn(
                "rounded-full px-4 py-3 text-sm text-[color:var(--muted)] transition hover:bg-[color:var(--glow-soft)] hover:text-[color:var(--foreground)]",
                isActive(pathname, route.href) &&
                  "bg-[color:var(--glow-soft)] text-[color:var(--foreground)] shadow-[0_0_12px_rgba(0,229,255,0.2)]"
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle locale={locale} />
          <LanguageSwitcher locale={locale} />
        </div>

        <button
          type="button"
          className="language-switch lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-label={menuAria}
        >
          <span>{isOpen ? closeLabel : menuLabel}</span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-[color:var(--border)] bg-[color:var(--surface)]/95 lg:hidden">
          <div className="layout-container flex flex-col gap-3 py-5">
            {routes.map((route) => (
              <Link
                key={route.key}
                href={route.href}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm text-[color:var(--muted)]",
                  isActive(pathname, route.href) &&
                    "bg-[color:var(--glow-soft)] text-[color:var(--foreground)]"
                )}
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <ThemeToggle locale={locale} />
              <LanguageSwitcher locale={locale} />
            </div>
            <p className="text-sm text-[color:var(--muted)]">{dict.common.available}</p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
