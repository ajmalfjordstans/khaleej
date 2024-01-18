'use client'

import React, { useState } from 'react'
import { Button } from "@material-tailwind/react";

export default function Testimonial() {
  const [carsouelCount, setCarsouelCount] = useState(0);
  const [reviews, setReviews] = useState([
    {
      "author_name": "Muhammad Kuniyil",
      "text": "I had an epic dining experience at Khaleej. The food was not just tasty, it was truly exceptional. Every dish we ordered was bursting with flavours and left us thoroughly impressed. Great atmosphere! Complementary soup and tea was amazing.",
    },
    {
      "author_name": "SAMI WALEED",
      "text": "I just had the most incredible experience at Al Khaleej Mandi House. The food was absolutely amazing, and it truly transported me back to the Middle East. The flavours were so authentic and delicious, I felt like I was dining in the heart of the Middle East itself...",
    },
    {
      "author_name": "Abhiram",
      "text": "The restaurant has a nice ambiance and the food is delicious. I would recommend it to anyone looking for a good Mandi or  Madhbi experience in Leicester.",
    },
    {
      "author_name": "Sabaa Khan",
      "text": "Definitely recommend Amazing food. Amazing experience. Amazing service. Highly recommend the chicken madbhi. The soup and hummas was also amazing. One of the best Arab food i have had. Will definitely be coming again.",
    },
    {
      "author_name": "Aswin Meparambath",
      "text": "The best Arabic mandhi that we had in the UK. Chicken Mandi spot on. tried almost every salad in the menu all were pretty amazing. Enjoyed our time in proper Arabic ambience .and must try their Knafa. loved it❤️",
    },
    {
      "author_name": "Asif Parekh",
      "text": "Was very busy as opening week we were served by aswan fantastic service by her and food was very good  thank you",
    },
  ]);
  return (
    <div>
      <div className="w-full bg-secondary xs:hidden pt-[50px] pb-[70px] px-[2%] black " >
        <div className="container mx-auto flex flex-col md:flex-row flew-wrap justify-between px-[5%] lg:px-0">
          <div className="flex justify-center items-center max-w-[257px]">
            <div className="border-l-[10px] border-[#7952B3] pl-[17px] text-[36px] leading-[40px] md:text-[48px] md:leading-[50px]">What Our Customers Say</div>
          </div>

          <div className="flex flex-col lg:flex-row w-[88%] md:w-[74%] justify-end items-center">
            {/* <img src={ReviewGoogle} alt="" className="h-[108px] md:h-[178px] mt-[15px]" /> */}
            <div className="flex h-full w-[100%] items-center justify-center max-w-[600px]">
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
              <div className="flex flex-col items-center justify-start h-[200px] px-[20px]">
                <h6 className="font-[700] italic">
                  {reviews[carsouelCount].author_name}
                </h6>
                <p className="testimonials__text min-w-[220px] w-full mt-[35px]">
                  {reviews[carsouelCount].text.length === 0 ? "No Review" : reviews[carsouelCount].text}
                </p>
              </div>
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
