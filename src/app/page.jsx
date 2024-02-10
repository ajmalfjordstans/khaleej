import Image from 'next/image'
import About from './about'
import MenuSection from '@/components/menu-section'
import Gallery from './gallery'
import ContactSection from './contact'
import Testimonial from './testimonial'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
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
