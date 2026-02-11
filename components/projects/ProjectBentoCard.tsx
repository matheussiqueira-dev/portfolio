"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/data/projects.types";
import { cn } from "@/lib/cn";

type Props = {
  project: Project;
  category: string;
  locale: "pt-BR" | "en";
  featured?: boolean;
  className?: string;
};

const getCover = (project: Project) =>
  project.screenshots.find(
    (media) => media.type !== "video" && !media.src.toLowerCase().endsWith(".mp4")
  ) ?? null;

export default function ProjectBentoCard({
  project,
  category,
  locale,
  featured = false,
  className,
}: Props) {
  const cover = getCover(project);
  const techLimit = featured ? 6 : 4;
  const repoLabel = locale === "en" ? "Open GitHub repository" : "Abrir repositório no GitHub";
  const caseLabel = locale === "en" ? "Open project details" : "Abrir detalhes do projeto";

  return (
    <motion.article
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5",
        className
      )}
      whileHover={{
        borderColor: "rgba(255, 255, 255, 0.3)",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.12), 0 22px 52px rgba(0,0,0,0.55)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
    >
      <div className="absolute inset-0">
        {cover ? (
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30" />
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6">
        <span className="inline-flex w-fit items-center rounded-full border border-white/20 bg-black/35 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-200">
          {category}
        </span>

        <h3
          className={cn(
            "mt-3 font-bold tracking-tight text-white",
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          )}
        >
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-gray-200/90 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3] overflow-hidden">
          {project.techSummary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, techLimit).map((tech) => (
            <li key={tech}>
              <span className="inline-flex rounded-full border border-white/15 bg-black/25 px-2.5 py-1 text-[11px] text-gray-200">
                {tech}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-2 opacity-100 transition-all duration-300 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-within:translate-y-0 md:group-focus-within:opacity-100">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={repoLabel}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/35 text-gray-100 transition-colors hover:border-white/35 hover:text-white"
          >
            <Github size={16} />
          </a>

          <Link
            href={{ pathname: "/projects/[slug]", params: { slug: project.slug } }}
            aria-label={caseLabel}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/35 text-gray-100 transition-colors hover:border-white/35 hover:text-white"
          >
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
