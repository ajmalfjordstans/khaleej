'use client'

import applyScrollAnimation from '@/components/scroll-animation'
import Image from 'next/image'
import React, { useEffect } from 'react'

export default function Gallery() {
  // useEffect(() => {
  //   applyScrollAnimation('.scrollElement4', '.triggerElement4')
  // }, [])
  // https://graph.instagram.com/v12.0/khaleejmandi.uk/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=IGQWROM1VHSG40a3ExY0ZAfckVmZAXQyOXdCaDlWeDlPZAEpLdlB0aDN5N2J3NnpnMl8zTXl3ZAGJ3VTd4TWtxYWVBOUlQTGxRTVlxZAFROYkEteTlhSTRQczhGMUQxNkpUTElRWjhrbVRuVHZAoeUpxdTEzR1lSTmJDQWsZD

  // https://graph.instagram.com/v12.0/access_token?grant_type=ig_exchange_token&client_id=1558929474869657&client_secret=a54d707033563095679d243919fff172&fb_exchange_token=IGQWROM1VHSG40a3ExY0ZAfckVmZAXQyOXdCaDlWeDlPZAEpLdlB0aDN5N2J3NnpnMl8zTXl3ZAGJ3VTd4TWtxYWVBOUlQTGxRTVlxZAFROYkEteTlhSTRQczhGMUQxNkpUTElRWjhrbVRuVHZAoeUpxdTEzR1lSTmJDQWsZD


  // const userId = 'khaleejmandi.uk'
  // const token = 'IGQWROM1VHSG40a3ExY0ZAfckVmZAXQyOXdCaDlWeDlPZAEpLdlB0aDN5N2J3NnpnMl8zTXl3ZAGJ3VTd4TWtxYWVBOUlQTGxRTVlxZAFROYkEteTlhSTRQczhGMUQxNkpUTElRWjhrbVRuVHZAoeUpxdTEzR1lSTmJDQWsZD'
  // const apiUrl = `https://graph.instagram.com/v12.0/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${token}`;
  return (
    <section className='container mx-auto px-[5%] lg:px-0 py-20 ' id='gallery'>
      <p className='text-[42px] md:text-[64px] font-[600] leading-normal pb-[40px] text-left font-source scrollElement'>Khaleej Gallery</p>
      <div className='w-full max-w-[310px] h-[3px] bg-[#F3F25B]'></div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-8 triggerElement4">
        <Image
          height={300}
          width={300}
          className="h-[100%] max-w-[100%] rounded-lg object-cover"
          src="/Images/majlis.jpg"
          alt="gallery-photo"
        />
        <Image
          height={300}
          width={300}
          className="h-[100%] max-w-[100%] rounded-lg object-cover"
          src="/Images/majlis2.jpg"
          alt="gallery-photo"
        />
        <Image
          height={300}
          width={300}
          className="h-[100%] max-w-[100%] rounded-lg object-cover"
          src="/Images/mandi1.jpg"
          alt="gallery-photo"
        />
        <Image
          height={300}
          width={300}
          className="h-[100%] max-w-[100%] rounded-lg object-cover"
          src="/Images/landingpage.jpg"
          alt="gallery-photo"
        />
        <Image
          height={300}
          width={300}
          className="h-[100%] max-w-[100%] rounded-lg object-cover"
          src="/Images/aboutus1.jpg"
          alt="gallery-photo"
        />
        <Image
          height={300}
          width={300}
          className="h-[100%] max-w-[100%] rounded-lg object-cover"
          src="/Images/carousel/landingpage.jpg"
          alt="gallery-photo"
        />
        <Image
          height={300}
          width={300}
          className="h-[100%] max-w-[100%] rounded-lg object-cover"
          src="/Images/carousel/carousel3.jpg"
          alt="gallery-photo"
        />
        <Image
          height={300}
          width={300}
          className="h-[100%] max-w-[100%] rounded-lg object-cover"
          src="/Images/carousel/carousel5.jpg"
          alt="gallery-photo"
        />

      </div>
    </section>
  )
}
