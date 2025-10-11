// Module: Home page component
'use client'
export const dynamic = 'force-dynamic'
import Image from 'next/image'
// import About from './about'
// import MenuSection from '@/components/menu-section'
// import Gallery from './gallery'
// import ContactSection from './contact'
// import Testimonial from './testimonial'
// import Footer from '@/components/footer'
// import Hero from '@/components/hero'
// import Navbar from '@/components/navbar'
import { useEffect, useState } from 'react'
import Loading from './loading'
import nextDynamic from 'next/dynamic'

// Dynamically import client-only components to avoid server-side evaluation
const Hero = nextDynamic(() => import('@/components/hero'), { ssr: false })
const Navbar = nextDynamic(() => import('@/components/navbar'), { ssr: false })
const About = nextDynamic(() => import('./about'), { ssr: false })
const Gallery = nextDynamic(() => import('./gallery'), { ssr: false })
const Testimonial = nextDynamic(() => import('./testimonial'), { ssr: false })
const ContactSection = nextDynamic(() => import('./contact'), { ssr: false })
const Footer = nextDynamic(() => import('@/components/footer'), { ssr: false })
const MenuSection = nextDynamic(() => import('@/components/menu-section'), { ssr: false })

export default function Home() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 5000)
    return () => clearTimeout(t)
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
