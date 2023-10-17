// Fonts
import { Gemunu_Libre, Livvic, Asap } from 'next/font/google'
// Styles
import "./globals.scss";
// Context
import { ColorThemeProvider } from "../../context/color-theme.context";
import { LanguageProvider } from "../../context/lang.context";
// Components
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Loader from "../../components/r-loader/loader.component";

const gemunuLibre = Gemunu_Libre({weight: '400', subsets: ['latin'], variable: '--font-gemunulibre'})
const livvic = Livvic({weight: '400', subsets: ['latin'], variable: '--font-livvic'})
const asap = Asap({weight: '400', subsets: ['latin'], variable: '--font-asap'})

export default function RootLayout({ children, params: { lang } }) {
  return (
    <html lang={lang} className={`${asap.variable} ${livvic.variable} ${gemunuLibre.variable}`}>
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
