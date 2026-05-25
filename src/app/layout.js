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
  metadataBase: new URL('https://www.khaleejmandi.co.uk'),
  title: 'Khaleej Mandi House | Authentic Yemeni & Arabian Restaurant in Leicester',
  description: 'Khaleej Mandi House serves authentic Yemeni and Middle Eastern cuisine in Leicester. Experience slow-cooked Mandi, Haneeth, Kabsa and traditional Majlis dining.',
  icons: {
    icon: '/icon.jpg',
    apple: '/icon.jpg',
  },
  openGraph: {
    siteName: 'Khaleej Mandi House',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/Images/blog/20240421-DSC03113.webp',
        width: 1200,
        height: 630,
        alt: 'Khaleej Mandi House — Authentic Yemeni & Arabian Restaurant in Leicester',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/Images/blog/20240421-DSC03113.webp'],
  },
}


export default function RootLayout({ children, isAdminPage }) {
  return (
    <html lang="en">
      <head>
        {/* Schema Markup - Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Restaurant",
                "name": "Khaleej Mandi House",
                "description": "Authentic Mandi restaurant in Leicester, UK. Serving traditional Yemeni and Middle Eastern cuisine including Mandi, Kabsa, Madghout, Maqluba and Madhbi.",
                "url": "https://www.khaleejmandi.co.uk",
                "telephone": "+441165074571",
                "email": "info@khaleejmandi.co.uk",
                "servesCuisine": ["Middle Eastern", "Yemeni", "Arabic"],
                "priceRange": "££",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "12-14 Highfield St",
                  "addressLocality": "Leicester",
                  "postalCode": "LE2 1AB",
                  "addressCountry": "GB"
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "12:00",
                  "closes": "23:00"
                },
                "sameAs": [
                  "https://www.facebook.com/profile.php?id=61552072526576",
                  "https://instagram.com/khaleejmandi.uk"
                ],
                "image": "https://www.khaleejmandi.co.uk/icon.jpg",
                "hasMap": "https://maps.google.com/?q=12-14+Highfield+St,+Leicester+LE2+1AB",
                "acceptsReservations": "https://www.khaleejmandi.co.uk/book-now",
                "potentialAction": {
                  "@type": "ReserveAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.khaleejmandi.co.uk/book-now",
                    "inLanguage": "en",
                    "actionPlatform": [
                      "http://schema.org/DesktopWebPlatform",
                      "http://schema.org/MobileWebPlatform"
                    ]
                  },
                  "result": {
                    "@type": "Reservation",
                    "name": "Table Reservation"
                  }
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Menu",
                "name": "Khaleej Mandi House Menu",
                "url": "https://www.khaleejmandi.co.uk/menu",
                "hasMenuSection": [
                  {
                    "@type": "MenuSection",
                    "name": "Know Your Rice",
                    "hasMenuItem": [
                      {
                        "@type": "MenuItem",
                        "name": "Mandi",
                        "description": "Chicken & Lamb Mandi cooked with special Golden Sella Basmati rice. Slow-cooked in the oven."
                      },
                      {
                        "@type": "MenuItem",
                        "name": "Madghout",
                        "description": "Yemen's Madghout with aromatic Basmati rice, cooked in pressure cooker with tasty meat."
                      },
                      {
                        "@type": "MenuItem",
                        "name": "Kabsa",
                        "description": "Long Basmati rice with tomatoes and aromatic spices, a traditional Middle Eastern dish."
                      },
                      {
                        "@type": "MenuItem",
                        "name": "Maqluba",
                        "description": "A delightful blend of flavours and textures — a popular Middle Eastern dish cooked upside down."
                      },
                      {
                        "@type": "MenuItem",
                        "name": "Madhbi",
                        "description": "Long-grain Basmati rice with saffron and cardamom, grilled or roasted meat, an Arabian experience."
                      }
                    ]
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "ImageObject",
                "contentUrl": "https://www.khaleejmandi.co.uk/icon.jpg",
                "name": "Khaleej Mandi House",
                "description": "Khaleej Mandi House - Authentic Middle Eastern Restaurant in Leicester, UK"
              }
            ])
          }}
        />
        {/* End Schema Markup */}
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
