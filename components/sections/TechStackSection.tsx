"use client";

import { motion } from "framer-motion";
import { Cloud, Monitor, Server } from "lucide-react";
import { competenciesByLocale } from "@/data/home-sections";
import { premiumSpring } from "@/lib/motion";

type Props = {
  localePrefix?: "/en";
};

const iconByCategory = {
  frontend: Monitor,
  backend: Server,
  devops: Cloud,
} as const;

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...premiumSpring,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: premiumSpring,
  },
};

const chipContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      ...premiumSpring,
      staggerChildren: 0.08,
    },
  },
};

const chipVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: premiumSpring },
};

export default function TechStackSection({ localePrefix }: Props) {
  const locale = localePrefix === "/en" ? "en" : "pt-BR";
  const content = competenciesByLocale[locale];
  const marqueeItems = [...content.marqueeItems, ...content.marqueeItems];

  return (
    <section id="stack" className="px-4 py-16 sm:px-6">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.p variants={itemVariants} className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          {locale === "en" ? "Core Competencies" : "Competências Nucleares"}
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="mt-4 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-3xl font-extrabold tracking-tighter text-transparent sm:text-4xl"
        >
          {content.title}
        </motion.h2>
        <motion.p variants={itemVariants} className="mt-4 max-w-3xl text-zinc-300">
          {content.subtitle}
        </motion.p>

        <motion.div variants={containerVariants} className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {content.categories.map((category) => {
            const Icon = iconByCategory[category.key];

            return (
              <motion.article
                key={category.key}
                variants={itemVariants}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-5 backdrop-blur-md sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-700 bg-black/20 text-zinc-100">
                    <Icon size={16} />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <p className="mt-3 text-sm text-zinc-400">{category.description}</p>

                <motion.ul variants={chipContainerVariants} className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.li key={skill} variants={chipVariants}>
                      <span className="inline-flex rounded-full border border-zinc-700 bg-black/30 px-2.5 py-1 text-xs font-medium text-zinc-100">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8">
          <p className="mb-3 text-xs uppercase tracking-[0.14em] text-zinc-500">{content.marqueeLabel}</p>
          <div className="tech-marquee-mask rounded-2xl border border-zinc-800 bg-zinc-900/35 py-3">
            <div className="tech-marquee-track">
              {marqueeItems.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="mx-1 inline-flex rounded-full border border-zinc-700 bg-black/25 px-3 py-1 text-xs text-zinc-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
