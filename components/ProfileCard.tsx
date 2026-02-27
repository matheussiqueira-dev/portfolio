"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, type CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
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
  bg: "#F7F7F8",
  textPrimary: "#0A0A0B",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  card: "rgba(255, 255, 255, 0.84)",
  buttonBg: "#000000",
  buttonFg: "#FFFFFF",
  buttonHover: "#262626",
  focus: "rgba(15, 23, 42, 0.32)",
  glow: "rgba(15, 23, 42, 0.15)",
  cardShadow: "0 24px 54px -32px rgba(15, 23, 42, 0.36)",
  buttonShadow: "0 8px 16px -12px rgba(15, 23, 42, 0.32)",
  ambient: "rgba(15, 23, 42, 0.11)",
  toggleBg: "rgba(255, 255, 255, 0.72)",
};

const DARK_PALETTE: Palette = {
  bg: "#0B0F14",
  textPrimary: "#F3F4F6",
  textSecondary: "#9CA3AF",
  border: "#1F2937",
  card: "rgba(16, 22, 30, 0.82)",
  buttonBg: "#FFFFFF",
  buttonFg: "#000000",
  buttonHover: "#E5E7EB",
  focus: "rgba(229, 231, 235, 0.4)",
  glow: "rgba(148, 163, 184, 0.2)",
  cardShadow: "0 26px 58px -30px rgba(0, 0, 0, 0.58)",
  buttonShadow: "0 10px 18px -12px rgba(0, 0, 0, 0.65)",
  ambient: "rgba(148, 163, 184, 0.16)",
  toggleBg: "rgba(15, 23, 42, 0.7)",
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
  const { resolvedTheme } = useTheme();
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
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-12 font-[var(--font-landing)]"
      style={{
        ...styleVars,
        backgroundColor: "var(--landing-bg)",
      }}
    >
      <div className="landing-top-shell" data-reveal>
        <div className="landing-top-nav">
          <nav className="landing-top-links" aria-label={navigationAriaLabel}>
            {topNavItems.map((item) => (
              <Link key={item.label} href={item.href} className="landing-top-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="landing-top-controls" aria-label="Language switch">
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
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 10%, var(--landing-ambient), transparent 56%)",
        }}
      />

      <motion.section
        className="relative z-10 flex w-full max-w-3xl flex-col items-center pt-24 text-center sm:pt-28"
        initial={reduceMotion ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <InteractivePhoto alt={photoAlt} />

        <motion.h1
          className="mt-8 text-4xl font-semibold tracking-[-0.03em] text-[var(--landing-text-primary)] sm:text-5xl"
          initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          {name}
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--landing-text-secondary)] sm:text-base"
          initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
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
