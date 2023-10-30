import './styles/globals.styles.scss'
import Navbars from './components/navbar/Navbars';
import { Footer } from './components/footers/Footer'

export const metadata = {
  title: 'Mulon',
  description: 'Kupang bersih bersama Mulon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <>
          <Navbars />
          {children}
          <Footer />
        </>
      </body>
    </html>
  )
}
