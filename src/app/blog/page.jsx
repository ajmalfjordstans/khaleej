export const metadata = {
  title: 'Blog | Khaleej Mandi House Leicester',
  description: 'Explore the stories behind Khaleej Mandi — from the ancient origins of Mandi to Arabian spice culture, Majlis dining traditions, and our commitment to authentic Middle Eastern hospitality in Leicester.',
  alternates: { canonical: 'https://www.khaleejmandi.co.uk/blog' },
  openGraph: {
    title: 'Blog | Khaleej Mandi House Leicester',
    description: 'Explore the stories behind Khaleej Mandi — from the ancient origins of Mandi to Arabian spice culture, Majlis dining traditions, and our commitment to authentic Middle Eastern hospitality in Leicester.',
    url: 'https://www.khaleejmandi.co.uk/blog',
    type: 'website',
  },
  twitter: {
    title: 'Blog | Khaleej Mandi House Leicester',
    description: 'Explore the stories behind Khaleej Mandi — from the ancient origins of Mandi to Arabian spice culture, Majlis dining traditions, and our commitment to authentic Middle Eastern hospitality in Leicester.',
  },
}

import React from 'react'
import Blog from './blog'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'

export default function BlogPage() {
  return (
    <div>
      <Hero />
      <div id='nav'></div>
      <Navbar />
      <Blog />
      <Footer />
    </div>
  )
}
