import React from 'react'
import PageFlip from './page-flip'

export default function MenuSection() {

  return (
    <section className='bg-primary text-white'>
      <div className='container mx-auto px-[5%] xl:px-0 py-10'>
        <p className='text-julius text-[42px] md:text-[64px] font-[400] leading-normal text-center font-julius'>KHALEEJ MENU</p>
        <PageFlip />
      </div>
    </section>
  )
}
