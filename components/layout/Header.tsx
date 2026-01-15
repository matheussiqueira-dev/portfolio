import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-white">
          Matheus Siqueira
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link href="/resume" className="hover:text-white">Resume</Link>
          <Link href="#projects" className="hover:text-white">Projects</Link>
          <Link href="#about" className="hover:text-white">About</Link>
        </nav>

        <div className="flex items-center gap-4 text-sm">
          <Link href="/" className="flex items-center gap-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/flags/br.png" alt="PT-BR" width={18} height={18} />
            PT
          </Link>

          <Link href="/resume/en" className="flex items-center gap-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/flags/us.png" alt="EN-US" width={18} height={18} />
            EN
          </Link>
        </div>
      </div>
    </header>
  );
}
