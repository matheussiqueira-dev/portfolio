"use client";

import { useMemo, useState } from "react";
import type { InteractiveDemoProps } from "./types";

type TabKey = "request" | "response" | "logs";

const tabs: TabKey[] = ["request", "response", "logs"];

export function ApiPlaygroundDemo({ locale }: InteractiveDemoProps) {
  const language = locale ?? "pt";
  const labels = useMemo(
    () =>
      language === "pt"
        ? {
            title: "API Playground (mock)",
            description:
              "Simule uma chamada local para validar payloads e respostas.",
            requestLabel: "Request JSON",
            responseLabel: "Resposta",
            logsLabel: "Logs",
            simulateLabel: "Simular chamada",
            helper: "Sem chamadas reais. Tudo roda no navegador.",
            invalidJson: "JSON inválido. Ajuste o payload.",
            logRequestSent: "Requisição simulada.",
            logInvalidJson: "Falha: JSON inválido.",
            tabs: {
              request: "Request",
              response: "Response",
              logs: "Logs",
            },
            responseHint: "Resposta mock baseada no payload.",
          }
        : {
            title: "API Playground (mock)",
            description:
              "Simulate a local request to validate payloads and responses.",
            requestLabel: "Request JSON",
            responseLabel: "Response",
            logsLabel: "Logs",
            simulateLabel: "Simulate call",
            helper: "No real network calls. Everything runs in-browser.",
            invalidJson: "Invalid JSON. Please fix the payload.",
            logRequestSent: "Request simulated.",
            logInvalidJson: "Error: invalid JSON.",
            tabs: {
              request: "Request",
              response: "Response",
              logs: "Logs",
            },
            responseHint: "Mock response derived from the payload.",
          },
    [language]
  );

  const defaultRequest = useMemo(
    () =>
      JSON.stringify(
        {
          sessionId: "demo-session-01",
          customer: {
            name: "Matheus",
            segment: "B2B",
            plan: "Pro",
          },
          question: "Quais planos estão ativos este mês?",
        },
        null,
        2
      ),
    []
  );

  const [activeTab, setActiveTab] = useState<TabKey>("request");
  const [requestBody, setRequestBody] = useState(defaultRequest);
  const [responseBody, setResponseBody] = useState(
    JSON.stringify(
      {
        ok: true,
        message: "Resposta simulada pronta.",
        data: {
          activePlans: ["Pro", "Enterprise"],
          responseTimeMs: 128,
        },
      },
      null,
      2
    )
  );
  const [logs, setLogs] = useState<string[]>([]);

  const runSimulation = () => {
    const timestamp = new Date().toLocaleTimeString(
      language === "pt" ? "pt-BR" : "en-US",
      { hour: "2-digit", minute: "2-digit", second: "2-digit" }
    );

    try {
      const payload = JSON.parse(requestBody) as Record<string, unknown>;
      const mockResponse = {
        ok: true,
        message:
          language === "pt"
            ? "Simulação concluída com sucesso."
            : "Simulation completed successfully.",
        received: payload,
        meta: {
          requestId: `mock-${Date.now().toString(36)}`,
          responseTimeMs: Math.floor(90 + Math.random() * 140),
        },
      };

      setResponseBody(JSON.stringify(mockResponse, null, 2));
      setLogs((prev) => [
        `${timestamp} · ${labels.logRequestSent}`,
        ...prev,
      ]);
      setActiveTab("response");
    } catch (_error) {
      setResponseBody(
        JSON.stringify(
          { ok: false, error: labels.invalidJson },
          null,
          2
        )
      );
      setLogs((prev) => [
        `${timestamp} · ${labels.logInvalidJson}`,
        ...prev,
      ]);
      setActiveTab("response");
    }
  };

  return (
    <section className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 shadow-sm">
      <header className="space-y-2">
        <h2 className="text-xl font-semibold text-[color:var(--foreground)]">
          {labels.title}
        </h2>
        <p className="text-sm text-[color:var(--muted)]">
          {labels.description}
        </p>
      </header>

      <div className="mt-6 space-y-4">
        <div
          role="tablist"
          aria-label={labels.title}
          className="flex flex-wrap gap-2"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`demo-tab-${tab}`}
                className={`rounded-full border px-4 py-1.5 text-xs transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40 ${
                  isActive
                    ? "border-[color:var(--accent)] text-[color:var(--accent)]"
                    : "border-[color:var(--border)] text-[color:var(--muted)] hover:border-[color:var(--accent)]/40"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {labels.tabs[tab]}
              </button>
            );
          })}
        </div>

        <div
          id="demo-tab-request"
          role="tabpanel"
          hidden={activeTab !== "request"}
          className="space-y-3"
        >
          <label
            htmlFor="api-playground-request"
            className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]"
          >
            {labels.requestLabel}
          </label>
          <textarea
            id="api-playground-request"
            value={requestBody}
            onChange={(event) => setRequestBody(event.target.value)}
            className="min-h-[180px] w-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4 font-mono text-xs text-[color:var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
          />
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={runSimulation}
              className="btn-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
            >
              {labels.simulateLabel}
            </button>
            <span className="text-xs text-[color:var(--muted)]">
              {labels.helper}
            </span>
          </div>
        </div>

        <div
          id="demo-tab-response"
          role="tabpanel"
          hidden={activeTab !== "response"}
          className="space-y-3"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
            {labels.responseLabel}
          </p>
          <pre className="min-h-[180px] whitespace-pre-wrap rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4 font-mono text-xs text-[color:var(--foreground)]">
            {responseBody}
          </pre>
          <p className="text-xs text-[color:var(--muted)]">
            {labels.responseHint}
          </p>
        </div>

        <div
          id="demo-tab-logs"
          role="tabpanel"
          hidden={activeTab !== "logs"}
          className="space-y-3"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)]">
            {labels.logsLabel}
          </p>
          <div className="min-h-[120px] rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-muted)] p-4 text-xs text-[color:var(--muted)]">
            {logs.length ? (
              <ul className="space-y-2">
                {logs.map((entry, index) => (
                  <li key={`${entry}-${index}`}>{entry}</li>
                ))}
              </ul>
            ) : (
              <p>
                {language === "pt"
                  ? "Nenhuma execução registrada ainda."
                  : "No executions recorded yet."}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
