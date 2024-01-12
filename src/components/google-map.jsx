import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

export default function GoogleMapComponent() {
  const placeId = 'ChIJl9-3QABhd0gRHUJdxTRAJ-M';
  const [placeDetails, setPlaceDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/place-details/${placeId}`);
        setPlaceDetails(response.data);
      } catch (error) {
        console.error('Error fetching place details:', error);
      }
    };

    fetchData();
  }, [placeId]);
  return (
    <>
      <div>
        <h1>Your Page</h1>
        {placeDetails && (
          <div>
            <h2>{placeDetails.result.name}</h2>
            {/* Render other details as needed */}
          </div>
        )}
      </div>
    </>
  )
}
