"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sitePt } from "@/data/site.pt";
import { siteEn } from "@/data/site.en";
import LanguageSwitch from "@/components/ui/LanguageSwitch";
import MobileMenu from "./MobileMenu";

const buildNavItems = (prefix: string, labels: typeof sitePt.nav) => {
  const anchorBase = prefix ? `${prefix}#` : "/#";
  const pageBase = prefix ? prefix : "";

  return [
    { href: `${anchorBase}home`, label: labels.home },
    { href: `${anchorBase}about`, label: labels.about },
    { href: `${anchorBase}projects`, label: labels.projects },
    { href: `${anchorBase}contact`, label: labels.contact },
    { href: `${pageBase}/certificates`, label: labels.certificates },
    { href: `${pageBase}/academico`, label: labels.academic },
    { href: `${pageBase}/resume`, label: labels.resume },
  ];
};

export default function HeaderNav() {
  const pathname = usePathname() ?? "/";
  const isEn = pathname.startsWith("/en");
  const prefix = isEn ? "/en" : "";
  const content = isEn ? siteEn : sitePt;
  const navItems = buildNavItems(prefix, content.nav);
  const navLabel = isEn ? "Main navigation" : "Navegacao principal";
  const menuLabel = isEn ? "Main menu" : "Menu principal";
  const toggleLabel = isEn ? "Toggle menu" : "Abrir menu";

  return (
    <>
      <nav
        className="hidden md:flex items-center gap-6 text-sm text-slate-300"
        aria-label={navLabel}
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
        <LanguageSwitch />
      </div>

      <MobileMenu
        navItems={navItems}
        languageLabel={content.language.label}
        menuLabel={menuLabel}
        toggleLabel={toggleLabel}
      />
    </>
  );
}
