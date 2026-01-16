import ResumeEn from "../../../components/sections/ResumeEn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Matheus Siqueira",
  description:
    "English resume of Matheus Siqueira, focused on web development, data, and technology.",
  openGraph: {
    title: "Resume | Matheus Siqueira",
    description:
      "English resume of Matheus Siqueira, focused on web development, data, and technology.",
    url: "/resume/en",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Resume of Matheus Siqueira",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Matheus Siqueira",
    description:
      "English resume of Matheus Siqueira, focused on web development, data, and technology.",
    images: ["/og.png"],
  },
};

export default function ResumeEnPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <ResumeEn />
    </main>
  );
}
