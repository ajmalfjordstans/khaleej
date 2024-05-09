import CareersForm from '@/components/forms/careers-form'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import React from 'react'
import Careers from './careers'

export default function Page() {
  return (
    <div>
      <Hero />
      <div id='nav'></div>
      <Navbar />
      <Careers />
      <Footer />
    </div>
  )
}
