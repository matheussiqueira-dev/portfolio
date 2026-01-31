import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import ExecutiveSummary from "@/components/sections/ExecutiveSummary";
import Hero from "@/components/sections/Hero";
import MetricsSection from "@/components/sections/MetricsSection";
import Projects from "@/components/sections/Projects";
import Stack from "@/components/sections/Stack";
import { sitePt } from "@/data/site.pt";

export default function HomePage() {
  return (
    <div className="pb-24">
      <Hero content={sitePt.hero} />
      <ExecutiveSummary content={sitePt.executiveSummary} />
      <About content={sitePt.about} />
      <Stack content={sitePt.primaryStack} />
      <Projects />
      <MetricsSection content={sitePt.metrics} />
      <Contact content={sitePt.contact} />
    </div>
  );
}
