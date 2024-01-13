'use client'

import React, { useEffect } from 'react'
import PageFlip from './page-flip'
import applyScrollAnimation from '@/components/scroll-animation'

export default function MenuSection() {
  useEffect(() => {
    applyScrollAnimation('.scrollElement3', '.scrollElement3')
  }, [])
  return (
    <section className='bg-primary text-white'>
      <div className='container mx-auto px-[5%] xl:px-0 py-10 scrollElement3'>
        <p className='text-julius text-[42px] md:text-[64px] font-[400] leading-normal text-center font-julius scrollElement3'>KHALEEJ MENU</p>
        <PageFlip />
      </div>
    </section>
  )
}
