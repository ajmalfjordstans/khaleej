'use client'

import { Button } from '@material-tailwind/react'
import axios from 'axios'
import React, { useState } from 'react'

export default function CancelBooking() {
  const [email, setEmail] = useState()
  const [showSearch, setShowSearch] = useState(true)
  const [booking, setBooking] = useState()
  const [loading, setLoading] = useState(false)
  const [cancel, setCancel] = useState(false)
  const findBooking = async () => {
    try {
      setLoading(true)
      // const response = await axios.get(`http://localhost:3005/majlis/findReservation/${email}`)
      const response = await axios.get(`https://khaleej-backend.onrender.com/majlis/findReservation/${email}`)
      // console.log(response.data.status);
      if (response.data.status === 'pending' || response.data.status === 'confirmed') {
        setBooking(response.data);
      }else{
        setBooking([])
      }
      
      setShowSearch(false)
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  const cancelBooking = async () => {
    try {
      // const response = await axios.post(`http://localhost:3005/majlis/cancelReservation/${email}`)
      const response = await axios.post(`https://khaleej-backend.onrender.com/majlis/cancelReservation/${email}`)
      // console.log(response);
      setCancel(true)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='md:p-[20px] py-[20px] md:py-0'>
      {showSearch ?
        <div className="flex flex-col gap-[2px] w-full">
          <label htmlFor="email">Enter your booking email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email" type="email"
            className={`bg-inherit w-full text-black border-[1px] border-primary rounded-[3px] p-3 `}
          />
          <Button
            className='mt-[20px] bg-primary'
            onClick={findBooking}
          >
            {loading ? "Searching" : "Find Booking"}
          </Button>
        </div>
        :
        (booking?.length === 0 ?
          <div className='flex w-full justify-center items-center h-[200px]'>No booking found</div>
          :
          (cancel ?
            <div className='flex w-full justify-center items-center h-[200px]'>Booking cancelled successfully</div>
            :
            <div>
              <p className='font-[700]'>Booking Details </p>
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="md:px-6 py-2 whitespace-nowrap">
                      <p className="text-sm font-medium text-gray-900">Name</p>
                    </td>
                    <td className="md:px-6 py-2 whitespace-nowrap">
                      <p className="text-sm font-medium text-gray-900"> {booking.name}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="md:px-6 py-2 whitespace-nowrap">
                      <p className="text-sm font-medium text-gray-900">Number of Persons</p>
                    </td>
                    <td className="md:px-6 py-2 whitespace-nowrap">
                      <p className="text-sm font-medium text-gray-900">{booking.numberOfPersons}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="md:px-6 py-2 whitespace-nowrap">
                      <p className="text-sm font-medium text-gray-900">Date</p>
                    </td>
                    <td className="md:px-6 py-2 whitespace-nowrap">
                      <p className="text-sm font-medium text-gray-900">{booking.date}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="md:px-6 py-2 whitespace-nowrap">
                      <p className="text-sm font-medium text-gray-900">Time</p>
                    </td>
                    <td className="md:px-6 py-2 whitespace-nowrap">
                      <p className="text-sm font-medium text-gray-900">{booking.time}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="md:px-6 py-2 whitespace-nowrap">
                      <p className="text-sm font-medium text-gray-900">Status</p>
                    </td>
                    <td className="md:px-6 py-2 whitespace-nowrap">
                      <p className="text-sm font-medium text-gray-900">{booking.status}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Button
                className='mt-[5px] bg-primary font-sans'
                fullWidth
                onClick={cancelBooking}
              >Cancel Booking</Button>
            </div>)
        )
      }
    </div >
  )
}
