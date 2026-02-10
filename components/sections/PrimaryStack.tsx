import type { CSSProperties } from "react";
import { getTranslations } from "next-intl/server";

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
  const duration = 3.8 + (index % 6) * 0.6;
  const delay = (index % 7) * 0.2;
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

type Props = {
  locale?: "pt-BR" | "en";
};

export default async function PrimaryStack({ locale = "pt-BR" }: Props) {
  const t = await getTranslations({ locale, namespace: "primaryStack" });

  return (
    <section
      id="stack"
      className="page-section content-auto"
      aria-label={t("ariaLabel")}
    >
      <div className="section-inner">
        <div className="section-heading stack-heading" data-reveal>
          <div className="section-heading__text">
            <p className="eyebrow">{t("eyebrow")}</p>
            <h2 className="section-title">{t("title")}</h2>
          </div>
          <div className="section-heading__meta">
            <p className="section-description max-w-3xl">{t("subtitle")}</p>
            <p className="stack-heading__summary">{t("summary")}</p>
            <div className="stack-heading__highlights">
              {Array.from({ length: 3 }).map((_, index) => (
                <div className="stack-highlight card card-compact" key={index}>
                  <p className="stack-highlight__label">
                    {t(`highlights.${index}.label`)}
                  </p>
                  <p className="stack-highlight__value">
                    {t(`highlights.${index}.value`)}
                  </p>
                  <p className="stack-highlight__detail">
                    {t(`highlights.${index}.detail`)}
                  </p>
                </div>
              ))}
            </div>
            <div className="stack-heading__roles">
              {Array.from({ length: 3 }).map((_, index) => (
                <span className="stack-badge" key={index}>
                  {t(`roles.${index}`)}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="stack-cloud" role="presentation">
          <ul className="stack-cloud__grid" role="list">
            {stackItems.map((item, index) => {
              const { duration, delay, offset } = getFloatConfig(index);
              const icon = stackIcons[item.icon];
              const label = t(`items.${item.labelKey}`);

              return (
                <li
                  key={item.key}
                  className="stack-cloud__item"
                  style={
                    {
                      "--float-duration": `${duration}s`,
                      "--float-delay": `${delay}s`,
                      "--float-offset": `${offset}px`,
                    } as CSSProperties
                  }
                >
                  <span className="stack-pill" aria-label={label} tabIndex={0}>
                    <span className="stack-pill__icon" aria-hidden="true">
                      <StackIcon icon={icon} />
                    </span>
                    <span className="stack-pill__label">{label}</span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="sr-only">
          <h2>{t("srTitle")}</h2>
          <p>{t("srDescription")}</p>
        </div>
      </div>
    </section>
  );
}
