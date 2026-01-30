"use client";

import { useState } from "react";

const gestures = [
  { id: "swipe-left", label: "Swipe Esquerda", action: "Voltar painel" },
  { id: "swipe-right", label: "Swipe Direita", action: "Avancar painel" },
  { id: "open-palm", label: "Palma Aberta", action: "Pausar dashboard" },
  { id: "pinch", label: "Pinca", action: "Selecionar cartao" },
];

export default function TouchlessGestureDemo() {
  const [active, setActive] = useState(gestures[0]!);
  const [panel, setPanel] = useState(1);

  const handleGesture = (gestureId: string) => {
    const gesture = gestures.find((item) => item.id === gestureId) ?? gestures[0]!;
    setActive(gesture);
    if (gesture.id === "swipe-right") setPanel((prev) => Math.min(prev + 1, 4));
    if (gesture.id === "swipe-left") setPanel((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4 text-xs text-[color:var(--muted)]">
        Mini demo local representativa: selecione um gesto para simular a navegacao
        touchless em dashboards.
      </div>

      <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 space-y-4">
        <div className="grid gap-2 sm:grid-cols-2">
          {gestures.map((gesture) => {
            const isActive = gesture.id === active.id;
            return (
              <button
                key={gesture.id}
                type="button"
                onClick={() => handleGesture(gesture.id)}
                className={`rounded-xl border px-4 py-3 text-left text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 ${
                  isActive
                    ? "border-[color:var(--accent)]/60 bg-[color:var(--surface-muted)] text-[color:var(--foreground)]"
                    : "border-[color:var(--border)] text-[color:var(--muted)]"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.24em]">Gesto</p>
                <p className="text-base font-semibold">{gesture.label}</p>
                <p className="text-xs text-[color:var(--muted)]">{gesture.action}</p>
              </button>
            );
          })}
        </div>

        <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4">
          <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--muted)]">
            Painel ativo
          </p>
          <div className="mt-2 flex items-center gap-3">
            <span className="text-2xl font-semibold text-[color:var(--foreground)]">
              {panel}
            </span>
            <div className="flex-1">
              <div className="h-2 w-full rounded-full bg-[color:var(--border)]">
                <div
                  className="h-2 rounded-full bg-[color:var(--accent)]"
                  style={{ width: `${(panel / 4) * 100}%` }}
                />
              </div>
            </div>
          </div>
          <p className="mt-2 text-sm text-[color:var(--muted)]">
            Acao: <span className="font-semibold">{active.action}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
