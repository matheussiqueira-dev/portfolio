"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { experienceByLocale } from "@/data/home-sections";
import { premiumSpring } from "@/lib/motion";

type Props = {
  localePrefix?: "/en";
};

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

export default function ExperienceSection({ localePrefix }: Props) {
  const locale = localePrefix === "/en" ? "en" : "pt-BR";
  const content = experienceByLocale[locale];

  return (
    <section id="experience" className="px-4 py-14 sm:px-6 sm:py-20">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.p variants={itemVariants} className="text-xs tracking-[0.2em] text-gray-400">
          {locale === "en" ? "Experience" : "Experiência"}
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

        <motion.div variants={containerVariants} className="mt-8 space-y-4">
          {content.items.map((item) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              variants={itemVariants}
              whileHover={{ y: -2 }}
              transition={premiumSpring}
              className={cn(
                "group rounded-3xl border border-zinc-800 bg-zinc-900/40 p-5 backdrop-blur-md transition-colors",
                "hover:bg-zinc-900/70 sm:p-6"
              )}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500 transition-colors group-hover:text-zinc-300">
                    {item.company}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white transition-colors group-hover:text-white">
                    {item.role}
                  </h3>
                </div>
                <p className="text-sm text-zinc-500 transition-colors group-hover:text-zinc-300">
                  {item.period}
                </p>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 transition-colors group-hover:text-white">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-600 transition-colors group-hover:bg-white" />
                    <span className="transition-colors group-hover:text-white">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
