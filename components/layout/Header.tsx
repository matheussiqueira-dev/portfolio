import HeaderNav from "./HeaderNav";
import LogoLink from "./LogoLink";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-[color:var(--border)] header-surface">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <LogoLink />
        <HeaderNav />
      </div>
    </header>
  );
}
