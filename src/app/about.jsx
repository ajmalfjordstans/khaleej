'use client'

import applyScrollAnimation from '@/components/scroll-animation'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    applyScrollAnimation('.scrollElement', '.scrollElement')
    applyScrollAnimation('.scrollElement2', '.scrollElement2')
  }, [])

  return (
    <section className='bg-[#0a0a0a] text-white overflow-hidden'>

      {/* Section 1: Our Story */}
      <div className='grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]'>
        <div className='relative h-[55vw] max-h-[600px] lg:h-auto lg:max-h-none'>
          <Image
            src='/Images/story.JPG'
            fill
            alt='Our Story'
            className='object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0a]/50' />
        </div>

        <div className='flex items-center px-8 py-14 sm:px-12 lg:px-16 xl:px-20 scrollElement'>
          <div className='w-full max-w-lg'>
            <p className='text-secondary font-julius text-[11px] uppercase tracking-[0.3em] mb-5'>Our Story</p>
            <h2 className='text-3xl sm:text-4xl lg:text-[42px] font-source font-semibold leading-tight mb-6'>
              Bringing Arabian<br />Flavours to Leicester
            </h2>
            <div className='w-14 h-[3px] bg-secondary mb-8' />
            <p className='text-white/65 text-[15px] leading-relaxed mb-4'>
              Welcome to Khaleej — where Mandi&apos;s heart beats from Yemen&apos;s Hadramaut region, now brought to Leicester. Each plate is a wish for deliciousness, health, and prosperity, capturing the very essence of Arabian culture.
            </p>
            <p className='text-white/65 text-[15px] leading-relaxed mb-10'>
              In our ovens, Mandi magic unfolds — rice and tender meats slow-cook to perfection, absorbing aromatic spices and bridging cultures with every bite.
            </p>
            <Link href='/about'>
              <button className='border border-secondary text-secondary font-julius text-[11px] uppercase tracking-widest px-8 py-3 hover:bg-secondary hover:text-black transition-all duration-300'>
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Section 2: Majlis Experience */}
      <div className='grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]'>
        <div className='flex items-center px-8 py-14 sm:px-12 lg:px-16 xl:px-20 order-2 lg:order-1 scrollElement2'>
          <div className='w-full max-w-lg'>
            <p className='text-secondary font-julius text-[11px] uppercase tracking-[0.3em] mb-5'>The Experience</p>
            <h2 className='text-3xl sm:text-4xl lg:text-[42px] font-source font-semibold leading-tight mb-6'>
              Traditional Majlis<br />Dining
            </h2>
            <div className='w-14 h-[3px] bg-secondary mb-8' />
            <p className='text-white/65 text-[15px] leading-relaxed mb-4'>
              &quot;Majlis&quot; at Khaleej cultivates togetherness through low seating, family-style dining, and rich cultural ambiance. With shared platters and traditional rituals, every visit becomes an intimate, communal occasion.
            </p>
            <p className='text-white/65 text-[15px] leading-relaxed mb-10'>
              This concept extends beyond meals — encouraging social interaction and creating an immersive experience that celebrates the joy of dining together.
            </p>
            <Link href='/about'>
              <button className='border border-secondary text-secondary font-julius text-[11px] uppercase tracking-widest px-8 py-3 hover:bg-secondary hover:text-black transition-all duration-300'>
                Read More
              </button>
            </Link>
          </div>
        </div>

        <div className='relative h-[55vw] max-h-[600px] lg:h-auto lg:max-h-none order-1 lg:order-2'>
          <Image
            src='/Images/majlis.jpg'
            fill
            alt='Majlis Dining'
            className='object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0a0a0a]/50' />
        </div>
      </div>

    </section>
  )
}
