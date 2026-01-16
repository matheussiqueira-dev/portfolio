import type { Metadata } from "next";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import { projectsEn } from "@/data/projects.en";
import { siteEn } from "@/data/site.en";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Data portfolio of Matheus Siqueira focused on BI, public data, and automation.",
  alternates: {
    languages: {
      "pt-BR": "/",
      "en-US": "/en",
    },
  },
};

export default function HomeEn() {
  return (
    <main className="min-h-screen">
      <Hero content={siteEn.hero} localePrefix="/en" />
      <About content={siteEn.about} />
      <Projects content={siteEn.projects} projects={projectsEn} localePrefix="/en" />
      <Contact content={siteEn.contact} />
    </main>
  );
}