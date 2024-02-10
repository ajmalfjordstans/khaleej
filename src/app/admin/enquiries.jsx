'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Enquiries() {
  const [enquiries, setEnquiries] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getEnquiries()
  }, [])

  const getEnquiries = async () => {
    setLoading(true)
    // const apiEndpoint = "http://localhost:3005/contact/getEnquiries"
    const apiEndpoint = "https://khaleej-backend.onrender.com/contact/getEnquiries"
    axios.get(apiEndpoint)
      .then(response => {
        console.log(response);
        setEnquiries(response?.data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }

  const Card = (data) => {
    // console.log(data.data);
    return (
      <div className='w-full rounded-[4px] border-[1px] border-primary shadow-md p-[20px]'>
        <div className="grid grid-cols-2">
          <div className='flex flex-col gap-2'>
            <p className='font-[700] text-[20px] leading-[22px] text-primary my-[10px]'>Enquiry</p>
            <p className='text-[18px] leading-[22px] text-primary'>Name: {data?.data.name}</p>
            <p className='text-[18px] leading-[22px] text-primary'>Email: {data?.data.email}</p>
            <p className='text-[18px] leading-[22px] text-primary'>Phone: {data?.data.phoneNumber}</p>
            <p className='text-[18px] leading-[22px] text-primary'>Message: {data?.data.message}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='text-black h-[90dvh] overflow-y-scroll'>
      <div className='flex flex-col gap-[20px] p-[20px]'>
        <div className='hover:cursor-pointer'
          onClick={getEnquiries}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </div>
        {loading ?
          <div className='flex justify-center items-center h-[300px] w-full'>
            <p className='font-[600] md:text-[30px]'>Loading...</p>
          </div>
          :
          (
            enquiries && enquiries.length > 0 ? (
              enquiries.map((enquiry, id) => (
                <Card data={enquiry} key={id} />
              ))
            ) : (
              <div className='flex justify-center items-center h-[300px] w-full'>
                <p className='font-[600] md:text-[30px]'>Nothing to show</p>
              </div>
            )
          )
        }
      </div>
    </div>
  )
}
