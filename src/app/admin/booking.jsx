'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from '@material-tailwind/react'

export default function Booking() {
  const [view, setView] = useState('pending')
  const [reservations, setReservations] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getReservation()
  }, [])

  const getReservation = async () => {
    setLoading(true)
    // const apiEndpoint = "http://localhost:3005/majlis/getReservations"
    const apiEndpoint = "https://khaleej-backend.onrender.com/majlis/getReservations"
    axios.get(apiEndpoint)
      .then(response => {
        setReservations(response?.data)
        // console.log(response?.data);
        setLoading(false)
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }

  const updateReservation = async (status, id) => {
    const email = id;
    const updateData = {
      status: status
    };
    try {
      // const response = await axios.post(`http://localhost:3005/majlis/updateReservation/${email}`, updateData);
      const response = await axios.post(`https://khaleej-backend.onrender.com/majlis/updateReservation/${email}`, updateData);
      // console.log('Update successful:', response.data);
      getReservation()
    } catch (error) {
      console.error('Error updating reservation:', error);
    }
  }
  const Card = ({ data }) => {
    // console.log(data);
    return (
      <div className='w-full rounded-[4px] border-[1px] border-primary shadow-md p-[20px]'>
        <div className="grid grid-cols-2">
          <div className='flex flex-col gap-2'>
            <p className='font-[700] text-[20px] leading-[22px] text-primary my-[10px]'>Contact Details</p>
            <p className='text-[18px] leading-[22px] text-primary'>Name: {data?.name}</p>
            <p className='text-[18px] leading-[22px] text-primary'>Email: {data?.email}</p>
            <p className='text-[18px] leading-[22px] text-primary'>Phone: {data?.phoneNumber}</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='font-[700] text-[20px] leading-[22px] text-primary my-[10px]'>Booking Details</p>
            <p className='text-[18px] leading-[22px] text-primary'>No. of seats: {data?.numberOfPersons}</p>
            <p className='text-[18px] leading-[22px] text-primary'>Date: {data?.date}</p>
            <p className='text-[18px] leading-[22px] text-primary'>Time: {data?.time}</p>
            <p className='text-[18px] leading-[22px] text-primary'>Status: {data?.status}</p>
          </div>
        </div>

        {view === 'pending' ?
          <div className='flex gap-2'>
            <Button
              className='capitalize tracking-[1px] bg-[#00FF00]'
              onClick={() => { updateReservation('confirmed', data?.email) }}
            >
              Confirm
            </Button>
            <Button
              className='capitalize tracking-[1px] bg-[#FF0000]'
              onClick={() => { updateReservation('rejected', data?.email) }}
            >
              Reject
            </Button>
          </div>
          : ""}
        {view === 'confirmed' ?
          <div className='flex gap-2'>
            <Button
              className='capitalize tracking-[1px] bg-[#00FF00]'
              onClick={() => { updateReservation('completed', data?.email) }}
            >
              Complete
            </Button>
          </div>
          : ""}
      </div >
    )
  }

  return (
    <div className='w-full h-[90dvh] overflow-y-scroll'>
      <div className='w-full border-b-[1px] border-[#E3E3E3] flex font-[600] text-[14px] md:text-[16px] leading-[24px] text-[#707070] sticky top-0 pt-[20px] px-[20px] bg-white '>
        <span
          className={`${view == "pending" ? "text-[#7b022e] border-b-[4px] border-[#7b022e]" : ""} pb-[10px] hover:cursor-pointer px-[10px]`}
          onClick={() => setView('pending')}
        >Pending</span>
        <span
          className={`${view == "confirmed" ? "text-[#7b022e] border-b-[4px] border-[#7b022e]" : ""} pb-[10px] hover:cursor-pointer px-[10px]`}
          onClick={() => setView('confirmed')}
        >Confirmed</span>
        <span
          className={`${view == "completed" ? "text-[#7b022e] border-b-[4px] border-[#7b022e]" : ""} pb-[10px] hover:cursor-pointer px-[10px]`}
          onClick={() => setView('completed')}
        >Completed</span>
        <span
          className={`${view == "cancelled" ? "text-[#7b022e] border-b-[4px] border-[#7b022e]" : ""} pb-[10px] hover:cursor-pointer px-[10px]`}
          onClick={() => setView('cancelled')}
        >Cancelled</span>
        <span
          className={`${view == "rejected" ? "text-[#7b022e] border-b-[4px] border-[#7b022e]" : ""} pb-[10px] hover:cursor-pointer px-[10px]`}
          onClick={() => setView('rejected')}
        >Rejected</span>
        <div className='absolute right-5 hover:cursor-pointer'
          onClick={getReservation}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </div>
      </div>
      <div className='py-[15px] flex flex-col gap-[15px] p-[20px]'>
        {loading ? (
          <div className='flex justify-center items-center h-[300px] w-full'>
            <p className='font-[600] text-[30px]'>Loading...</p>
          </div>
        ) : (
          reservations
            ?.filter(reservation => reservation.status === view)
            .map((reservation, id) => (
              <Card data={reservation} key={id} />
            ))
        )}
        {reservations
          ?.filter(reservation => reservation.status === view)
          .length === 0 && (
            <div className='flex justify-center items-center h-[300px] w-full'>
              <p className='font-[600] text-[30px]'>Nothing to show</p>
            </div>
          )}
      </div>
    </div >
  )
}
