"use client";

import { motion } from "framer-motion";
import type { CtaContent } from "@/data/portfolio";

const EASE = [0.16, 1, 0.3, 1] as const;

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

type Props = {
  content: CtaContent;
};

export default function CallToAction({ content }: Props) {
  return (
    <section id="contact" className="scroll-mt-28 px-6 py-24">
      {/* Call to action section */}
      <motion.div
        className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]/80 px-6 py-16 text-center shadow-2xl"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={item}
      >
        <h3 className="text-3xl font-semibold text-[color:var(--foreground)]">
          {content.title}
        </h3>
        <p className="max-w-2xl text-base text-[color:var(--muted)]">
          {content.description}
        </p>
        <a href="mailto:matheussiqueirahub@gmail.com" className="btn-primary">
          {content.button}
        </a>
      </motion.div>
    </section>
  );
}
