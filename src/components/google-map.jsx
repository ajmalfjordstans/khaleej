import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

export default function GoogleMapComponent() {
  const placeId = 'ChIJl9-3QABhd0gRHUJdxTRAJ-M';
  const [placeDetails, setPlaceDetails] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`/api/place-details/${placeId}`);
  //       setPlaceDetails(response.data);
  //     } catch (error) {
  //       console.error('Error fetching place details:', error);
  //     }
  //   };

  //   fetchData();
  // }, [placeId]);
  return (
    <>
      <div className='px-[5%] lg:px-0 max-w-[903px] w-full md:h-[240px] lg:h-[300px] my-[30px]'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.771628079148!2d-1.1221011237645957!3d52.627970928230674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877610040b7df97%3A0xe3274034c55d421d!2sKhaleej%20Mandi%20House!5e0!3m2!1sen!2sin!4v1705137791213!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}
