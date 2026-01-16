import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-6 pt-28 pb-24">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="flex flex-col gap-6 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400 motion-safe:animate-fade-up">
            Tecnologia ? Desenvolvimento Web ? Dados ? Infraestrutura
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-white motion-safe:animate-fade-up [animation-delay:120ms]">
            Matheus Siqueira
          </h1>
          <p className="text-lg md:text-xl font-medium text-slate-100 motion-safe:animate-fade-up [animation-delay:160ms]">
            Desenvolvimento web e dados para solu??es digitais confi?veis.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-slate-300 motion-safe:animate-fade-up [animation-delay:220ms]">
            Atuo do front-end ?s integra??es, combinando dados e automa??o para
            entregar produtos claros, escal?veis e com impacto real.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start motion-safe:animate-fade-up [animation-delay:320ms]">
            <Link
              href="/resume"
              className="px-6 py-3 rounded-full border border-white/20 text-sm font-medium text-white transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Ver curr?culo
            </Link>

            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-white text-sm font-semibold text-black transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Entrar em contato
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end motion-safe:animate-fade-in">
          <Image
            src="/profile.jpg"
            alt="Matheus Siqueira"
            width={320}
            height={320}
            sizes="(max-width: 768px) 70vw, 320px"
            priority
            className="rounded-3xl object-cover border border-white/10 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
