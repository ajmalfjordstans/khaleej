import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase-admin'

export const runtime = 'nodejs'

export async function GET() {
  try {
    const snapshot = await db.collection('enquiries').get()
    const data = []
    snapshot.forEach(doc => {
      data.push(doc.data())
    })
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

