"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import type { ServiceExperience, ServicePillar } from "@/data/services";
import { Link } from "@/core/i18n/navigation";
import { StackIconList } from "@/ui/components/StackIcon";

type Props = {
  services: ServiceExperience;
  locale: "pt" | "en";
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = reduceMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.58,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
    >
      {children}
    </motion.div>
  );
}

function PillarCard({
  pillar,
  index,
  locale,
}: {
  pillar: ServicePillar;
  index: number;
  locale: "pt" | "en";
}) {
  const deliverableLabel = locale === "pt" ? "Entregáveis" : "Deliverables";
  const impactLabel = locale === "pt" ? "Impacto no negócio" : "Business impact";
  const toolsLabel = locale === "pt" ? "Ferramentas e tecnologias" : "Tools and technologies";

  return (
    <Reveal className="services-pillar" delay={Math.min(index, 4) * 0.04}>
      <article>
        <div className="services-pillar__head">
          <span className="services-pillar__index">{String(index + 1).padStart(2, "0")}</span>
          <h2>{pillar.title}</h2>
          <p>{pillar.description}</p>
        </div>

        <div className="services-pillar__content">
          <section aria-labelledby={`${pillar.id}-deliverables`}>
            <h3 id={`${pillar.id}-deliverables`}>{deliverableLabel}</h3>
            <ul>
              {pillar.deliverables.map((deliverable) => (
                <li key={deliverable}>{deliverable}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby={`${pillar.id}-impact`}>
            <h3 id={`${pillar.id}-impact`}>{impactLabel}</h3>
            <p>{pillar.impact}</p>
          </section>
        </div>

        <div className="services-pillar__tools" aria-label={toolsLabel}>
          <StackIconList items={pillar.tools} size="sm" showLabel />
        </div>
      </article>
    </Reveal>
  );
}

export default function ServicesContent({ services, locale }: Props) {
  const processLabel = locale === "pt" ? "Como a entrega acontece" : "How delivery works";
  const proofLabel = locale === "pt" ? "Posicionamento" : "Positioning";

  return (
    <main className="layout-container page-shell services-page">
      <motion.section
        className="services-hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-labelledby="services-title"
      >
        <motion.div className="services-hero__copy" variants={containerVariants}>
          <Reveal>
            <p className="eyebrow">{services.eyebrow}</p>
            <h1 id="services-title">{services.title}</h1>
            <p>{services.intro}</p>
          </Reveal>
        </motion.div>

        <Reveal className="services-hero__panel" delay={0.12}>
          <aside aria-label={proofLabel}>
            <span className="services-hero__panel-label">{proofLabel}</span>
            <div className="services-proof-grid">
              {services.proofPoints.map((point) => (
                <span key={point}>{point}</span>
              ))}
            </div>
          </aside>
        </Reveal>
      </motion.section>

      <section className="services-pillar-stack" aria-label={services.eyebrow}>
        {services.pillars.map((pillar, index) => (
          <PillarCard key={pillar.id} pillar={pillar} index={index} locale={locale} />
        ))}
      </section>

      <Reveal className="services-process">
        <section aria-labelledby="services-process-title">
          <p className="eyebrow">{processLabel}</p>
          <h2 id="services-process-title">{processLabel}</h2>
          <div className="services-process__grid">
            {services.process.map((step, index) => (
              <article key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="services-final-cta">
        <section aria-labelledby="services-final-title">
          <p className="eyebrow">{locale === "pt" ? "Próximo passo" : "Next step"}</p>
          <h2 id="services-final-title">{services.cta.title}</h2>
          <p>{services.cta.description}</p>
          <Link href="/hire" className="btn-primary">
            {services.cta.button}
          </Link>
        </section>
      </Reveal>
    </main>
  );
}
