import HeaderNav from "./HeaderNav";
import LogoLink from "./LogoLink";

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="site-header__inner section-inner">
        <LogoLink />
        <HeaderNav />
      </div>
    </header>
  );
}
