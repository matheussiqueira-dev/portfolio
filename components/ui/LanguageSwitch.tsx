import Link from "next/link";

type Props = {
  current: "pt" | "en";
};

export default function LanguageSwitch({ current }: Props) {
  return (
    <nav className="flex gap-2 text-sm print:hidden">
      <Link
        href="/resume"
        className={current === "pt" ? "font-semibold underline" : "underline"}
      >
        PT
      </Link>
      <span>|</span>
      <Link
        href="/resume/en"
        className={current === "en" ? "font-semibold underline" : "underline"}
      >
        EN
      </Link>
    </nav>
  );
}
