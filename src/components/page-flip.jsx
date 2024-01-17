'use client'

import { Button } from '@material-tailwind/react';
import Image from 'next/image';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import HTMLFlipBook from "react-pageflip";

export default function PageFlip() {
  const book = useRef();
  const [page, setPage] = useState(0)
   const onFlip = useCallback((e) => {
    setPage(e.data)
  }, []);
  return (
    <div className='text-white my-8'>
      <HTMLFlipBook width={330} height={500} className='mx-auto w-[330px] md:w-[400px]' ref={book} showCover={false}
        onFlip={onFlip}
      >
        <Image src={`/menu/1.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/2.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/3.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/4.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/5.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/6.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/7.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/8.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/9.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/10.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/11.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/12.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/13.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/14.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/15.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/16.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/17.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/18.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/19.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/20.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/21.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/22.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/23.jpg`} height={350} width={280} className='' alt='menu page' />
        <Image src={`/menu/24.jpg`} height={350} width={280} className='' alt='menu page' />
      </HTMLFlipBook>
      <div className='flex justify-center items-center gap-[50px] my-[30px]'>
        <Button
          className='bg-secondary text-black'
          onClick={() => book.current.pageFlip().flipPrev()}
        >Prev</Button>
        <p className='transition-opacity duration-100'>{page+1 + " - " }{page + 2}/24</p>
        <Button
          className='bg-secondary text-black'
          onClick={() => book.current.pageFlip().flipNext('bottom')}
        >Next</Button>
      </div>
    </div>
  )
}
