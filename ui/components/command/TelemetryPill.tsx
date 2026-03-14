import type { ReactNode } from "react";

type Props = {
  label: string;
  tone?: "default" | "accent" | "success";
  icon?: ReactNode;
  className?: string;
};

export function TelemetryPill({
  label,
  tone = "default",
  icon,
  className,
}: Props) {
  return (
    <span
      className={[
        "telemetry-pill",
        tone !== "default" ? `telemetry-pill--${tone}` : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {icon ? <span className="telemetry-pill__icon">{icon}</span> : null}
      <span>{label}</span>
    </span>
  );
}
