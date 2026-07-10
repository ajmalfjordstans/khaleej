import React from 'react'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'The History of Mandi: From the Mountains of Yemen to Leicester | Khaleej Mandi House',
  description: 'Discover the origins of Mandi in the ancient valleys of Hadhramaut, Yemen, its spread across the Arabian Peninsula, and its journey to Leicester at Khaleej Mandi House.',
  alternates: { canonical: 'https://www.khaleejmandi.co.uk/history-of-mandi-yemen-to-leicester' },
  openGraph: {
    title: 'The History of Mandi: From the Mountains of Yemen to Leicester | Khaleej Mandi House',
    description: 'Discover the origins of Mandi in the ancient valleys of Hadhramaut, Yemen, its spread across the Arabian Peninsula, and its journey to Leicester at Khaleej Mandi House.',
    url: 'https://www.khaleejmandi.co.uk/history-of-mandi-yemen-to-leicester',
    type: 'article',
    publishedTime: '2026-06-20T00:00:00.000Z',
    images: [
      {
        url: '/Images/blog/IMG_2480.PNG',
        width: 1200,
        height: 630,
        alt: 'Traditional slow-cooked lamb Mandi platter at sunset in the mountains of Yemen',
      },
    ],
  },
  twitter: {
    title: 'The History of Mandi: From the Mountains of Yemen to Leicester | Khaleej Mandi House',
    description: 'Discover the origins of Mandi in the ancient valleys of Hadhramaut, Yemen, its spread across the Arabian Peninsula, and its journey to Leicester at Khaleej Mandi House.',
    images: ['/Images/blog/IMG_2480.PNG'],
  },
}

