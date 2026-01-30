"use client";

import { useMemo, useState } from "react";

export default function StressDemo() {
  const [sleep, setSleep] = useState(7);
  const [workload, setWorkload] = useState(5);
  const [mood, setMood] = useState(5);

  const score = useMemo(() => {
    // fórmula simples só pra demo interativa (não é diagnóstico)
    const s = (10 - sleep) * 8 + workload * 7 + (10 - mood) * 6;
    return Math.max(0, Math.min(100, Math.round(s)));
  }, [sleep, workload, mood]);

  const label =
    score < 25 ? "Baixo" : score < 55 ? "Moderado" : score < 80 ? "Alto" : "Muito alto";

  return (
    <div className="h-full w-full rounded-lg bg-white/5 p-4">
      <h3 className="text-sm font-semibold">Demo interativa — Detector de Stress</h3>
      <p className="mt-1 text-xs opacity-70">
        Simulação: ajuste os parâmetros e veja o resultado em tempo real.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span>Horas de sono</span>
            <span className="text-xs opacity-70">{sleep}h</span>
          </div>
          <input
            type="range"
            min={0}
            max={10}
            value={sleep}
            onChange={(e) => setSleep(Number(e.target.value))}
            className="w-full"
          />
        </label>

        <label className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span>Carga de trabalho</span>
            <span className="text-xs opacity-70">{workload}/10</span>
          </div>
          <input
            type="range"
            min={0}
            max={10}
            value={workload}
            onChange={(e) => setWorkload(Number(e.target.value))}
            className="w-full"
          />
        </label>

        <label className="space-y-2 text-sm sm:col-span-2">
          <div className="flex items-center justify-between">
            <span>Humor</span>
            <span className="text-xs opacity-70">{mood}/10</span>
          </div>
          <input
            type="range"
            min={0}
            max={10}
            value={mood}
            onChange={(e) => setMood(Number(e.target.value))}
            className="w-full"
          />
        </label>
      </div>

      <div className="mt-5 rounded-lg border border-white/10 bg-black/20 p-4">
        <div className="text-xs opacity-70">Score</div>
        <div className="mt-1 text-2xl font-semibold">{score}/100</div>
        <div className="mt-1 text-sm opacity-80">Nível: {label}</div>
      </div>
    </div>
  );
}
