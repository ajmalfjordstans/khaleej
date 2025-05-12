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
  const [dimensions, setDimensions] = useState({ width: 330, height: 300 });
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
        className='mx-auto w-[330px] md:w-[400px]'
        ref={book}
        showCover={true}
        onFlip={onFlip}
        onInit={onInit}
      >
        <Image src={`/new-menu/1.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/2.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/3.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/4.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/5.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/6.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/7.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/8.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/9.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/10.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/11.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/12.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/13.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/14.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/15.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/16.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/17.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/18.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/19.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/20.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/21.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/22.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/23.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/24.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/25.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/26.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/27.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/28.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/29.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/30.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/31.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/32.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/33.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/34.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/35.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/36.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/37.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/38.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/39.jpg`} height={350} width={380} className='' alt='menu page' />
        <Image src={`/new-menu/40.jpg`} height={350} width={380} className='' alt='menu page' />
      </HTMLFlipBook>
      <div className='flex justify-center items-center gap-[50px] my-[30px]'>
        <Button
          className='bg-secondary text-black'
          onClick={() => book.current.pageFlip().flipPrev()}
        >Prev</Button>
        <p className='transition-opacity duration-100'>{page + 1 + " - "}{page + 2}/24</p>
        <Button
          className='bg-secondary text-black'
          onClick={() => book.current.pageFlip().flipNext('bottom')}
        >Next</Button>
      </div>
    </div>
  )
}
