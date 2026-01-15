import ResumeEn from "../../../components/sections/ResumeEn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Matheus Siqueira",
  description:
    "English resume of Matheus Siqueira, focused on web development, data, and technology.",
};

export default function ResumeEnPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <ResumeEn />
    </main>
  );
}
