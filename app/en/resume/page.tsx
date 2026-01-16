import type { Metadata } from "next";
import ResumeEn from "@/components/sections/ResumeEn";

export const metadata: Metadata = {
  title: "Resume | Matheus Siqueira",
  description:
    "English resume of Matheus Siqueira focused on data, BI, and automation.",
  alternates: {
    languages: {
      "pt-BR": "/resume",
      "en-US": "/en/resume",
    },
  },
};

export default function ResumeEnPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <ResumeEn />
    </main>
  );
}