export default function ArticlePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The History of Mandi: From the Mountains of Yemen to Your Plate in Leicester',
    description: 'Discover the origins of Mandi in the ancient valleys of Hadhramaut, Yemen, its spread across the Arabian Peninsula, and its journey to Leicester at Khaleej Mandi House.',
    image: 'https://www.khaleejmandi.co.uk/Images/blog/IMG_2480.PNG',
    datePublished: '2026-06-20',
    dateModified: '2026-06-20',
    author: { '@type': 'Organization', name: 'Khaleej Mandi House', url: 'https://www.khaleejmandi.co.uk' },
    publisher: { '@type': 'Organization', name: 'Khaleej Mandi House', url: 'https://www.khaleejmandi.co.uk', logo: { '@type': 'ImageObject', url: 'https://www.khaleejmandi.co.uk/icon.jpg' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.khaleejmandi.co.uk/history-of-mandi-yemen-to-leicester' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does the word "Mandi" actually mean?',
        acceptedAnswer: { '@type': 'Answer', text: 'Mandi comes from the Arabic word "nada", meaning dew. It refers to the moist, dew-like tenderness of the meat once it has been slow-cooked in a sealed underground pit.' },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between Mandi and Kabsa?',
        acceptedAnswer: { '@type': 'Answer', text: 'Mandi is steam-cooked in a tandoor, giving it a light, subtly smoky flavour where the meat takes centre stage. Kabsa is cooked in a tomato-based broth with bolder, more pronounced spices, making it saucier and richer in taste.' },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to cook an authentic Mandi?',
        acceptedAnswer: { '@type': 'Answer', text: 'Lamb Mandi is slow-cooked for three to four hours, while Chicken Mandi takes one to two hours. Anything rushed faster than that is not true Mandi.' },
      },
    ],
  }

  return (
    <div>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div id='nav'></div>
      <Navbar />

      <div className='min-h-[100vh] bg-black text-white pt-[120px] pb-[80px]'>
        <div className='container-px mx-auto max-w-[680px] md:max-w-[860px] lg:max-w-[1000px] xl:max-w-[1120px]'>
          <Link href="/blog" className="text-secondary font-julius text-[12px] uppercase tracking-[3px] hover:text-white transition-colors flex items-center gap-2 mb-10 group w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Blogs
          </Link>

          <article>
            <div className='text-center mb-[50px]'>
              <p className='text-secondary font-julius text-[12px] uppercase tracking-[5px] mb-5'>Our Story &nbsp;&middot;&nbsp; 20 June 2026</p>
              <h1 className='font-julius text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-[300] uppercase leading-[1.2] max-w-[900px] mx-auto'>
                The History of Mandi: From the Mountains of Yemen to Your Plate in Leicester
              </h1>
              <div className='w-[60px] h-[2px] bg-secondary mx-auto mt-6'></div>
            </div>

            {/* Hero Image */}
            <div className='relative w-full h-[300px] md:h-[480px] rounded-sm overflow-hidden mb-12'>
              <Image
                src='/Images/blog/IMG_2480.PNG'
                alt='Traditional slow-cooked lamb Mandi platter at sunset in the mountains of Yemen'
                fill
                className='object-cover object-center'
                sizes='(max-width: 768px) 100vw, 1120px'
                priority
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent' />
            </div>

            <div className='font-source text-white/75 text-[14px] md:text-[16px] leading-[1.9] text-justify'>
              <p className='mb-6'>There are dishes that fill a stomach, and then there are dishes that carry an entire civilisation within them. Mandi is the latter.</p>

              <p className='mb-6'>Do you know that feeling when you finally take a bite of slow-cooked lamb sitting on a huge heap of aromatic, gold-coloured basmati rice topped with raisins, nuts, and crispy onions? Well, Mandi isn&apos;t just food. It&apos;s a ceremony. A tale. A millennial heritage presented on one platter.</p>

              <p className='mb-6'>But where did it all begin? And how did a dish born in the ancient highlands of Yemen end up on a table in Leicester? Let&apos;s take the journey together.</p>

              <h2 className='font-julius text-[24px] uppercase text-white mt-12 mb-6'>What Is Mandi? Understanding the Dish at Its Heart</h2>
              <p className='mb-6'>Before we trace the history of Mandi, let&apos;s understand what makes it so distinct.</p>
              <p className='mb-6'>At its simplest, Mandi is a dish of meat &mdash; most traditionally lamb or chicken &mdash; slow-cooked over aromatic spices and served atop basmati rice infused with the cooking juices. But the magic isn&apos;t in the ingredients alone. It&apos;s in the method.</p>
              <p className='mb-6'>Traditional Mandi is prepared in a tandoor, a deep underground pit lined with hot charcoal. The pit is sealed with the spiced meat hanging over the rice inside, cooking for long hours &mdash; sometimes up to eight hours. The steam produced by the slow-cooking meat seeps down to the rice, making every grain deeply flavourful. When the pit is opened after a long cooking period, the meat separates from the bone with minimum effort, and the rice carries a smoky flavour that is difficult to achieve on a stovetop.</p>
              <p className='mb-6'>The very name &quot;Mandi&quot; stems from the Arabic term &quot;nada&quot; (dew), reflecting the moist, dew-like tenderness of the meat once prepared this way. It&apos;s the perfect name &mdash; one taste and you understand exactly why someone once looked at this dish and thought of morning dew on a mountain top.</p>

              <h2 className='font-julius text-[24px] uppercase text-white mt-12 mb-6'>Where Does Mandi Originate From? The Story Begins in Yemen</h2>
              <p className='mb-6'>To understand the origins of Mandi, you have to travel to Hadhramaut &mdash; a vast, dramatic region in the south of Yemen, carved by ancient valleys and flanked by mountains that seem to belong to another world entirely. It is here that Mandi was born.</p>
              <p className='mb-6'>Yemen has always been a country rich with culinary history. The ancient Greeks and Romans called it Arabia Felix &mdash; the Happy Arabia &mdash; in recognition of its extraordinary wealth in spices, frankincense, and myrrh. Yemen sat at the junction of the ancient Incense Route, exchanging fragrant goods across continents for thousands of years. These centuries of spice trading left an undeniable mark on Yemeni cuisine, including the special spice mixture used in Mandi called hawaij &mdash; a blend of cumin, coriander, cardamom, black pepper, and turmeric responsible for the dish&apos;s warm, complex taste.</p>
              <p className='mb-6'>In the early days, Mandi was a food born of necessity as much as tradition. Nomadic tribes moving across the highlands of Yemen needed a way to cook meat that was both practical and communal. The underground pit method was a brilliantly simple solution &mdash; it required no pots, used the earth itself as an oven, and could cook a large animal slowly and evenly while the community went about its day. When the feast was ready, everyone gathered.</p>
              <p className='mb-6'>Over time, this pragmatic way of cooking turned into something deeper. Mandi transformed into the festive meal of weddings, religious festivals, and the arrival of honoured guests. In Yemeni culture, offering Mandi to someone is a sign of great hospitality &mdash; you&apos;re not merely giving them food, you&apos;re inviting them into your house, your family, your history.</p>

              <h2 className='font-julius text-[24px] uppercase text-white mt-12 mb-6'>The Spread Across the Arabian Peninsula</h2>
              <p className='mb-6'>Tracing its origins to Hadhramaut, Yemeni Mandi slowly permeated the entire Arabian Peninsula. It was through Yemeni merchants, travellers, and diaspora &mdash; who carried their culinary legacy with them wherever they moved &mdash; that the tastes and flavours of home spread everywhere.</p>
              <p className='mb-6'>Saudi Arabia fell for Mandi so deeply that it became integrated into the national food culture, to the point that most people today actually associate the dish with Saudi cuisine instead of Yemen. In Saudi kitchens, lamb was a favourite choice, often seasoned with saffron for a richer colour, with dried limes (loomi) added to the spices for a faint citrus taste.</p>
              <p className='mb-6'>The UAE, Oman, and Kuwait each adopted the dish with their own regional variations. Some Gulf versions used large pressure pots instead of the traditional tandoor, showing how even the modern world could adapt the ancient method without losing its essence. The spices changed slightly, the ways of cooking rice varied, yet the soul of Mandi stayed the same: slow cooking, generous servings, and sharing together.</p>
              <p className='mb-6'>Across all these countries, Mandi retained its identity as a feast dish &mdash; something prepared for occasions that matter. You don&apos;t rush a Mandi. You don&apos;t eat it alone. At its very core, it is a dish that brings people together around a shared tray.</p>

              <h2 className='font-julius text-[24px] uppercase text-white mt-12 mb-6'>Mandi vs Kabsa: A Question Worth Answering</h2>
              <p className='mb-6'>Chances are, if you&apos;ve ever taken a dive into Middle Eastern cuisine, you&apos;ll find Mandi and Kabsa side by side on the very same menu and ask yourself what really differentiates the two. It&apos;s a good question, and a great one to answer.</p>
              <p className='mb-6'>Both dishes feature slow-cooked meat on spiced rice. The distinction lies in the cooking method and the spice profile.</p>
              <p className='mb-6'>Mandi is mainly known for its steam-cooking in the tandoor, which not only imparts a signature juicy tenderness but also adds a hint of smokiness. The spice mixture usually consists of warm spices, kept subtle so the natural flavour of the meat stands out.</p>
              <p className='mb-6'>Kabsa, on the other hand, is a Saudi dish in which the meat is cooked in a tomato-based broth with spices and aromatics. The rice is cooked in this broth, making the dish saucier and more pronounced in spice. Kabsa is bolder in flavour; Mandi is lighter.</p>
              <p className='mb-6'>Both are extraordinary. Both have their rightful place on the table. At Khaleej Mandi, you&apos;ll find both on the menu &mdash; our Chicken Mandi and Lamb Kabsa sitting side by side, each prepared with the integrity the dish deserves.</p>

              <h2 className='font-julius text-[24px] uppercase text-white mt-12 mb-6'>Mandi Arrives in the UK</h2>
              <p className='mb-6'>The arrival of Mandi in the United Kingdom is part of a broader story of the British-Arab community bringing the tastes of home to their new cities.</p>
              <p className='mb-6'>From the early 2000s, restaurants offering genuine Yemeni and Middle Eastern cuisine started to appear in neighbourhoods with existing Arab populations &mdash; initially London, and later cities such as Birmingham, Manchester, and Leicester. For a lot of people in these communities, having Mandi was not a treat. It was a link. A means of holding onto a home that was very far away.</p>
              <p className='mb-6'>It was a revelation for Britons who came across Mandi for the first time &mdash; a cuisine quite different from the Indian and Pakistani food most people in the UK equated with the word &quot;spicy&quot;, lighter in heat, richer in fragrance, and tied to a totally different cooking tradition. The slow-cooked meat was so tender it melted in the mouth. The rice carried the flavours of smoke, spice, and warmth all at once. The shared platter made you eat with your hands, share, and slow down.</p>
              <p className='mb-6'>Word spread quickly. Mandi restaurants in the UK stopped being hidden gems known only within Arab communities and started drawing in food lovers from all backgrounds.</p>

              <h2 className='font-julius text-[24px] uppercase text-white mt-12 mb-6'>How Mandi Reached Leicester &mdash; and Why Khaleej Mandi Exists</h2>
              <p className='mb-6'>Leicester is among the UK cities with the most diverse populations. For a very long time, it has served as a haven for different world communities who settled down, started their businesses, and developed their food cultures there. Its culinary scene is a wonderful reflection of that.</p>
              <p className='mb-6'>When the team behind Khaleej Mandi considered Leicester, they identified a gap &mdash; not merely a restaurant, but an experience. Leicester already had great South Asian food, excellent Turkish grills, and expanding Middle Eastern options. Yet authentic, properly prepared Yemeni Mandi &mdash; cooked with the time and skill the dish calls for, in a setting that respects the culture it originates from? That was the void.</p>
              <p className='mb-6'>We started our operations in Leicester with a very specific aim: to provide the most authentic Mandi experience in the UK. No compromises. No shortcuts.</p>
              <p className='mb-6'>Just the real thing &mdash; lamb slow-cooked for three to four hours with aromatic Mandi spices, chicken steamed until meltingly tender, and fragrant Mandi rice garnished with raisins, nuts, and crispy fried onions. Every meal is served with soup, spicy chutney, fresh salad, and traditional Arabic tea.</p>
              <p className='mb-6'>And beyond the cuisine, the Majlis dining experience &mdash; the traditional floor seating of the Arabian Peninsula, where guests sit around low tables on cushioned floors as they do in a Yemeni or Gulf home &mdash; adds a layer to the meal that no amount of restaurant décor could replicate. It changes the way you eat. It makes you slow down. It reminds you that this is not fast food; it is ancient food, and it deserves your full attention.</p>

              <h2 className='font-julius text-[24px] uppercase text-white mt-12 mb-6'>What Makes Authentic Mandi Different &mdash; and How to Spot It</h2>
              <p className='mb-6'>In a world where &quot;authentic&quot; is one of the most overused words in food advertising, it&apos;s worth being very clear on what real Mandi preparation actually involves.</p>
              <p className='mb-6'>The first indicator is time. A proper Mandi cannot be rushed. Lamb Mandi requires no less than three to four hours of slow cooking. Chicken Mandi needs one to two hours. A restaurant cutting that time is really serving a totally different dish &mdash; maybe a good one, but not Mandi as it should be.</p>
              <p className='mb-6'>The spice blend matters just as much. The hawaij mix &mdash; cumin, coriander, cardamom, black pepper, with a touch of turmeric colouring the rice yellow &mdash; should be present at every stage of preparation: in the marinade, in the rice, in the scent that greets you before the plate even arrives at the table.</p>
              <p className='mb-6'>The rice should carry the flavour of the meat, not just sit beneath it. In proper Mandi preparation, the steam and dripping juices from the meat above flavour the rice as it cooks. The result is rice that tastes complete on its own &mdash; rich, aromatic, faintly smoky.</p>
              <p className='mb-6'>The garnish is not just decoration. Raisins, toasted nuts, and crispy fried onions are traditional elements that add bursts of sweetness and texture, contrasting the deep savoury flavour of the dish. A plate of Mandi without them is like a painting without its highlights.</p>
              <p className='mb-6'>At Khaleej Mandi, you can explore the full range of how this dish expresses itself &mdash; from Lamb Mandi and Chicken Mandi to Beef Ribs Mandi and Fish Mandi, each cooked to the traditional standard and served with every element it deserves.</p>

              <h2 className='font-julius text-[24px] uppercase text-white mt-12 mb-6'>The Cultural Meaning of Mandi: Food as Hospitality</h2>
              <p className='mb-6'>When we discuss Mandi as mere food, something quite literally escapes us. In Yemeni and Arab cultures at large, cooking and eating Mandi carry symbolic gestures of love and generosity that extend well beyond nourishment or indulgence.</p>
              <p className='mb-6'>To prepare Mandi for someone is to say: you are worth the wait. The hours of preparation, the perfect combination of spices, the serving together on a large shared tray &mdash; this is hospitality in its most ancient form. The Arab idea of karam (generosity) comes through in the dish, quite literally.</p>
              <p className='mb-6'>This is why Mandi is served at weddings. Why it appears on the table when a guest arrives from far away. Why families gather around it on Eid and at celebrations. It is not incidental to these moments &mdash; it creates them.</p>
              <p className='mb-6'>If you choose to eat Mandi at Khaleej, you are taking part in the custom &mdash; consciously or unconsciously. The meal conveys the message without any words. It doesn&apos;t need to shout its significance. You experience it through the time devoted to it, and the cosy atmosphere of the table.</p>

              <p className='mb-6'>The history of Mandi spans ancient Yemen, the spice routes of the Arabian Peninsula, and the evolving food culture of the United Kingdom. It is a dish that has survived centuries, crossed continents, and arrived in Leicester with its soul entirely intact.</p>
              <p className='mb-6'>You don&apos;t need to read about it. You need to taste it.</p>
              <p className='mb-6'>View our full menu &mdash; from slow-cooked Lamb Mandi and Chicken Kabsa to traditional Yemeni Zurbian and whole lamb platters for the table &mdash; and come experience what a thousand years of culinary tradition tastes like.</p>

              <div className='mt-8 mb-12'>
                <Link href='/menu' className='inline-block border border-secondary text-secondary font-julius text-[12px] uppercase tracking-[3px] px-8 py-4 hover:bg-secondary hover:text-black transition-all duration-300'>
                  Book your table or explore the full menu here
                </Link>
              </div>

              {/* FAQ Section */}
              <div className='mt-16 mb-6'>
                <div className='w-full h-[1px] bg-white/10 mb-12' />
                <p className='text-secondary font-julius text-[12px] uppercase tracking-[5px] mb-3'>Got Questions?</p>
                <h2 className='font-julius text-[28px] md:text-[34px] uppercase text-white mb-10 font-[300]'>Frequently Asked Questions</h2>

                <div className='flex flex-col gap-4'>
                  {[
                    {
                      q: 'What does the word "Mandi" actually mean?',
                      a: 'Mandi comes from the Arabic word "nada", meaning dew. It refers to the moist, dew-like tenderness of the meat once it has been slow-cooked in a sealed underground pit.',
                    },
                    {
                      q: 'What is the difference between Mandi and Kabsa?',
                      a: 'Mandi is steam-cooked in a tandoor, giving it a light, subtly smoky flavour where the meat takes centre stage. Kabsa is cooked in a tomato-based broth with bolder, more pronounced spices, making it saucier and richer in taste.',
                    },
                    {
                      q: 'How long does it take to cook an authentic Mandi?',
                      a: 'Lamb Mandi is slow-cooked for three to four hours, while Chicken Mandi takes one to two hours. Anything rushed faster than that is not true Mandi.',
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className='border border-white/10 border-l-secondary border-l-2 bg-white/[0.03] px-6 py-6'
                    >
                      <p className='font-julius text-[16px] md:text-[18px] text-white mb-3 leading-snug'>{item.q}</p>
                      <p className='font-source text-white/60 text-[14px] md:text-[15px] leading-relaxed'>{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <Footer />
    </div>
  )
}
