import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase-admin'

export const runtime = 'nodejs'

export async function GET(req, { params }) {
  try {
    const { id } = params
    const docRef = db.collection('reservation').doc(id)
    const snapshot = await docRef.get()

    if (!snapshot.exists) {
      return NextResponse.json({ message: 'Reservation not found' }, { status: 404 })
    }

    return NextResponse.json(snapshot.data())
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

