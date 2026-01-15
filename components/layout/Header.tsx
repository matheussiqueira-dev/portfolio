import Link from "next/link";
import LanguageSwitch from "../ui/LanguageSwitch";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* LOGO / NOME */}
        <Link href="/" className="font-semibold text-lg">
          Matheus Siqueira
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:underline">
            Início
          </Link>
          <Link href="#projects" className="hover:underline">
            Projetos
          </Link>
          <Link href="/resume" className="hover:underline">
            Currículo
          </Link>
          <Link href="#contact" className="hover:underline">
            Contato
          </Link>
        </nav>

        {/* LANGUAGES */}
        <LanguageSwitch />
      </div>
    </header>
  );
}
