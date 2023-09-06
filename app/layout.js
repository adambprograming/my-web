import './reset.css'
import './globals.scss'

export const metadata = {
  title: 'Adam Bartůšek',
  description: 'Webové stránky pro Vaše podnikání',
}

export default function RootLayout({ children }) {
  return (
    <html lang="cz">
      <body>
        <header>
          {/* My buttons */}
          {/* Logo */}
          <nav>
          {/* Menu */}
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
