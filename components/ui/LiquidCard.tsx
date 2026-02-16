import { Children, type CSSProperties, type ReactNode } from "react";

type LiquidCardProps = {
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
  animationDelayMs?: number;
  actionsDelayMs?: number;
};

export default function LiquidCard({
  title,
  description,
  children,
  className,
  animationDelayMs = 120,
  actionsDelayMs = 780,
}: LiquidCardProps) {
  const cardStyle = {
    ["--anim-delay" as string]: `${animationDelayMs}ms`,
  } as CSSProperties;

  const actionNodes = Children.toArray(children);

  return (
    <div
      className={["liquid-card animate-glass-entrance opacity-0", className]
        .filter(Boolean)
        .join(" ")}
      style={cardStyle}
    >
      <div className="liquid-card__content">
        <h3 className="liquid-card__title">{title}</h3>
        <p className="liquid-card__description">{description}</p>
        {actionNodes.length > 0 ? (
          <div className="liquid-card__actions">
            {actionNodes.map((child, index) => (
              <div
                key={index}
                className="animate-fade-in opacity-0"
                style={
                  {
                    ["--anim-delay" as string]: `${actionsDelayMs + index * 120}ms`,
                  } as CSSProperties
                }
              >
                {child}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
