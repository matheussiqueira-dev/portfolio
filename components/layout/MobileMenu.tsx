"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import LanguageSwitch from "@/components/ui/LanguageSwitch";
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
        className="inline-flex items-center justify-center rounded border border-[color:var(--border)] px-3 py-2 text-sm text-[color:var(--foreground)] transition hover:border-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
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
          className={`fixed inset-0 z-[60] bg-black/55 backdrop-blur-sm transition-opacity duration-200 ease-out motion-reduce:transition-none ${
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
            className={`absolute right-0 top-0 flex h-[100dvh] w-[90vw] max-w-[22rem] flex-col border-l border-[color:var(--border)] bg-[color:var(--surface)] shadow-2xl transition-transform duration-200 ease-out motion-reduce:transition-none ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-[color:var(--border)] pb-4 pt-[calc(1rem+env(safe-area-inset-top))] pl-[calc(1.25rem+env(safe-area-inset-left))] pr-[calc(1.25rem+env(safe-area-inset-right))]">
              <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]">
                {menuLabel}
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] text-sm text-[color:var(--foreground)] transition hover:border-[color:var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
              >
                <span className="sr-only">{closeLabel}</span>
                <span aria-hidden="true" className="text-lg leading-none">
                  X
                </span>
              </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-5 pl-[calc(1.25rem+env(safe-area-inset-left))] pr-[calc(1.25rem+env(safe-area-inset-right))]">
              <nav className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto pr-1 text-[15px]">
                {navItems.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleClose}
                      aria-current={
                        isActive ? (item.type === "page" ? "page" : "location") : undefined
                      }
                      className={`flex min-h-[44px] items-center justify-between rounded-lg border px-4 py-3 font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 ${
                        isActive
                          ? "border-[color:var(--accent)]/40 bg-[color:var(--surface-muted)] text-[color:var(--foreground)]"
                          : "border-[color:var(--border)] bg-transparent text-[color:var(--muted-strong)] hover:border-[color:var(--accent)]/40 hover:bg-[color:var(--surface-muted)] hover:text-[color:var(--foreground)]"
                      }`}
                    >
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-6 border-t border-[color:var(--border)] pt-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
                  {languageLabel}
                </p>
                <div className="mt-3 text-sm text-[color:var(--muted)]">
                  <LanguageSwitch />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
