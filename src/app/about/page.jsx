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
