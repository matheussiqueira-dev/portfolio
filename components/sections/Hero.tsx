import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-medium text-white/60">
            Desenvolvimento • Dados • Infra
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Matheus Siqueira
          </h1>

          <h2 className="text-lg text-white/70">
            Tecnologia, Desenvolvimento Web e Dados
          </h2>

          <p className="max-w-xl text-white/70">
            Profissional em transição para tecnologia, com experiência prática em análise de dados,
            infraestrutura e desenvolvimento web. Foco em soluções reais, organização da informação
            e sistemas escaláveis.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/resume"
              className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black hover:bg-white/90"
            >
              Ver currículo
            </Link>

            <a
              href="https://wa.me/5581999203683"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-5 py-3 text-sm font-medium text-white hover:border-white/40"
            >
              Entrar em contato
            </a>

            <Link
              href="/projects"
              className="rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-white/80 hover:text-white"
            >
              Ver projetos
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-white/5 blur-2xl" />
            <Image
              src="/profile.jpg"
              alt="Foto de Matheus Siqueira"
              width={360}
              height={360}
              priority
              className="relative rounded-2xl border border-white/10 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
