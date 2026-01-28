"use client";

import { resumeEn } from "@/data/resume.en";
import PrintButton from "../ui/PrintButton";
import LanguageSwitch from "../ui/LanguageSwitch";

export default function ResumeEn() {
  return (
    <div className="max-w-5xl mx-auto space-y-10 text-[color:var(--foreground)] print:text-black print:space-y-6">
      <header className="card rounded-3xl p-8 md:p-10 print:border-none print:bg-transparent print:p-0">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--muted)] print:text-slate-600">
              Resume
            </p>
            <h1 className="text-4xl font-semibold text-[color:var(--foreground)] md:text-5xl print:text-black">
              {resumeEn.name}
            </h1>
            <p className="text-base font-semibold text-[color:var(--muted-strong)] md:text-lg print:text-slate-700">
              Full Stack Developer | Data • AI • Software
            </p>
            <p className="text-sm text-[color:var(--muted)] print:text-slate-700">
              {resumeEn.headline}
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-[color:var(--muted)] print:text-slate-700">
            <span>Recife, Pernambuco - Brazil</span>
            <a
              href="mailto:matheussiqueirahub@gmail.com"
              className="underline w-fit text-[color:var(--foreground)]"
            >
              matheussiqueirahub@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/matheussiqueira-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline w-fit text-[#0A66C2] hover:text-[#084E96] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/matheussiqueira-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline w-fit text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://wa.me/5581999203683"
              target="_blank"
              rel="noopener noreferrer"
              className="underline w-fit text-[color:var(--whatsapp)] font-medium"
            >
              WhatsApp: +55 (81) 99920-3683
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 print:hidden">
          <LanguageSwitch />
          <PrintButton label="Download Resume (PDF)" />
        </div>
      </header>

      <div className="grid-prose">
        <div className="space-y-8">
          <section className="card rounded-3xl p-6 space-y-4 print:border-none print:bg-transparent print:p-0">
            <h2 className="text-xl font-semibold text-[color:var(--foreground)] print:text-black">
              Professional Summary
            </h2>
            <p className="text-[color:var(--muted)] print:text-slate-700">
              {resumeEn.summary}
            </p>
          </section>

          <section className="card rounded-3xl p-6 space-y-6 print:border-none print:bg-transparent print:p-0">
            <h2 className="text-xl font-semibold text-[color:var(--foreground)] print:text-black">
              Professional Experience
            </h2>
            {resumeEn.experience.map((item) => (
              <div key={item.company} className="space-y-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)] print:text-slate-600">
                    {item.period}
                  </p>
                  <h3 className="text-lg font-semibold text-[color:var(--foreground)] print:text-black">
                    {item.role}
                  </h3>
                  <p className="text-sm text-[color:var(--muted)] print:text-slate-600">
                    {item.company}
                    {item.location ? ` - ${item.location}` : ""}
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--muted)] print:text-slate-700">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>

        <aside className="space-y-8">
          <section className="card rounded-3xl p-6 space-y-4 print:border-none print:bg-transparent print:p-0">
            <h2 className="text-xl font-semibold text-[color:var(--foreground)] print:text-black">
              Core Skills
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--muted)] print:text-slate-700">
              {resumeEn.coreSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className="card rounded-3xl p-6 space-y-6 print:border-none print:bg-transparent print:p-0">
            <h2 className="text-xl font-semibold text-[color:var(--foreground)] print:text-black">
              Education
            </h2>
            {resumeEn.education.groups.map((group) => (
              <div key={group.title} className="space-y-3">
                <h3 className="text-sm uppercase tracking-[0.2em] text-[color:var(--muted)] print:text-slate-600">
                  {group.title}
                </h3>
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <div key={`${group.title}-${item.course}`} className="space-y-1">
                      <p className="text-sm font-semibold text-[color:var(--foreground)] print:text-black">
                        {item.course}
                      </p>
                      <p className="text-sm text-[color:var(--muted)] print:text-slate-600">
                        {item.institution} - {item.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="card rounded-3xl p-6 space-y-4 print:border-none print:bg-transparent print:p-0">
            <h2 className="text-xl font-semibold text-[color:var(--foreground)] print:text-black">
              Certifications
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--muted)] print:text-slate-700">
              {resumeEn.certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="card rounded-3xl p-6 space-y-4 print:border-none print:bg-transparent print:p-0">
            <h2 className="text-xl font-semibold text-[color:var(--foreground)] print:text-black">
              Languages
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-[color:var(--muted)] print:text-slate-700">
              {resumeEn.languages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="card rounded-3xl p-6 space-y-4 print:border-none print:bg-transparent print:p-0">
            <h2 className="text-xl font-semibold text-[color:var(--foreground)] print:text-black">
              {resumeEn.contact.title}
            </h2>
            <p className="text-sm text-[color:var(--muted)] print:text-slate-700">
              {resumeEn.contact.description}
            </p>
            <div className="space-y-3 text-sm">
              {resumeEn.contact.links.map((link) => {
                const isExternal = link.href.startsWith("http");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="flex flex-col gap-1 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3 text-[color:var(--foreground)] transition hover:border-[color:var(--accent)]/40 print:border-slate-300 print:bg-transparent print:text-slate-700"
                  >
                    <span className="text-xs uppercase tracking-[0.2em] text-[color:var(--muted)] print:text-slate-600">
                      {link.label}
                    </span>
                    <span className="text-sm text-[color:var(--muted-strong)] print:text-slate-700">
                      {link.value}
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
