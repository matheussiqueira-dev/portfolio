import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { sitePt } from "@/data/site.pt";

export default function HomePage() {
  return (
    <div className="pb-24">
      <Hero />
      <About content={sitePt.about} />
      <Projects />
      <Contact content={sitePt.contact} />
    </div>
  );
}
