/**
 * EXEMPLO DE IMPLEMENTAÇÃO TRON
 * 
 * Este arquivo demonstra como usar o tema Tron completo
 * Copie padrões conforme necessário para seus componentes
 * 
 * Requisitos:
 * - Componente Reveal.tsx deve estar em @/components/Reveal
 * - globals.css deve ter variáveis Tron (✓ já adicionadas)
 */

"use client"

import Reveal from "@/components/Reveal"
import { usePathname } from "next/navigation"

export default function TronDemoSection() {
  const pathname = usePathname()
  const isEn = pathname.startsWith("/en")

  const title = isEn ? "Featured Projects" : "Projetos em Destaque"
  const cta = isEn ? "View All" : "Ver Tudo"
  const description = isEn
    ? "Explore my best work in web development and data analysis"
    : "Explore meus melhores trabalhos em desenvolvimento web e análise de dados"

  return (
    <section className="tron-hero page-section">
      <div className="section-inner">
        {/* Hero com animações encadeadas */}
        <Reveal delay={0}>
          <h1 className="tron-hero-title">Matheus Siqueira</h1>
        </Reveal>

        <Reveal delay={150}>
          <div className="tron-divider" />
        </Reveal>

        <Reveal delay={250}>
          <p className="text-lg mb-6">{description}</p>
        </Reveal>

        <Reveal delay={350}>
          <div className="flex flex-wrap gap-4">
            <button className="tron-btn tron-btn-cta">{cta}</button>
            <button className="tron-btn">Saiba Mais</button>
          </div>
        </Reveal>
      </div>

      {/* Divider entre seções */}
      <div className="tron-section-divider" />

      {/* Grid de cards */}
      <div className="section-inner mt-16">
        <Reveal>
          <h2 className="text-3xl font-bold mb-8">{title}</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: 1,
              title: "Project 1",
              description: "Full-stack development with React and Node.js",
              tags: ["React", "TypeScript", "Node.js"],
            },
            {
              id: 2,
              title: "Project 2",
              description: "Data visualization dashboard with real-time metrics",
              tags: ["React", "D3.js", "PostgreSQL"],
            },
            {
              id: 3,
              title: "Project 3",
              description: "Mobile app for inventory management",
              tags: ["React Native", "Firebase", "Redux"],
            },
          ].map((project, index) => (
            <Reveal key={project.id} delay={index * 100}>
              <div className="tron-card h-full">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4 opacity-80">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs border border-current rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="tron-btn w-full text-sm">
                  View Details
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Navigação com efeito Tron */}
      <nav className="tron-nav section-inner mt-16 flex flex-wrap gap-8 justify-center">
        <a href={isEn ? "/en" : "/"}>{isEn ? "Home" : "Início"}</a>
        <a href={isEn ? "/en/projects" : "/projetos"}>
          {isEn ? "Projects" : "Projetos"}
        </a>
        <a href={isEn ? "/en/resume" : "/resume"}>
          {isEn ? "Resume" : "Currículo"}
        </a>
        <a href={isEn ? "/en/hire" : "/contrate"}>
          {isEn ? "Hire Me" : "Contrate"}
        </a>
      </nav>
    </section>
  )
}
