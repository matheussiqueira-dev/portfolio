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
              Tecnologia com foco em valor real
            </h2>
          </div>

          <div className="space-y-4 text-base md:text-lg leading-relaxed text-slate-300">
            <p>
              Sou estudante de Ciência da Computação e desenvolvedor com foco
              em criar soluções digitais completas, do front-end às integrações
              de dados.
            </p>
            <p>
              Tenho experiência com dashboards, automações e APIs, buscando
              sempre performance, clareza e manutenção simples.
            </p>
            <p>
              Quero atuar em projetos que conectem tecnologia, pessoas e
              resultados de negócio.
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
              <p>Interfaces, performance e acessibilidade com React e Next.js.</p>
            </li>
            <li>
              <p className="text-white font-semibold">Dados</p>
              <p>Dashboards, SQL e visualizações que apoiam decisões rápidas.</p>
            </li>
            <li>
              <p className="text-white font-semibold">Infraestrutura</p>
              <p>Automação, integração com APIs e boas práticas de entrega.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
