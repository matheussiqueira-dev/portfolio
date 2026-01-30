"use client";

import { useState } from "react";

const gestures = [
  "Mao aberta",
  "Punho fechado",
  "Joinha",
  "Sinal de paz",
  "Apontar",
];

export default function GestosTempoRealDemo() {
  const [gesture, setGesture] = useState(gestures[0]!);
  const [confidence, setConfidence] = useState(82);
  const [frameRate, setFrameRate] = useState(28);

  const handleSimulate = () => {
    const randomGesture = gestures[Math.floor(Math.random() * gestures.length)]!;
    const randomConfidence = Math.floor(65 + Math.random() * 30);
    const randomFps = Math.floor(20 + Math.random() * 15);
    setGesture(randomGesture);
    setConfidence(randomConfidence);
    setFrameRate(randomFps);
  };

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4 text-xs text-[color:var(--muted)]">
        Mini demo local representativa: simule a deteccao de gestos em tempo real.
      </div>

      <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Gesto detectado
            </p>
            <p className="text-2xl font-semibold text-[color:var(--foreground)]">
              {gesture}
            </p>
            <p className="text-sm text-[color:var(--muted)]">
              Confianca: <span className="font-semibold">{confidence}%</span>
            </p>
            <p className="text-sm text-[color:var(--muted)]">
              FPS: <span className="font-semibold">{frameRate}</span>
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Lista de gestos
            </p>
            <div className="flex flex-wrap gap-2">
              {gestures.map((item) => {
                const active = item === gesture;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setGesture(item)}
                    className={`rounded-full border px-3 py-1 text-xs transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 ${
                      active
                        ? "border-[color:var(--accent)]/60 text-[color:var(--foreground)]"
                        : "border-[color:var(--border)] text-[color:var(--muted)]"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 text-sm">
          <button
            type="button"
            onClick={handleSimulate}
            className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            Simular deteccao
          </button>
          <button
            type="button"
            onClick={() => setConfidence((prev) => Math.max(prev - 5, 50))}
            className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          >
            Reduzir confianca
          </button>
        </div>
      </div>
    </div>
  );
}
