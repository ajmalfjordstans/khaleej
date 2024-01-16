'use client'

import Form from '@/components/majlis-booking-form'
import applyScrollAnimation from '@/components/scroll-animation'
import Image from 'next/image'
import React, { useEffect } from 'react'


export default function ContactSection() {
  useEffect(() => {
    applyScrollAnimation('.scrollElement5', '.scrollElement5')
  }, [])
  return (
    <section className='bg-gradient-to-b from-primary to-black text-white'>
      <div className='container mx-auto px-[5%] lg:px-0 py-10 grid grid-cols-1 lg:grid-cols-2 gap-3'>
        <div className='flex flex-col justify-center scrollElement5'>
          <p className='text-[22px] md:text-[36px] font-[600] leading-normal pb-[40px] text-left font-source '> Majlis Magic<br />Book your’s Now!</p>
          <div className='w-full max-w-[310px] h-[3px] bg-[#F3F25B]'></div>
          <Image
            src="/Images/majlis2.jpg"
            height={300}
            width={400}
            alt='majlis'
            className='mt-[20px] object-cover mx-auto'
          />
        </div>
        <div className=''
          style={{ backgroundColor: "rgba(255, 255, 255, 0.29)" }}
        >
          <Form />
        </div>
      </div>
    </section>
  )
}
