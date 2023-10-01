// Styles
import "./reset.scss";
import "./globals.scss";
import "./layout.scss";
// Context
import { ColorThemeProvider } from "../../context/color-theme.context";
import { LanguageProvider } from "../../context/lang.context";
// Components
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Loader from "../../components/loader/loader.component";

export default function RootLayout({ children, params: { lang } }) {
  return (
    <html lang={lang}>
      <head>
        <title>Adam Bartůšek</title>
        <meta name="description" content={lang == 'cz' ? ('Osobní webové stránky pro prezentaci') : ('Personal website for presentation')} />
      </head>
      <body suppressHydrationWarning={true}>
        <Loader />
        <LanguageProvider lang={lang}>
          <ColorThemeProvider>
            <Header />
            {children}
            <Footer />
          </ColorThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
