'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
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
        href="/"
      // onClick={() => clickHandle()}
      >
        <Image
          src='/Logo.png'
          height={101}
          width={162}
          alt='logo'
          className='w-[120px] h-auto'
        />
      </Link>
      <div className='absolute right-4 lg:hidden'>
        <Bars3Icon onClick={openDrawer} className='h-[30px] w-[30px]' />
      </div>
      {open && (
        <div
          className='fixed inset-0 z-[9998] bg-black/30'
          onClick={closeDrawer}
          aria-hidden='true'
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl z-[9999] transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role='dialog'
        aria-modal='true'
        aria-hidden={!open}
      >
        <div className="mb-6 flex flex-col items-center justify-between">
          <div className='flex items-center justify-between w-full p-4'>
            <Image
              src='/Logo.png'
              height={101}
              width={162}
              alt='logo'
              className='w-[140px] h-auto'
            />
            <button
              type='button'
              aria-label='Close menu'
              onClick={closeDrawer}
              className='p-2 text-gray-700 hover:text-primary transition-colors'
            >
              <XMarkIcon className='h-5 w-5' />
            </button>
          </div>
          <div className='flex flex-col w-full gap-[20px]'>
            <SideMenu setShowSection={setShowSection} showSection={showSection} closeDrawer={closeDrawer}/>
          </div>
        </div>
      </div>
    </div>
  )
}
