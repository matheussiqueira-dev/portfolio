"use client";

import { useMemo, useState } from "react";

const getAltitudeLabel = (value: number) => {
  if (value < 30) return "Baixa";
  if (value < 70) return "Media";
  return "Alta";
};

export default function FlappyBirdGestosDemo() {
  const [score, setScore] = useState(0);
  const [altitude, setAltitude] = useState(50);
  const altitudeLabel = useMemo(() => getAltitudeLabel(altitude), [altitude]);

  const handleFlap = () => {
    setScore((prev) => prev + 1);
    setAltitude((prev) => Math.min(prev + 12, 100));
  };

  const handleReset = () => {
    setScore(0);
    setAltitude(50);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4 text-xs text-[color:var(--muted)]">
        Mini demo local representativa: use o botao de flap para simular gestos e
        manter o passaro no ar.
      </div>

      <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Pontuacao
            </p>
            <p className="text-3xl font-semibold text-[color:var(--foreground)]">
              {score}
            </p>
          </div>
          <div className="text-sm text-[color:var(--muted)]">
            Altitude: <span className="font-semibold">{altitudeLabel}</span>
          </div>
        </div>

        <div className="h-32 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4">
          <div className="flex h-full items-end">
            <div
              className="w-full rounded-lg bg-[color:var(--accent)]/40 transition-all"
              style={{ height: `${altitude}%` }}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          <button
            type="button"
            onClick={handleFlap}
            className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            Flap (gesto)
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
}
