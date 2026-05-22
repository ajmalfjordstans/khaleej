'use client'

import applyScrollAnimation from '@/components/scroll-animation'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const posts = [
  {
    id: 1,
    category: 'Food Culture',
    title: 'The Ultimate Guide to Authentic Arabic & Yemeni Cuisine: Top 10 Must-Try Dishes in Leicester',
    date: '18 May 2026',
    excerpt: "Leicester's food scene has entered a new era with authentic Arabic and Yemeni cuisines. Explore the top 10 must-try dishes, from slow-cooked Mandi to hand-crafted Falafel.",
    slug: 'top-arabic-yemeni-dishes-leicester',
    image: '/Images/blog/20240421-DSC03113.webp',
    content: '',
  },
  //   {
  //     id: 1,
  //     category: 'Our Story',
  //     title: 'The Ancient Art of Mandi: A Journey from Hadramaut to Leicester',
  //     date: '15 March 2024',
  //     excerpt:
  //       'Discover how Mandi, born in the valleys of Hadramaut over a thousand years ago, became the centrepiece of Arabian hospitality — and how we brought this extraordinary tradition to the heart of the UK.',
  //     content: `Deep in the ancient valleys of Hadramaut, Yemen, a culinary tradition was born that would one day travel across continents and oceans. Mandi — slow-cooked meat and rice perfumed with a chorus of aromatic spices — is more than a dish. It is a story told through fire, clay, and time.

  // The name "Mandi" comes from the Arabic word "Nada," meaning dew. The reference is poetic: meat slow-cooked in a sealed underground pit, called a tandoor, emerges glistening with moisture, as tender and delicate as a morning dewdrop. For centuries, this method of cooking transformed the simplest ingredients — lamb, rice, and spice — into something that felt almost sacred.

  // From Hadramaut, Mandi spread northward through the Arabian Peninsula, becoming a staple of celebrations from Oman to Saudi Arabia, the UAE to Kuwait. Each region added its own fingerprint — a different spice blend, a different wood for smoking, a different way of honouring guests. Yet the soul of the dish remained unchanged: food cooked slowly, shared freely, meant to bring people together.

  // At Khaleej Mandi House, we have carried that soul to Leicester. Our chefs were trained in the authentic techniques of the Gulf, and every dish we serve is a living piece of that history. When you sit down to a plate of our Mandi, you are joining a tradition that stretches back generations — one meal, one story, one community at a time.`,
  //   },
  //   {
  //     id: 2,
  //     category: 'Food Culture',
  //     title: 'The Spices Behind the Magic: Exploring Arabian Spice Blends',
  //     date: '28 March 2024',
  //     excerpt:
  //       'From hawaej to baharat, the spice blends of the Arabian Peninsula are a world unto themselves. We take you inside the fragrant heart of Gulf cooking.',
  //     content: `If Mandi has a secret, it lives in the spice blend. Walk into any kitchen in the Arabian Gulf, and you will encounter a symphony of aromas — warm cardamom, earthy cumin, sweet cinnamon, the subtle heat of black pepper, and the faintly smoky depth of dried limes. Together, these spices form the invisible architecture of Gulf cuisine.

  // The most celebrated blend in Mandi cooking is hawaej — a Yemeni spice mixture that varies by household and by region. A typical hawaej includes black pepper, cumin, caraway, cardamom, turmeric, and coriander. Some families add cloves, others dried ginger. The result is a complex warmth that permeates the meat and rice during the long, slow cook.

  // Baharat, another cornerstone blend, is found across the broader Arab world. Translated simply as "spices," baharat typically combines allspice, black pepper, coriander, cumin, cinnamon, cloves, nutmeg, and paprika. In Saudi cuisine, it leans more towards the sweet and floral; in Iraqi cooking, it carries a deeper smokiness.

  // Loomi — dried black limes — add a citrusy, slightly fermented depth that is unique to Gulf cooking and almost impossible to replicate with fresh lime. A single dried lime, pierced and added to the pot, will infuse an entire dish with an unmistakable tang.

  // At Khaleej, we source our spices with care. We grind many blends fresh in-house, because the difference between pre-ground and freshly ground spices is the difference between a sketch and a painting. It is this commitment to detail that makes every plate of Mandi a genuine taste of the Gulf.`,
  //   },
  //   {
  //     id: 3,
  //     category: 'Traditions',
  //     title: 'Majlis: The Art of Sitting Together',
  //     date: '10 April 2024',
  //     excerpt:
  //       'In Arabian culture, the Majlis is far more than a room — it is a philosophy of welcome, generosity, and shared humanity. We explore the tradition that inspired our dining experience.',
  //     content: `In Arabic, "Majlis" literally means "a place of sitting." But to reduce it to that would be like calling a cathedral a building with a tall ceiling.

  // The Majlis is an institution. Across the Arabian Gulf, every home of significance has one: a reception room set apart from the rest of the house, furnished with cushioned seating along the walls, where guests are received regardless of their rank or background. The door of the Majlis is open. Coffee is always ready. Dates are always on the table. No appointment is needed.

  // In the Majlis, hierarchies flatten. Tribal leaders sit beside merchants, scholars beside shepherds. The conversation flows freely — business is discussed, disputes are settled, stories are told. Food, when it comes, is served communally, spread on a large tray placed in the centre. Everyone reaches in together. This act of eating from a shared dish is not incidental; it is the point. Shared food creates shared humanity.

  // At Khaleej Mandi House, our Majlis dining experience is our tribute to this tradition. The low seating, the communal platters, the warm and unhurried pace — these are not aesthetic choices. They are an attempt to carry the spirit of the Majlis into the heart of Leicester, to offer every guest the experience of being truly, generously welcomed.

  // We believe that the best meals are not about the food alone. They are about the people around the table — or, in our case, around the tray.`,
  //   },
  //   {
  //     id: 4,
  //     category: 'Behind the Kitchen',
  //     title: 'How We Cook Our Mandi: The Khaleej Method',
  //     date: '25 April 2024',
  //     excerpt:
  //       'Patience is the most important ingredient in Mandi. We take you behind the kitchen doors to explain exactly how our chefs create the dish that defines us.',
  //     content: `Mandi cannot be rushed. This is the first thing our chefs will tell you, and it is the truth that shapes everything we do at Khaleej.

  // The process begins the night before. Whole lamb is marinated in a blend of hawaej, saffron, garlic paste, and our own spice mix — a recipe refined through years of practice. The marinade penetrates the meat overnight, building the deep, layered flavour that you cannot achieve with a quick rub before cooking.

  // The next morning, the meat goes into our specialised cooking vessel, suspended above a base of long-grain basmati rice. The vessel is sealed, trapping the steam and the spiced meat juices, which slowly drip down into the rice below as everything cooks together. This is what gives Mandi rice its unique character — it is cooked not just with water, but with the essence of the meat above it.

  // The cook takes several hours. During this time, the kitchen fills with the scent of slow-roasted lamb and warming spice, and there is genuinely nothing else to do but wait. This patience is not a shortcoming of the dish; it is a feature. Good food cannot be hurried.

  // When the vessel is opened, the meat has become so tender it barely needs to be pulled apart. The rice below has absorbed all the spiced juices and turned a deep, fragrant gold. We finish the dish with a drizzle of clarified butter and a scattering of fried onions, sultanas, and toasted nuts — the classic Mandi garnish that adds sweetness and crunch to every bite.

  // This is our method. It has not changed since we opened. It will not change.`,
  //   },
  //   {
  //     id: 5,
  //     category: 'Quality & Values',
  //     title: 'Halal at Heart: Our Commitment to Ethical, Quality Sourcing',
  //     date: '12 May 2024',
  //     excerpt:
  //       'For us, halal is not just a certification — it is a commitment to the ethical treatment of animals, the integrity of our food chain, and the trust of every guest who walks through our door.',
  //     content: `When guests ask us about our halal certification, we are always glad they asked — because the answer gives us the opportunity to talk about something we genuinely care about.

  // Every piece of meat served at Khaleej Mandi House is certified halal. Our suppliers are vetted, our certification is current, and our kitchen procedures ensure that there is no cross-contamination at any stage of preparation. This is not a marketing claim; it is a standard we hold ourselves to every single day.

  // But for us, halal means more than the manner of slaughter. At its core, halal is a philosophy of care — care for the animal, care for the food, care for the person who will eat it. This means we source our lamb and chicken from farms where the animals are raised with space to move, fed on natural diets, and not subjected to unnecessary suffering. We believe that the quality of an animal's life is inseparable from the quality of the food it produces.

  // We also care about what we do not put in our food. No artificial flavour enhancers, no unnecessary additives. The flavour in our dishes comes from spice, from technique, and from time — not from shortcuts.

  // Every guest who visits Khaleej deserves to know exactly what they are eating and exactly how it was made. That transparency is part of what it means to serve food with integrity, and it is a promise we make to our community with every plate.`,
  //   },
  //   {
  //     id: 6,
  //     category: 'Community',
  //     title: "Leicester's Multicultural Food Scene and Where Khaleej Fits In",
  //     date: '3 June 2024',
  //     excerpt:
  //       "Leicester has long been one of the UK's most diverse cities. We explore the city's vibrant food culture and why bringing authentic Mandi here felt like a natural homecoming.",
  //     content: `Leicester has a long and proud history of welcoming the world. As one of the first cities in the UK where no single ethnic group forms an outright majority, Leicester has built a food culture that reflects its extraordinary diversity — and has quietly become one of the best cities in England to eat well.

  // The Golden Mile along Belgrave Road is legendary among those who know South Asian cuisine, offering dozens of vegetarian restaurants, sweet shops, and street food stalls that rival anything you would find in Mumbai or Delhi. The city's Somali, Eritrean, and Caribbean communities have also built their own vibrant food corridors, each offering a window into cultures that have made Leicester their home.

  // When we chose Leicester for Khaleej Mandi House, we were not simply looking for a location. We were looking for a community that would understand what we were offering — a city with a palate curious enough to embrace something new, and a heart open enough to welcome another culture's most cherished traditions.

  // We have not been disappointed. Since opening, we have served guests from every background and every corner of the world. We have hosted large family gatherings celebrating Eid, intimate birthday dinners, business lunches, and first dates. We have watched people who had never tasted Mandi become regulars who bring their friends and family.

  // This is what food does when it is done with honesty. It builds bridges. And in a city as beautifully diverse as Leicester, we are proud to be one small part of that story.`,
  //   },
]

