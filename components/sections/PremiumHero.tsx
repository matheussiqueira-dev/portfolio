"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Database,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import Card from "@/components/ui/Card";
import type { SiteContent } from "@/data/site.types";
import { cn } from "@/lib/cn";

type Props = {
  content: SiteContent["hero"];
  localePrefix?: "/en";
};

const spring = { type: "spring", stiffness: 260, damping: 20 } as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: spring },
};

const stackIcons = {
  stack: Layers3,
  data: Database,
  ai: Sparkles,
  software: Code2,
} as const;

export default function PremiumHero({ content, localePrefix }: Props) {
  const isEn = localePrefix === "/en";

  const valueTitle = isEn
    ? "Building scalable systems and memorable digital experiences."
    : "Construindo sistemas escaláveis e experiências digitais memoráveis.";

  const resumeLabel = isEn ? "Open resume" : "Abrir currículo";
  const projectsLabel = isEn ? "See selected projects" : "Ver projetos em destaque";
  const contactLabel = isEn ? "Start a conversation" : "Iniciar conversa";

  return (
    <section id="home" className="relative px-4 pb-20 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="space-y-7"
        >
          <motion.p
            variants={item}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-zinc-400"
          >
            {content.eyebrow}
          </motion.p>

          <motion.div variants={item} className="space-y-5">
            <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-6xl lg:text-7xl">
              <span className="block bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                {content.title}
              </span>
              <span className="mt-3 block text-xl font-semibold text-zinc-300 sm:text-2xl">
                {content.subtitle}
              </span>
            </h1>

            <p className="max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              {valueTitle} {content.description}
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              href={{ pathname: "/", hash: "projects" }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/35 hover:bg-white/15"
              aria-label={projectsLabel}
            >
              {content.ctas.primary}
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-5 py-2.5 text-sm font-semibold text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
              aria-label={resumeLabel}
            >
              {content.ctas.secondary}
            </Link>

            <Link
              href={{ pathname: "/", hash: "contact" }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-5 py-2.5 text-sm font-semibold text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
              aria-label={contactLabel}
            >
              {content.ctas.tertiary}
            </Link>
          </motion.div>

          <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid gap-2 sm:grid-cols-2"
          >
            {content.stackHighlights.map((stack) => {
              const Icon = stackIcons[stack.icon];
              return (
                <motion.li key={stack.label} variants={item}>
                  <Card className="flex items-center gap-3 px-4 py-3 transition-colors hover:border-white/30">
                    <Icon size={16} className="text-zinc-300" />
                    <span className="text-sm text-zinc-300">{stack.label}</span>
                  </Card>
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.2 }}
          className="space-y-4"
        >
          {content.facts.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.25 + index * 0.1 }}
            >
              <Card className="p-5">
                <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
                  {fact.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{fact.value}</p>
              </Card>
            </motion.div>
          ))}

          <Card className="p-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">
              {isEn ? "Profiles" : "Perfis"}
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://github.com/matheussiqueira-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 transition-all",
                  "hover:scale-105 hover:border-white/30 hover:text-white"
                )}
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/matheussiqueira-dev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 transition-all",
                  "hover:scale-105 hover:border-white/30 hover:text-white"
                )}
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:matheussiqueirahub@gmail.com"
                aria-label="Email"
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-300 transition-all",
                  "hover:scale-105 hover:border-white/30 hover:text-white"
                )}
              >
                <Mail size={18} />
              </a>
            </div>
          </Card>
        </motion.aside>
      </div>
    </section>
  );
}
