"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, type CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import { HiMiniMoon, HiMiniSun } from "react-icons/hi2";
import ActionButtons from "@/components/ActionButtons";
import InteractivePhoto from "@/components/InteractivePhoto";

type Palette = {
  bg: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  card: string;
  buttonBg: string;
  buttonFg: string;
  buttonHover: string;
  focus: string;
  glow: string;
  cardShadow: string;
  buttonShadow: string;
  ambient: string;
  toggleBg: string;
};

type TopNavItem = {
  label: string;
  href: string;
};

type Props = {
  name?: string;
  subtitle: string;
  photoAlt: string;
  resumeHref: string;
  resumeLabel: string;
  projectsHref: string;
  projectsLabel: string;
  whatsappHref: string;
  contactLabel: string;
  contactAriaLabel: string;
  trackingContext?: string;
  localeLandingMode?: boolean;
  topNavItems: TopNavItem[];
  navigationAriaLabel: string;
  ptHref: string;
  enHref: string;
  activeLocale: "pt-BR" | "en";
};

const LIGHT_PALETTE: Palette = {
  bg: "#FAFAFA",
  textPrimary: "#0A0A0B",
  textSecondary: "#737373",
  border: "#E5E7EB",
  card: "rgba(255, 255, 255, 0.78)",
  buttonBg: "#000000",
  buttonFg: "#FFFFFF",
  buttonHover: "#262626",
  focus: "rgba(15, 23, 42, 0.28)",
  glow: "rgba(15, 23, 42, 0.12)",
  cardShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
  buttonShadow: "0 8px 20px rgba(15, 23, 42, 0.12)",
  ambient: "radial-gradient(900px circle at 50% 8%, rgba(15, 23, 42, 0.12), transparent 65%)",
  toggleBg: "rgba(255, 255, 255, 0.8)",
};

const DARK_PALETTE: Palette = {
  bg: "#0B0F14",
  textPrimary: "#F3F4F6",
  textSecondary: "#A3A3A3",
  border: "#1F2937",
  card: "rgba(16, 22, 30, 0.82)",
  buttonBg: "#FFFFFF",
  buttonFg: "#000000",
  buttonHover: "#E5E7EB",
  focus: "rgba(229, 231, 235, 0.35)",
  glow: "rgba(96, 165, 250, 0.12)",
  cardShadow: "0 10px 40px rgba(0, 0, 0, 0.4)",
  buttonShadow: "0 10px 24px rgba(0, 0, 0, 0.34)",
  ambient: "radial-gradient(1000px circle at 50% 10%, rgba(52, 94, 170, 0.22), transparent 66%)",
  toggleBg: "rgba(0, 0, 0, 0.42)",
};

export default function ProfileCard({
  name = "Matheus Siqueira",
  subtitle,
  photoAlt,
  resumeHref,
  resumeLabel,
  projectsHref,
  projectsLabel,
  whatsappHref,
  contactLabel,
  contactAriaLabel,
  trackingContext = "landing",
  localeLandingMode = false,
  topNavItems,
  navigationAriaLabel,
  ptHref,
  enHref,
  activeLocale,
}: Props) {
  const reduceMotion = useReducedMotion();
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const palette = isDark ? DARK_PALETTE : LIGHT_PALETTE;

  useEffect(() => {
    if (!localeLandingMode) {
      return;
    }

    document.documentElement.dataset.localeLanding = "true";

    return () => {
      delete document.documentElement.dataset.localeLanding;
    };
  }, [localeLandingMode]);

  const styleVars = useMemo(
    () =>
      ({
        "--landing-bg": palette.bg,
        "--landing-text-primary": palette.textPrimary,
        "--landing-text-secondary": palette.textSecondary,
        "--landing-border": palette.border,
        "--landing-card": palette.card,
        "--landing-button-bg": palette.buttonBg,
        "--landing-button-fg": palette.buttonFg,
        "--landing-button-hover": palette.buttonHover,
        "--landing-focus": palette.focus,
        "--landing-glow": palette.glow,
        "--landing-card-shadow": palette.cardShadow,
        "--landing-button-shadow": palette.buttonShadow,
        "--landing-ambient": palette.ambient,
        "--landing-toggle-bg": palette.toggleBg,
      }) as CSSProperties,
    [palette],
  );

  return (
    <main
      id="main-content"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20 font-[var(--font-landing)] transition-colors duration-500 sm:px-6"
      style={{
        ...styleVars,
        backgroundColor: "var(--landing-bg)",
      }}
    >
      <div aria-hidden="true" className="landing-bg-layer" />

      <div className="landing-top-shell" data-reveal>
        <div className="landing-top-nav">
          <nav className="landing-top-links" aria-label={navigationAriaLabel}>
            {topNavItems.map((item) => (
              <Link key={item.label} href={item.href} className="landing-top-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="landing-top-controls" aria-label="Language and theme controls">
            <span className="landing-top-divider" aria-hidden="true" />

            <Link
              href={ptHref}
              className={`landing-lang ${activeLocale === "pt-BR" ? "is-active" : ""}`}
              aria-current={activeLocale === "pt-BR" ? "page" : undefined}
            >
              <span className="landing-lang__flag" aria-hidden="true">
                <Image src="/flags/br.png" alt="Bandeira do Brasil" width={14} height={14} />
              </span>
              PT-BR
            </Link>

            <span className="landing-lang__separator" aria-hidden="true">
              |
            </span>

            <Link
              href={enHref}
              className={`landing-lang ${activeLocale === "en" ? "is-active" : ""}`}
              aria-current={activeLocale === "en" ? "page" : undefined}
            >
              <span className="landing-lang__flag" aria-hidden="true">
                <Image src="/flags/us.png" alt="United States flag" width={14} height={14} />
              </span>
              EN
            </Link>

            <button
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="landing-theme-toggle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--landing-focus)]"
              aria-label={
                activeLocale === "en"
                  ? isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                  : isDark
                    ? "Ativar tema claro"
                    : "Ativar tema escuro"
              }
            >
              {isDark ? (
                <HiMiniSun className="landing-theme-toggle__icon" aria-hidden="true" />
              ) : (
                <HiMiniMoon className="landing-theme-toggle__icon" aria-hidden="true" />
              )}
              <span className="landing-theme-toggle__label">{isDark ? "Light" : "Dark"}</span>
            </button>
          </div>
        </div>
      </div>

      <motion.section
        className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center"
        initial={reduceMotion ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <InteractivePhoto alt={photoAlt} />

        <motion.h1
          className="mt-8 text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--landing-text-primary)] md:text-5xl"
          initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          {name}
        </motion.h1>

        <motion.p
          className="mt-3 max-w-2xl text-sm font-medium tracking-[0.01em] text-[var(--landing-text-secondary)] md:text-base"
          initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16 }}
        >
          {subtitle}
        </motion.p>

        <ActionButtons
          resumeHref={resumeHref}
          resumeLabel={resumeLabel}
          projectsHref={projectsHref}
          projectsLabel={projectsLabel}
          whatsappHref={whatsappHref}
          contactLabel={contactLabel}
          contactAriaLabel={contactAriaLabel}
          trackingContext={trackingContext}
        />
      </motion.section>
    </main>
  );
}
