import './reset.scss'
import './globals.scss'
import './layout.scss'
import Image from "next/image"
import LogoLight from "../../public/LOGO Light.svg"
import LogoDark from "../../public/LOGO Dark.svg"
import Menu from "../../public/menu.svg"
import { getDictionary } from './dictionaries'
import ThemeToggleBtn from '../../components/button-settings/button-settings.component'

export default async function RootLayout({ children, params: { lang }}) {
  const dict = await getDictionary(lang)
  return (
    <html lang={lang}>
      <head>
        <title>Adam Bartůšek</title>
        <meta name='description' content={dict.meta.description} />
      </head>
      <body suppressHydrationWarning={true}>
          <header>
            <ThemeToggleBtn />
            {/* {isDarkTheme ? (
              <Image src={LogoDark} alt="Logo"/>
            ) : (
              <Image src={LogoLight} alt="Logo"/>
            )} */}
            <Image src={LogoLight} alt="Logo" className='logo'/>
            <p></p>
            <nav>
            <Image src={Menu} alt="Menu" />
            </nav>
          </header>
          {children}
          <footer>
            <p>{dict.copyright}</p>
          </footer>
      </body>
    </html>
  )
}
