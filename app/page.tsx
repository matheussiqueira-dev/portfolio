import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import { sitePt } from "@/data/site.pt";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero content={sitePt.hero} />
      <About content={sitePt.about} />
      <Projects />
    </main>
  );
}
