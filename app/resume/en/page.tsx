import { ResumeEn } from "../../../components/sections";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Matheus Siqueira",
  description: "Frontend Developer resume in English.",
};

export default function ResumeEnPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <ResumeEn />
    </main>
  );
}
