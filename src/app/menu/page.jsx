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
