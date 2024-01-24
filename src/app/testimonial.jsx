'use client'

import React, { useEffect, useState } from 'react'
import { Button } from "@material-tailwind/react";
import axios from 'axios';
import Image from 'next/image';

export default function Testimonial() {
  const [carsouelCount, setCarsouelCount] = useState(0);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const apiEndpoint = "https://pitch-capable-tornado.glitch.me/testimonial"
    axios.get(apiEndpoint)
      .then(response => {
        setReviews(response?.data)
        // console.log(response?.data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error.message);
      });
  }, [])
  return (
    <div>
      <div className="w-full bg-secondary xs:hidden pt-[50px] pb-[70px] px-[2%] black " >
        <div className="container mx-auto flex flex-col lg:flex-row flew-wrap justify-between px-[5%] lg:px-0">
          <div className="flex justify-center items-center max-w-[257px]">
            <div className="border-l-[10px] border-[#7952B3] pl-[17px] text-[36px] leading-[40px] md:text-[48px] md:leading-[50px]">What Our Customers Say</div>
          </div>
          <Image
            src="/Images/google-review.svg"
            height="320"
            width='320'
            className='p-[30px] mx-auto'
          />
          <div className="flex flex-col lg:flex-row w-[100%] md:w-auto justify-end items-center">
            {/* <img src={ReviewGoogle} alt="" className="h-[108px] md:h-[178px] mt-[15px]" /> */}
            <div className="flex h-full w-[100%] items-center justify-center max-w-[600px] py-[20px] mx-auto">
              <div
                onClick={() =>
                  setCarsouelCount((state) => {
                    if (state === 0) return reviews.length - 1;
                    else return state - 1;
                  })
                }
                className="flex justify-center items-center bg-white rounded-md p-[5px] hover:cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>

              </div>
              <a
                href={reviews[carsouelCount]?.author_url}
              >
                <div className="flex flex-col items-center justify-start h-[200px] px-[20px] mt-[30px]">
                  <h6 className="font-[700] italic">
                    {reviews.length > 0 ? reviews[carsouelCount]?.author_name : "Review Loading"}
                  </h6>
                  <p className="testimonials__text min-w-[220px] max-w-[350px] w-full mt-[35px] ">
                    {
                      reviews[carsouelCount]?.text
                        ? reviews[carsouelCount]?.text.split(' ').slice(0, 25).join(' ') + "..."
                        : "Loading"
                    }
                  </p>
                </div>
              </a>
              <div
                onClick={() =>
                  setCarsouelCount((state) => {
                    if (state >= reviews.length - 1) return 0;
                    else return state + 1;
                  })
                }
                className="flex justify-center items-center bg-white rounded-md p-[5px] hover:cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>

              </div>
            </div>
          </div>
        </div>
        {/* <img src={Trustpilot} alt="" className='h-[40px] mx-auto mt-5 hover:cursor-pointer' onClick={() => window.open('https://www.trustpilot.com/review/ridewing.co.uk', '_blank')} /> */}
      </div>
    </div>
  )
}
