import { resumeEn } from "../../data/resume.en";
import PrintButton from "../ui/PrintButton";
import LanguageSwitch from "../ui/LanguageSwitch";

export default function ResumeEn() {

  return (
    <main className="max-w-3xl mx-auto flex flex-col gap-10 print:gap-6 print:px-0">
      <header className="flex flex-col gap-3 print:gap-2">
        <h1 className="text-4xl font-bold print:text-2xl">
          {resumeEn.name}
        </h1>

        <p className="text-lg print:text-base">
          {resumeEn.role}
        </p>

        <div className="flex flex-col gap-1 text-sm">
          <span>Recife, Pernambuco — Brazil</span>

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

        <PrintButton />
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-2 print:text-lg">
          Summary
        </h2>
        <p>{resumeEn.summary}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 print:text-lg">
          Experience
        </h2>

        {resumeEn.experience.map((item) => (
          <div key={item.company} className="mb-4">
            <strong>
              {item.role} — {item.company}
            </strong>
            <div className="text-sm">{item.period}</div>
            <p>{item.description}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 print:text-lg">
          Education
        </h2>

        {resumeEn.education.map((item) => (
          <div key={item.institution} className="mb-2">
            <strong>{item.course}</strong>
            <div className="text-sm">
              {item.institution} — {item.period}
            </div>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 print:text-lg">
          Skills
        </h2>

        <ul className="list-disc list-inside">
          {resumeEn.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
