import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import { sitePt } from "@/data/site.pt";

// Lazy load below-the-fold sections for better performance
const About = dynamic(() => import("@/components/sections/About"), {
  loading: () => (
    <div className="px-6 py-20 content-auto">
      <div className="max-w-6xl mx-auto h-96 animate-pulse bg-white/5 rounded-2xl" />
    </div>
  ),
});

const Projects = dynamic(() => import("@/components/sections/Projects"), {
  loading: () => (
    <div className="px-6 py-20 content-auto">
      <div className="max-w-6xl mx-auto h-96 animate-pulse bg-white/5 rounded-2xl" />
    </div>
  ),
});

const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => (
    <div className="px-6 py-20 content-auto">
      <div className="max-w-6xl mx-auto h-64 animate-pulse bg-white/5 rounded-2xl" />
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
