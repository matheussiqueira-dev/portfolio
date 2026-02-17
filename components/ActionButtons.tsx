"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { trackCTA } from "@/lib/analytics";
import { ANALYTICS_EVENTS } from "@/lib/constants";

const BUTTON_CLASS =
  "inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-[var(--landing-border)] bg-[var(--landing-button-bg)] px-5 text-sm font-medium tracking-[-0.01em] text-[var(--landing-button-fg)] shadow-[var(--landing-button-shadow)] transition duration-300 ease-out hover:scale-[1.03] hover:bg-[var(--landing-button-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--landing-focus)]";

type Props = {
  resumeHref: string;
  resumeLabel: string;
  projectsHref: string;
  projectsLabel: string;
  whatsappHref: string;
  contactLabel: string;
  contactAriaLabel: string;
  trackingContext: string;
};

export default function ActionButtons({
  resumeHref,
  resumeLabel,
  projectsHref,
  projectsLabel,
  whatsappHref,
  contactLabel,
  contactAriaLabel,
  trackingContext,
}: Props) {
  const reduceMotion = useReducedMotion();

  const motionProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 12 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <div className="mt-9 grid w-full max-w-xl gap-3 sm:grid-cols-3">
      <motion.div
        {...motionProps}
        transition={reduceMotion ? undefined : { ...motionProps.transition, delay: 0.22 }}
      >
        <Link
          href={resumeHref}
          className={BUTTON_CLASS}
          onClick={() => trackCTA(ANALYTICS_EVENTS.VIEW_RESUME, trackingContext)}
        >
          {resumeLabel}
        </Link>
      </motion.div>

      <motion.div
        {...motionProps}
        transition={reduceMotion ? undefined : { ...motionProps.transition, delay: 0.3 }}
      >
        <Link
          href={projectsHref}
          className={BUTTON_CLASS}
          onClick={() => trackCTA(ANALYTICS_EVENTS.VIEW_PROJECTS, trackingContext)}
        >
          {projectsLabel}
        </Link>
      </motion.div>

      <motion.div
        {...motionProps}
        transition={reduceMotion ? undefined : { ...motionProps.transition, delay: 0.38 }}
      >
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className={BUTTON_CLASS}
          aria-label={contactAriaLabel}
          onClick={() => trackCTA(ANALYTICS_EVENTS.CONTACT_WHATSAPP, trackingContext)}
        >
          <FaWhatsapp className="text-base" aria-hidden="true" />
          {contactLabel}
        </a>
      </motion.div>
    </div>
  );
}
