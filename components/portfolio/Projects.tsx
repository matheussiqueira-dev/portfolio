"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ProjectsContent } from "@/data/portfolio";

const cardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2 } },
};

const overlayVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.2 } },
};

const EASE = [0.16, 1, 0.3, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE, delay: index * 0.05 },
  }),
};

type Props = {
  content: ProjectsContent;
};

export default function Projects({ content }: Props) {
  return (
    <section id="projects" className="scroll-mt-28 px-6 py-24">
      {/* Projects section */}
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="space-y-3">
          <h3 className="text-3xl font-semibold text-[color:var(--foreground)]">
            {content.title}
          </h3>
          <p className="max-w-3xl text-base text-[color:var(--muted)]">
            {content.description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.items.map((project, index) => (
            <motion.article
              key={project.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              custom={index}
            >
              <motion.div
                className="card card-compact overflow-hidden"
                initial="rest"
                animate="rest"
                whileHover="hover"
                variants={cardVariants}
              >
                <div className="relative h-44 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/55 text-sm font-semibold text-white"
                    variants={overlayVariants}
                  >
                    {content.overlayLabel}
                  </motion.div>
                </div>

                <div className="mt-4 space-y-2">
                  <h4 className="text-lg font-semibold text-[color:var(--foreground)]">
                    {project.title}
                  </h4>
                  <p className="text-sm text-[color:var(--muted)]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-[color:var(--accent)]"
                    >
                      {content.overlayLabel}
                    </a>
                  ) : null}
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
