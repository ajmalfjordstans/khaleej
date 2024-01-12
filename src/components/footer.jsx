import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black'>
      <div className="container mx-auto px-[5%] lg:px-0 py-8 text-white text-[14px] font-[400] leading-[180%] tracking-[0.14px]">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <Image
            src='/Images/blackLogo.png'
            height={170}
            width={245}
            alt='footer logo'
            className='mx-auto'
          />
          <div className='pt-[40px]'>
            <p>2-14 Highfield St, Leicester LE2 1AB, United Kingdom</p>
            <Link
              href="mailto:khaleejmandihouse@gmail.com"
            >
              <p className='mt-3'>khaleejmandihouse@gmail.com</p>
            </Link>
            <Link
              href='tel:0 116 507 4571'
            >
              <p className='mt-3'>0 116 507 4571</p>
            </Link>
          </div>
          <div className='pt-[40px] flex flex-col'>
            <p className='font-[500]'>Quick Links</p>
            <Link
              href="/menu"
              className='mt-3'>Khaleej Menu</Link>
            <Link
              href="/contact"
              className='mt-3'>Contact Us</Link>
          </div>
          <div className='pt-[40px] flex flex-col'>
            <Link
              href=''
              className='mt-3'>Terms & Conditions</Link>
            <Link
              href=''
              className='mt-3'>Privacy Policy</Link>
            <div className='grid grid-cols-4 mt-8 '>
              <Link
                href="https://instagram.com/khaleejmandi.uk?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
              >
                <Image
                  src='/Images/instagram.png'
                  height={40}
                  width={40}
                  alt='footer logo'
                  className='hover:cursor-pointer mx-auto'
                />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61552072526576"
              >
                <Image
                  src='/Images/facebook.png'
                  height={40}
                  width={40}
                  alt='footer logo'
                  className='hover:cursor-pointer mx-auto'
                />
              </Link>
              <Link
                href="https://www.threads.net/@khaleejmandi.uk"
              >
                <Image
                  src='/Images/threads.png'
                  height={40}
                  width={40}
                  alt='footer logo'
                  className='hover:cursor-pointer mx-auto'
                />
              </Link>
              <Link
                href="https://www.tiktok.com/@khaleejmandi.uk?_t=8hw6BNJCR4C&_r=1"
              >
                <Image
                  src='/Images/tiktok.png'
                  height={40}
                  width={40}
                  alt='footer logo'
                  className='hover:cursor-pointer mx-auto'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-primary py-6 px-[5%] lg:px-0 text-white'>
        <div className='container mx-auto'>
          <p>© 2023 Khaleej. All Rights Reserved.</p>
        </div>
      </div>
      <div className='h-[40px] w-full'>

      </div>
    </div>
  )
}
