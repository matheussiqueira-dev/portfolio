"use client";

import { useSyncExternalStore, type ComponentProps, type ComponentType } from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  FolderKanban,
  Home,
  Mail,
  ScrollText,
  UserCircle2,
} from "lucide-react";
import { useLocale } from "next-intl";
import { siteEn } from "@/data/site.en";
import { sitePt } from "@/data/site.pt";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

const spring = { type: "spring", stiffness: 260, damping: 20 } as const;

type DockItem = {
  id: string;
  label: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  href: ComponentProps<typeof Link>["href"];
  isActive: (pathname: string, hash: string) => boolean;
};

const normalizeHash = (hash: string) =>
  hash.startsWith("#") ? hash : hash ? `#${hash}` : "";

export default function FloatingDockNav() {
  const locale = useLocale();
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

  const isEn = locale === "en";
  const nav = isEn ? siteEn.nav : sitePt.nav;
  const experienceLabel = isEn ? "Experience" : "Experiência";

  const items: DockItem[] = [
    {
      id: "home",
      label: nav.home,
      icon: Home,
      href: { pathname: "/", hash: "home" },
      isActive: (currentPath, currentHash) =>
        currentPath === "/" && (!currentHash || currentHash === "#home"),
    },
    {
      id: "about",
      label: nav.about,
      icon: UserCircle2,
      href: { pathname: "/", hash: "about" },
      isActive: (currentPath, currentHash) =>
        currentPath === "/" && currentHash === "#about",
    },
    {
      id: "projects",
      label: nav.projects,
      icon: FolderKanban,
      href: { pathname: "/", hash: "projects" },
      isActive: (currentPath, currentHash) =>
        currentPath === "/" && currentHash === "#projects",
    },
    {
      id: "experience",
      label: experienceLabel,
      icon: BriefcaseBusiness,
      href: { pathname: "/", hash: "experience" },
      isActive: (currentPath, currentHash) =>
        currentPath === "/" && currentHash === "#experience",
    },
    {
      id: "contact",
      label: nav.contact,
      icon: Mail,
      href: { pathname: "/", hash: "contact" },
      isActive: (currentPath, currentHash) =>
        currentPath === "/" && currentHash === "#contact",
    },
    {
      id: "resume",
      label: nav.resume,
      icon: ScrollText,
      href: "/resume",
      isActive: (currentPath) => currentPath.startsWith("/resume"),
    },
  ];

  const currentHash = normalizeHash(hash);

  return (
    <header className="fixed left-1/2 top-4 z-50 w-fit -translate-x-1/2 px-4 md:top-6">
      <nav
        className="rounded-full border border-white/10 bg-black/20 p-2 backdrop-blur-md shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
        aria-label={isEn ? "Floating navigation" : "Navegação flutuante"}
      >
        <ul className="flex items-center gap-1">
          {items.map((item) => {
            const Icon = item.icon;
            const active = item.isActive(pathname, currentHash);

            return (
              <li key={item.id} className="relative">
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    "group relative inline-flex h-11 w-11 items-center justify-center rounded-full text-zinc-400 transition-colors",
                    "hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35",
                    active && "text-white"
                  )}
                >
                  {active ? (
                    <motion.span
                      layoutId="dock-active"
                      transition={spring}
                      className="absolute inset-0 rounded-full border border-white/20 bg-white/10"
                    />
                  ) : null}

                  <motion.span
                    whileHover={{ scale: 1.2, y: -2 }}
                    transition={spring}
                    className="relative z-10"
                  >
                    <Icon size={18} />
                  </motion.span>

                  <span className="pointer-events-none absolute -bottom-8 left-1/2 hidden -translate-x-1/2 rounded-md border border-white/10 bg-black/70 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-zinc-300 opacity-0 transition-opacity group-hover:opacity-100 sm:block">
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
