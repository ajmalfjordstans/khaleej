import React from 'react'
import ContactDetails from './contact-details'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'

export default function ContactPage() {
  return (
    <div>
      <Hero />
      <div id='nav'></div>
      <Navbar />
      <ContactDetails />
      <Footer />
    </div>
  )
}
