"use client";

import { useState } from "react";

type Msg = { role: "user" | "bot"; text: string };

export default function ChatbotDemo() {
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot", text: "Olá! Esta é uma demo interativa do Chatbot IA API." },
  ]);

  async function send() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMsgs((m) => [...m, { role: "user", text }]);

    // ✅ Troque por fetch real se você tiver um endpoint seu.
    // Exemplo:
    // const r = await fetch('/api/chat', { method:'POST', body: JSON.stringify({ message: text }) })
    // const data = await r.json()

    const fake = `Resposta simulada: recebi "${text}"`;
    setTimeout(() => {
      setMsgs((m) => [...m, { role: "bot", text: fake }]);
    }, 350);
  }

  return (
    <div className="flex h-full w-full flex-col rounded-lg bg-white/5">
      <div className="border-b border-white/10 p-4">
        <h3 className="text-sm font-semibold">
          Demo interativa — Chatbot IA API
        </h3>
        <p className="mt-1 text-xs opacity-70">
          Aqui você pode ligar esta UI à sua API real depois.
        </p>
      </div>

      <div className="flex-1 space-y-3 overflow-auto p-4">
        {msgs.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-lg border border-white/10 px-3 py-2 text-sm ${
              m.role === "user" ? "ml-auto bg-white/10" : "bg-black/20"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2 border-t border-white/10 p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? send() : null)}
          placeholder="Digite uma mensagem…"
          className="flex-1 rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none"
        />
        <button
          onClick={send}
          className="rounded-md border border-white/10 px-3 py-2 text-sm hover:bg-white/5"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
