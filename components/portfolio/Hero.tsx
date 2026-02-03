"use client";

import { motion } from "framer-motion";
import type { HeroContent } from "@/data/portfolio";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const EASE = [0.16, 1, 0.3, 1] as const;

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

type Props = {
  content: HeroContent;
};

export default function Hero({ content }: Props) {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pb-20 pt-28"
    >
      {/* Background gradient */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[color:var(--bg-radial-1)] via-transparent to-[color:var(--bg-radial-2)] opacity-80"
        aria-hidden="true"
      />

      <motion.div
        className="relative mx-auto flex w-full max-w-6xl flex-col gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow */}
        <motion.p
          className="text-xs uppercase tracking-[0.35em] text-[color:var(--muted)]"
          variants={item}
        >
          {content.eyebrow}
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="text-4xl font-semibold leading-tight text-[color:var(--foreground-strong)] md:text-6xl"
          variants={item}
        >
          {content.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="text-xl font-medium text-[color:var(--accent-strong)] md:text-2xl"
          variants={item}
        >
          {content.subtitle}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="max-w-2xl text-base leading-relaxed text-[color:var(--muted)] md:text-lg"
          variants={item}
        >
          {content.description}
        </motion.p>

        {/* CTAs */}
        <motion.div className="flex flex-wrap gap-4" variants={item}>
          <a
            href="#projects"
            className="btn-primary"
          >
            {content.ctaPrimary}
          </a>
          <a
            href="#contact"
            className="btn-outline"
          >
            {content.ctaSecondary}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
