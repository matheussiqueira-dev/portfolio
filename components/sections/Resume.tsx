import { resume } from "../../data/resume";
import PrintButton from "../ui/PrintButton";
import LanguageSwitch from "../ui/LanguageSwitch";

export default function Resume() {
  return (
    <main className="max-w-3xl mx-auto flex flex-col gap-10 text-slate-100 print:text-black print:gap-6 print:px-0">
      <header className="flex flex-col gap-3 print:gap-2">
        <h1 className="text-4xl font-bold print:text-2xl text-white">
          {resume.name}
        </h1>

        <p className="text-lg print:text-base text-slate-300">
          {resume.role}
        </p>

        <LanguageSwitch current="pt" />

        <div className="flex flex-col gap-1 text-sm text-slate-300">
          <span>Recife, Pernambuco - Brasil</span>

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

          <a
            href="https://wa.me/5581999203683"
            target="_blank"
            rel="noopener noreferrer"
            className="underline w-fit text-emerald-400 font-medium"
          >
            WhatsApp
          </a>
        </div>

        <PrintButton />
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-2 print:text-lg text-white">
          Resumo
        </h2>
        <p className="text-slate-300">{resume.summary}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 print:text-lg text-white">
          Experiência
        </h2>

        {resume.experience.map((item) => (
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
          Formação
        </h2>

        {resume.education.map((item) => (
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
          Competências
        </h2>

        <ul className="list-disc list-inside text-slate-300">
          {resume.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
