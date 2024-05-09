'use client'

import CancelBooking from '@/components/forms/cancel-booking'
import Form from '@/components/majlis-booking-form'
import applyScrollAnimation from '@/components/scroll-animation'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


export default function ContactSection() {
  const [activeTab, setActiveTab] = useState('bookNow');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    applyScrollAnimation('.scrollElement5', '.scrollElement5')
  }, [])
  return (
    <section className='bg-gradient-to-b to-primary from-black text-white md:bg-majlis-bg bg-cover'
    // style={{ background: 'linear-gradient(to bottom, black, primary)', backgroundPosition: '50% 30%' }}
    >
      <div className='md:container mx-auto grid grid-cols-1 lg:grid-cols-2 md:gap-3 md:pb-10'>
        <div className='bg-majlis-bg md:bg-none bg-cover min-h-[400px] flex items-center'>
          <div className='flex flex-col justify-center scrollElement5 container mx-auto px-[5%] lg:px-0 py-10'>
            <p className='text-[22px] md:text-[36px] font-[600] leading-normal pb-[40px] text-left font-source '> Majlis Magic<br />Book your’s Now!</p>
            <div className='w-full max-w-[310px] h-[3px] bg-[#F3F25B]'></div>
          </div>
        </div>
        <div className='bg-white rounded-[2px] container mx-auto px-[5%] lg:px-0 md:my-10 text-black'
        // style={{ backgroundColor: "rgba(255, 255, 255, 0.29)" }}
        >
          <div className="flex space-x-4 pt-[15px] pl-[20px]">
            <button
              className={`transition duration-300 ease-in-out px-4 py-2 border-b-4 ${activeTab === 'bookNow'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-primary'
                }`}
              onClick={() => handleTabChange('bookNow')}
            >
              Book Now
            </button>
            <button
              className={`transition duration-300 ease-in-out px-4 py-2 border-b-4 ${activeTab === 'cancelBooking'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-primary'
                }`}
              onClick={() => handleTabChange('cancelBooking')}
            >
              Cancel Booking
            </button>
          </div>
          {activeTab === 'bookNow' ?
            <Form />
            :
            <CancelBooking />
          }

        </div>
      </div>
    </section>
  )
}
