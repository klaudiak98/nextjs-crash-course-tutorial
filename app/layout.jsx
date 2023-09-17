import Navbar from './components/Navbar'
import './globals.css'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard app',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={rubik.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
