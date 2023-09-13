// Styles
import "./reset.scss";
import "./globals.scss";
import "./layout.scss";
// Context
import { ColorThemeProvider } from "../../context/color-theme.context";
import { LanguageProvider } from "../../context/lang.context";
// Components
import Header from "../../components/header/header.component";

export default function RootLayout({ children, params: { lang } }) {
  return (
    <html lang={lang}>
      <head>
        <title>Adam Bartůšek</title>
        {/* <meta name="description" content={dict.meta.description} /> */}
      </head>
      <body suppressHydrationWarning={true}>
        <LanguageProvider lang={lang}>
          <ColorThemeProvider>
            <Header />
            {children}
            <footer>
              {/* <p>{dict.copyright}</p> */}
            </footer>
          </ColorThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
