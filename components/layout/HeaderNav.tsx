"use client";

import {
  Suspense,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import { useLocale } from "next-intl";
import { sitePt } from "@/data/site.pt";
import { siteEn } from "@/data/site.en";
import LanguageSwitch from "@/components/ui/LanguageSwitch";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Link, usePathname } from "@/i18n/navigation";
import MobileMenu from "./MobileMenu";
import {
  buildNavItems,
  getActiveNavId,
  type NavItem,
} from "./navigation";

const isHomePath = (pathname: string) => pathname === "/" || pathname === "";

const subscribeToHistory = (callback: () => void) => {
  window.addEventListener("hashchange", callback);
  window.addEventListener("popstate", callback);
  return () => {
    window.removeEventListener("hashchange", callback);
    window.removeEventListener("popstate", callback);
  };
};

const getHashSnapshot = () =>
  typeof window === "undefined" ? "" : window.location.hash;

const useActiveSectionHash = (items: NavItem[], enabled: boolean) => {
  const [activeHash, setActiveHash] = useState<string | null>(null);

  const sectionIds = useMemo(
    () =>
      items
        .filter(
          (
            item
          ): item is NavItem & {
            type: "anchor";
            hash: NonNullable<NavItem["hash"]>;
          } => item.type === "anchor" && typeof item.hash === "string"
        )
        .map((item) => item.hash),
    [items]
  );

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const sections = sectionIds
      .map((hash) => document.getElementById(hash))
      .filter((element): element is HTMLElement => Boolean(element));

    if (sections.length === 0) {
      return;
    }

    let raf = 0;

    const updateFromViewport = () => {
      if (window.scrollY < 48) {
        setActiveHash("home");
        return;
      }

      const referenceLine = window.innerHeight * 0.35;
      let bestMatch = sections[0]?.id ?? null;
      let bestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - referenceLine);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestMatch = section.id;
        }
      });

      setActiveHash((current) => (current === bestMatch ? current : bestMatch));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target instanceof HTMLElement) {
          const nextHash = visible[0].target.id;
          setActiveHash((current) => (current === nextHash ? current : nextHash));
          return;
        }

        if (raf) {
          window.cancelAnimationFrame(raf);
        }
        raf = window.requestAnimationFrame(updateFromViewport);
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.7],
        rootMargin: "-24% 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    updateFromViewport();

    const onScroll = () => {
      if (raf) {
        window.cancelAnimationFrame(raf);
      }
      raf = window.requestAnimationFrame(updateFromViewport);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (raf) {
        window.cancelAnimationFrame(raf);
      }
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [enabled, sectionIds]);

  if (!enabled || sectionIds.length === 0) {
    return null;
  }

  return activeHash;
};

export default function HeaderNav() {
  const pathname = usePathname() ?? "/";
  const locale = useLocale();
  const hash = useSyncExternalStore(
    subscribeToHistory,
    getHashSnapshot,
    () => ""
  );
  const isEn = locale === "en";
  const content = isEn ? siteEn : sitePt;
  const navItems = useMemo(() => buildNavItems(content.nav), [content.nav]);
  const hashActiveId = getActiveNavId(navItems, pathname, hash);
  const sectionHash = useActiveSectionHash(
    navItems,
    isHomePath(pathname) && hash.length === 0
  );
  const sectionActiveId =
    sectionHash === null
      ? null
      : navItems.find((item) => item.type === "anchor" && item.hash === sectionHash)
          ?.id ?? null;
  const activeId = sectionActiveId ?? hashActiveId;
  const navLabel = isEn ? "Main navigation" : "Navegação principal";
  const menuLabel = isEn ? "Main menu" : "Menu principal";
  const toggleLabel = isEn ? "Toggle menu" : "Abrir menu";
  const closeLabel = isEn ? "Close menu" : "Fechar menu";

  return (
    <>
      <div className="site-nav-shell hidden md:flex">
        <nav className="site-nav" aria-label={navLabel}>
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <Link
                key={item.id}
                href={
                  item.type === "anchor"
                    ? { pathname: item.pathname, hash: item.hash }
                    : item.pathname
                }
                aria-current={
                  isActive
                    ? item.type === "page"
                      ? "page"
                      : "location"
                    : undefined
                }
                className={`site-nav__link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 ${
                  isActive ? "is-active" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <span className="site-nav__divider" aria-hidden="true" />

        <div className="site-nav-controls">
          <Suspense
            fallback={
              <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
                PT-BR | EN
              </span>
            }
          >
            <LanguageSwitch />
          </Suspense>
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
