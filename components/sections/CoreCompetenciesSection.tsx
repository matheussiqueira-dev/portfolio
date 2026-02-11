"use client";

import { motion } from "framer-motion";
import { Cloud, Monitor, Server } from "lucide-react";
import { competenciesByLocale } from "@/data/home-sections";

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
      duration: 0.55,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function CoreCompetenciesSection({ localePrefix }: Props) {
  const locale = localePrefix === "/en" ? "en" : "pt-BR";
  const content = competenciesByLocale[locale];
  const marquee = [...content.marqueeItems, ...content.marqueeItems];

  return (
    <section id="stack" className="px-4 py-14 sm:px-6 sm:py-20">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.p variants={itemVariants} className="text-xs tracking-[0.2em] text-gray-400">
          {locale === "en" ? "Core Stack" : "Stack Principal"}
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="mt-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-3xl font-extrabold tracking-tighter text-transparent sm:text-4xl"
        >
          {content.title}
        </motion.h2>
        <motion.p variants={itemVariants} className="mt-4 max-w-3xl text-gray-300">
          {content.subtitle}
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {content.categories.map((category) => {
            const Icon = iconByCategory[category.key];
            return (
              <motion.article
                key={category.key}
                variants={itemVariants}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-[12px] sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-black/20 text-white">
                    <Icon size={16} />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <p className="mt-3 text-sm text-gray-300">{category.description}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li key={skill}>
                      <span className="inline-flex rounded-full border border-white/15 bg-black/20 px-2.5 py-1 text-xs font-medium text-gray-100">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8">
          <p className="mb-3 text-xs uppercase tracking-[0.14em] text-gray-400">{content.marqueeLabel}</p>
          <div className="tech-marquee-mask rounded-2xl border border-white/10 bg-white/5 py-3">
            <div className="tech-marquee-track">
              {marquee.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="mx-1 inline-flex rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs text-gray-200"
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
