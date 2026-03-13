"use client";

import { useMemo, useState } from "react";

import type { SiteContent } from "@/data/site.types";

type ContactBriefBuilderProps = {
  brief: SiteContent["contact"]["brief"];
  email: string;
  whatsappUrl: string;
  copyLabel: string;
  copiedLabel: string;
};

export default function ContactBriefBuilder({
  brief,
  email,
  whatsappUrl,
  copyLabel,
  copiedLabel,
}: ContactBriefBuilderProps) {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    projectType: brief.projectTypes[0] ?? "",
    timeline: brief.timelines[0] ?? "",
    budget: brief.budgets[0] ?? "",
    goal: "",
  });

  const summary = useMemo(() => {
    const entries: Array<[string, string]> = [
      [brief.fields.name.label, form.name] as [string, string],
      [brief.fields.company.label, form.company] as [string, string],
      [brief.fields.email.label, form.email] as [string, string],
      [brief.fields.projectType.label, form.projectType] as [string, string],
      [brief.fields.timeline.label, form.timeline] as [string, string],
      [brief.fields.budget.label, form.budget] as [string, string],
      [brief.fields.goal.label, form.goal] as [string, string],
    ].filter((entry): entry is [string, string] => entry[1].trim().length > 0);

    if (!entries.length) {
      return "";
    }

    return entries.map(([label, value]) => `${label}: ${value}`).join("\n");
  }, [brief, form]);

  const encodedSummary = encodeURIComponent(summary || brief.emptySummary);
  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(brief.title)}&body=${encodedSummary}`;
  const whatsappHref = `${whatsappUrl}?text=${encodedSummary}`;

  async function handleCopy() {
    if (!summary) {
      return;
    }

    await navigator.clipboard.writeText(summary);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
      <div className="grid gap-4">
        <label className="grid gap-2">
          <span className="ui-label text-xs text-[color:var(--muted)]">
            {brief.fields.name.label}
          </span>
          <input
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            placeholder={brief.fields.name.placeholder}
            className="rounded-[1rem] border border-[color:var(--border)] bg-transparent px-4 py-3 text-sm text-[color:var(--foreground)] outline-none"
          />
        </label>

        <label className="grid gap-2">
          <span className="ui-label text-xs text-[color:var(--muted)]">
            {brief.fields.company.label}
          </span>
          <input
            value={form.company}
            onChange={(event) =>
              setForm((current) => ({ ...current, company: event.target.value }))
            }
            placeholder={brief.fields.company.placeholder}
            className="rounded-[1rem] border border-[color:var(--border)] bg-transparent px-4 py-3 text-sm text-[color:var(--foreground)] outline-none"
          />
        </label>

        <label className="grid gap-2">
          <span className="ui-label text-xs text-[color:var(--muted)]">
            {brief.fields.email.label}
          </span>
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            placeholder={brief.fields.email.placeholder}
            className="rounded-[1rem] border border-[color:var(--border)] bg-transparent px-4 py-3 text-sm text-[color:var(--foreground)] outline-none"
          />
        </label>

        <div className="grid gap-4 md:grid-cols-3">
          <label className="grid gap-2">
            <span className="ui-label text-xs text-[color:var(--muted)]">
              {brief.fields.projectType.label}
            </span>
            <select
              value={form.projectType}
              onChange={(event) =>
                setForm((current) => ({ ...current, projectType: event.target.value }))
              }
              className="rounded-[1rem] border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--foreground)] outline-none"
            >
              {brief.projectTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2">
            <span className="ui-label text-xs text-[color:var(--muted)]">
              {brief.fields.timeline.label}
            </span>
            <select
              value={form.timeline}
              onChange={(event) =>
                setForm((current) => ({ ...current, timeline: event.target.value }))
              }
              className="rounded-[1rem] border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--foreground)] outline-none"
            >
              {brief.timelines.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2">
            <span className="ui-label text-xs text-[color:var(--muted)]">
              {brief.fields.budget.label}
            </span>
            <select
              value={form.budget}
              onChange={(event) =>
                setForm((current) => ({ ...current, budget: event.target.value }))
              }
              className="rounded-[1rem] border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-sm text-[color:var(--foreground)] outline-none"
            >
              {brief.budgets.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="grid gap-2">
          <span className="ui-label text-xs text-[color:var(--muted)]">
            {brief.fields.goal.label}
          </span>
          <textarea
            value={form.goal}
            onChange={(event) => setForm((current) => ({ ...current, goal: event.target.value }))}
            placeholder={brief.fields.goal.placeholder}
            rows={5}
            className="rounded-[1rem] border border-[color:var(--border)] bg-transparent px-4 py-3 text-sm text-[color:var(--foreground)] outline-none"
          />
        </label>
      </div>

      <div className="encom-panel p-6">
        <p className="section-title text-lg text-[color:var(--foreground)]">{brief.summaryTitle}</p>
        <p className="mt-3 text-sm text-[color:var(--muted)]">{brief.summaryHint}</p>
        <div className="mt-5 rounded-[1rem] border border-[color:var(--border)] bg-[color:var(--glow-soft)] p-4">
          <pre className="whitespace-pre-wrap font-[var(--font-body)] text-sm text-[color:var(--foreground)]">
            {summary || brief.emptySummary}
          </pre>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleCopy}
            disabled={!summary}
            className="tron-button"
            data-variant="secondary"
          >
            {copied ? copiedLabel : copyLabel}
          </button>
          <a href={mailtoHref} className="tron-button" data-variant="primary">
            {brief.emailCta}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="tron-button"
            data-variant="secondary"
          >
            {brief.whatsappCta}
          </a>
        </div>
      </div>
    </div>
  );
}
