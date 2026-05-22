import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-gray-900 border-t border-white/5'>
      <div className="container mx-auto container-px py-16 text-white/80 text-[14px] font-source leading-relaxed tracking-wide">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8'>
          <div className="flex flex-col items-center lg:items-start">
            <Image
              src='/Images/blackLogo.png'
              height={170}
              width={245}
              alt='footer logo'
              className='brightness-200 contrast-125 mb-6'
            />
            <p className='text-md font-bold font-julius'>Khaleej Mandhi House</p>
            <p className="text-sm text-center lg:text-left italic opacity-70">
              The Authentic Mandi Experience in the heart of United Kingdom.
            </p>
          </div>

          <div className='flex flex-col gap-6 pt-4'>
            <h4 className="text-secondary font-julius text-lg uppercase tracking-widest border-b border-secondary/20 pb-2 w-fit">Visit Us</h4>
            <Link href="https://maps.app.goo.gl/d9fndSD1sEV3dBnH7" className="hover:text-secondary transition-colors">
              <p className="font-semibold">Leicester Branch</p>
              <p>12-14 Highfield St, Leicester <br />LE2 1AB, UK</p>
            </Link>
            <div className="flex flex-col gap-2">
              <Link href="mailto:info@khaleejmandi.co.uk" className="hover:text-secondary transition-colors">
                <p>info@khaleejmandi.co.uk</p>
              </Link>
              <Link href='tel:+44 116 507 4571' className="hover:text-secondary transition-colors">
                <p className="text-lg font-bold text-secondary">+44 116 507 4571</p>
              </Link>
            </div>
          </div>

          <div className='flex flex-col gap-6 pt-4'>
            <h4 className="text-secondary font-julius text-lg uppercase tracking-widest border-b border-secondary/20 pb-2 w-fit">Opening Hours</h4>
            <div className="flex flex-col gap-3 font-medium">
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span>Monday - Sunday</span>
                <span className="text-secondary">12:00 PM - 11:00 PM</span>
              </div>
              <p className="text-xs opacity-60">Last order 30 minutes before closing.</p>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <h4 className="text-secondary font-julius text-sm uppercase tracking-widest opacity-80">Quick Links</h4>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-tighter">
                <Link href="/about" className="hover:text-secondary">About</Link>
                <Link href="/menu" className="hover:text-secondary">Menu</Link>
                <Link href="/blog" className="hover:text-secondary">Blog</Link>
                <Link href="/contact" className="hover:text-secondary">Contact</Link>
                <Link href="/careers" className="hover:text-secondary">Careers</Link>
              </div>
            </div>
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
                href="https://www.instagram.com/khaleejmandi.uk/"
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
