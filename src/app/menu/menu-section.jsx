'use client'

import React, { useEffect, useRef, useState } from 'react'
import applyScrollAnimation from '@/components/scroll-animation'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import { Button } from '@material-tailwind/react';
import PageFlip from '@/components/page-flip';

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
        <PageFlip />
      </div>
    </section >
  )
}
