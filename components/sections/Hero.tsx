import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
      
      {/* FOTO */}
      <div className="flex-shrink-0">
        <Image
          src="/profile.jpg"
          alt="Matheus Siqueira"
          width={220}
          height={220}
          priority
          className="rounded-full object-cover border"
        />
      </div>

      {/* TEXTO */}
      <div className="flex flex-col gap-6 text-center md:text-left max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Matheus Siqueira
        </h1>

        <h2 className="text-lg md:text-xl text-neutral-600">
          Profissional de Tecnologia · Web · Dados · Infraestrutura
        </h2>

        <p className="text-base leading-relaxed text-neutral-800">
          Profissional de tecnologia em formação, atualmente cursando Ciência da Computação, 
          com experiência prática em análise de dados, infraestrutura e desenvolvimento de 
          aplicações web. Atuo com foco em soluções reais, organização de dados e construção 
          de interfaces modernas e funcionais.
        </p>

        {/* AÇÕES */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            href="/resume"
            className="px-6 py-3 rounded border text-sm font-medium hover:bg-neutral-100 transition"
          >
            Ver Currículo
          </Link>

          <Link
            href="#contact"
            className="px-6 py-3 rounded bg-black text-white text-sm font-medium hover:opacity-90 transition"
          >
            Entrar em Contato
          </Link>
        </div>
      </div>
    </section>
  );
}
