"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { stackIcons, type StackIcon as StackIconData } from "@/data/stack-icons";

type StackItem = {
  key: string;
  labelKey: string;
  icon: keyof typeof stackIcons;
};

const stackItems: StackItem[] = [
  { key: "javascript", labelKey: "javascript", icon: "javascript" },
  { key: "typescript", labelKey: "typescript", icon: "typescript" },
  { key: "python", labelKey: "python", icon: "python" },
  { key: "react", labelKey: "react", icon: "react" },
  { key: "node", labelKey: "node", icon: "nodedotjs" },
  { key: "sql", labelKey: "sql", icon: "microsoftsqlserver" },
  { key: "mongodb", labelKey: "mongodb", icon: "mongodb" },
  { key: "git", labelKey: "git", icon: "git" },
  { key: "github", labelKey: "github", icon: "github" },
  { key: "html5", labelKey: "html5", icon: "html5" },
  { key: "css3", labelKey: "css3", icon: "css3" },
  { key: "azure", labelKey: "azure", icon: "microsoftazure" },
  { key: "powerbi", labelKey: "powerbi", icon: "powerbi" },
  { key: "pandas", labelKey: "pandas", icon: "pandas" },
  { key: "rest", labelKey: "rest", icon: "openapiinitiative" },
  { key: "etl", labelKey: "etl", icon: "apacheairflow" },
  { key: "warehouse", labelKey: "warehouse", icon: "snowflake" },
  { key: "tableau", labelKey: "tableau", icon: "tableau" },
  { key: "oracle", labelKey: "oracle", icon: "oracle" },
  { key: "shell", labelKey: "shell", icon: "gnubash" },
];

const getFloatConfig = (index: number) => {
  const duration = 3.4 + (index % 6) * 0.55;
  const delay = (index % 7) * 0.18;
  const offset = 6 + (index % 4);
  return { duration, delay, offset };
};

const StackIcon = ({ icon }: { icon: StackIconData }) => (
  <svg
    viewBox={`0 0 ${icon.width} ${icon.height}`}
    width="1em"
    height="1em"
    focusable="false"
    aria-hidden="true"
    dangerouslySetInnerHTML={{ __html: icon.body }}
  />
);

export default function PrimaryStack() {
  const t = useTranslations("primaryStack");

  return (
    <section
      id="stack"
      className="page-section content-auto"
      aria-label={t("ariaLabel")}
    >
      <div className="section-inner">
        <div className="section-heading" data-reveal>
          <div className="section-heading__text">
            <p className="eyebrow">{t("eyebrow")}</p>
            <h2 className="section-title">{t("title")}</h2>
          </div>
          <p className="section-description max-w-3xl">{t("subtitle")}</p>
        </div>

        <div className="stack-cloud" role="presentation">
          <motion.ul className="stack-cloud__grid" role="list">
            {stackItems.map((item, index) => {
              const { duration, delay, offset } = getFloatConfig(index);
              const tooltipId = `stack-tooltip-${item.key}`;
              const icon = stackIcons[item.icon];
              const label = t(`items.${item.labelKey}`);

              return (
                <motion.li
                  key={item.key}
                  className="stack-cloud__item"
                  animate={{ y: [-offset, offset, -offset] }}
                  transition={{
                    duration,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay,
                  }}
                >
                  <motion.button
                    type="button"
                    className="stack-pill"
                    aria-label={label}
                    aria-describedby={tooltipId}
                    whileHover={{ scale: 1.08 }}
                    whileFocus={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                  >
                    <span className="stack-pill__icon" aria-hidden="true">
                      <StackIcon icon={icon} />
                    </span>
                    <span className="stack-pill__label">{label}</span>
                    <span
                      id={tooltipId}
                      role="tooltip"
                      className="stack-pill__tooltip"
                    >
                      {label}
                    </span>
                  </motion.button>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>

        <div className="sr-only">
          <h2>{t("srTitle")}</h2>
          <p>{t("srDescription")}</p>
        </div>
      </div>
    </section>
  );
}
