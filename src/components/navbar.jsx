'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  Drawer,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon } from "@heroicons/react/24/outline"

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <div className='container-px flex items-center justify-evenly text-[14px] font-[600] text-primary sticky top-0 md:top-2 glass-nav z-[20] h-[60px] md:h-[80px] transition-all duration-300 md:rounded-full md:mx-auto md:max-w-[95%] shadow-premium mt-0 md:mt-2'>
        <div className='hidden lg:block w-[40%]'>
          <div className='flex w-full justify-around'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/menu">Menu</Link>
          </div>
        </div>
        <Link href="/">
          <Image
            src='/Logo.png'
            height={101}
            width={162}
            alt='logo'
            className='w-[160px]'
          />
        </Link>
        <div className='hidden lg:block w-[40%]'>
          <div className='flex w-full justify-around'>
            <Link href="/contact">Contact</Link>
            <Link href="/careers">Careers</Link>
            <Link href="tel:+44 116 507 4571">Call Us</Link>
          </div>
        </div>
        <div className='absolute right-4 lg:hidden'>
          <Bars3Icon onClick={openDrawer} className='h-[30px] w-[30px]' />
        </div>
      </div>

      <div className='lg:hidden'>
        <Drawer
          open={open}
          onClose={closeDrawer}
          placement="right"
          className="p-4 bg-white"
          style={{ zIndex: 9999 }}
        >
          <div className="mb-6 flex flex-col items-center justify-between">
            <div className='flex items-center justify-between w-full'>
              <Image
                src='/Logo.png'
                height={101}
                width={162}
                alt='logo'
                className='w-[160px]'
              />
              <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
            <div className='flex flex-col w-full gap-[20px] px-[5%] mt-4'>
              <Link onClick={closeDrawer} href="/">Home</Link>
              <Link onClick={closeDrawer} href="/about">About</Link>
              <Link onClick={closeDrawer} href="/menu">Menu</Link>
              <Link onClick={closeDrawer} href="/contact">Contact</Link>
              <Link onClick={closeDrawer} href="/careers">Careers</Link>
              <Link href="tel:+44 116 507 4571">Call Us</Link>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  )
}
