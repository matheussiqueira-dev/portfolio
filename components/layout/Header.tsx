"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocaleFromPath, localizeHref } from "@/lib/i18n";
import { siteCopy } from "@/lib/siteCopy";
import MobileMenu from "./MobileMenu";

type NavItem = {
  href: string;
  label: string;
};

type LanguageItem = {
  href: string;
  label: string;
  flagSrc: string;
  flagAlt: string;
};

export default function Header() {
  const pathname = usePathname() ?? "/";
  const locale = getLocaleFromPath(pathname);
  const copy = siteCopy[locale].nav;

  const navItems: NavItem[] = [
    { href: "/#about", label: copy.about },
    { href: "/projects", label: copy.projects },
    { href: "/#contact", label: copy.contact },
    { href: "/resume", label: copy.resume },
  ].map((item) => ({
    ...item,
    href: localizeHref(item.href, locale),
  }));

  const languageItems: LanguageItem[] = [
    {
      href: localizeHref(pathname, "pt"),
      label: "PT-BR",
      flagSrc: "/flags/br.png",
      flagAlt: "Português",
    },
    {
      href: localizeHref(pathname, "en"),
      label: "EN-US",
      flagSrc: "/flags/us.png",
      flagAlt: "English",
    },
  ];

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0b0d10]/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href={localizeHref("/", locale)}
          className="font-semibold text-white tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
        >
          Matheus Siqueira
        </Link>

        <nav
          className="hidden md:flex items-center gap-6 text-sm text-slate-300"
          aria-label={locale === "pt" ? "Navegação principal" : "Main navigation"}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4 text-sm text-slate-200">
          {languageItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.flagSrc}
                alt={item.flagAlt}
                width={18}
                height={18}
                className="rounded-sm"
              />
              {item.label}
            </Link>
          ))}
        </div>

        <MobileMenu
          navItems={navItems}
          languageItems={languageItems}
          navLabel={locale === "pt" ? "Menu principal" : "Main menu"}
          languageLabel={copy.languages}
          openMenuLabel={copy.openMenu}
        />
      </div>
    </header>
  );
}
