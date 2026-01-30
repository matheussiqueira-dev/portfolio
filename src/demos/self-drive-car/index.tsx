"use client";

import { useMemo, useState } from "react";

const modes = [
  { id: "auto", label: "Autonomo" },
  { id: "manual", label: "Manual assistido" },
] as const;

export default function SelfDriveCarDemo() {
  const [mode, setMode] = useState<(typeof modes)[number]["id"]>("auto");
  const [speed, setSpeed] = useState(68);
  const [lane, setLane] = useState(2);

  const status = useMemo(() => {
    if (speed > 90) return "Risco alto: reduzir velocidade";
    if (speed > 70) return "Atencao: monitorar trafego";
    return "Velocidade dentro do ideal";
  }, [speed]);

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4 text-xs text-[color:var(--muted)]">
        Mini demo local representativa: ajuste modo, velocidade e faixa para
        simular a decisao do carro autonomo.
      </div>

      <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">
              Velocidade
            </p>
            <p className="text-3xl font-semibold text-[color:var(--foreground)]">
              {speed} km/h
            </p>
            <p className="text-sm text-[color:var(--muted)]">{status}</p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            {modes.map((item) => {
              const active = item.id === mode;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setMode(item.id)}
                  className={`rounded-full border px-3 py-1 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 ${
                    active
                      ? "border-[color:var(--accent)]/60 text-[color:var(--foreground)]"
                      : "border-[color:var(--border)] text-[color:var(--muted)]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm text-[color:var(--muted)]">
            Velocidade alvo
            <input
              type="range"
              min={30}
              max={120}
              value={speed}
              onChange={(event) => setSpeed(Number(event.target.value))}
              className="mt-2 w-full accent-[color:var(--accent)]"
            />
          </label>

          <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-3">
            <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
              Faixa atual
            </p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {[1, 2, 3].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setLane(value)}
                  className={`rounded-lg border px-3 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 ${
                    lane === value
                      ? "border-[color:var(--accent)]/60 text-[color:var(--foreground)]"
                      : "border-[color:var(--border)] text-[color:var(--muted)]"
                  }`}
                >
                  Faixa {value}
                </button>
              ))}
            </div>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              Modo atual: <span className="font-semibold">{mode === "auto" ? "Autonomo" : "Assistido"}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
