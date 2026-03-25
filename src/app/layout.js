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


export default function RootLayout({ children, isAdminPage }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5W5VLGC4');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${nunito.className} ${source.variable} ${julius.variable} ${montserrat.variable} overflow-x-hidden`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5W5VLGC4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* <Loading /> */}
        <ContextProvider>
          <Layout>
            {/* <Hero />
            <div id='nav'></div>
            <Navbar /> */}
            {children}
          </Layout>
        </ContextProvider>
      </body>
    </html>
  )
}
