import type { ReactNode } from "react";

import type { SiteLocale } from "@/core/types";
import Footer from "@/components/system/Footer";
import Navbar from "@/components/system/Navbar";

type SiteFrameProps = {
  locale: SiteLocale;
  children: ReactNode;
};

export default function SiteFrame({ locale, children }: SiteFrameProps) {
  return (
    <>
      <Navbar locale={locale} />
      <div id="main-content">{children}</div>
      <Footer locale={locale} />
    </>
  );
}
