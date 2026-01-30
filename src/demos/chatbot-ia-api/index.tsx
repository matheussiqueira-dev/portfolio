"use client";

import { useEffect, useRef, useState } from "react";

const defaultResponses = [
  "Claro! Posso buscar no histórico de tickets e sugerir a próxima ação.",
  "Sugiro revisar o SLA deste cliente e priorizar o atendimento.",
  "Posso gerar um resumo do caso e registrar no log de atendimento.",
];

const keywordReplies: Record<string, string> = {
  sla: "Aqui está o SLA atual e o tempo restante para resposta.",
  erro: "Vamos verificar os logs e identificar a origem do erro.",
  pagamento: "Posso validar o status do pagamento e enviar confirmação.",
  "base de conhecimento": "Encontrei artigos relevantes na base de conhecimento.",
};

const getReply = (input: string) => {
  const lower = input.toLowerCase();
  const match = Object.keys(keywordReplies).find((key) => lower.includes(key));
  if (match) {
    const reply = keywordReplies[match as keyof typeof keywordReplies];
    if (reply) return reply;
  }
  const randomIndex = Math.floor(Math.random() * defaultResponses.length);
  return defaultResponses[randomIndex] ?? "Posso ajudar com essa análise.";
};

type Message = {
  id: number;
  role: "user" | "assistant";
  text: string;
};

export default function ChatbotIADemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      text: "Sou o assistente do time de suporte. Envie uma pergunta para simular um atendimento.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(2);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: idRef.current++,
      role: "user",
      text: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    window.setTimeout(() => {
      const reply: Message = {
        id: idRef.current++,
        role: "assistant",
        text: getReply(userMessage.text),
      };
      setMessages((prev) => [...prev, reply]);
      setIsTyping(false);
    }, 650);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4 text-xs text-[color:var(--muted)]">
        Demo interativa local (sem chamadas externas). Simula triagem, contexto e resposta para atendimento.
      </div>

      <div
        ref={containerRef}
        className="h-72 overflow-y-auto rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 text-sm text-[color:var(--foreground)]"
      >
        <div className="space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                message.role === "user"
                  ? "ml-auto bg-[color:var(--accent)]/20 text-[color:var(--foreground)]"
                  : "bg-[color:var(--surface-muted)] text-[color:var(--foreground)]"
              }`}
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)] mb-1">
                {message.role === "user" ? "Você" : "Assistente"}
              </p>
              <p>{message.text}</p>
            </div>
          ))}
          {isTyping ? (
            <div className="max-w-[60%] rounded-2xl bg-[color:var(--surface-muted)] px-3 py-2 text-sm text-[color:var(--muted)]">
              <p className="text-[11px] uppercase tracking-[0.2em] mb-1">Assistente</p>
              <p>Digitando…</p>
            </div>
          ) : null}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ex: Temos um problema de SLA no ticket 1024"
          className="flex-1 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm text-[color:var(--foreground)] placeholder:text-[color:var(--muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
        />
        <button
          type="submit"
          className="btn-primary whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
