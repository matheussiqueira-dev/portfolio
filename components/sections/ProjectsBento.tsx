"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, projectOrder } from "@/data/projects";
import { projectsEn, projectOrderEn } from "@/data/projects.en";
import type { Project } from "@/data/projects.types";
import ProjectBentoCard from "@/components/projects/ProjectBentoCard";
import { Link } from "@/i18n/navigation";

type Props = {
  localePrefix?: "/en";
};

type SectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
  viewAllLabel: string;
};

const copyByLocale: Record<"pt-BR" | "en", SectionCopy> = {
  "pt-BR": {
    eyebrow: "Projetos",
    title: "Arquitetura, dados e produto em um bento grid assimétrico",
    description:
      "Projeto principal em destaque e demais cases organizados em ritmo visual dinâmico para leitura rápida.",
    viewAllLabel: "Ver todos os projetos",
  },
  en: {
    eyebrow: "Projects",
    title: "Architecture, data, and product in an asymmetric bento grid",
    description:
      "A featured main project and supporting cases arranged with dynamic visual rhythm for faster scanning.",
    viewAllLabel: "View all projects",
  },
};

const sectionVariants = {
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

const sortByPriority = (items: Project[], order: string[]) => {
  const orderMap = new Map(order.map((slug, index) => [slug, index]));
  return [...items].sort((a, b) => {
    const aIndex = orderMap.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
    const bIndex = orderMap.get(b.slug) ?? Number.MAX_SAFE_INTEGER;
    return aIndex - bIndex;
  });
};

const getCategory = (project: Project, locale: "pt-BR" | "en") => {
  const searchable = `${project.role} ${project.stack.join(" ")}`.toLowerCase();

  if (/power bi|bi|analytics|data|sql|pandas|dax|etl|streamlit/.test(searchable)) {
    return locale === "en" ? "Data & BI" : "Dados & BI";
  }

  if (/opencv|mediapipe|vision|machine learning|tensorflow/.test(searchable)) {
    return locale === "en" ? "AI & Vision" : "IA & Visão";
  }

  if (/react|next|typescript|node|fastify|api/.test(searchable)) {
    return "Full Stack";
  }

  return locale === "en" ? "Software" : "Software";
};

const getSecondarySpanClass = (index: number) => {
  const pattern = [
    "md:col-span-1",
    "md:col-span-1",
    "md:col-span-2",
    "md:col-span-1",
    "md:col-span-1",
    "md:col-span-2",
  ];

  return pattern[index % pattern.length];
};

export default function ProjectsBento({ localePrefix }: Props) {
  const locale = localePrefix === "/en" ? "en" : "pt-BR";
  const copy = copyByLocale[locale];
  const dataset = locale === "en" ? projectsEn : projects;
  const order = locale === "en" ? projectOrderEn : projectOrder;
  const selectedProjects = sortByPriority(dataset, order).slice(0, 7);
  const mainProject = selectedProjects[0];
  const secondaryProjects = selectedProjects.slice(1);

  if (!mainProject) {
    return null;
  }

  return (
    <section id="projects" className="px-4 py-14 sm:px-6 sm:py-20">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.p variants={itemVariants} className="text-xs tracking-[0.2em] text-gray-400">
          {copy.eyebrow}
        </motion.p>

        <motion.h2
          variants={itemVariants}
          className="mt-4 max-w-4xl bg-gradient-to-b from-white to-gray-400 bg-clip-text text-3xl font-extrabold tracking-tighter text-transparent sm:text-4xl"
        >
          {copy.title}
        </motion.h2>

        <motion.p variants={itemVariants} className="mt-4 max-w-3xl text-gray-300">
          {copy.description}
        </motion.p>

        <motion.div
          className="mt-8 grid grid-cols-1 gap-4 md:auto-rows-[230px] md:grid-cols-3"
          variants={sectionVariants}
        >
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2">
            <ProjectBentoCard
              project={mainProject}
              category={getCategory(mainProject, locale)}
              locale={locale}
              featured
              className="h-full min-h-[420px] md:min-h-0"
            />
          </motion.div>

          {secondaryProjects.map((project, index) => (
            <motion.div key={project.slug} variants={itemVariants} className={getSecondarySpanClass(index)}>
              <ProjectBentoCard
                project={project}
                category={getCategory(project, locale)}
                locale={locale}
                className="h-full min-h-[280px] md:min-h-0"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-gray-300 transition-colors hover:border-white/30 hover:text-white"
          >
            {copy.viewAllLabel}
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
