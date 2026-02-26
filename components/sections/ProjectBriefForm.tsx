"use client";

import { useMemo, useState, type ChangeEvent } from "react";
import CopyButton from "@/components/ui/CopyButton";
import type { SiteContent } from "@/data/site.types";

type Props = {
  content: SiteContent["contact"]["brief"];
  copyLabel: string;
  copiedLabel: string;
};

type FormState = {
  name: string;
  company: string;
  email: string;
  projectType: string;
  timeline: string;
  budget: string;
  goal: string;
};

const createInitialState = (): FormState => ({
  name: "",
  company: "",
  email: "",
  projectType: "",
  timeline: "",
  budget: "",
  goal: "",
});

export default function ProjectBriefForm({ content, copyLabel, copiedLabel }: Props) {
  const [form, setForm] = useState<FormState>(() => createInitialState());

  const summary = useMemo(() => {
    const lines: string[] = [];
    if (form.name) lines.push(`${content.fields.name.label}: ${form.name}`);
    if (form.company) lines.push(`${content.fields.company.label}: ${form.company}`);
    if (form.email) lines.push(`${content.fields.email.label}: ${form.email}`);
    if (form.projectType) lines.push(`${content.fields.projectType.label}: ${form.projectType}`);
    if (form.timeline) lines.push(`${content.fields.timeline.label}: ${form.timeline}`);
    if (form.budget) lines.push(`${content.fields.budget.label}: ${form.budget}`);
    if (form.goal) lines.push(`${content.fields.goal.label}: ${form.goal}`);

    if (lines.length === 0) {
      return content.emptySummary;
    }

    return lines.join("\n");
  }, [content, form]);

  const hasSummary = summary !== content.emptySummary;
  const subject = encodeURIComponent(content.title);
  const body = encodeURIComponent(summary);
  const emailHref = `mailto:matheussiqueirahub@gmail.com?subject=${subject}&body=${body}`;
  const whatsappHref = `https://wa.me/5581999203683?text=${encodeURIComponent(
    `${content.title}\n\n${summary}`
  )}`;

  const handleChange =
    (field: keyof FormState) =>
    (
      event: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleDisabledClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!hasSummary) {
      event.preventDefault();
    }
  };

  return (
    <div className="card card-muted contact-brief" data-reveal>
      <div className="card-header text-left items-start">
        <p className="card-title text-left">{content.title}</p>
        <p className="card-subtitle text-left">{content.description}</p>
      </div>

      <form className="brief-form" onSubmit={(event) => event.preventDefault()}>
        <div className="brief-grid sm:grid-cols-2">
          <div className="form-field">
            <label className="form-label" htmlFor="brief-name">
              {content.fields.name.label}
            </label>
            <input
              id="brief-name"
              className="form-input"
              type="text"
              placeholder={content.fields.name.placeholder}
              value={form.name}
              onChange={handleChange("name")}
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="brief-company">
              {content.fields.company.label}
            </label>
            <input
              id="brief-company"
              className="form-input"
              type="text"
              placeholder={content.fields.company.placeholder}
              value={form.company}
              onChange={handleChange("company")}
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="brief-email">
              {content.fields.email.label}
            </label>
            <input
              id="brief-email"
              className="form-input"
              type="email"
              placeholder={content.fields.email.placeholder}
              value={form.email}
              onChange={handleChange("email")}
            />
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="brief-type">
              {content.fields.projectType.label}
            </label>
            <select
              id="brief-type"
              className="form-select"
              value={form.projectType}
              onChange={handleChange("projectType")}
            >
              <option value="" />
              {content.projectTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="brief-timeline">
              {content.fields.timeline.label}
            </label>
            <select
              id="brief-timeline"
              className="form-select"
              value={form.timeline}
              onChange={handleChange("timeline")}
            >
              <option value="" />
              {content.timelines.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label className="form-label" htmlFor="brief-budget">
              {content.fields.budget.label}
            </label>
            <select
              id="brief-budget"
              className="form-select"
              value={form.budget}
              onChange={handleChange("budget")}
            >
              <option value="" />
              {content.budgets.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="brief-goal">
            {content.fields.goal.label}
          </label>
          <textarea
            id="brief-goal"
            className="form-textarea"
            placeholder={content.fields.goal.placeholder}
            value={form.goal}
            onChange={handleChange("goal")}
          />
        </div>
      </form>

      <div className="form-field">
        <span className="form-label">{content.summaryTitle}</span>
        <div className="brief-summary" aria-live="polite">
          {summary}
        </div>
        <span className="form-hint">{content.summaryHint}</span>
      </div>

      <div className="brief-actions">
        <CopyButton value={summary} label={copyLabel} copiedLabel={copiedLabel} />
        <a
          href={emailHref}
          onClick={handleDisabledClick}
          aria-disabled={!hasSummary}
          tabIndex={hasSummary ? 0 : -1}
          className="btn-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
        >
          {content.emailCta}
        </a>
        <a
          href={whatsappHref}
          onClick={handleDisabledClick}
          aria-disabled={!hasSummary}
          tabIndex={hasSummary ? 0 : -1}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline btn-whatsapp focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)]/40"
        >
          {content.whatsappCta}
        </a>
      </div>
    </div>
  );
}

