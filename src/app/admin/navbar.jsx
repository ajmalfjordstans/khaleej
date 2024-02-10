'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon } from "@heroicons/react/24/outline"
import SideMenu from './side-menu';

export default function Navbar({ showSection, setShowSection }) {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const clickHandle = () => {
    return (
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    )
  }
  return (
    // <div className='relative'>
    <div className='px-[5%] flex items-center justify-evenly text-[14px] font-[600] text-primary sticky top-0 bg-white z-[20] h-[10dvh] shadow-md'>
      <Link
        href="/#hero"
      // onClick={() => clickHandle()}
      >
        <Image
          src='/Logo.png'
          height={101}
          width={162}
          alt='logo'
          className='w-[160px]'
        />
      </Link>
      <div className='absolute right-4 lg:hidden'>
        <Bars3Icon onClick={openDrawer} className='h-[30px] w-[30px]' />
      </div>
      <React.Fragment>
        {/* <Button onClick={openDrawer}>Open Drawer</Button> */}
        <Drawer open={open} onClose={closeDrawer} placement="right" className="">
          <div className="mb-6 flex flex-col items-center justify-between">
            <div className='flex items-center justify-between w-full p-4'>
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
            <div className='flex flex-col w-full gap-[20px]'>
              <SideMenu setShowSection={setShowSection} showSection={showSection} closeDrawer={closeDrawer}/>
            </div>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  )
}
