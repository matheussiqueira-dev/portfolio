import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Nome */}
        <Link href="/" className="font-semibold text-white">
          Matheus Siqueira
        </Link>

        {/* Navegação */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link href="/resume" className="hover:text-white">
            Resume
          </Link>
          <Link href="/#projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="/#contact" className="hover:text-white">
            Contact
          </Link>
        </nav>

        {/* Idiomas */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-1 text-sm">
            <Image src="/flags/br.svg" alt="PT-BR" width={18} height={18} />
            <span>PT</span>
          </Link>

          <Link href="/resume/en" className="flex items-center gap-1 text-sm">
            <Image src="/flags/us.svg" alt="EN-US" width={18} height={18} />
            <span>EN</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
