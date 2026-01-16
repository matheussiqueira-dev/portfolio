import Link from "next/link";
import MobileMenu from "./MobileMenu";

const navItems = [
  { href: "/#about", label: "Sobre" },
  { href: "/#projects", label: "Projetos" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contato" },
  { href: "/resume", label: "Curr?culo" },
];

const languageItems = [
  { href: "/", label: "PT-BR", flagSrc: "/flags/br.png", flagAlt: "PT-BR" },
  { href: "/resume/en", label: "EN-US", flagSrc: "/flags/us.png", flagAlt: "EN-US" },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0b0d10]/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-white tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
        >
          Matheus Siqueira
        </Link>

        <nav
          className="hidden md:flex items-center gap-6 text-sm text-slate-300"
          aria-label="Navega??o principal"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4 text-sm text-slate-200">
          {languageItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.flagSrc}
                alt={item.flagAlt}
                width={18}
                height={18}
                className="rounded-sm"
              />
              {item.label}
            </Link>
          ))}
        </div>

        <MobileMenu navItems={navItems} languageItems={languageItems} />
      </div>
    </header>
  );
}
