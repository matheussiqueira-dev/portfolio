"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import LanguageSwitch from "@/components/ui/LanguageSwitch";

type NavItem = {
  href: string;
  label: string;
};

type Props = {
  navItems: NavItem[];
  languageLabel: string;
  menuLabel: string;
  toggleLabel: string;
};

export default function MobileMenu({
  navItems,
  languageLabel,
  menuLabel,
  toggleLabel,
}: Props) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center justify-center rounded border border-white/15 px-3 py-2 text-sm text-white transition hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      >
        <span className="sr-only">{toggleLabel}</span>
        <span className="relative block h-4 w-5">
          <span
            className={`absolute left-0 top-0 h-0.5 w-full bg-white transition ${
              open ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-1.5 h-0.5 w-full bg-white transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-3 h-0.5 w-full bg-white transition ${
              open ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            id={menuId}
            role="dialog"
            aria-modal="true"
            className="absolute right-0 top-0 h-full w-72 bg-[#0b0d10] px-6 py-8 shadow-xl motion-safe:animate-fade-in"
            onClick={(event) => event.stopPropagation()}
          >
            <nav
              className="flex flex-col gap-4 text-base text-slate-100"
              aria-label={menuLabel}
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                {languageLabel}
              </p>
              <div className="mt-4 text-sm text-slate-200">
                <LanguageSwitch
                  direction="column"
                  onNavigate={() => setOpen(false)}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}