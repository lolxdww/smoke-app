import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from 'components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Smoke',
  description: 'Are you ready to take your Discord raider community to the next level? Look no further than the Discord Raider Promo Hub – your all-in-one solution for promoting and growing your raider community.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
