'use client'
import { Button } from '@material-tailwind/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Enquiries() {
  const [enquiries, setEnquiries] = useState()
  const [view, setView] = useState('new')
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
        // console.log(response.data);
        setEnquiries(response?.data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }
  const updateEnquiries = async (id, status) => {
    setLoading(true)
    // const apiEndpoint = `http://localhost:3005/contact/updateEnquiries/${id}`
    const apiEndpoint = `https://khaleej-backend.onrender.com/contact/updateEnquiries/${id}`
    const payload = {
      status: status
    }
    axios.post(apiEndpoint, payload)
      .then(response => {
        // console.log(response.data);
        setEnquiries(response?.data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }
  const deleteEnquiries = async (id) => {
    setLoading(true)
    // const apiEndpoint = `http://localhost:3005/contact/deleteEnquiries/${id}`
    const apiEndpoint = `https://khaleej-backend.onrender.com/contact/deleteEnquiries/${id}`
    axios.delete(apiEndpoint)
      .then(response => {
        // console.log(response);
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
      <div className='w-full rounded-[4px] border-[1px] border-primary shadow-md p-[20px] flex flex-wrap justify-between'>
        <div className="">
          <div className='flex flex-col gap-2'>
            <p className='font-[700] text-[20px] leading-[22px] text-primary my-[10px]'>Enquiry</p>
            <p className='text-[18px] leading-[22px] text-primary'>Name: {data?.data.name}</p>
            <p className='text-[18px] leading-[22px] text-primary'>Email: {data?.data.email}</p>
            <p className='text-[18px] leading-[22px] text-primary'>Phone: {data?.data.phoneNumber}</p>
            <p className='text-[18px] leading-[22px] text-primary'>Message: {data?.data.message}</p>
          </div>
        </div>
        <div className='mt-[10px] md:mt-0 flex gap-2 flex-row md:flex-col'>
          <Button
            color='blue'
            onClick={() => {
              updateEnquiries(data?.data.email, view === "read" ? "new" : "read")
              setTimeout(() => {
                setLoading(true)
                getEnquiries()
              }, 500);
            }}
          >
            Mark as {view === "read" ? "unread" : "read"}
          </Button>
          <Button
            variant='outlined'
            color='red'
            onClick={() => {
              deleteEnquiries(data?.data.email)
              getEnquiries()
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className='text-black h-[90dvh] overflow-y-scroll'>
      <div className='flex flex-col gap-[20px] p-[20px]'>
        <div className='w-full border-b-[1px] border-[#E3E3E3] flex font-[600] text-[14px] md:text-[16px] leading-[24px] text-[#707070] sticky top-0 pt-[20px]  bg-white overflow-x-scroll'>
          <span
            className={`${view == "new" ? "text-[#7b022e] border-b-[4px] border-[#7b022e]" : ""} pb-[10px] hover:cursor-pointer px-[10px]`}
            onClick={() => {
              setView("new")
              getEnquiries()
            }}
          >Unread</span>
          <span
            className={`${view == "read" ? "text-[#7b022e] border-b-[4px] border-[#7b022e]" : ""} pb-[10px] hover:cursor-pointer px-[10px]`}
            onClick={() => {
              setView("read")
              getEnquiries()
            }}
          >Read</span>
          <div
            className='absolute right-5'
            onClick={getEnquiries}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </div>
        </div>

        {loading ?
          <div className='flex justify-center items-center h-[300px] w-full'>
            <p className='font-[600] md:text-[30px]'>Loading...</p>
          </div>
          :
          (
            enquiries && enquiries.length > 0 ? (
              enquiries
                .filter(enquiry => enquiry.status === view)
                .map((enquiry, id) => (
                  <Card data={enquiry} key={id} />
                ))
            ) : (
              <div className='flex justify-center items-center h-[350px] w-full'>
                <p className='font-[600] md:text-[30px]'>Nothing to show</p>
              </div>
            )
          )
        }
        {
          enquiries && enquiries.length > 0 ? (
            enquiries
              .filter(enquiry => enquiry.status === view)
              .length === 0 && (
              <div className='flex justify-center items-center h-[350px] w-full'>
                <p className='font-[600] md:text-[30px]'>Nothing to show</p>
              </div>)
          ) : (
            ""
          )
        }
      </div>
    </div>
  )
}
