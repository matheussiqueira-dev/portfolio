export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-20">
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

          <p className="text-base md:text-lg leading-relaxed text-slate-300">
            Sou profissional de tecnologia em formação, com experiência prática
            em dados, infraestrutura e desenvolvimento web. Gosto de transformar
            problemas complexos em soluções simples, confiáveis e com impacto no
            negócio.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/matheussiqueira-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-white/15 text-sm text-slate-200 transition hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/matheussiqueira-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-white/15 text-sm text-slate-200 transition hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              GitHub
            </a>
            <a
              href="mailto:matheussiqueirahub@gmail.com"
              className="px-4 py-2 rounded-full border border-white/15 text-sm text-slate-200 transition hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Email
            </a>
            <a
              href="https://wa.me/5581999203683"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full border border-emerald-400/40 text-sm text-emerald-300 transition hover:border-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Principais competências
          </h3>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>React, Next.js e TypeScript</li>
            <li>Python, Pandas, SQL e Power BI</li>
            <li>APIs REST, Node.js e integrações</li>
            <li>Infraestrutura, automação e boas práticas</li>
            <li>Git, Windows/Linux e deploy em nuvem</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
