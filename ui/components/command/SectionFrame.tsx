import type { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  telemetry?: ReactNode;
};

export function SectionFrame({
  id,
  eyebrow,
  title,
  description,
  aside,
  children,
  className,
  contentClassName,
  telemetry,
}: Props) {
  return (
    <section
      id={id}
      data-reveal
      className={["command-surface", className].filter(Boolean).join(" ")}
    >
      <div className="command-surface__shell">
        <header className="command-surface__header">
          <div className="command-surface__intro">
            <p className="section-eyebrow">{eyebrow}</p>
            <h2 className="section-title">{title}</h2>
            {description ? <p className="section-description">{description}</p> : null}
          </div>
          {aside ? <div className="command-surface__aside">{aside}</div> : null}
        </header>

        {telemetry ? <div className="command-surface__telemetry">{telemetry}</div> : null}

        <div
          className={["command-surface__content", contentClassName]
            .filter(Boolean)
            .join(" ")}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
