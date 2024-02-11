'use client'


import React from 'react'

export default function SideMenu({ showSection, setShowSection, closeDrawer }) {
  return (
    <div className='w-full md:w-[30vw] max-w-[302px] h-full shadow-md border-r-[1px] font-[700] text-[22px]'>
      <div className={`${showSection == "booking" ? "bg-[#ECE7FC]" : "bg-white"} w-full`}>
        <div className='flex gap-[20px] hover:cursor-pointer pl-[30px] py-[20px]'
          onClick={() => {
            closeDrawer && closeDrawer()
            setShowSection('booking')
          }}
        >
          <p className={`text-[16px] leading-[24px] text-primary`}>Majlis Booking</p>
        </div>
      </div>
      <div className={`${showSection == "enquiries" ? "bg-[#ECE7FC]" : "bg-white"} w-full`}>
        <div className='flex gap-[20px] hover:cursor-pointer pl-[30px] py-[20px]'
          onClick={() => {
            closeDrawer && closeDrawer()
            setShowSection('enquiries')
          }}
        >
          <p className={`text-[16px] leading-[24px] text-primary`}>Enquiries</p>
        </div>
      </div>
    </div>
  )
}
