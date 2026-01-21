import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Matheus Siqueira
          </h1>

          <h2 className="text-xl text-gray-400">
            Tecnologia, Desenvolvimento Web e Dados
          </h2>

          <p className="text-gray-300 max-w-xl">
            Profissional de tecnologia em formação, com experiência prática em
            análise de dados, infraestrutura e desenvolvimento de aplicações web.
            Atuação focada em soluções reais, organização da informação e
            sistemas escaláveis.
          </p>

          <div className="flex gap-4">
            <Link
              href="/resume"
              className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition"
            >
              Ver currículo
            </Link>

            <a
              href="https://wa.me/5581999203683"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-500 rounded hover:border-white transition"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        {/* Foto */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/profile.jpg"
            alt="Foto de Matheus Siqueira"
            width={320}
            height={320}
            priority
            className="rounded-2xl object-cover border border-white/10"
          />
        </div>
      </div>
    </section>
  );
}
