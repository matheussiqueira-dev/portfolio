import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import { sitePt } from "@/data/site.pt";

export default function HomePage() {
  return (
    <div className="pb-24">
      <Hero content={sitePt.hero} />
      <About content={sitePt.about} />
      <Projects />
      <Contact content={sitePt.contact} />
    </div>
  );
}
