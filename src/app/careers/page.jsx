export const metadata = {
  title: 'Careers at Khaleej | Join Our Restaurant Team in Leicester',
  description: "Start your career with Khaleej Mandi. We're looking for passionate people to join our team in Leicester. Explore our latest hospitality job openings!",
}

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
