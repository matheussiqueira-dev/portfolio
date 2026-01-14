import Resume from "../../components/sections/Resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Currículo",
  description:
    "Currículo profissional de Matheus Siqueira — Desenvolvedor Frontend.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <Resume />
    </main>
  );
}
