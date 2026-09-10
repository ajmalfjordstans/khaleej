'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { useCart, useCartBump } from '@/context/OrderCartContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollY = useRef(0)
  const navRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const { itemCount } = useCart()
  const bump = useCartBump()

  // The scroll-story home page and the ordering pages both want the nav out of
  // the way while scrolling down — same auto-hide behaviour as the donor site.
  const autoHideSection = pathname === '/' || (pathname?.startsWith('/order') ?? false)

  const openDrawer = () => setOpen(true)
  const closeDrawer = () => setOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (autoHideSection) {
        const goingDown = scrollTop > lastScrollY.current
        setIsHidden(goingDown && scrollTop > 120)
      } else {
        setIsHidden(false)
      }
      lastScrollY.current = scrollTop
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [autoHideSection])

  useEffect(() => {
    if (!autoHideSection) setIsHidden(false)
  }, [autoHideSection])

  // Publishes this nav's live rendered height (0 while hidden) so pages with
  // their own sticky bars (the ordering pages) can offset below it instead of
  // overlapping it.
  useEffect(() => {
    const h = navRef.current?.offsetHeight ?? 0
    document.documentElement.style.setProperty('--site-nav-offset', isHidden ? '8px' : `${h + 16}px`)
  }, [isHidden])

  return (
    <>
      <div
        ref={navRef}
        className={`container-px flex items-center justify-evenly text-[14px] font-[600] text-primary sticky top-0 md:top-2 glass-nav z-[20] h-[60px] md:h-[80px] transition-transform duration-300 md:rounded-full md:mx-auto md:max-w-[95%] shadow-premium mt-0 md:mt-2 ${
          isHidden ? '-translate-y-[calc(100%+16px)]' : 'translate-y-0'
        }`}
      >
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
            className='w-[110px] h-auto md:w-[160px]'
            priority
          />
        </Link>
        <div className='hidden lg:flex w-[40%] items-center justify-around'>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/order" className='font-bold text-accent hover:text-accent-dark transition-colors'>Order Online</Link>
        </div>
        <div className='absolute right-4 flex items-center gap-3'>
          <Link href="/order/cart" className='relative hidden lg:flex' aria-label='Cart'>
            <ShoppingBagIcon className={`h-6 w-6 transition-transform duration-200 ${bump ? 'scale-125' : 'scale-100'}`} />
            {itemCount > 0 && (
              <span className='absolute -top-1.5 -right-1.5 bg-secondary text-black text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center'>
                {itemCount}
              </span>
            )}
          </Link>
          <div className='lg:hidden relative'>
            <Link href="/order/cart" aria-label='Cart'>
              <ShoppingBagIcon className={`h-6 w-6 transition-transform duration-200 ${bump ? 'scale-125' : 'scale-100'}`} />
              {itemCount > 0 && (
                <span className='absolute -top-1.5 -right-1.5 bg-secondary text-black text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center'>
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
          <Bars3Icon onClick={openDrawer} className='h-[30px] w-[30px] lg:hidden cursor-pointer' />
        </div>
      </div>

      <div className='lg:hidden'>
        {open && (
          <div
            className='fixed inset-0 z-[9998] bg-black/30'
            onClick={closeDrawer}
            aria-hidden='true'
          />
        )}
        <div
          className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-white p-4 shadow-2xl z-[9999] transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
          role='dialog'
          aria-modal='true'
          aria-hidden={!open}
        >
          <div className="mb-6 flex flex-col items-center justify-between">
            <div className='flex items-center justify-between w-full'>
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
            <div className='flex flex-col w-full gap-[20px] px-[5%] mt-4'>
              <Link onClick={closeDrawer} href="/order" className='font-bold text-primary'>Order Online</Link>
              <Link onClick={closeDrawer} href="/">Home</Link>
              <Link onClick={closeDrawer} href="/about">About</Link>
              <Link onClick={closeDrawer} href="/menu">Menu</Link>
              <Link onClick={closeDrawer} href="/contact">Contact</Link>
              <Link onClick={closeDrawer} href="/careers">Careers</Link>
              <Link onClick={closeDrawer} href="/blog">Blog</Link>
              <Link href="tel:+44 116 507 4571">Call Us</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
