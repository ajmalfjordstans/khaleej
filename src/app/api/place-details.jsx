import axios from 'axios';

export default async function handler(req, res) {
  const { query: { placeId } } = req;

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=AIzaSyDD-FbDB8lhw8Y6IDPsOJe3FlZXM7XiUck`
    );
    const placeDetails = response.data;
    res.status(200).json(placeDetails);
  } catch (error) {
    console.error('Error fetching place details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}