import type { Metadata } from "next";
import Resume from "../../components/sections/Resume";

export const metadata: Metadata = {
  title: "Currículo | Matheus Siqueira",
  description:
    "Currículo profissional de Matheus Siqueira, com foco em desenvolvimento web, dados e tecnologia.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <Resume />
    </main>
  );
}
