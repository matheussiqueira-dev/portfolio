"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/core/utils";

type AnimatedMetricProps = {
  label: string;
  locale: "pt-BR" | "en";
  className?: string;
};

type ParsedMetric = {
  value: number;
  prefix: string;
  suffix: string;
} | null;

function parseMetric(label: string): ParsedMetric {
  const match = label.match(/^([^0-9]*)(\d+)(\+?)(.*)$/);

  if (!match) {
    return null;
  }

  const prefix = match[1] ?? "";
  const value = match[2] ?? "0";
  const plus = match[3] ?? "";
  const rest = match[4] ?? "";

  return {
    prefix: prefix.trim(),
    value: Number(value),
    suffix: `${plus}${rest}`.trim(),
  };
}

export default function AnimatedMetric({ label, locale, className }: AnimatedMetricProps) {
  const metricRef = useRef<HTMLDivElement>(null);
  const parsed = parseMetric(label);
  const [displayValue, setDisplayValue] = useState(0);
  const microcopy =
    locale === "en"
      ? {
          signal: "Signal",
          hint: "Recruiter-facing credibility signal",
        }
      : {
          signal: "Sinal",
          hint: "Sinal de credibilidade para recrutadores",
        };

  useEffect(() => {
    if (!parsed || !metricRef.current) {
      return;
    }

    const node = metricRef.current;
    let rafId = 0;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || started) {
          return;
        }

        started = true;
        const startedAt = performance.now();
        const duration = 900;

        const tick = (timestamp: number) => {
          const progress = Math.min((timestamp - startedAt) / duration, 1);
          const nextValue = Math.round(parsed.value * progress);
          setDisplayValue(nextValue);

          if (progress < 1) {
            rafId = window.requestAnimationFrame(tick);
          }
        };

        rafId = window.requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.45 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(rafId);
    };
  }, [parsed]);

  return (
    <div ref={metricRef} className={cn("metric-card encom-panel p-5", className)}>
      <p className="ui-label text-xs text-[color:var(--muted)]">{microcopy.signal}</p>
      {parsed ? (
        <>
          <p className="metric-card__value">
            {parsed.prefix ? <span className="metric-card__prefix">{parsed.prefix} </span> : null}
            <span>{displayValue}</span>
            {parsed.suffix ? <span>{parsed.suffix}</span> : null}
          </p>
          <p className="metric-card__label">{label}</p>
        </>
      ) : (
        <>
          <p className="metric-card__value metric-card__value--text">{label}</p>
          <p className="metric-card__label">{microcopy.hint}</p>
        </>
      )}
    </div>
  );
}
