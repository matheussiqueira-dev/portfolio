"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { premiumSpring } from "@/lib/motion";

type NavItem = {
  id: "home" | "projects" | "about";
  label: string;
  hash:
    | "inicio"
    | "projetos"
    | "sobre"
    | "home"
    | "projects"
    | "about";
};

const NAV_ITEMS: Record<"pt-BR" | "en", NavItem[]> = {
  "pt-BR": [
    { id: "home", label: "Início", hash: "inicio" },
    { id: "projects", label: "Projetos", hash: "projetos" },
    { id: "about", label: "Sobre", hash: "sobre" },
  ],
  en: [
    { id: "home", label: "Home", hash: "home" },
    { id: "projects", label: "Projects", hash: "projects" },
    { id: "about", label: "About", hash: "about" },
  ],
};

function useHash() {
  return useSyncExternalStore(
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
}

export default function Header() {
  const locale = useLocale() === "en" ? "en" : "pt-BR";
  const isEn = locale === "en";
  const pathname = usePathname() ?? "/";
  const hash = useHash();
  const navItems = NAV_ITEMS[locale];
  const activeHash = pathname === "/" ? hash : "";

  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={premiumSpring}
        className="max-w-fit rounded-full border border-white/10 bg-black/20 px-2 py-2 backdrop-blur-xl shadow-[0_16px_36px_rgba(0,0,0,0.45)]"
        aria-label={isEn ? "Main navigation" : "Navegação principal"}
      >
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              pathname === "/" &&
              (activeHash === `#${item.hash}` || (!activeHash && item.id === "home"));

            return (
              <Link
                key={item.id}
                href={{ pathname: "/", hash: item.hash }}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-colors",
                  "hover:text-white",
                  isActive && "text-white"
                )}
              >
                <motion.span whileHover={{ y: -1 }} transition={premiumSpring} className="block">
                  {item.label}
                </motion.span>
                {isActive ? (
                  <motion.span
                    layoutId="floating-nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-white"
                    transition={premiumSpring}
                  />
                ) : null}
              </Link>
            );
          })}

          <span className="mx-1 h-4 w-px bg-white/15" aria-hidden="true" />

          <Link
            href="/"
            locale={isEn ? "pt-BR" : "en"}
            className="relative rounded-full px-3 py-2 text-sm font-semibold text-zinc-300 transition-colors hover:text-white"
            aria-label={isEn ? "Switch to Portuguese" : "Trocar para inglês"}
          >
            <motion.span whileHover={{ y: -1 }} transition={premiumSpring} className="block">
              {isEn ? "PT-BR" : "EN"}
            </motion.span>
          </Link>
        </div>
      </motion.nav>
    </header>
  );
}
