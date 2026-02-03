"use client";

import { portfolioContent, type LocaleKey } from "@/data/portfolio";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import CallToAction from "./CallToAction";

type Props = {
  locale?: LocaleKey;
};

export default function PortfolioPage({ locale = "pt" }: Props) {
  const content = portfolioContent[locale];

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <Hero content={content.hero} />
      {/* About section */}
      <About content={content.about} />
      {/* Skills section */}
      <Skills content={content.skills} />
      {/* Projects section */}
      <Projects content={content.projects} />
      {/* CTA section */}
      <CallToAction content={content.cta} />
    </div>
  );
}
