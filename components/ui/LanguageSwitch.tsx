import Link from "next/link";

type Props = {
  current: "pt" | "en";
};

export default function LanguageSwitch({ current }: Props) {
  return (
    <nav className="flex gap-2 text-sm print:hidden text-slate-200">
      <Link
        href="/resume"
        className={`rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
          current === "pt" ? "font-semibold underline" : "underline"
        }`}
      >
        PT
      </Link>
      <span className="text-slate-500">|</span>
      <Link
        href="/resume/en"
        className={`rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
          current === "en" ? "font-semibold underline" : "underline"
        }`}
      >
        EN
      </Link>
    </nav>
  );
}
