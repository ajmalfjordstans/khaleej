'use client'

import { Button } from '@material-tailwind/react';
import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import HTMLFlipBook from "react-pageflip";
import { useInView } from 'react-intersection-observer';

export default function PageFlip() {
  const book = useRef();
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 430, height: 400 });
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth >= 768 ? 530 : 330,
        height: window.innerWidth >= 768 ? 500 : 300
      });
    };

    handleResize(); // Set initial dimensions
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onFlip = useCallback((e) => {
    // console.log(e.data);
    setPage(e.data)
  }, []);

  const onInit = () => {
    setLoading(false)
    if (inView) {
      console.log('Component is in view!');
      if (book.current) {
        book.current.pageFlip().flip(1);
      }
    }
  };

  useEffect(() => {
    if (inView) {
      if (book.current) {
        book.current.pageFlip().flip(1);
      }
    }
  }, [inView]);

  return (
    <div className='text-white my-8' ref={ref}>
      {loading ?
        <div className='mx-auto w-[330px] md:w-[400px] flex justify-center items-center'>
          Menu Loading...
        </div>
        : ""}
      <HTMLFlipBook
        width={dimensions.width}
        height={dimensions.height}
        className='md:mx-auto w-[full]'
        ref={book}
        showCover={true}
        onFlip={onFlip}
        onInit={onInit}
      >
        <Image src={`/new-menu/1.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/2.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/3.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/4.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/5.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/6.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/7.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/8.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/9.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/10.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/11.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/12.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/13.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/14.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/15.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/16.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/17.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/18.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/19.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/20.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/21.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/22.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/23.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/24.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/25.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/26.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/27.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/28.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/29.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/30.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/31.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/32.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/33.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/34.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/35.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/36.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/37.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/38.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/39.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
        <Image src={`/new-menu/40.webp`} height={850} width={880} className='max-w-full' alt='menu page' />
      </HTMLFlipBook>
      <div className='flex justify-center items-center gap-[50px] my-[30px]'>
        <Button
          className='bg-secondary text-black'
          onClick={() => book.current.pageFlip().flipPrev()}
        >Prev</Button>
        <p className='transition-opacity duration-100'>{page + 1 + " - "}{page + 2}/40</p>
        <Button
          className='bg-secondary text-black'
          onClick={() => book.current.pageFlip().flipNext('bottom')}
        >Next</Button>
      </div>
    </div>
  )
}
