import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Book a Table | Khaleej Mandi House Leicester',
  description: 'Reserve your table at Khaleej Mandi House in Leicester. Experience authentic Yemeni and Arabian cuisine — book your Majlis dining experience online today.',
  alternates: { canonical: 'https://www.khaleejmandi.co.uk/book-now' },
  openGraph: {
    title: 'Book a Table | Khaleej Mandi House Leicester',
    description: 'Reserve your table at Khaleej Mandi House in Leicester. Experience authentic Yemeni and Arabian cuisine — book your Majlis dining experience online today.',
    url: 'https://www.khaleejmandi.co.uk/book-now',
    type: 'website',
  },
  twitter: {
    title: 'Book a Table | Khaleej Mandi House Leicester',
    description: 'Reserve your table at Khaleej Mandi House in Leicester. Experience authentic Yemeni and Arabian cuisine — book your Majlis dining experience online today.',
  },
}

export default function BookPage() {
  redirect('/order/reservations')
}
