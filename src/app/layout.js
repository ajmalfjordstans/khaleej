import { Inter, Source_Serif_4, Julius_Sans_One, Montserrat, Nunito_Sans } from 'next/font/google'
import './globals.css'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Layout from '@/components/layout'
import Loading from '@/components/loading'
import { ContextProvider } from '@/context/context'

const nunito = Nunito_Sans({
  subsets: ['latin']
})

const source = Source_Serif_4({
  variable: "--font-source",
  subsets: ['latin'],
});
const julius = Julius_Sans_One({
  weight: '400',
  variable: "--font-julius",
  subsets: ['latin'],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ['latin']
})

export const metadata = {
  title: 'Khaleej - The Authentic Mandi in United Kingdom',
  description: 'Authentic Mandi in United Kingdom',
  icons: {
    icon: "/icon.jpg",
    apple: "/icon.jpg",
  }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${source.variable} ${julius.variable} ${montserrat.variable} overflow-x-hidden`}>
        {/* <Loading /> */}
        <ContextProvider>
          <Layout>
            <Hero />
            <div id='nav'></div>
            <Navbar />
            {children}
            <Footer />
          </Layout>
        </ContextProvider>
      </body>
    </html>
  )
}
