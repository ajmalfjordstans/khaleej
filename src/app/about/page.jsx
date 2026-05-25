export const metadata = {
  title: 'About Khaleej Mandi House',
  description: 'Discover the story of Khaleej. Bringing the heart of Arabian hospitality to Leicester through traditional Majlis seating and authentic Middle Eastern flavors',
  alternates: { canonical: 'https://www.khaleejmandi.co.uk/about' },
  openGraph: {
    title: 'About Khaleej Mandi House',
    description: 'Discover the story of Khaleej. Bringing the heart of Arabian hospitality to Leicester through traditional Majlis seating and authentic Middle Eastern flavors',
    url: 'https://www.khaleejmandi.co.uk/about',
    type: 'website',
  },
  twitter: {
    title: 'About Khaleej Mandi House',
    description: 'Discover the story of Khaleej. Bringing the heart of Arabian hospitality to Leicester through traditional Majlis seating and authentic Middle Eastern flavors',
  },
}

import React from 'react'
import AboutSection from './about'
import Services from './services'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'

export default function AboutPage() {

  return (
    <div>
      <Hero />
      <div id='nav'></div>
      <Navbar />
      <AboutSection />
      <Services />
      <Footer />
    </div>
  )
}
