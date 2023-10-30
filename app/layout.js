import './styles/globals.styles.scss'
import Navbars from './components/navbar/Navbars';
import FootersIndex from './components/footers/Footer.jsx';
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
          <FootersIndex />
        </>
      </body>
    </html>
  )
}
