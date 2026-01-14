export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center gap-6 px-6">
      <h1 className="text-4xl md:text-5xl font-bold">
        Desenvolvedor Frontend
      </h1>

      <p className="text-lg text-muted-foreground max-w-xl">
        Especializado em React, Next.js e TypeScript, com foco em aplicações web
        escaláveis e orientadas a dados.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-md bg-white text-black font-medium"
        >
          Ver projetos
        </a>

        <a
          href="#contact"
          className="px-6 py-3 rounded-md border border-gray-600 font-medium"
        >
          Entrar em contato
        </a>
      </div>
    </section>
  );
}
