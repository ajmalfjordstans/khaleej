import Form from '@/components/form'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ContactDetails() {
  return (
    <div className='container mx-auto px-[5%] lg:px-0 py-20 grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
      <div className='w-full flex flex-col justify-between bg-primary rounded-[10px] p-[40px] text-[20px] font-[400] text-white shadow-custom'>
        <div>
          <div className='flex gap-[30px]'>
            <Image
              src="/Images/location.png"
              height={35}
              width={35}
              alt='icon'
              className='h-[35px] w-[28px]'
            />
            <p>12-14 Highfield St, Leicester LE2 1AB,<br /> United Kingdom</p>
          </div>
          <div className='flex gap-[30px] mt-[30px]'>
            <Image
              src="/Images/contacticon.png"
              height={35}
              width={35}
              alt='icon'
              className='h-[35px] w-[35px]'
            />
            <div>
              <p>Phone : 0 116 507 4571</p>
              <p>Email : khaleejmandihouse@gmail.com</p>
            </div>
          </div>
          <div className='flex gap-[30px] mt-[30px]'>
            <Image
              src="/Images/clock.png"
              height={35}
              width={35}
              alt='icon'
              className='h-[35px] w-[35px]'
            />
            <div>
              <p>Opening Hours</p>
              <p className='mt-[20px]'>MON  to SUN     12:00 PM to 11:00 PM</p>
            </div>
          </div>
        </div>
        <div className='flex justify-end gap-[20px]'>
          <Link
            href="https://www.facebook.com/profile.php?id=61552072526576"
          >
            <Image
              src="/Images/facebook.png"
              height={35}
              width={35}
              alt='icon'
              className='h-[35px] w-[35px]'
            />
          </Link>
          <Link
            href="https://instagram.com/khaleejmandi.uk?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
          >
            <Image
              src="/Images/instagram.png"
              height={35}
              width={35}
              alt='icon'
              className='h-[35px] w-[35px]'
            />
          </Link>
        </div>
      </div>
      <div className='w-full bg-secondary rounded-[10px] p-[10px] shadow-custom'>
        <Form />
      </div>
    </div>
  )
}
// clock.png, contacticon.png, instagram.png, facebook.png