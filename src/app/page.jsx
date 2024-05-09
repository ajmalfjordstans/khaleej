'use client'
import Image from 'next/image'
import About from './about'
import MenuSection from '@/components/menu-section'
import Gallery from './gallery'
import ContactSection from './contact'
import Testimonial from './testimonial'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import { useEffect, useState } from 'react'
import Loading from './loading'

export default function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(setLoading(false), 5000)
  }, [])

  return (
    loading ?
      <Loading />
      :
      <div>
        <Hero />
        <div id='nav'></div>
        <Navbar />
        <About />
        <MenuSection />
        <Gallery />
        <Testimonial />
        <ContactSection />
        <Footer />
      </div>
  )
}
