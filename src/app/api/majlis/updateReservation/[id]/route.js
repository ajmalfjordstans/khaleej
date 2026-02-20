import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase-admin'
import { sendUpdateEmail } from '@/lib/email-service'

export const runtime = 'nodejs'

export async function POST(req, { params }) {
  try {
    const { id } = params
    const body = await req.json()

    await db.collection('reservation').doc(id).update({
      status: body.status,
    })

    const userRef = db.collection('reservation').doc(id)
    const snapshot = await userRef.get()
    const data = snapshot.data()

    if (data && body.status !== 'completed') {
      await sendUpdateEmail(data, body.status, id)
    }

    return NextResponse.json(data || null)
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

