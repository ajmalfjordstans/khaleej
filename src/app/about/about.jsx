'use client'

import applyScrollAnimation from '@/components/scroll-animation'
import Image from 'next/image'
import React, { useEffect } from 'react'

export default function AboutSection() {
  useEffect(() => {
    applyScrollAnimation('.scrollElement', '.scrollElement')
  }, [])
  return (
    // flex flex-col items-end
    <div className='min-h-[100vh] relative text-white bg-black pt-[150px]'>
      <Image
        src="/Images/aboutus2.jpg"
        height={900}
        width={900}
        alt="background"
        className='w-full max-h-[80vh] md:w-[80vw] absolute top-0 right-0 z-[5]'
      />
      <div
        //  absolute top-[150px] left-0
        className='z-[10] w-full md:w-[80vw] object-cover scrollElement'
        style={{
          backgroundColor: ' rgba(137, 24, 46, 0.70)',
          position: 'relative',
        }}
      >
        <div className='p-[10%] md:p-[10%] text-justify text-[14px] md:text-[16px] pt-[50px]'>
          <p className='text-[22px] md:text-[36px] font-[600] leading-normal pb-[40px] text-left font-source'>Khaleej Stories</p>
          <div className='w-full max-w-[310px] h-[3px] bg-[#F3F25B]'></div>
          <p className='mt-[30px]'>In the heart of Arabic culture, each meal begins with a heartfelt wish for deliciousness, health, and prosperity – sentiments we embody in every plate of Mandi at our restaurant. </p>
          <p className='mt-[30px]'>Our journey commences in the ancient heart of Hadramaut, Yemen, where Mandi&apos;s secrets were first unveiled. This culinary treasure, rooted in tradition, quickly captivated the world, traveling from the Gulf to distant shores.</p>
          <p className='mt-[30px]'>Mandi, a dish known for its luscious, dew-kissed tenderness, derives its name from the Arabic word &quot;Nada,&quot; meaning &quot;dew.&quot; It&apos;s more than just a dish; it&apos;s a symbol of unity through shared meals, a bridge to our culture, and a testament to our love for tradition. It&apos;s a representation of togetherness, like a blend of all the countries in the Middle East, which we fondly refer to as &quot;Khaleej,&quot; meaning &quot;Gulf.&quot;</p>
          <p className='mt-[30px]'>Our Mandi magic unfolds in the oven, where rice and tender meats slow-cook to perfection, absorbing aromatic spices and creating a symphony of flavors. We traveled across the world to bring this sense of unity, this blend of Middle Eastern cultures, to the UK.</p>
          <p className='mt-[30px]'>&quot;Welcome to our world of Mandi, where we craft diverse flavours,tradition and togetherness of the Khaleej in perfect harmony.&quot;</p>
        </div>
      </div>
    </div>
  )
}
