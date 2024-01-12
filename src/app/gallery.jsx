import Image from 'next/image'
import React from 'react'

export default function Gallery() {
  return (
    <section className='container mx-auto px-[5%] lg:px-0 py-20'>
      <p className='text-[42px] md:text-[64px] font-[600] leading-normal pb-[40px] text-left font-source'>Khaleej Gallery</p>
      <div className='w-full max-w-[310px] h-[3px] bg-[#F3F25B]'></div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-8">
        <Image
          height={300}
          width={300}
          className="h-[100%] max-w-[100%] rounded-lg object-cover"
          src="/Images/majlis.jpg"
          alt="gallery-photo"
        />
        <Image
          height={300}
          width={300}
          className="h-[100%] max-w-[100%] rounded-lg object-cover"
          src="/Images/majlis2.jpg"
          alt="gallery-photo"
        />
        <Image
          height={300}
          width={300}
          className="h-[100%] max-w-[100%] rounded-lg object-cover"
          src="/Images/mandi1.jpg"
          alt="gallery-photo"
        />
        <Image
          height={300}
          width={300}
          className="h-[100%] max-w-[100%] rounded-lg object-cover"
          src="/Images/landingpage.jpg"
          alt="gallery-photo"
        />
        <Image
          height={300}
          width={300}
          className="h-[100%] max-w-[100%] rounded-lg object-cover"
          src="/Images/aboutus1.jpg"
          alt="gallery-photo"
        />
        <Image
          height={300}
          width={300}
          className="h-[100%] max-w-[100%] rounded-lg object-cover"
          src="/Images/carousel/landingpage.jpg"
          alt="gallery-photo"
        />
        <Image
          height={300}
          width={300}
          className="h-[100%] max-w-[100%] rounded-lg object-cover"
          src="/Images/carousel/carousel3.jpg"
          alt="gallery-photo"
        />
        <Image
          height={300}
          width={300}
          className="h-[100%] max-w-[100%] rounded-lg object-cover"
          src="/Images/carousel/carousel5.jpg"
          alt="gallery-photo"
        />

      </div>
    </section>
  )
}
