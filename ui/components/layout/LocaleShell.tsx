import type { ReactNode } from "react";

import FloatingContactDock from "./FloatingContactDock";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  locale: string;
  children: ReactNode;
};

export default function LocaleShell({ locale, children }: Props) {
  return (
    <section lang={locale} data-locale={locale}>
      <div className="app-shell">
        <Header />
        <div id="main-content" className="app-shell__content">
          {children}
        </div>
        <Footer />
        <FloatingContactDock />
      </div>
    </section>
  );
}
