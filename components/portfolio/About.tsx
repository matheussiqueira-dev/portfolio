"use client";

import { motion } from "framer-motion";
import type { AboutContent } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1] as const;

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

type Props = {
  content: AboutContent;
};

export default function About({ content }: Props) {
  return (
    <section id="about" className="scroll-mt-28 px-6 py-24">
      {/* About section */}
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.h3
            className="text-3xl font-semibold text-[color:var(--foreground)]"
            variants={item}
          >
            {content.title}
          </motion.h3>
          <motion.p
            className="text-base leading-relaxed text-[color:var(--muted)]"
            variants={item}
          >
            {content.description}
          </motion.p>
          <motion.p
            className="text-base leading-relaxed text-[color:var(--muted-strong)]"
            variants={item}
          >
            {content.highlight}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={item}
          className="flex items-center justify-center"
        >
          <div className="flex h-64 w-full max-w-sm items-center justify-center rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] text-sm text-[color:var(--muted)]">
            {content.imageLabel}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
