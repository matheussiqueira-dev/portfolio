export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Sobre
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mt-3">
              Tecnologia com foco em execu??o
            </h2>
          </div>

          <div className="space-y-4 text-base md:text-lg leading-relaxed text-slate-300">
            <p>
              Sou estudante de Ci?ncia da Computa??o e desenvolvedor com foco em
              construir produtos digitais claros, escal?veis e f?ceis de manter.
            </p>
            <p>
              Atuo com dados, integra??es e automa??o para transformar objetivos
              de neg?cio em solu??es bem entregues.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/in/matheussiqueira-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit px-4 py-2 rounded-full border border-white/15 text-sm text-slate-200 transition hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Ver perfil completo no LinkedIn
          </a>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Foco atual</h3>
          <ul className="space-y-4 text-sm text-slate-300">
            <li>
              <p className="text-white font-semibold">Web</p>
              <p>Interfaces responsivas e acess?veis com React e Next.js.</p>
            </li>
            <li>
              <p className="text-white font-semibold">Dados</p>
              <p>SQL, dashboards e indicadores para decis?es r?pidas.</p>
            </li>
            <li>
              <p className="text-white font-semibold">APIs</p>
              <p>Integra??es, autentica??o e contratos bem definidos.</p>
            </li>
            <li>
              <p className="text-white font-semibold">Infra e entrega</p>
              <p>Automa??o, deploy e boas pr?ticas de versionamento.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
