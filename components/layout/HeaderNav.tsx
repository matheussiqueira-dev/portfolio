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
  const academicHref = prefix ? "/en/academic" : "/academico";
  const hireHref = prefix ? "/en/hire" : "/contrate";
  const demosHref = prefix ? "/en/demos" : "/demos";

  return [
    { href: `${anchorBase}home`, label: labels.home },
    { href: `${anchorBase}about`, label: labels.about },
    { href: `${anchorBase}projects`, label: labels.projects },
    { href: demosHref, label: labels.demos },
    { href: `${pageBase}/resume`, label: labels.resume },
    { href: academicHref, label: labels.academic },
    { href: `${pageBase}/certificates`, label: labels.certificates },
    { href: hireHref, label: labels.hire },
    { href: `${anchorBase}contact`, label: labels.contact },
  ];
};

export default function HeaderNav() {
  const pathname = usePathname() ?? "/";
  const isEn = pathname.startsWith("/en");
  const prefix = isEn ? "/en" : "";
  const content = isEn ? siteEn : sitePt;
  const navItems = buildNavItems(prefix, content.nav);
  const navLabel = isEn ? "Main navigation" : "Navegação principal";
  const menuLabel = isEn ? "Main menu" : "Menu principal";
  const toggleLabel = isEn ? "Toggle menu" : "Abrir menu";

  return (
    <>
      <nav
        className="hidden md:flex items-center gap-6 text-sm text-[color:var(--muted)]"
        aria-label={navLabel}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition hover:text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 rounded"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-4 text-sm text-[color:var(--muted)]">
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
