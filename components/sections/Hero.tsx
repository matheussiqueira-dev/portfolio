"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Code2, Sparkles, Wrench } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Card from "@/components/ui/Card";

type Props = {
  localePrefix?: "/en";
};

type HeroCopy = {
  eyebrow: string;
  title: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  highlights: string[];
  statusTitle: string;
  statusBody: string;
  craftTitle: string;
  craftBody: string;
};

const copyByLocale: Record<"pt-BR" | "en", HeroCopy> = {
  "pt-BR": {
    eyebrow: "Frontend Specialist • UX/UI • Performance",
    title: "Construindo sistemas escaláveis e experiências digitais memoráveis.",
    description:
      "Transformo desafios de produto em interfaces rápidas, acessíveis e orientadas a resultado, com foco em impacto de negócio e experiência real de usuário.",
    ctaPrimary: "Ver projetos",
    ctaSecondary: "Falar sobre projeto",
    highlights: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Design Systems",
      "Web Performance",
    ],
    statusTitle: "Foco atual",
    statusBody:
      "Arquitetura frontend escalável, otimização de Core Web Vitals e entregas com qualidade de produção.",
    craftTitle: "Como construo",
    craftBody: "Código limpo, decisões guiadas por métricas e colaboração próxima com produto e design.",
  },
  en: {
    eyebrow: "Frontend Specialist • UX/UI • Performance",
    title: "Building scalable systems and memorable digital experiences.",
    description:
      "I turn product complexity into fast, accessible interfaces focused on business impact and real user outcomes.",
    ctaPrimary: "View projects",
    ctaSecondary: "Discuss a project",
    highlights: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Design Systems",
      "Web Performance",
    ],
    statusTitle: "Current focus",
    statusBody:
      "Scalable frontend architecture, Core Web Vitals optimization, and production-ready delivery.",
    craftTitle: "How I build",
    craftBody: "Clean code, metrics-driven decisions, and close collaboration with product and design teams.",
  },
};

const revealContainer = {
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

const revealItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Hero({ localePrefix }: Props) {
  const locale = localePrefix === "/en" ? "en" : "pt-BR";
  const copy = copyByLocale[locale];

  return (
    <section id="home" className="px-4 pb-14 pt-30 sm:px-6 sm:pb-20 sm:pt-34">
      <motion.div
        className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12"
        variants={revealContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Card className="lg:col-span-8 lg:p-8" variants={revealItem}>
          <motion.p variants={revealItem} className="text-xs tracking-[0.2em] text-gray-400">
            {copy.eyebrow}
          </motion.p>

          <motion.h1
            variants={revealItem}
            className="mt-5 max-w-4xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-4xl font-extrabold leading-tight tracking-tighter text-transparent sm:text-5xl lg:text-6xl"
          >
            {copy.title}
          </motion.h1>

          <motion.p variants={revealItem} className="mt-6 max-w-3xl text-base text-gray-300 sm:text-lg">
            {copy.description}
          </motion.p>

          <motion.div variants={revealItem} className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={{ pathname: "/", hash: "projects" }}
              className="inline-flex items-center gap-2 rounded-full border border-gray-700 bg-gray-900/70 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-gray-500"
            >
              {copy.ctaPrimary}
              <ArrowUpRight size={16} />
            </Link>

            <a
              href="https://wa.me/5581999203683"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-transparent px-5 py-2.5 text-sm font-semibold text-gray-200 transition-colors hover:border-gray-600 hover:text-white"
            >
              {copy.ctaSecondary}
              <BriefcaseBusiness size={16} />
            </a>
          </motion.div>

          <motion.ul
            className="mt-8 flex flex-wrap gap-2"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
            aria-label={locale === "en" ? "Core technologies" : "Tecnologias principais"}
          >
            {copy.highlights.map((item) => (
              <motion.li key={item} variants={revealItem}>
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-800 px-3 py-1.5 text-xs font-medium text-gray-300">
                  <Code2 size={14} />
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </Card>

        <motion.div className="grid gap-6 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1" variants={revealItem}>
          <Card className="h-full">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-gray-400">{copy.statusTitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-gray-300">{copy.statusBody}</p>
              </div>
              <Sparkles size={18} className="text-gray-400" />
            </div>
          </Card>

          <Card className="h-full">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-gray-400">{copy.craftTitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-gray-300">{copy.craftBody}</p>
              </div>
              <Wrench size={18} className="text-gray-400" />
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
