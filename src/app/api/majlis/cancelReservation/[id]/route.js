import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase-admin'
import { sendUpdateEmail } from '@/lib/email-service'

export const runtime = 'nodejs'

export async function POST(req, { params }) {
  try {
    const { id } = params

    await db.collection('reservation').doc(id).update({
      status: 'cancelled',
    })

    const userRef = db.collection('reservation').doc(id)
    const snapshot = await userRef.get()
    const data = snapshot.data()

    if (data) {
      await sendUpdateEmail(data, 'cancelled', id)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

