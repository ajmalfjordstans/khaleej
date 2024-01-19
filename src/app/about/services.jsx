'use client'

import applyScrollAnimation from '@/components/scroll-animation'
import Image from 'next/image'
import React, { useEffect } from 'react'

export default function Services() {
  useEffect(() => {
    applyScrollAnimation('.scrollElement7', '.scrollElement7')
  }, [])
  const serviceDetails = [
    {
      img: "/Images/healthy.png",
      title: "Mandi - Why a healthier choice?",
      desc: 'It’s a healthier choice with lean meats, aromatic spices, and a mix of rice and vegetables. Slow roasting enhances flavors without excessive oils. This traditional Middle Eastern dish offers a balanced blend of protein, carbohydrates, and nutrients.'
    },
    {
      img: "/Images/kiss.png",
      title: "Chef’s Kiss",
      desc: 'We take pride in our chefs,  boasting 15+ years of  experience in crafting and serving Middle Eastern cuisine.'
    },
    {
      img: "/Images/royalty.png",
      title: "Flavours of royalty",
      desc: 'Bringing Middle Eastern dining to the UK, our concept emphasizes shared meals on large platters, creating bonds of love. Experience an Arabic setting that brings royal flavors near your doorstep.'
    },
  ]
  return (
    <section className='container mx-auto px-[5%] lg:px-0 py-20'>
      <p className='text-[22px] md:text-[36px] font-[600] leading-normal pb-[40px] text-left font-source'>Khaleej team, catering services <br />
        and success stories</p>
      <div className='w-full max-w-[310px] h-[3px] bg-[#F3F25B]'></div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[20px] mt-[40px] scrollElement7'>
        {serviceDetails.map((service, id) => {
          return (
            <div className='bg-[#FFD369] rounded-[10px] shadow-custom p-[15px] lg:p-[30px] font-montserrat' key={id}>
              <Image
                src={service.img}
                width={400}
                height={400}
                alt='service image'
                className='w-[100%] h-auto'
              />
              <div className='flex justify-center'>
                <p className='text-[24px] font-[500] capitalize'>{service.title}</p>
              </div>
              <p className='text-[16px] font-[500] mt-[20px] leading-[26px]'>{service.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
