'use client'

import applyScrollAnimation from '@/components/scroll-animation'
import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    applyScrollAnimation('.scrollElement', '.scrollElement')
    applyScrollAnimation('.scrollElement2', '.scrollElement2')
  }, [])


  return (
    <section className='bg-black text-white'>
      <div className='grid grid-cols-1 md:grid-cols-2 md:h-[90vh]'>
        <Image
          src='/Images/carousel/carousel3.jpg'
          width={1000}
          height={600}
          alt='about image'
          className='w-full h-full object-cover '
        />
        <div className='p-[10%] md:p-[10%] text-justify scrollElement'>
          <p className='text-[22px] md:text-[36px] font-[600] leading-normal pb-[40px] w-[300px] font-source'>Our Story</p>
          <div className='w-full max-w-[310px] h-[3px] bg-[#F3F25B]'></div>
          <p className='mt-[30px] text-[14px] md:text-[16px]'>Welcome to Khaleej where Mandi&apos;s heart beats in Yemen&apos;s Hadramaut region, now brought to Leicester. At Khaleej, each plate is a wish for deliciousness, health, and prosperity -capturing Arabian culture&apos;s essence. Mandi, signifies unity through shared meals, bridging cultures in our tradition-rich restaurant.</p>
          <p className='mt-[30px] text-[14px] md:text-[16px]'>In Khaleej&apos;s ovens, Mandi magic unfolds, slow-cooking rice and tender meats to perfection. We&apos;ve brought the Middle East&apos;s unity and culture to the UK, inviting you to savor Mandi&apos;s rich heritage at Khaleej.</p>
          <div className='w-full flex justify-center'>
            <Link
              href="/about#hero"
            >
              <Button
                className='bg-primary rounded-[5px] w-[242px] mt-[45px] capitalize font-[400] font-source'
              >Read More...</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 md:h-[90vh] overflow-hidden'>
        <div className='p-[10%] md:p-[10%] text-justify scrollElement2'>
          <p className='text-[22px] md:text-[36px] font-[600] leading-normal pb-[40px] text-left font-source'>Savoring love together : The MAJLIS dining experience.</p>
          <div className='w-full max-w-[310px] h-[3px] bg-[#F3F25B]'></div>
          <p className='mt-[30px] text-[14px] md:text-[16px]'>&quot;Majlis&quot; in Khaleej cultivates togetherness through low seating, family-style dining, and cultural ambiance. With shared platters and traditional rituals, it fosters an intimate, communal atmosphere. </p>
          <p className='mt-[30px] text-[14px] md:text-[16px]'>This concept extends beyond meals, encouraging social interaction and creating an immersive experience that celebrates the joy of dining together.</p>
          <div className='w-full flex justify-center'>
            <Link
              href="/about#hero"
            >
              <Button
                className='bg-primary rounded-[5px] w-[242px] mt-[45px] capitalize font-[400] font-source'
              >Read More...</Button>
            </Link>
          </div>

        </div>
        <Image
          src='/Images/majlis.jpg'
          width={1000}
          height={600}
          alt='about image'
          className='w-full h-full object-cover order-first md:order-none'
        />
      </div>
    </section>
  )
}
