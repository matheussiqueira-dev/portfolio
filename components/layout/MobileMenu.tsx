"use client";

import { Suspense, useCallback, useEffect, useId, useRef, useState } from "react";
import LanguageSwitch from "@/components/ui/LanguageSwitch";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Link } from "@/core/i18n/navigation";
import type { NavItem } from "./navigation";

type Props = {
  navItems: NavItem[];
  activeId: string | null;
  languageLabel: string;
  menuLabel: string;
  toggleLabel: string;
  closeLabel: string;
};

const TRANSITION_MS = 220;

const getFocusableElements = (root: HTMLElement | null) => {
  if (!root) {
    return [];
  }
  return Array.from(
    root.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
  );
};

export default function MobileMenu({
  navItems,
  activeId,
  languageLabel,
  menuLabel,
  toggleLabel,
  closeLabel,
}: Props) {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);
  const menuId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const wasOpenRef = useRef(false);

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const openMenu = useCallback(() => {
    clearCloseTimeout();
    setIsVisible(true);
    setOpen(true);
  }, [clearCloseTimeout]);

  const closeMenu = useCallback(() => {
    setOpen(false);
    clearCloseTimeout();
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsVisible(false);
      closeTimeoutRef.current = null;
    }, TRANSITION_MS);
  }, [clearCloseTimeout]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [open]);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) {
      return;
    }

    if (open) {
      panel.removeAttribute("inert");
    } else {
      panel.setAttribute("inert", "");
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      if (wasOpenRef.current) {
        triggerRef.current?.focus();
      }
      return;
    }

    wasOpenRef.current = true;

    const focusTarget = () => {
      const firstNavItem = panelRef.current?.querySelector<HTMLAnchorElement>("nav a");
      if (firstNavItem) {
        firstNavItem.focus();
        return;
      }
      const firstFocusable = getFocusableElements(panelRef.current)[0];
      firstFocusable?.focus();
    };

    const raf = window.requestAnimationFrame(focusTarget);
    return () => window.cancelAnimationFrame(raf);
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const panel = panelRef.current;
      if (!panel) {
        return;
      }

      const focusables = getFocusableElements(panel);
      if (focusables.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!first || !last) {
        return;
      }
      const activeElement = document.activeElement as HTMLElement | null;

      if (!activeElement || !panel.contains(activeElement)) {
        first.focus();
        event.preventDefault();
        return;
      }

      if (event.shiftKey) {
        if (activeElement === first) {
          last.focus();
          event.preventDefault();
        }
      } else if (activeElement === last) {
        first.focus();
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeMenu, open]);

  const handleToggle = () => {
    if (open) {
      closeMenu();
      return;
    }
    openMenu();
  };
  const handleClose = () => closeMenu();

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={handleToggle}
        className="mobile-menu-trigger focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
      >
        <span className="sr-only">{toggleLabel}</span>
        <span className="relative block h-4 w-5">
          <span
            className={`absolute left-0 top-0 h-0.5 w-full bg-[color:var(--foreground)] transition motion-reduce:transition-none ${
              open ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-1.5 h-0.5 w-full bg-[color:var(--foreground)] transition motion-reduce:transition-none ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-3 h-0.5 w-full bg-[color:var(--foreground)] transition motion-reduce:transition-none ${
              open ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {isVisible ? (
        <div
          className={`mobile-menu-overlay ${
            open ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={handleClose}
          aria-hidden={!open}
        >
          <div
            id={menuId}
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={menuLabel}
            aria-hidden={!open}
            className={`mobile-menu-panel ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mobile-menu-panel__head">
              <p className="mobile-menu-panel__title">
                {menuLabel}
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mobile-menu-close focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
              >
                <span className="sr-only">{closeLabel}</span>
                <span aria-hidden="true" className="text-lg leading-none">
                  X
                </span>
              </button>
            </div>

            <div className="mobile-menu-panel__body">
              <nav className="mobile-menu-panel__nav">
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
                      onClick={handleClose}
                      aria-current={
                        isActive ? (item.type === "page" ? "page" : "location") : undefined
                      }
                      className={`mobile-menu-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 ${
                        isActive ? "is-active" : ""
                      }`}
                    >
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="mobile-menu-panel__footer">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  {languageLabel}
                </p>
                <div className="mt-3 text-sm text-[color:var(--muted)]">
                  <Suspense
                    fallback={
                      <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted)]">
                        PT-BR | EN
                      </span>
                    }
                  >
                    <LanguageSwitch />
                  </Suspense>
                </div>
                <div className="mt-4">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
