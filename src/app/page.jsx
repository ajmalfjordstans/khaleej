import Image from 'next/image'
import About from './about'
import MenuSection from '@/components/menu-section'
import Gallery from './gallery'
import ContactSection from './contact'
import Testimonial from './testimonial'

export default function Home() {
  return (
    <div>
      <About />
      <MenuSection />
      <Gallery />
      <Testimonial />
      <ContactSection />
    </div>
  )
}