export default function Blog() {
  const [expandedId, setExpandedId] = useState(null)

  useEffect(() => {
    applyScrollAnimation('.scrollElement', '.scrollElement')
  }, [])

  const toggle = (id) => setExpandedId((prev) => (prev === id ? null : id))

  return (
    <div className='min-h-[100vh] bg-black text-white pt-[100px] pb-[80px]'>
      <div className='container-px mx-auto max-w-[1200px]'>

        {/* Header */}
        <div className='text-center mb-[60px] scrollElement'>
          <p className='text-secondary font-julius text-[13px] uppercase tracking-[5px] mb-4'>Stories &amp; Culture</p>
          <h2 className='font-julius text-[32px] md:text-[48px] font-[300] uppercase leading-tight'>
            The Khaleej Blog
          </h2>
          <div className='w-[60px] h-[2px] bg-secondary mx-auto mt-6'></div>
          <p className='font-source text-white/60 mt-6 max-w-[600px] mx-auto text-[15px] leading-relaxed'>
            Explore the traditions, flavours, and stories behind authentic Arabian cuisine — from the ancient origins of Mandi to the culture of the Gulf.
          </p>
        </div>

        {/* Blog Posts */}
        <div className='flex flex-col gap-8'>
          {posts.map((post, index) => (
            <article
              key={post.id}
              className='scrollElement border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 rounded-sm overflow-hidden'
            >
              {/* Card Image */}
              {post.image && (
                <div className='relative w-full h-[240px] md:h-[320px] overflow-hidden'>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className='object-cover object-center'
                    sizes='(max-width: 768px) 100vw, 1200px'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent' />
                </div>
              )}

              {/* Card Header */}
              <div className='p-8 md:p-10'>
                <div className='flex flex-wrap items-center gap-4 mb-4'>
                  <span className='text-[11px] uppercase tracking-[3px] font-julius px-3 py-1 border border-secondary/40 text-secondary'>
                    {post.category}
                  </span>
                  <span className='text-white/30 font-source text-[13px]'>{post.date}</span>
                </div>

                <h3 className='font-julius text-[22px] md:text-[28px] font-[300] leading-snug mb-4 text-white'>
                  {post.title}
                </h3>

                <p className='font-source text-white/60 text-[14px] md:text-[15px] leading-relaxed mb-6'>
                  {post.excerpt}
                </p>

                {post.slug ? (
                  <Link
                    href={`/blog/${post.slug}`}
                    className='flex items-center gap-2 text-secondary font-julius text-[12px] uppercase tracking-[3px] hover:text-white transition-colors duration-200 group'
                  >
                    Read Full Article
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-4 h-4 transition-transform duration-300'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                    </svg>
                  </Link>
                ) : (
                  <button
                    onClick={() => toggle(post.id)}
                    className='flex items-center gap-2 text-secondary font-julius text-[12px] uppercase tracking-[3px] hover:text-white transition-colors duration-200 group'
                  >
                    {expandedId === post.id ? 'Close Article' : 'Read Article'}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className={`w-4 h-4 transition-transform duration-300 ${expandedId === post.id ? 'rotate-180' : ''}`}
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
                    </svg>
                  </button>
                )}
              </div>

              {/* Expanded Content */}
              {!post.slug && expandedId === post.id && (
                <div className='px-8 md:px-10 pb-10 border-t border-white/10'>
                  <div className='pt-8 max-w-[760px]'>
                    {post.content.split('\n\n').map((paragraph, i) => (
                      <p
                        key={i}
                        className='font-source text-white/75 text-[14px] md:text-[16px] leading-[1.9] mb-6 last:mb-0 text-justify'
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='mt-[80px] text-center scrollElement'>
          <div className='w-full h-[1px] bg-white/10 mb-[60px]'></div>
          <p className='font-julius text-secondary text-[12px] uppercase tracking-[4px] mb-4'>Come Experience It Yourself</p>
          <p className='font-source text-white/50 text-[14px] max-w-[480px] mx-auto leading-relaxed mb-8'>
            Words can only go so far. The real story of Mandi is told on the plate — come and taste it for yourself at Khaleej Mandi House, Leicester.
          </p>
          <a
            href='/book-now'
            className='inline-block border border-secondary text-secondary font-julius text-[12px] uppercase tracking-[3px] px-8 py-4 hover:bg-secondary hover:text-black transition-all duration-300'
          >
            Book a Table
          </a>
        </div>

      </div>
    </div>
  )
}
