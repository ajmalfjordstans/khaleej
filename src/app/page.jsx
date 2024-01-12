import Image from 'next/image'
import About from './about'
import MenuSection from '@/components/menu-section'
import Gallery from './gallery'
import ContactSection from './contact'

export default function Home() {
  return (
    <div>
      <About />
      <MenuSection />
      <Gallery />
      <ContactSection />
    </div>
  )
}
