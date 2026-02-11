"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  BrainCircuit,
  Database,
  Network,
  type LucideIcon,
} from "lucide-react";
import Card from "@/components/ui/Card";
import type { SiteContent } from "@/data/site.types";

type Props = {
  content: SiteContent["about"];
};

const spring = { type: "spring", stiffness: 260, damping: 20 } as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: spring },
};

const summaryIcons: LucideIcon[] = [BrainCircuit, Database, Network, BarChart3];

export default function AboutBento({ content }: Props) {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={spring}
          className="mb-10 space-y-4"
        >
          <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">
            {content.eyebrow}
          </p>
          <h2 className="max-w-5xl text-3xl font-extrabold tracking-tighter text-transparent sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text">
              {content.title}
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          <motion.div variants={item} className="md:col-span-2 md:row-span-2">
            <Card className="h-full p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                {content.summary.title}
              </p>
              <p className="mt-4 text-base leading-relaxed text-zinc-300">
                {content.summary.body}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {content.snapshot.items.map((snapshot, index) => {
                  const Icon =
                    summaryIcons[index % summaryIcons.length] ?? BrainCircuit;
                  return (
                    <div
                      key={`${snapshot.value}-${snapshot.label}`}
                      className="rounded-2xl border border-white/10 bg-black/30 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <Icon size={16} className="mt-1 text-zinc-300" />
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {snapshot.value}
                          </p>
                          <p className="mt-1 text-sm text-zinc-400">
                            {snapshot.label}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                {content.who.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {content.who.body}
              </p>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                {content.complexData.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {content.complexData.body}
              </p>
            </Card>
          </motion.div>

          <motion.div variants={item} className="md:col-span-2">
            <Card className="h-full p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                {content.deliver.title}
              </p>
              <ul className="mt-3 grid gap-2 text-sm text-zinc-300 sm:grid-cols-2">
                {content.deliver.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                {content.differential.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {content.differential.description}
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
