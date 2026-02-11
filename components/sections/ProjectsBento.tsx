"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useLocale } from "next-intl";
import Card from "@/components/ui/Card";
import { projects } from "@/data/projects";
import { projectsEn } from "@/data/projects.en";
import { siteEn } from "@/data/site.en";
import { sitePt } from "@/data/site.pt";
import type { Project } from "@/data/projects.types";

const spring = { type: "spring", stiffness: 260, damping: 20 } as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: spring },
};

const bentoClasses = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
] as const;

const isVisualMedia = (src: string, type?: string) =>
  type === "image" || type === "gif" || (!src.endsWith(".mp4") && !src.endsWith(".webm"));

const getProjectImage = (project: Project) => {
  const screenshot = project.screenshots.find((shot) =>
    isVisualMedia(shot.src, shot.type)
  );
  if (screenshot?.src) {
    return screenshot.src;
  }

  if (project.demo && "poster" in project.demo && project.demo.poster) {
    return project.demo.poster;
  }

  return null;
};

const getCategory = (project: Project, isEn: boolean) => {
  const text = `${project.tagline} ${project.stack.join(" ")}`.toLowerCase();
  if (/power bi|dax|analytics|dashboard|sql|bi/.test(text)) {
    return isEn ? "Data & BI" : "Dados & BI";
  }
  if (/machine learning|ai|ia|opencv|mediapipe|vision/.test(text)) {
    return "AI";
  }
  if (/react|next|node|fastapi|api|typescript/.test(text)) {
    return "Full Stack";
  }
  return isEn ? "Engineering" : "Engenharia";
};

const getDemoUrl = (project: Project) => {
  if (project.demoUrl) {
    return project.demoUrl;
  }

  if (!project.demo) {
    return undefined;
  }

  if (project.demo.kind === "external") {
    return project.demo.url;
  }

  if (project.demo.kind === "internal") {
    return project.demo.path;
  }

  if (project.demo.kind === "embed") {
    return project.demo.url;
  }

  return undefined;
};

export default function ProjectsBento() {
  const locale = useLocale();
  const isEn = locale === "en";
  const content = isEn ? siteEn.projects : sitePt.projects;
  const source = isEn ? projectsEn : projects;
  const selected = source.slice(0, 6);

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={spring}
          className="mb-10 space-y-4"
        >
          <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">
            {content.eyebrow}
          </p>
          <h2 className="text-3xl font-extrabold tracking-tighter text-transparent sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text">
              {content.title}
            </span>
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {content.description}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {selected.map((project, index) => {
            const image = getProjectImage(project);
            const demoUrl = getDemoUrl(project);
            const caseUrl = isEn
              ? `/en/projects/${project.slug}`
              : `/projetos/${project.slug}`;
            const category = getCategory(project, isEn);

            return (
              <motion.article
                key={project.slug}
                variants={item}
                whileHover={{ scale: 1.02 }}
                transition={spring}
                className={bentoClasses[index] ?? "md:col-span-1"}
              >
                <Card className="group relative h-full min-h-[280px] overflow-hidden border-white/10 bg-white/5 p-0 transition-colors hover:border-white/30">
                  {image ? (
                    <Image
                      src={image}
                      alt={project.title}
                      fill
                      quality={88}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-800" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/20" />

                  <div className="relative z-10 flex h-full flex-col justify-between p-6">
                    <div className="flex items-start justify-between gap-3">
                      <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-zinc-300">
                        {category}
                      </span>

                      <div className="flex items-center gap-2 opacity-40 transition-opacity group-hover:opacity-100">
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-black/40 text-zinc-200 transition-colors hover:border-white/35 hover:text-white"
                        >
                          <Github size={16} />
                        </a>
                        <a
                          href={demoUrl ?? caseUrl}
                          target={demoUrl?.startsWith("http") ? "_blank" : undefined}
                          rel={
                            demoUrl?.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          aria-label="Open project"
                          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-black/40 text-zinc-200 transition-colors hover:border-white/35 hover:text-white"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-300">
                        {project.tagline}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {project.stack.slice(0, 5).map((tech) => (
                          <li
                            key={`${project.slug}-${tech}`}
                            className="rounded-full border border-white/10 bg-black/35 px-2.5 py-1 text-[11px] text-zinc-300"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
