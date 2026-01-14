import { resume } from "../../data/resume";
import PrintButton from "../ui/PrintButton";
import LanguageSwitch from "../ui/LanguageSwitch";

export default function Resume() {
  return (
    <main className="max-w-3xl mx-auto flex flex-col gap-10 print:gap-6 print:px-0">
      {/* HEADER */}
      <header className="flex flex-col gap-3 print:gap-2">
        <h1 className="text-4xl font-bold print:text-2xl">
          {resume.name}
        </h1>

        <p className="text-lg print:text-base">
          {resume.role}
        </p>

        {/* LANGUAGE SWITCH */}
        <LanguageSwitch current="pt" />

        {/* CONTACT INFO */}
        <div className="flex flex-col gap-1 text-sm">
          <span>Recife, Pernambuco — Brasil</span>

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
            className="underline w-fit text-green-600 font-medium"
          >
            WhatsApp
          </a>
        </div>

        {/* PDF BUTTON */}
        <PrintButton />
      </header>

      {/* RESUMO */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 print:text-lg">
          Resumo
        </h2>
        <p>{resume.summary}</p>
      </section>

      {/* EXPERIÊNCIA */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 print:text-lg">
          Experiência
        </h2>

        {resume.experience.map((item) => (
          <div key={item.company} className="mb-4">
            <strong>
              {item.role} — {item.company}
            </strong>
            <div className="text-sm">{item.period}</div>
            <p>{item.description}</p>
          </div>
        ))}
      </section>

      {/* FORMAÇÃO */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 print:text-lg">
          Formação
        </h2>

        {resume.education.map((item) => (
          <div key={item.institution} className="mb-2">
            <strong>{item.course}</strong>
            <div className="text-sm">
              {item.institution} — {item.period}
            </div>
          </div>
        ))}
      </section>

      {/* COMPETÊNCIAS */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 print:text-lg">
          Competências
        </h2>

        <ul className="list-disc list-inside">
          {resume.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
