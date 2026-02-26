import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { isValidLocale, routing } from "@/core/i18n/routing";

type Props = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider key={locale} locale={locale} messages={messages}>
      <section key={locale} lang={locale} data-locale={locale}>
        <div key={locale} className="app-shell">
          <Header />
          <div id="main-content" className="min-h-screen">
            {children}
          </div>
          <Footer />
        </div>
      </section>
    </NextIntlClientProvider>
  );
}
