import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase-admin'

export const runtime = 'nodejs'

export async function POST(req, { params }) {
  try {
    const { id } = params
    const body = await req.json()

    await db.collection('enquiries').doc(id).update({
      status: body.status,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

