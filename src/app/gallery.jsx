'use client'

import Loading from '@/components/loading';
import applyScrollAnimation from '@/components/scroll-animation'
import { Button } from '@material-tailwind/react';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
const axios = require('axios');

export default function Gallery() {
  const [data, setData] = useState([
    {
      "media_type": "IMAGE",
      "media_url": "/Images/Instagram/khaleejmandi.uk3283940059960808775.jpg",
      "permalink": "https://www.instagram.com/khaleejmandi.uk/"
    },
    {
      "media_type": "IMAGE",
      "media_url": "/Images/Instagram/khaleejmandi.uk3301365989725246763.jpg",
      "permalink": "https://www.instagram.com/khaleejmandi.uk/"
    },
    {
      "media_type": "IMAGE",
      "media_url": "/Images/Instagram/khaleejmandi.uk3313564321713358038.jpg",
      "permalink": "https://www.instagram.com/khaleejmandi.uk/"
    },
    {
      "media_type": "IMAGE",
      "media_url": "/Images/Instagram/khaleejmandi.uk3325240706250800841.jpg",
      "permalink": "https://www.instagram.com/khaleejmandi.uk/"
    },
    {
      "media_type": "IMAGE",
      "media_url": "/Images/Instagram/khaleejmandi.uk3363572680730101782.jpg",
      "permalink": "https://www.instagram.com/khaleejmandi.uk/"
    },
    {
      "media_type": "IMAGE",
      "media_url": "/Images/Instagram/khaleejmandi.uk3370047977579272498.jpg",
      "permalink": "https://www.instagram.com/khaleejmandi.uk/"
    },
    {
      "media_type": "IMAGE",
      "media_url": "/Images/Instagram/khaleejmandi.uk3371540372128792895.jpg",
      "permalink": "https://www.instagram.com/khaleejmandi.uk/"
    },
    {
      "media_type": "IMAGE",
      "media_url": "/Images/Instagram/khaleejmandi.uk3385193299339033166.jpg",
      "permalink": "https://www.instagram.com/khaleejmandi.uk/"
    },
    {
      "media_type": "IMAGE",
      "media_url": "/Images/Instagram/khaleejmandi.uk3390273102761100252.jpg",
      "permalink": "https://www.instagram.com/khaleejmandi.uk/"
    },
    {
      "media_type": "IMAGE",
      "media_url": "/Images/Instagram/khaleejmandi.uk3403993720719326836.jpg",
      "permalink": "https://www.instagram.com/khaleejmandi.uk/"
    },
    {
      "media_type": "IMAGE",
      "media_url": "/Images/Instagram/khaleejmandi.uk3417847744438646842.jpg",
      "permalink": "https://www.instagram.com/khaleejmandi.uk/"
    },
    {
      "media_type": "IMAGE",
      "media_url": "/Images/Instagram/khaleejmandi.uk3417850240703779301.jpg",
      "permalink": "https://www.instagram.com/khaleejmandi.uk/"
    },
    {
      "media_type": "IMAGE",
      "media_url": "/Images/Instagram/khaleejmandi.uk3417852836030167760.jpg",
      "permalink": "https://www.instagram.com/khaleejmandi.uk/"
    },
    // {
    //   "id": "18013851653507612",
    //   "media_type": "IMAGE",
    //   "media_url": "https://scontent.cdninstagram.com/v/t39.30808-6/424974990_17866055931078660_20288214325201006_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=nLQfXhfDLdoQ7kNvgHSnI_f&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYCJcPophzNbFqgG4_Cq6D_1oAO_B8aro-XWa0rCASPPYw&oe=6691DD1F",
    //   "permalink": "https://www.instagram.com/p/C3QzuBTIRUr/"
    // },
    // {
    //   "id": "17905803191923345",
    //   "media_type": "VIDEO",
    //   "media_url": "https://scontent.cdninstagram.com/o1/v/t16/f1/m82/7F41444105B07C206C1A2B65CB354294_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&vs=366127799702623_2609659645&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC83RjQxNDQ0MTA1QjA3QzIwNkMxQTJCNjVDQjM1NDI5NF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dBeDZXUm0zSEE1THlrb0JBSzNKa29wRko5SVlicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJviKrePp84JAFQIoAkMzLBdAOo2RaHKwIRgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AYCxx-vPu_QFqSTlQaLBa4Sm8BRth0G9pVNt_YXjtgf87A&oe=668DFC67&_nc_sid=1d576d",
    //   "thumbnail_url": "https://scontent.cdninstagram.com/v/t51.29350-15/425684631_918617609709297_1903100486529689681_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=pL36IHMPMKwQ7kNvgFKozE_&_nc_ht=scontent.cdninstagram.com&edm=AP4hL3IEAAAA&oh=00_AYD6KgGbWK9hdGQFCHWXUExWpnF9E7IXTFJmAdhqmY1dTw&oe=6691CBBF",
    //   "permalink": "https://www.instagram.com/reel/C3GHDC9oVl2/"
    // }
  ])
  const [showAll, setShowAll] = useState(false);
  const visiblePosts = showAll ? data : data.slice(0, 8);
  useEffect(() => {
    applyScrollAnimation('.scrollElement4', '.triggerElement4')
    // const apiEndpoint = 'https://v1.nocodeapi.com/mohammedajmal/instagram/cHdBEvCuLNKJBCxr';
    // const apiEndpoint = `https://bright-button-dove.cyclic.app/instagram-media`;
    // const apiEndpoint = `https://khaleej-backend.onrender.com/instagram-media`;

    // axios.get(apiEndpoint)
    //   .then(response => {
    //     // Handle the response data
    //     setData(response?.data)
    //     // console.log(response?.data);
    //   })
    //   .catch(error => {
    //     // Handle errors
    //     console.error('Error:', error.message);
    // });
  }, [])
  return (
    <>
      {
        data &&
        <section className='container mx-auto px-[5%] lg:px-0 py-20 ' id='gallery'>
          < p className='text-[42px] md:text-[64px] font-[600] leading-normal pb-[40px] text-left font-source scrollElement' > Khaleej Gallery</p >
          <div className='w-full max-w-[310px] h-[3px] bg-[#F3F25B]'></div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 triggerElement4 ">

            {visiblePosts?.map((post, id) => {
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
          <div className='w-full flex justify-center mt-[40px]'>
            <Button onClick={() => setShowAll(!showAll)} className='bg-secondary mx-auto text-black'>View {showAll ? "Less" : "More"}</Button>
          </div>
        </section >
      }
    </>
  )
}
