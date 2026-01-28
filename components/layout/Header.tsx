import HeaderNav from "./HeaderNav";
import LogoLink from "./LogoLink";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-[color:var(--border)] bg-[rgba(12,13,17,0.82)] backdrop-blur">
      <div className="section-inner flex h-16 items-center justify-between px-[var(--page-padding)]">
        <LogoLink />
        <HeaderNav />
      </div>
    </header>
  );
}
