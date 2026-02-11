"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects, projectOrder } from "@/data/projects";
import { projectsEn, projectOrderEn } from "@/data/projects.en";
import type { Project } from "@/data/projects.types";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { premiumSpring } from "@/lib/motion";

type Props = {
  localePrefix?: "/en";
};

type Copy = {
  eyebrow: string;
  title: string;
  description: string;
  detailsLabel: string;
  viewAllLabel: string;
  githubLabel: string;
};

const copyByLocale: Record<"pt-BR" | "en", Copy> = {
  "pt-BR": {
    eyebrow: "Projetos",
    title: "Projetos em Destaque",
    description:
      "Seleção de projetos com foco em arquitetura, performance e impacto de produto.",
    detailsLabel: "Abrir case",
    viewAllLabel: "Ver todos os projetos",
    githubLabel: "Repositório",
  },
  en: {
    eyebrow: "Projects",
    title: "Featured Projects",
    description:
      "Selected projects focused on architecture, performance, and product impact.",
    detailsLabel: "Open case",
    viewAllLabel: "View all projects",
    githubLabel: "Repository",
  },
};

const sectionVariants = {
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

const sortByPriority = (items: Project[], order: string[]) => {
  const orderMap = new Map(order.map((slug, index) => [slug, index]));
  return [...items].sort((a, b) => {
    const aIndex = orderMap.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
    const bIndex = orderMap.get(b.slug) ?? Number.MAX_SAFE_INTEGER;
    return aIndex - bIndex;
  });
};

const getCover = (project: Project) =>
  project.screenshots.find(
    (media) => media.type !== "video" && !media.src.toLowerCase().endsWith(".mp4")
  ) ?? project.screenshots[0];

const getCategory = (project: Project, locale: "pt-BR" | "en") => {
  const searchable = `${project.role} ${project.stack.join(" ")}`.toLowerCase();
  if (/react|next|typescript|frontend|ui/.test(searchable)) {
    return locale === "en" ? "Frontend" : "Frontend";
  }
  if (/fastapi|node|api|postgres|mongodb|backend/.test(searchable)) {
    return locale === "en" ? "Backend" : "Backend";
  }
  if (/power bi|analytics|sql|etl|python|data/.test(searchable)) {
    return locale === "en" ? "Data" : "Dados";
  }
  return locale === "en" ? "Software" : "Software";
};

type ProjectCardProps = {
  project: Project;
  locale: "pt-BR" | "en";
  featured?: boolean;
  copy: Copy;
};

function ProjectCard({ project, locale, featured, copy }: ProjectCardProps) {
  const cover = getCover(project);

  return (
    <motion.article
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -3 }}
      transition={premiumSpring}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-md",
        featured ? "md:col-span-2 md:row-span-2" : "md:col-span-1"
      )}
    >
      {cover ? (
        <div className="absolute inset-0">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />

      <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6">
        <span className="inline-flex w-fit rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-zinc-200">
          {getCategory(project, locale)}
        </span>

        <h3 className={cn("mt-3 font-semibold text-white", featured ? "text-2xl sm:text-3xl" : "text-xl")}>
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-zinc-300">{project.tagline}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, featured ? 6 : 4).map((tech) => (
            <li key={tech}>
              <span className="inline-flex rounded-full border border-zinc-700 bg-black/30 px-2.5 py-1 text-[11px] text-zinc-200">
                {tech}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-2">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={copy.githubLabel}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-black/35 text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
          >
            <Github size={16} />
          </a>

          <Link
            href={{ pathname: "/projects/[slug]", params: { slug: project.slug } }}
            aria-label={copy.detailsLabel}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-black/35 text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
          >
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectSection({ localePrefix }: Props) {
  const locale = localePrefix === "/en" ? "en" : "pt-BR";
  const copy = copyByLocale[locale];
  const dataset = locale === "en" ? projectsEn : projects;
  const order = locale === "en" ? projectOrderEn : projectOrder;
  const selected = sortByPriority(dataset, order).slice(0, 7);
  const [featured, ...others] = selected;

  if (!featured) {
    return null;
  }

  return (
    <section id="projects" className="px-4 py-16 sm:px-6">
      <motion.div
        className="mx-auto max-w-6xl"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.p variants={itemVariants} className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          {copy.eyebrow}
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="mt-4 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-3xl font-extrabold tracking-tighter text-transparent sm:text-4xl"
        >
          {copy.title}
        </motion.h2>
        <motion.p variants={itemVariants} className="mt-4 max-w-3xl text-zinc-300">
          {copy.description}
        </motion.p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:auto-rows-[220px] md:grid-cols-3">
          <ProjectCard project={featured} locale={locale} featured copy={copy} />
          {others.map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} copy={copy} />
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-8">
          <Link
            href="/projects"
            className="inline-flex rounded-full border border-zinc-700 bg-zinc-900/50 px-4 py-2 text-sm font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
          >
            {copy.viewAllLabel}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
