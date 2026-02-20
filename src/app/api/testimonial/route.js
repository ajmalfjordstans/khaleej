import { NextResponse } from 'next/server'
import axios from 'axios'

export const runtime = 'nodejs'

export async function GET() {
  try {
    const apiEndpoint = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.PLACE_ID}&fields=reviews&key=${process.env.PLACES_KEY}`
    const apiResponse = await axios.get(apiEndpoint)
    const reviews = apiResponse.data?.result?.reviews || []
    return NextResponse.json(reviews)
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
  }
}

