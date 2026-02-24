import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase-admin'
import { sendEmailToAdmin } from '@/lib/email-service'

export const runtime = 'nodejs'

export async function POST(req) {
  try {
    const formData = await req.json()
    const id = formData.email
    const contactDetails = {
      email: formData.email,
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      message: formData.message,
      status: 'new',
    }

    await db.collection('enquiries').doc(id).set(contactDetails)
    await sendEmailToAdmin(formData, 'enquiry', 'New Enquiry')

    return NextResponse.json(formData, { status: 201 })
  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

