import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import { sitePt } from "@/data/site.pt";

// Lazy load below-the-fold sections for better performance
const About = dynamic(() => import("@/components/sections/About"), {
  loading: () => (
    <div className="page-section content-auto">
      <div className="section-inner h-96 animate-pulse rounded-2xl bg-[color:var(--surface-muted)]" />
    </div>
  ),
});

const Projects = dynamic(() => import("@/components/sections/Projects"), {
  loading: () => (
    <div className="page-section content-auto">
      <div className="section-inner h-96 animate-pulse rounded-2xl bg-[color:var(--surface-muted)]" />
    </div>
  ),
});

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => (
    <div className="page-section content-auto">
      <div className="section-inner h-64 animate-pulse rounded-2xl bg-[color:var(--surface-muted)]" />
    </div>
  ),
});

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
