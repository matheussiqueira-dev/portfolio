import type { Metadata } from "next";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Matheus Siqueira | Technology, Web Development and Data",
  description:
    "Professional portfolio of Matheus Siqueira focused on technology, web development, data, and infrastructure.",
  openGraph: {
    title: "Matheus Siqueira | Technology, Web Development and Data",
    description:
      "Professional portfolio of Matheus Siqueira focused on technology, web development, data, and infrastructure.",
    url: "/en",
    siteName: "Matheus Siqueira",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Matheus Siqueira - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheus Siqueira | Technology, Web Development and Data",
    description:
      "Professional portfolio of Matheus Siqueira focused on technology, web development, data, and infrastructure.",
    images: ["/og.png"],
  },
};

export default function HomeEn() {
  return (
    <main className="min-h-screen">
      <Hero locale="en" />
      <About locale="en" />
      <Projects locale="en" />
      <Contact locale="en" />
    </main>
  );
}
