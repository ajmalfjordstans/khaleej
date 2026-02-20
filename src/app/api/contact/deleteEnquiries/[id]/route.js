import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase-admin'

export const runtime = 'nodejs'

export async function DELETE(req, { params }) {
  try {
    const { id } = params

    await db.collection('enquiries').doc(id).delete()

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

