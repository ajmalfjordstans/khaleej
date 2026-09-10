'use client'

import Navbar from '@/components/navbar'
import ScrollStoryHomePage from '@/components/home-v3/ScrollStoryHomePage'
import Gallery from './gallery'
import Testimonial from './testimonial'
import ContactSection from './contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    // bg-primary here (not just on ScrollStoryHomePage below) so the small gap
    // around the floating pill navbar — mt-2 above it, the rounded corners at
    // its sides — shows dark maroon instead of the page's white default,
    // blending with the hero image's own dark-to-maroon gradient instead of
    // reading as a mismatched seam.
    <div className='bg-primary'>
      <div id='nav'></div>
      <Navbar />
      <ScrollStoryHomePage />
      <Gallery />
      <Testimonial />
      <ContactSection />
      <Footer />
    </div>
  )
}
