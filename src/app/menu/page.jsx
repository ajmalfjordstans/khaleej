export const metadata = {
  title: 'Our Menu | Authentic Mandi & Yemeni Cuisine in Leicester',
  description: "Explore the Khaleej Mandi menu. From slow-cooked Lamb Madghout to Haneeth, enjoy Leicester's finest Halal Arabian dishes. View our full menu online!",
  alternates: { canonical: 'https://www.khaleejmandi.co.uk/menu' },
  openGraph: {
    title: 'Our Menu | Authentic Mandi & Yemeni Cuisine in Leicester',
    description: "Explore the Khaleej Mandi menu. From slow-cooked Lamb Madghout to Haneeth, enjoy Leicester's finest Halal Arabian dishes. View our full menu online!",
    url: 'https://www.khaleejmandi.co.uk/menu',
    type: 'website',
  },
  twitter: {
    title: 'Our Menu | Authentic Mandi & Yemeni Cuisine in Leicester',
    description: "Explore the Khaleej Mandi menu. From slow-cooked Lamb Madghout to Haneeth, enjoy Leicester's finest Halal Arabian dishes. View our full menu online!",
  },
}

import React from 'react'
import MenuSection from './menu-section'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import MenuGrid from '@/components/menu-grid'

export default function MenuPage() {
  return (
    <div>
      <Hero />
      <div id='nav'></div>
      <Navbar />
      {/* Old Flip-book Menu */}
      <MenuSection />

      {/* Dynamic Menu from JSON */}
      <MenuGrid />


      <Footer />
    </div>
  )
}
