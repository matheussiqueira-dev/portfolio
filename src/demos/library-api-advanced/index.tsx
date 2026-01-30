"use client";

import { useMemo, useState } from "react";

const endpoints = [
  {
    id: "books",
    method: "GET",
    path: "/books",
    description: "Lista paginada com filtros por título, autor e status.",
    response: {
      total: 124,
      items: [
        { id: 401, title: "Clean Architecture", status: "available" },
        { id: 402, title: "Designing Data-Intensive Apps", status: "loaned" },
      ],
    },
  },
  {
    id: "loan",
    method: "POST",
    path: "/loans",
    description: "Registra empréstimo validando limites, prazos e disponibilidade.",
    response: {
      loanId: 9321,
      status: "approved",
      dueDate: "2026-03-12",
    },
  },
  {
    id: "audit",
    method: "GET",
    path: "/audit",
    description: "Trilha de auditoria para compliance e rastreabilidade.",
    response: {
      entries: [
        { id: "a-1001", action: "loan_created", actor: "admin" },
        { id: "a-1002", action: "book_returned", actor: "librarian" },
      ],
    },
  },
];

const buildSampleResponse = (endpointId: string) => {
  const base = endpoints.find((item) => item.id === endpointId);
  if (!base) return {};
  if (endpointId === "loan") {
    const randomId = Math.floor(Math.random() * 9000 + 1000);
    return {
      ...base.response,
      loanId: randomId,
      dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14)
        .toISOString()
        .split("T")[0],
    };
  }
  return base.response;
};

export default function LibraryApiAdvancedDemo() {
  const [activeId, setActiveId] = useState("books");
  const [response, setResponse] = useState(() => buildSampleResponse("books"));

  const activeEndpoint = useMemo(
    () => endpoints.find((item) => item.id === activeId) ?? endpoints[0]!,
    [activeId]
  );

  const handleRun = () => {
    setResponse(buildSampleResponse(activeId));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4 text-xs text-[color:var(--muted)]">
        Mini simulador de API: escolha um endpoint e veja o payload esperado. Sem chamadas externas.
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Endpoint</p>
          <div className="flex flex-wrap gap-2">
            {endpoints.map((endpoint) => {
              const isActive = endpoint.id === activeId;
              return (
                <button
                  key={endpoint.id}
                  type="button"
                  onClick={() => setActiveId(endpoint.id)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 ${
                    isActive
                      ? "border-[color:var(--accent)]/60 text-[color:var(--foreground)]"
                      : "border-[color:var(--border)] text-[color:var(--muted)] hover:border-[color:var(--accent)]/40"
                  }`}
                >
                  {endpoint.method} {endpoint.path}
                </button>
              );
            })}
          </div>

          <div className="space-y-2">
            <p className="text-sm font-semibold text-[color:var(--foreground)]">
              {activeEndpoint.method} {activeEndpoint.path}
            </p>
            <p className="text-sm text-[color:var(--muted)]">
              {activeEndpoint.description}
            </p>
            <button
              type="button"
              onClick={handleRun}
              className="btn-outline w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              Executar simulação
            </button>
          </div>
        </div>

        <div className="space-y-3 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)]">Resposta</p>
          <pre className="max-h-72 overflow-auto rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3 text-xs text-[color:var(--foreground)]">
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
