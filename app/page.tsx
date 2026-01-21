import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { sitePt } from "@/data/site.pt";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero content={sitePt.hero} />
      <About content={sitePt.about} />
      <Projects />
      <Contact content={sitePt.contact} />
    </main>
  );
}
