'use client'

import Loading from '@/components/loading';
import applyScrollAnimation from '@/components/scroll-animation'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
const axios = require('axios');

export default function Gallery() {
  const [data, setData] = useState()
  useEffect(() => {
    applyScrollAnimation('.scrollElement4', '.triggerElement4')
    // const apiEndpoint = 'https://v1.nocodeapi.com/mohammedajmal/instagram/cHdBEvCuLNKJBCxr';
    const apiEndpoint = `https://bright-button-dove.cyclic.app/instagram-media`;

    axios.get(apiEndpoint)
      .then(response => {
        // Handle the response data
        setData(response?.data.media.data)
        console.log(response);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error.message);
      });
  }, [])
  return (
    <>
      {
        data &&
        <section className='container mx-auto px-[5%] lg:px-0 py-20 ' id='gallery'>
          < p className='text-[42px] md:text-[64px] font-[600] leading-normal pb-[40px] text-left font-source scrollElement' > Khaleej Gallery</p >
          <div className='w-full max-w-[310px] h-[3px] bg-[#F3F25B]'></div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 triggerElement4 ">

            {data?.map((post, id) => {
              return (
                <Link
                  href={post?.permalink}
                  target="_blank"
                  key={id}
                >
                  <div className='relative'>
                    <Image
                      height={300}
                      width={300}
                      className="h-[270px] max-w-[100%] rounded-lg object-cover mx-auto"
                      src={post?.media_type == 'IMAGE' ? post?.media_url : post?.thumbnail_url}
                      alt="gallery-photo"
                    />
                    {post?.media_type === 'VIDEO' && (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" className='absolute top-5 right-8 h-[26px] w-[26px]'>
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                      </svg>
                    )}

                  </div>
                </Link>
              )
            })}
          </div>
        </section >
      }
    </>
  )
}
