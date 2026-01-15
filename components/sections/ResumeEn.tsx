import { resumeEn } from "../../data/resume.en";
import PrintButton from "../ui/PrintButton";
import LanguageSwitch from "../ui/LanguageSwitch";

export default function ResumeEn() {
  return (
    <main className="max-w-3xl mx-auto flex flex-col gap-10 text-slate-100 print:text-black print:gap-6 print:px-0">
      <header className="flex flex-col gap-3 print:gap-2">
        <h1 className="text-4xl font-bold print:text-2xl text-white">
          {resumeEn.name}
        </h1>

        <p className="text-lg print:text-base text-slate-300">
          {resumeEn.role}
        </p>

        <LanguageSwitch current="en" />

        <div className="flex flex-col gap-1 text-sm text-slate-300">
          <span>Recife, Pernambuco - Brazil</span>

          <a
            href="mailto:matheussiqueirahub@gmail.com"
            className="underline w-fit"
          >
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
        </div>

        <PrintButton label="Download Resume (PDF)" />
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-2 print:text-lg text-white">
          Summary
        </h2>
        <p className="text-slate-300">{resumeEn.summary}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 print:text-lg text-white">
          Experience
        </h2>

        {resumeEn.experience.map((item) => (
          <div key={item.company} className="mb-4">
            <strong className="text-slate-100">
              {item.role} - {item.company}
            </strong>
            <div className="text-sm text-slate-400">{item.period}</div>
            <p className="text-slate-300">{item.description}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 print:text-lg text-white">
          Education
        </h2>

        {resumeEn.education.map((item) => (
          <div key={item.institution} className="mb-2">
            <strong className="text-slate-100">{item.course}</strong>
            <div className="text-sm text-slate-400">
              {item.institution} - {item.period}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 print:text-lg text-white">
          Skills
        </h2>

        <ul className="list-disc list-inside text-slate-300">
          {resumeEn.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
