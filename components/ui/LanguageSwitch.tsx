import Link from "next/link";

export default function LanguageSwitch() {
  return (
    <div className="flex gap-2 text-sm">
      <Link href="/" className="font-bold">PT</Link>
      <span>|</span>
      <Link href="/en" className="text-gray-400">EN</Link>
    </div>
  );
}
