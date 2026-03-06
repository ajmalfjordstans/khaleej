import { NextResponse } from 'next/server'
import { admin, db } from '@/lib/firebase-admin'
import { sendConfirmationEmail, sendEmailToAdmin } from '@/lib/email-service'

export const runtime = 'nodejs'

function generateBookingNumber() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let bookingNumber = ''
  for (let i = 0; i < 8; i++) {
    bookingNumber += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return bookingNumber
}

export async function POST(req) {
  try {
    const formData = await req.json()
    const id = generateBookingNumber()

    const userJson = {
      id,
      email: formData.email,
      name: formData.name,
      date: formData.date,
      time: formData.time,
      seatingPreference: formData.seatingPreference,
      numberOfPersons: formData.numberOfPersons,
      phoneNumber: formData.phoneNumber,
      message: formData.message,
      status: 'pending',
      createddatetime: admin.firestore.FieldValue.serverTimestamp(),
    }

    await db.collection('reservation').doc(id).set(userJson)

    await sendEmailToAdmin(formData, id, 'New Booking')
    await sendConfirmationEmail(formData, id)

    return NextResponse.json(userJson, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

