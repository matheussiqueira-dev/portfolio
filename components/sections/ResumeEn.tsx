import { resumeEn } from "@/data/resume.en";
import PrintButton from "../ui/PrintButton";
import LanguageSwitch from "../ui/LanguageSwitch";

export default function ResumeEn() {
  return (
    <div className="max-w-5xl mx-auto space-y-10 text-slate-100 print:text-black print:space-y-6">
      <header className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10 print:border-none print:bg-transparent print:p-0">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 print:text-slate-600">
              Resume
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-white print:text-black">
              {resumeEn.name}
            </h1>
            <p className="text-lg text-slate-300 print:text-slate-700">
              {resumeEn.role}
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-slate-300 print:text-slate-700">
            <span>Recife, Pernambuco - Brazil</span>
            <a href="mailto:matheussiqueirahub@gmail.com" className="underline w-fit">
              matheussiqueirahub@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/matheussiqueira-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline w-fit"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/matheussiqueira-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline w-fit"
            >
              GitHub
            </a>
            <a
              href="https://wa.me/5581999203683"
              target="_blank"
              rel="noopener noreferrer"
              className="underline w-fit text-emerald-400 font-medium"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 print:hidden">
          <LanguageSwitch />
          <PrintButton label="Download Resume (PDF)" />
        </div>
      </header>

      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4 print:border-none print:bg-transparent print:p-0">
          <h2 className="text-xl font-semibold text-white print:text-black">
            Professional Summary
          </h2>
          <p className="text-slate-300 print:text-slate-700">
            {resumeEn.summary}
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-300 print:text-slate-700">
            {resumeEn.summaryBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4 print:border-none print:bg-transparent print:p-0">
          <h2 className="text-xl font-semibold text-white print:text-black">
            Results
          </h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-300 print:text-slate-700">
            {resumeEn.results.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-6 print:border-none print:bg-transparent print:p-0">
          <h2 className="text-xl font-semibold text-white print:text-black">
            Experience
          </h2>
          {resumeEn.experience.map((item) => (
            <div key={item.company} className="space-y-3">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400 print:text-slate-600">
                  {item.period}
                </p>
                <h3 className="text-lg font-semibold text-white print:text-black">
                  {item.role}
                </h3>
                <p className="text-sm text-slate-400 print:text-slate-600">
                  {item.company}
                  {item.location ? ` — ${item.location}` : ""}
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-300 print:text-slate-700">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        </div>

        <aside className="space-y-8">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-6 print:border-none print:bg-transparent print:p-0">
            <h2 className="text-xl font-semibold text-white print:text-black">
              Skills & Tools
            </h2>
            {resumeEn.skills.groups.map((group) => (
              <div key={group.title} className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 print:text-slate-600">
                  {group.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200 print:text-slate-700 print:border-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-6 print:border-none print:bg-transparent print:p-0">
            <h2 className="text-xl font-semibold text-white print:text-black">
              Education
            </h2>
            {resumeEn.education.groups.map((group) => (
              <div key={group.title} className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 print:text-slate-600">
                  {group.title}
                </p>
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <div key={`${group.title}-${item.course}`} className="space-y-1">
                      <p className="text-sm font-semibold text-white print:text-black">
                        {item.course}
                      </p>
                      <p className="text-sm text-slate-400 print:text-slate-600">
                        {item.institution} - {item.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </aside>
      </div>
    </div>
  );
}
