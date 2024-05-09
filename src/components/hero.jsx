'use client'

import { Button } from '@material-tailwind/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React, { useEffect, useState } from 'react'
import GoogleMapComponent from './google-map'
import Loading from './loading'

export default function Hero() {
  const [loading, setLoading] = React.useState(false)
  const [bg, setBg] = useState('/Images/carousel/landingpage.jpg')
  const [carouselBg, setCarouselBg] = useState('/Images/carousel/landingpage.jpg')
  const pathname = usePathname()
  let carousel = ['/Images/carousel/landingpage.jpg', '/Images/carousel/carousel3.jpg', '/Images/carousel/carousel5.jpg']

  useEffect(() => {
    // setBg('/Images/carousel/landingpage.jpg') startSlide()
    if (pathname == '/') {
      setBg('/Images/carousel/landingpage.jpg')
      startSlide()
    }
    else if (pathname == '/about') setBg('/Images/newimages/aboutus1.jpg')
    else if (pathname == '/menu') setBg('/Images/newimages/ourmenu.jpg')
    else if (pathname == '/contact') setBg('/Images/newimages/contactus.jpg')
    else if (pathname == '/book-now') setBg('/Images/newimages/contactus.jpg')
    else if (pathname == '/careers') setBg('/Images/newimages/career.jpg')
  }, [pathname])

  const startSlide = () => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % carousel.length;
      setCarouselBg(carousel[currentIndex]);
    }, 10000);
    if (pathname !== '/') clearInterval(intervalId)
    return () => clearInterval(intervalId);
  }
  const template = (heading, desc) => {
    return (
      <div className='text-center flex flex-col items-center'>
        <p className='font-julius text-[42px] md:text-[64px] font-[300] leading-normal uppercase'>{heading}</p>
        <p className='font-julius text-[15px] lg:text-[30px] uppercase mt-[40px] max-w-[903px] w-[80%] p-[15px]'
          style={{
            backgroundColor: 'rgba(207, 157, 64, 0.53)'
          }}
        >{desc}</p>
      </div>
    )
  }

  const content = () => {
    // if (pathname == '/') {
    //   return (
    //     <div className='text-center'>
    //       <p className={`font-julius text-[42px] md:text-[64px] font-[300] leading-normal uppercase`}>Khaleej<br /> Mandi House</p>
    //       <p className='font-julius text-[15px] md:text-[24px] font-[600] uppercase mt-[20px]'>The Authentic Mandi in United Kingdom </p>
    //       <p className='font-julius text-[15px] md:text-[24px] font-[600] uppercase '>Flavours of royalty</p>
    //       <Link
    //         href="/menu"
    //       >
    //         <Button
    //           className='bg-primary rounded-[5px] w-[333px] mt-[40px] capitalize font-[400] font-source'
    //         >View Menu</Button>
    //       </Link>
    //     </div>
    //   )
    // } else
    if (pathname == '/about') {
      return (template(
        'ABOUT US',
        '"Welcome to our world of Mandi, where we craft diverse flavours,tradition and togetherness of the Khaleej in perfect harmony."'
      ))
    } else if (pathname == '/menu') {
      return (template(
        'OUR MENU',
        'Immerse yourself in an unparalleled experience of authentic arabic hospitality serving an exciting culinary adventure ! "'
      ))
    } else if (pathname == '/contact') {
      return (
        <div className='text-center flex flex-col items-center'>
          <p className='font-julius text-[42px] md:text-[64px] font-[300] leading-normal uppercase'>Contact us</p>
          <GoogleMapComponent />
        </div>
      )
    } else if (pathname == '/book-now') {
      return (
        <div className='text-center flex flex-col items-center'>
          <p className='text-julius md:text-[64px] font-[300] leading-normal uppercase'>BOOK NOW</p>

        </div>
      )
    } else if (pathname == '/careers') {
      return (
        <div className='text-center flex flex-col items-center'>
          <p className='text-julius text-[42px] md:text-[64px] font-[300] leading-normal uppercase'>Careers</p>
        </div>
      )
    }
  }

  if (pathname == '/')
    return (
      <section className='h-[100dvh] w-[100vw] text-white  transition-all duration-500 px-[5%] flex items-center justify-center' id='hero'
        style={{ backgroundImage: `url("${carouselBg}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='absolute inset-0 bg-black opacity-40 z-[9] h-[100dvh]'></div>
        <div className='text-center z-[10]'>
          <p className={`font-julius text-[42px] md:text-[64px] font-[300] leading-normal uppercase`}>Khaleej<br /> Mandi House</p>
          <p className='font-julius text-[15px] md:text-[24px] font-[600] uppercase mt-[20px]'>The Authentic Mandi in United Kingdom </p>
          <p className='font-julius text-[15px] md:text-[24px] font-[600] uppercase '>Flavours of royalty</p>
          <Link
            href="/menu"
          >
            <Button
              className='bg-primary rounded-[5px] w-[333px] mt-[40px] capitalize font-[400] font-source'
            >View Menu</Button>
          </Link>
          <div className='w-full flex flex-col items-center'>
            <Link
              href='#nav'
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 absolute bottom-[40px] mx-auto animate-bounce hover:cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    )
  else
    return (
      <section className='h-[100dvh] w-[100vw] text-white  transition-all duration-500 px-[5%]' id='hero'
        style={{ backgroundImage: `url("${bg}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='absolute inset-0 bg-black opacity-20 z-[9]'></div>
        <div className='relative z-[10] h-[100dvh] flex flex-col justify-center'>
          {content()}
          <div className='w-full flex flex-col items-center'>
            <Link
              href='#nav'
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 absolute bottom-[40px] mx-auto animate-bounce hover:cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    )
}
