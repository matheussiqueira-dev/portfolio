"use client";

import { motion } from "framer-motion";
import type { SkillsContent } from "@/data/portfolio";
import { SkillIcon } from "./SkillIcon";

const EASE = [0.16, 1, 0.3, 1] as const;

const item = {
  hidden: { opacity: 0, y: 16 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE, delay: index * 0.05 },
  }),
};

type Props = {
  content: SkillsContent;
};

export default function Skills({ content }: Props) {
  return (
    <section id="skills" className="scroll-mt-28 px-6 py-24">
      {/* Skills section */}
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="space-y-3">
          <h3 className="text-3xl font-semibold text-[color:var(--foreground)]">
            {content.title}
          </h3>
          <p className="max-w-2xl text-base text-[color:var(--muted)]">
            {content.description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="card card-compact flex items-center gap-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={item}
              custom={index}
              whileHover={{ y: -4, scale: 1.02, boxShadow: "var(--shadow)" }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]">
                <SkillIcon name={skill.icon} />
              </div>
              <span className="text-sm font-semibold text-[color:var(--foreground)]">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
