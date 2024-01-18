'use client'

import React, { useEffect, useRef, useState } from 'react'
import PageFlip from './page-flip'
import applyScrollAnimation from '@/components/scroll-animation'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import { Button } from '@material-tailwind/react';

export default function MenuSection() {
  const [pageNo, setPageNo] = useState(1)
  useEffect(() => {
    applyScrollAnimation('.scrollElement3', '.scrollElement3')
  }, [])
  const swiperRef = useRef(null);

  const breakpoints = {
    320: { slidesPerView: 1, spaceBetween: 0, },
    530: { slidesPerView: 2, spaceBetween: 0, },
    960: { slidesPerView: 3, spaceBetween: 0, },
  }

  const handleNextClick = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slideNext();
    }
  };
  const handlePrevClick = () => {
    if (swiperRef.current !== null) {
      swiperRef.current.slidePrev();
    }
  };
  return (
    <section className='bg-primary text-white'>
      <div className='container mx-auto px-[5%] xl:px-0 py-10 scrollElement3'>
        <p className='text-julius text-[42px] md:text-[64px] font-[400] leading-normal text-center font-julius scrollElement3'>KHALEEJ MENU</p>

        <div className='mt-[37px] flex flex-col relative'>
          <div className="flex items-center gap-[15px]">

            <div
              className='h-[20px] w-[20px] text-black '
              onClick={() => {
                // setPageNo(pageNo - 1)
                handlePrevClick()
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </div>
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              breakpoints={breakpoints}
              // onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className='!w-full flex max-w-[1200px] px-[5%]'
            >
              {Array.from({ length: 24 }, (_, index) => {
                return (
                  <SwiperSlide key={index + 1}>
                    <Image
                      src={`/menu/${index + 1}.jpg`}
                      height={350}
                      width={400}
                      className=''
                      alt={`menu page ${index + 1}`}
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <div
              className='h-[20px] w-[20px] text-black '
              onClick={() => {
                // setPageNo(pageNo + 1)
                handleNextClick()
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
          <div className='flex justify-center items-center gap-[50px] my-[30px] w-full  z-[10]'>

            {/* <p className='transition-opacity duration-100'>{pageNo  + " - "}{pageNo + 2}/24</p> */}
            <Button className='bg-secondary text-black capitalize font-[400] font-source' onClick={() => window.open('/KhaleejMenu.pdf')}>View Menu</Button>

          </div>
        </div>
        {/* <PageFlip /> */}
      </div>
    </section >
  )
}
