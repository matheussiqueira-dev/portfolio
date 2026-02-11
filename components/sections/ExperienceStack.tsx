"use client";

import { motion } from "framer-motion";
import { CloudCog, Code2, Database, ServerCog } from "lucide-react";
import { useLocale } from "next-intl";
import Card from "@/components/ui/Card";
import { resume } from "@/data/resume";
import { resumeEn } from "@/data/resume.en";

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

const coreStackPt = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS", "AngularJS"],
  },
  {
    title: "Backend",
    icon: Database,
    items: [
      "Python",
      "Node.js",
      "SQL",
      "Power BI",
      "DAX",
      "Power Query",
      "APIs REST",
      "ETL/ELT",
    ],
  },
  {
    title: "DevOps/Cloud",
    icon: CloudCog,
    items: [
      "Azure",
      "Oracle Cloud",
      "Git",
      "GitHub",
      "CI/CD",
      "Infraestrutura de Redes",
      "Segurança da Informação",
    ],
  },
];

const coreStackEn = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS"],
  },
  {
    title: "Backend",
    icon: Database,
    items: [
      "Node.js",
      "Python",
      "FastAPI",
      "SQL",
      "Power BI",
      "DAX",
      "Power Query",
      "REST APIs",
    ],
  },
  {
    title: "DevOps/Cloud",
    icon: CloudCog,
    items: [
      "Azure",
      "Oracle Cloud",
      "Git",
      "GitHub",
      "CI/CD",
      "Networking",
      "Information Security",
    ],
  },
];

export default function ExperienceStack() {
  const locale = useLocale();
  const isEn = locale === "en";
  const content = isEn ? resumeEn : resume;
  const coreStack = isEn ? coreStackEn : coreStackPt;

  const labels = isEn
    ? {
        eyebrow: "Professional Experience",
        title: "Technical execution with measurable business impact",
        stackTitle: "Core Capabilities",
        stackSubtitle:
          "Competencies grouped by execution domain. Clean signal over vanity metrics.",
        marqueeTitle: "Primary technologies in active use",
      }
    : {
        eyebrow: "Experiência Profissional",
        title: "Execução técnica orientada a impacto mensurável no negócio",
        stackTitle: "Competências Nucleares",
        stackSubtitle:
          "Competências organizadas por domínio de execução, sem métricas artificiais.",
        marqueeTitle: "Tecnologias principais em uso ativo",
      };

  const marqueeItems = coreStack.flatMap((group) => group.items);

  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={spring}
          className="mb-10 space-y-4"
        >
          <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-500">
            {labels.eyebrow}
          </p>
          <h2 className="max-w-5xl text-3xl font-extrabold tracking-tighter text-transparent sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text">
              {labels.title}
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-4"
          >
            {content.experience.map((job) => (
              <motion.div key={`${job.company}-${job.period}`} variants={item}>
                <Card className="group p-6 transition-colors hover:border-white/25 hover:bg-white/[0.07]">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-lg font-semibold text-zinc-200 transition-colors group-hover:text-white">
                        {job.role}
                      </p>
                      <p className="mt-1 text-sm text-zinc-400">
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-zinc-400">
                      {job.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-200">
                    {job.highlights.slice(0, 3).map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.aside
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-4"
          >
            <motion.div variants={item}>
              <Card className="p-6">
                <div className="flex items-center gap-3">
                  <ServerCog size={18} className="text-zinc-300" />
                  <p className="text-lg font-semibold text-white">{labels.stackTitle}</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {labels.stackSubtitle}
                </p>
              </Card>
            </motion.div>

            {coreStack.map((group) => {
              const Icon = group.icon;
              return (
                <motion.div key={group.title} variants={item}>
                  <Card className="p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <Icon size={16} className="text-zinc-300" />
                      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-300">
                        {group.title}
                      </h3>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((tech) => (
                        <li
                          key={`${group.title}-${tech}`}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              );
            })}

            <motion.div variants={item}>
              <Card className="overflow-hidden p-0">
                <p className="px-5 pt-5 text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {labels.marqueeTitle}
                </p>
                <div className="relative mt-4 overflow-hidden">
                  <div className="marquee-track flex w-max gap-2 px-5 pb-5">
                    {[...marqueeItems, ...marqueeItems].map((item, index) => (
                      <span
                        key={`${item}-${index}`}
                        className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
