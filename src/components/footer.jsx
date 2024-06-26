import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black'>
      <div className="container mx-auto px-[5%] lg:px-0 py-8 text-white text-[14px] font-[300] leading-[180%] tracking-[0.14px]">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <Image
              src='/Images/blackLogo.png'
              height={170}
              width={245}
              alt='footer logo'
              className='mx-auto'
            />
          </div>
          <div className='pt-[40px]'>
            <Link
              href="https://maps.app.goo.gl/d9fndSD1sEV3dBnH7"
            >
              <p>12-14 Highfield St, Leicester <br />LE2 1AB, UK</p>
            </Link>
            <Link
              href="mailto:leicester@khaleejmandi.co.uk"
            >
              <p className='mt-3'>leicester@khaleejmandi.co.uk</p>
            </Link>
            <Link
              href='tel:+44 116 507 4571'
            >
              <p className='mt-3'>+44 116 507 4571</p>
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
            <Image
              src='/hmc white.png'
              height={100}
              width={100}
              alt='footer logo'
              className='mx-auto'
            />
            <div className='grid grid-cols-4 mt-8 '>
              <Link
                href="https://instagram.com/khaleejmandi.uk?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
              >
                <Image
                  src='/Images/instagram.png'
                  height={25}
                  width={25}
                  alt='footer logo'
                  className='hover:cursor-pointer mx-auto'
                />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61552072526576"
              >
                <Image
                  src='/Images/facebook.png'
                  height={25}
                  width={25}
                  alt='footer logo'
                  className='hover:cursor-pointer mx-auto'
                />
              </Link>
              <Link
                href="https://www.threads.net/@khaleejmandi.uk"
              >
                <Image
                  src='/Images/threads.png'
                  height={25}
                  width={25}
                  alt='footer logo'
                  className='hover:cursor-pointer mx-auto'
                />
              </Link>
              <Link
                href="https://www.tiktok.com/@khaleejmandi.uk?_t=8hw6BNJCR4C&_r=1"
              >
                <Image
                  src='/Images/tiktok.png'
                  height={25}
                  width={25}
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
    </div>
  )
}
