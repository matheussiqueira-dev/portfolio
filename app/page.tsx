import type { Metadata } from "next";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import { projects } from "@/data/projects";
import { sitePt } from "@/data/site.pt";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Portfolio de Matheus Siqueira, Analista de Dados Junior com foco em BI, SQL e Python.",
  alternates: {
    languages: {
      "pt-BR": "/",
      "en-US": "/en",
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero content={sitePt.hero} />
      <About content={sitePt.about} />
      <Projects content={sitePt.projects} projects={projects} />
      <Contact content={sitePt.contact} />
    </main>
  );
}