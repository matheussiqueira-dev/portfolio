"use client";

import { motion } from "framer-motion";
import {
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Terminal,
} from "lucide-react";
import { DATA } from "@/data/portfolio";
import { cn } from "@/lib/cn";
import { premiumSpring } from "@/lib/motion";

type Props = {
  localePrefix?: "/en";
};

type Copy = {
  nav: { home: string; projects: string; about: string };
  role: string;
  projectsTitle: string;
  stackTitle: string;
  contactTitle: string;
  contactText: string;
  rights: string;
};

const copyByLocale: Record<"pt-BR" | "en", Copy> = {
  "pt-BR": {
    nav: { home: "Início", projects: "Projetos", about: "Sobre" },
    role: DATA.role,
    projectsTitle: "Projetos",
    stackTitle: "Tech Stack",
    contactTitle: "Vamos conversar?",
    contactText: "Estou sempre aberto a novos projetos e parcerias.",
    rights: "Todos os direitos reservados.",
  },
  en: {
    nav: { home: "Home", projects: "Projects", about: "About" },
    role: "Full Stack Developer",
    projectsTitle: "Projects",
    stackTitle: "Tech Stack",
    contactTitle: "Let's talk?",
    contactText: "I am always open to new projects and partnerships.",
    rights: "All rights reserved.",
  },
};

const sectionReveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: premiumSpring,
} as const;

const useHashes = (isEn: boolean) => ({
  home: isEn ? "home" : "inicio",
  projects: isEn ? "projects" : "projetos",
  about: isEn ? "about" : "sobre",
});

export default function PortfolioPage({ localePrefix }: Props) {
  const locale = localePrefix === "/en" ? "en" : "pt-BR";
  const isEn = locale === "en";
  const copy = copyByLocale[locale];
  const sectionIds = useHashes(isEn);

  return (
    <main className="min-h-screen px-4 pb-20 font-sans text-white selection:bg-purple-500/30">
      <section
        id={sectionIds.home}
        className="relative flex flex-col items-center pb-20 pt-32 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={premiumSpring}
        >
          <h1 className="mb-6 bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-6xl font-extrabold tracking-tighter text-transparent md:text-8xl">
            {DATA.name}
          </h1>
          <h2 className="mb-8 text-xl font-medium uppercase tracking-[0.2em] text-purple-400 md:text-2xl">
            {copy.role}
          </h2>
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-neutral-400">
            {DATA.bio}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href={DATA.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 transition-all hover:bg-white/10"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={DATA.contact.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 transition-all hover:bg-white/10"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${DATA.contact.email}`}
              className="rounded-full border border-white/10 bg-white/5 p-3 transition-all hover:bg-white/10"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </section>

      <section id={sectionIds.projects} className="mx-auto max-w-6xl py-20">
        <div className="mb-12 flex items-center gap-4">
          <Code2 className="text-purple-500" />
          <h3 className="text-3xl font-bold tracking-tight">{copy.projectsTitle}</h3>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {DATA.projects.map((project, index) => (
            <motion.article
              key={project.title}
              {...sectionReveal}
              transition={{ ...premiumSpring, delay: index * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-900/50 p-8 backdrop-blur-md",
                project.featured ? "md:col-span-2 md:row-span-1" : "col-span-1"
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-white/5 bg-white/5 px-2 py-1 font-mono text-[10px] text-neutral-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-neutral-500 transition-colors group-hover:text-white"
                      aria-label={isEn ? "Open project" : "Abrir projeto"}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  <h4 className="mb-3 text-2xl font-bold">{project.title}</h4>
                  <p className="text-sm leading-relaxed text-neutral-400">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section
        id={sectionIds.about}
        className="mx-auto max-w-6xl border-t border-white/5 py-20"
      >
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <Terminal className="text-purple-500" />
              <h3 className="text-2xl font-bold">{copy.stackTitle}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {DATA.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  {...sectionReveal}
                  transition={{ ...premiumSpring, delay: index * 0.04 }}
                  className="cursor-default rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 transition-all hover:border-purple-500/50 hover:text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.div
            {...sectionReveal}
            className="flex flex-col justify-center rounded-[2rem] border border-white/5 bg-gradient-to-br from-purple-900/10 to-transparent p-8"
          >
            <h3 className="mb-4 text-2xl font-bold">{copy.contactTitle}</h3>
            <p className="mb-6 text-neutral-400">{copy.contactText}</p>
            <a
              href={`mailto:${DATA.contact.email}`}
              className="text-xl font-medium text-white underline decoration-purple-500 underline-offset-8 transition-colors hover:text-purple-400"
            >
              {DATA.contact.email}
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10 text-center text-xs text-neutral-600">
        © {new Date().getFullYear()} {DATA.name}. {copy.rights}
      </footer>
    </main>
  );
}
