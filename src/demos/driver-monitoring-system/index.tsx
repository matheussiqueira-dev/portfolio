"use client";

import { useMemo, useState } from "react";

const getRisk = (attention: number, fatigue: number, distraction: number) => {
  const score = Math.round((attention * 0.4 + fatigue * 0.35 + distraction * 0.25) * 100);
  if (score < 40) return { label: "Baixo", tone: "text-emerald-400", score };
  if (score < 70) return { label: "Moderado", tone: "text-amber-400", score };
  return { label: "Alto", tone: "text-rose-400", score };
};

export default function DriverMonitoringDemo() {
  const [attention, setAttention] = useState(0.65);
  const [fatigue, setFatigue] = useState(0.35);
  const [distraction, setDistraction] = useState(0.2);
  const risk = useMemo(
    () => getRisk(attention, fatigue, distraction),
    [attention, fatigue, distraction]
  );

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4 text-xs text-[color:var(--muted)]">
        Mini demo local representativa: ajuste sinais de atencao, fadiga e
        distracao para simular alertas do DMS.
      </div>

      <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Nivel de risco
            </p>
            <p className={`text-3xl font-semibold ${risk.tone}`}>{risk.score}%</p>
            <p className="text-sm text-[color:var(--muted)]">
              Status: <span className="font-semibold">{risk.label}</span>
            </p>
          </div>
          <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] px-4 py-2 text-xs text-[color:var(--muted)]">
            Alertas: {risk.score > 70 ? "Ativar" : "Monitorar"}
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <label className="space-y-2 text-sm text-[color:var(--muted)]">
            Atencao
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={attention}
              onChange={(event) => setAttention(Number(event.target.value))}
              className="w-full accent-[color:var(--accent)]"
            />
          </label>
          <label className="space-y-2 text-sm text-[color:var(--muted)]">
            Fadiga
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={fatigue}
              onChange={(event) => setFatigue(Number(event.target.value))}
              className="w-full accent-[color:var(--accent)]"
            />
          </label>
          <label className="space-y-2 text-sm text-[color:var(--muted)]">
            Distracao
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={distraction}
              onChange={(event) => setDistraction(Number(event.target.value))}
              className="w-full accent-[color:var(--accent)]"
            />
          </label>
        </div>

        <div className="mt-4 grid gap-3 text-sm text-[color:var(--muted)] sm:grid-cols-3">
          <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-3">
            <p className="text-xs uppercase tracking-[0.24em]">Camera</p>
            <p className="text-sm font-semibold text-[color:var(--foreground)]">
              Face + olhos
            </p>
          </div>
          <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-3">
            <p className="text-xs uppercase tracking-[0.24em]">Evento</p>
            <p className="text-sm font-semibold text-[color:var(--foreground)]">
              Piscar lento
            </p>
          </div>
          <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-3">
            <p className="text-xs uppercase tracking-[0.24em]">Acao</p>
            <p className="text-sm font-semibold text-[color:var(--foreground)]">
              Vibracao + som
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
