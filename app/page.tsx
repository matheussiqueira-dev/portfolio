import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero locale="pt" />
      <About locale="pt" />
      <Projects locale="pt" />
      <Contact locale="pt" />
    </main>
  );
}
