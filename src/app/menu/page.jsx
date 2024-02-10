import React from 'react'
import MenuSection from './menu-section'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'

export default function MenuPage() {
  return (
    <div>
      <Hero />
      <div id='nav'></div>
      <Navbar />
      <MenuSection />
      <Footer />
    </div>
  )
}
