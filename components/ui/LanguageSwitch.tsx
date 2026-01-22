import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitch() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <div className="flex items-center gap-3 text-lg">
      <Link
        href="/"
        title="Português (Brasil)"
        className={!isEnglish ? "opacity-100" : "opacity-50 hover:opacity-100"}
      >
        🇧🇷
      </Link>

      <Link
        href="/en"
        title="English (US)"
        className={isEnglish ? "opacity-100" : "opacity-50 hover:opacity-100"}
      >
        🇺🇸
      </Link>
    </div>
  );
}
