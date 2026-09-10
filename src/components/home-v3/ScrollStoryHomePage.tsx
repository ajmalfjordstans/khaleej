'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ParticleBackdrop from '@/components/shared/ParticleBackdrop';

/* ---------- scroll-progress math (shared by every section below) ---------- */

function clamp(v: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, v));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = clamp((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

// Maps a section's own 0-1 progress into a 0-1 progress for one beat inside it,
// e.g. localProgress(sectionProgress, 0.2, 0.5) is 0 before 20%, 1 after 50%.
function localProgress(global: number, start: number, end: number) {
  return clamp((global - start) / (end - start));
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

// Slight overshoot on the way in, like something settling into place.
function easeOutBack(t: number) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  const x = clamp(t);
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
}

// 0 the instant `el`'s top reaches the top of the viewport, 1 once we've
// scrolled all the way through its extra height — i.e. how far through a
// tall spacer we are while its sticky child stays pinned on screen.
function getSectionProgress(el: HTMLElement | null): number {
  if (!el) return 0;
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight;
  const total = rect.height - vh;
  if (total <= 0) return rect.top <= 0 ? 1 : 0;
  return clamp(-rect.top / total);
}

/* ---------------------------------- content ---------------------------------- */

const ROOTS_POINTS = [
  'Yemeni heritage, since day one',
  'Slow-cooked in-house, daily',
  'Fresh, quality ingredients',
  'Order online for collection',
];

const MAJLIS_POINTS = [
  'Traditional low seating',
  'Family-style shared platters',
  'Rich cultural ambiance',
  'Reserve online in minutes',
];

const DISHES = [
  { name: 'Mandi', desc: 'Chicken & lamb, slow-cooked over charcoal with Golden Sella rice.', n: '01' },
  { name: 'Madghout', desc: 'Pressure-cooked with aromatic Basmati rice and tender meat.', n: '02' },
  { name: 'Kabsa', desc: 'Long Basmati rice with tomatoes and warm Arabian spices.', n: '03' },
  { name: 'Maqluba', desc: 'Layered rice and vegetables, flipped upside down at the table.', n: '04' },
  { name: 'Madhbi', desc: 'Saffron and cardamom rice with grilled, smoky meat.', n: '05' },
];

const PROCESS_STEPS = [
  {
    title: 'Browse The Menu',
    desc: 'Explore our full menu of authentic Yemeni and Arabian dishes.',
    path: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  },
  {
    title: 'Order & Pay Online',
    desc: 'Add your favourites to your cart and pay securely online.',
    path: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z',
  },
  {
    title: 'Collect In-Store',
    desc: 'Pick up your order fresh from Khaleej Mandi House.',
    path: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
  },
];

const CHAPTERS = ['Arrival', 'Our Roots', 'Majlis Dining', 'The Menu', 'How It Works', 'Order Now'];

export default function ScrollStoryHomePage() {
  const heroSpacerRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroInnerRef = useRef<HTMLDivElement>(null);

  const rootsSpacerRef = useRef<HTMLDivElement>(null);
  const rootsImageWrapRef = useRef<HTMLDivElement>(null);
  const rootsCardRef = useRef<HTMLDivElement>(null);
  const rootsPointRefs = useRef<(HTMLDivElement | null)[]>([]);

  const majlisSpacerRef = useRef<HTMLDivElement>(null);
  const majlisImageWrapRef = useRef<HTMLDivElement>(null);
  const majlisHeadingRef = useRef<HTMLHeadingElement>(null);
  const majlisParaRef = useRef<HTMLParagraphElement>(null);
  const majlisPointRefs = useRef<(HTMLDivElement | null)[]>([]);

  const menuSpacerRef = useRef<HTMLDivElement>(null);
  const menuHeadingRef = useRef<HTMLDivElement>(null);
  const menuViewportRef = useRef<HTMLDivElement>(null);
  const menuTrackRef = useRef<HTMLDivElement>(null);
  const menuCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const processSpacerRef = useRef<HTMLDivElement>(null);
  const processHeadingRef = useRef<HTMLDivElement>(null);
  const processLineRef = useRef<HTMLDivElement>(null);
  const processStepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const ctaSpacerRef = useRef<HTMLDivElement>(null);
  const ctaHeadingRef = useRef<HTMLDivElement>(null);
  const ctaButtonRef = useRef<HTMLDivElement>(null);
  const ctaPatternRef = useRef<HTMLDivElement>(null);

  const railFillRef = useRef<HTMLDivElement>(null);
  const railDotRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Each section's progress is eased toward its raw scroll-derived value every
  // frame instead of snapping straight to it — a fast flick or a laggy scroll
  // event no longer jumps the animation; it catches up smoothly over a few
  // frames, which is what actually reads as "smooth scrolling" here (the page
  // itself doesn't scroll any differently — the animation just trails it).
  const smoothedRef = useRef({ hero: 0, roots: 0, majlis: 0, menu: 0, proc: 0, cta: 0 });

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let rafId = 0;

    // With reduced motion, settle every section fully open once and skip the rAF
    // loop entirely — no parallax/stagger, just the finished, readable state.
    if (reduceMotion) {
      smoothedRef.current = { hero: 1, roots: 1, majlis: 1, menu: 1, proc: 1, cta: 1 };
      if (processLineRef.current) processLineRef.current.style.transform = 'scaleY(1)';
      return;
    }

    function render() {
      const s = smoothedRef.current;
      const SMOOTHING = 0.16;

      /* ---------------- Hero ----------------
         Fully visible the instant the page loads (no scroll-gated entrance —
         a hero that starts blank reads as "still loading"). Scrolling instead
         drives a gentle parallax drift, then hands off to the next chapter. */
      s.hero = lerp(s.hero, getSectionProgress(heroSpacerRef.current), SMOOTHING);
      const heroP = s.hero;
      const exitP = localProgress(heroP, 0.7, 1);

      if (heroImageRef.current)
        heroImageRef.current.style.transform = `scale(${lerp(1, 1.15, heroP)})`;
      if (heroTextRef.current)
        heroTextRef.current.style.transform = `translateY(${heroP * -40}px)`;
      if (heroInnerRef.current) {
        heroInnerRef.current.style.opacity = `${1 - exitP}`;
        heroInnerRef.current.style.transform = `scale(${lerp(1, 0.92, exitP)})`;
      }

      /* ---------------- Our Roots ----------------
         Asymmetric layered composition — a large photo with the copy in an
         overlapping card, not a side-by-side split. Never fully invisible, so
         a pause anywhere in the scroll never leaves the section looking broken. */
      s.roots = lerp(s.roots, getSectionProgress(rootsSpacerRef.current), SMOOTHING);
      const rootsP = s.roots;
      if (rootsImageWrapRef.current) {
        const revealP = easeOutCubic(localProgress(rootsP, 0, 0.4));
        rootsImageWrapRef.current.style.opacity = `${lerp(0.55, 1, revealP)}`;
        rootsImageWrapRef.current.style.transform = `scale(${lerp(1.1, 1, revealP)})`;
      }
      if (rootsCardRef.current) {
        const cp = easeOutBack(localProgress(rootsP, 0.15, 0.55));
        rootsCardRef.current.style.opacity = `${lerp(0.4, 1, clamp(cp * 1.3))}`;
        rootsCardRef.current.style.transform = `translateY(${lerp(40, 0, cp)}px)`;
      }
      rootsPointRefs.current.forEach((el, i) => {
        if (!el) return;
        const start = 0.45 + i * 0.12;
        const local = easeOutCubic(localProgress(rootsP, start, start + 0.25));
        el.style.opacity = `${lerp(0.4, 1, local)}`;
        el.style.transform = `translateY(${lerp(10, 0, local)}px)`;
      });

      /* ---------------- Majlis Dining ----------------
         Full-bleed image with the copy sitting directly on it (scrim + overlay
         text), not a boxed side-by-side split — deliberately different from
         Our Roots' layered-card treatment right above it. */
      s.majlis = lerp(s.majlis, getSectionProgress(majlisSpacerRef.current), SMOOTHING);
      const majlisP = s.majlis;
      if (majlisImageWrapRef.current) {
        const revealP = easeOutCubic(localProgress(majlisP, 0, 0.4));
        majlisImageWrapRef.current.style.transform = `scale(${lerp(1.12, 1, revealP)})`;
      }
      if (majlisHeadingRef.current) {
        const hp = easeOutCubic(localProgress(majlisP, 0.1, 0.4));
        majlisHeadingRef.current.style.opacity = `${lerp(0.5, 1, hp)}`;
        majlisHeadingRef.current.style.transform = `translateY(${lerp(24, 0, hp)}px)`;
      }
      if (majlisParaRef.current) {
        const pp = easeOutCubic(localProgress(majlisP, 0.2, 0.5));
        majlisParaRef.current.style.opacity = `${lerp(0.5, 1, pp)}`;
        majlisParaRef.current.style.transform = `translateY(${lerp(24, 0, pp)}px)`;
      }
      majlisPointRefs.current.forEach((el, i) => {
        if (!el) return;
        const start = 0.4 + i * 0.12;
        const local = easeOutCubic(localProgress(majlisP, start, start + 0.25));
        el.style.opacity = `${lerp(0.4, 1, local)}`;
        el.style.transform = `translateY(${lerp(14, 0, local)}px)`;
      });

      /* ---------------- Menu ----------------
         Desktop: a staggered horizontal row of dish cards, alternating vertical
         offset for rhythm. Mobile has no room to show all five at once and a
         manual side-swipe reads as broken, so the filmstrip instead auto-pans
         as you scroll down — the vertical scroll IS the horizontal reveal. */
      s.menu = lerp(s.menu, getSectionProgress(menuSpacerRef.current), SMOOTHING);
      const menuP = s.menu;
      if (menuHeadingRef.current) {
        const hp = lerp(0.6, 1, localProgress(menuP, 0, 0.15));
        menuHeadingRef.current.style.opacity = `${hp}`;
        menuHeadingRef.current.style.transform = `translateY(${lerp(-8, 0, hp)}px)`;
      }
      const isMobileMenu = window.innerWidth < 1024;
      if (menuTrackRef.current && menuViewportRef.current) {
        if (isMobileMenu) {
          // All cards finish revealing early (by ~0.3) so the pan below never
          // has to chase a still-fading card — reveal and reposition don't race.
          const maxScroll = Math.max(0, menuTrackRef.current.scrollWidth - menuViewportRef.current.clientWidth);
          const panP = easeOutCubic(localProgress(menuP, 0.35, 1));
          menuTrackRef.current.style.transform = `translateX(${-panP * maxScroll}px)`;
        } else {
          menuTrackRef.current.style.transform = 'translateX(0px)';
        }
      }
      const zigzag = [-1, 1, -1, 1, -1];
      menuCardRefs.current.forEach((el, i) => {
        if (!el) return;
        const start = isMobileMenu ? i * 0.03 : 0.1 + i * 0.14;
        const end = isMobileMenu ? start + 0.25 : start + 0.4;
        const local = easeOutBack(localProgress(menuP, start, end));
        const restY = isMobileMenu ? 0 : zigzag[i % zigzag.length] * 18;
        el.style.transform = `translateY(${lerp(60, restY, local)}px) scale(${lerp(0.8, 1, local)})`;
        el.style.opacity = `${clamp(local * 1.3)}`;
      });

      /* ---------------- How it works ----------------
         Vertical timeline instead of a horizontal 3-card row + curved line. */
      s.proc = lerp(s.proc, getSectionProgress(processSpacerRef.current), SMOOTHING);
      const procP = s.proc;
      if (processHeadingRef.current) {
        const hp = lerp(0.6, 1, localProgress(procP, 0, 0.15));
        processHeadingRef.current.style.opacity = `${hp}`;
        processHeadingRef.current.style.transform = `translateY(${lerp(-8, 0, hp)}px)`;
      }
      if (processLineRef.current) {
        const drawP = easeOutCubic(localProgress(procP, 0.1, 0.85));
        processLineRef.current.style.transform = `scaleY(${drawP})`;
      }
      processStepRefs.current.forEach((el, i) => {
        if (!el) return;
        const start = 0.2 + i * 0.25;
        const local = easeOutBack(localProgress(procP, start, start + 0.35));
        const dir = i % 2 === 0 ? -1 : 1;
        el.style.transform = `translateX(${lerp(dir * 40, 0, local)}px)`;
        el.style.opacity = `${lerp(0.4, 1, clamp(local * 1.3))}`;
      });

      /* ---------------- Finale / CTA ----------------
         A bold typographic statement over a subtle geometric pattern, no
         circular dish photo this time — different rhythm from the hero. */
      s.cta = lerp(s.cta, getSectionProgress(ctaSpacerRef.current), SMOOTHING);
      const ctaP2 = s.cta;
      if (ctaPatternRef.current) {
        ctaPatternRef.current.style.opacity = `${smoothstep(0.1, 0.6, ctaP2) * 0.5}`;
      }
      if (ctaHeadingRef.current) {
        const hp = easeOutCubic(localProgress(ctaP2, 0.15, 0.55));
        ctaHeadingRef.current.style.opacity = `${lerp(0.5, 1, hp)}`;
        ctaHeadingRef.current.style.transform = `scale(${lerp(0.92, 1, hp)})`;
      }
      if (ctaButtonRef.current) {
        const bp = easeOutBack(localProgress(ctaP2, 0.45, 0.85));
        ctaButtonRef.current.style.transform = `scale(${lerp(0.8, 1, bp)})`;
        ctaButtonRef.current.style.opacity = `${lerp(0.6, 1, localProgress(ctaP2, 0.45, 0.65))}`;
      }

      /* ---------------- Story progress rail ---------------- */
      const all = [heroP, rootsP, majlisP, menuP, procP, ctaP2];
      const overall = all.reduce((a, b) => a + b, 0) / all.length;
      if (railFillRef.current) railFillRef.current.style.transform = `scaleY(${overall})`;
      const activeChapter = all.filter(p => p >= 0.999).length;
      railDotRefs.current.forEach((el, i) => {
        if (!el) return;
        const isActive = i === Math.min(CHAPTERS.length - 1, activeChapter);
        el.style.transform = isActive ? 'scale(1.4)' : 'scale(1)';
        el.style.opacity = isActive ? '1' : '0.4';
      });
      rafId = requestAnimationFrame(render);
    }

    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="bg-primary overflow-x-clip">
      <ParticleBackdrop />

      {/* Story progress rail */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4">
        <div className="relative w-[3px] h-40 bg-white/15 rounded-full overflow-hidden">
          <div
            ref={railFillRef}
            className="absolute bottom-0 left-0 w-full h-full bg-secondary origin-bottom rounded-full"
            style={{ transform: 'scaleY(0)' }}
          />
        </div>
        <div className="flex flex-col gap-3">
          {CHAPTERS.map((c, i) => (
            <div
              key={c}
              ref={el => { railDotRefs.current[i] = el; }}
              title={c}
              className="w-2 h-2 rounded-full bg-white transition-transform duration-150"
              style={{ opacity: 0.4 }}
            />
          ))}
        </div>
      </div>

      {/* ================= HERO — full-bleed, centered ================= */}
      {/* -mt pulls the hero up behind the floating navbar (h-[60px] mobile / h-[80px]+mt-2
          desktop) so its background image extends seamlessly to the very top of the page,
          with the navbar (z-[20]) floating over it — instead of leaving a flat maroon gap
          between the navbar's own flow space and where the hero's image starts. */}
      <div ref={heroSpacerRef} className="relative -mt-[60px] md:-mt-[88px]" style={{ height: '180vh' }}>
        <div className="sticky top-0 h-dvh overflow-hidden">
          <div ref={heroImageRef} className="absolute inset-0 will-change-transform">
            <Image
              src="/Images/carousel/carousel1.webp"
              alt="Khaleej Mandi House"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-primary" />
          </div>

          <div ref={heroInnerRef} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 will-change-transform">
            <div ref={heroTextRef} className="text-white max-w-2xl will-change-transform">
              <div className="flex items-center justify-center gap-3 mb-5 lg:mb-6">
                <span className="h-px w-8 bg-secondary/60" />
                <p className="text-secondary font-julius uppercase tracking-[0.35em] text-xs lg:text-sm">Flavours Of Royalty</p>
                <span className="h-px w-8 bg-secondary/60" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-source font-semibold mb-5 lg:mb-8 leading-[1.05]">
                Authentic Mandi,<br />Slow-Cooked In Leicester
              </h1>
              <p className="text-sm lg:text-lg mb-8 lg:mb-10 text-white/75 leading-relaxed max-w-lg mx-auto">
                Yemen&apos;s Hadramaut heritage, brought to the heart of Leicester — rice and tender
                meats slow-cooked to perfection, in the tradition of Arabian hospitality.
              </p>
              <Link href="/order">
                <button className="bg-secondary hover:bg-accent hover:text-white text-black font-semibold px-9 py-3.5 lg:px-10 lg:py-4 rounded-full transition-colors text-sm lg:text-base uppercase tracking-wider">
                  Order Online
                </button>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 text-xs tracking-widest uppercase animate-pulse">
            Scroll to continue the story
          </div>
        </div>
      </div>

      {/* ================= OUR ROOTS — layered photo + overlapping card ================= */}
      <div ref={rootsSpacerRef} className="relative" style={{ height: '180vh' }}>
        <div className="sticky top-0 h-dvh overflow-hidden flex items-start pt-6 pb-4 lg:items-center lg:py-0">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <div className="relative">
              <div
                ref={rootsImageWrapRef}
                className="relative w-full lg:w-[68%] aspect-[4/3] lg:aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl will-change-transform"
                style={{ opacity: 0.55 }}
              >
                <Image src="/Images/story.JPG" alt="Our Story" fill className="object-cover object-center" />
              </div>

              <div
                ref={rootsCardRef}
                className="relative lg:absolute lg:-bottom-10 lg:right-0 mt-[-3rem] lg:mt-0 mx-4 lg:mx-0 lg:w-[46%] bg-primary/95 backdrop-blur-md border border-white/10 rounded-[1.5rem] shadow-2xl p-4 lg:p-10 will-change-transform"
                style={{ opacity: 0.4 }}
              >
                <p className="text-secondary font-julius uppercase tracking-[0.3em] mb-1 lg:mb-3 text-xs lg:text-sm">Our Story</p>
                <h2 className="text-xl lg:text-3xl font-source font-semibold mb-2 lg:mb-5 text-white leading-tight">
                  Bringing Arabian Flavours To Leicester
                </h2>
                <p className="text-xs lg:text-base text-white/70 mb-3 lg:mb-6 leading-relaxed">
                  Welcome to Khaleej — where Mandi&apos;s heart beats from Yemen&apos;s Hadramaut region,
                  now brought to Leicester. Rice and tender meats slow-cook to perfection, absorbing
                  aromatic spices and bridging cultures with every bite.
                </p>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 lg:gap-x-4 lg:gap-y-2.5">
                  {ROOTS_POINTS.map((point, i) => (
                    <div
                      key={point}
                      ref={el => { rootsPointRefs.current[i] = el; }}
                      className="flex items-center gap-1.5 lg:gap-2 will-change-transform"
                      style={{ opacity: 0.4 }}
                    >
                      <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      <span className="text-white/80 text-[11px] lg:text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAJLIS DINING — full-bleed image, text on scrim ================= */}
      <div ref={majlisSpacerRef} className="relative" style={{ height: '160vh' }}>
        <div className="sticky top-0 h-dvh overflow-hidden">
          <div ref={majlisImageWrapRef} className="absolute inset-0 will-change-transform">
            <Image src="/Images/majlis.jpg" alt="Majlis Dining" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-black/30" />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-end px-6 lg:px-16 pb-16 lg:pb-24 max-w-3xl">
            <p className="text-secondary font-julius uppercase tracking-[0.3em] mb-2 lg:mb-3 text-xs lg:text-sm">The Experience</p>
            <h2
              ref={majlisHeadingRef}
              className="text-3xl lg:text-5xl font-source font-semibold mb-4 lg:mb-6 text-white will-change-transform leading-tight"
              style={{ opacity: 0.5 }}
            >
              Traditional Majlis Dining
            </h2>
            <p ref={majlisParaRef} className="text-sm lg:text-lg text-white/75 mb-5 lg:mb-8 leading-relaxed max-w-xl will-change-transform">
              &quot;Majlis&quot; at Khaleej cultivates togetherness through low seating, family-style
              dining, and rich cultural ambiance — every visit becomes an intimate, communal occasion.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {MAJLIS_POINTS.map((point, i) => (
                <div
                  key={point}
                  ref={el => { majlisPointRefs.current[i] = el; }}
                  className="flex items-center gap-2 will-change-transform"
                  style={{ opacity: 0.4 }}
                >
                  <svg className="w-4 h-4 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  <span className="text-white/80 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= THE MENU — staggered filmstrip ================= */}
      <div ref={menuSpacerRef} className="relative" style={{ height: '200vh' }}>
        <div className="sticky top-0 h-dvh overflow-hidden flex flex-col items-center justify-center px-4 lg:px-10">
          <div ref={menuHeadingRef} className="text-center mb-10 lg:mb-16" style={{ opacity: 0.6 }}>
            <p className="text-secondary font-julius uppercase tracking-[0.3em] mb-2 lg:mb-3 text-xs lg:text-sm">Know Your Rice</p>
            <h2 className="text-2xl lg:text-4xl font-source font-semibold text-white">Signature Dishes</h2>
          </div>

          <div ref={menuViewportRef} className="overflow-hidden lg:overflow-visible max-w-6xl w-full">
            <div ref={menuTrackRef} className="flex gap-4 lg:gap-6 pl-4 pr-10 lg:px-2 lg:justify-center will-change-transform">
              {DISHES.map((dish, i) => (
                <div
                  key={dish.name}
                  ref={el => { menuCardRefs.current[i] = el; }}
                  className="flex-shrink-0 w-[180px] lg:w-[220px] aspect-[3/4] rounded-[1.5rem] bg-gradient-to-b from-white/10 to-white/[0.03] border border-white/10 shadow-2xl p-5 lg:p-6 flex flex-col justify-between will-change-transform"
                  style={{ opacity: 0 }}
                >
                  <span className="text-secondary/50 font-julius text-2xl lg:text-3xl">{dish.n}</span>
                  <div>
                    <h3 className="font-julius text-white text-lg lg:text-xl uppercase tracking-wide mb-2">{dish.name}</h3>
                    <p className="text-xs lg:text-sm text-white/65 leading-relaxed">{dish.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= HOW IT WORKS — vertical timeline ================= */}
      <div ref={processSpacerRef} className="relative" style={{ height: '180vh' }}>
        <div className="sticky top-0 h-dvh overflow-hidden flex flex-col items-center justify-center px-6">
          <div ref={processHeadingRef} className="text-center mb-10 lg:mb-16" style={{ opacity: 0.6 }}>
            <p className="text-secondary font-julius uppercase tracking-[0.3em] mb-2 lg:mb-3 text-xs lg:text-sm">The Khaleej Way</p>
            <h2 className="text-2xl lg:text-4xl font-source font-semibold text-white max-w-lg mx-auto">
              Browse, Order, And Collect Fresh Mandi
            </h2>
          </div>

          <div className="relative w-full max-w-md lg:max-w-2xl">
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/10">
              <div
                ref={processLineRef}
                className="w-full h-full bg-secondary origin-top"
                style={{ transform: 'scaleY(0)' }}
              />
            </div>

            <div className="flex flex-col gap-8 lg:gap-10">
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={step.title}
                  className={`relative flex items-center gap-4 lg:gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse text-right'}`}
                >
                  <div
                    ref={el => { processStepRefs.current[i] = el; }}
                    className="flex-1 bg-white/8 backdrop-blur-md border border-white/10 shadow-xl p-4 lg:p-6 rounded-2xl will-change-transform"
                    style={{ opacity: 0.4 }}
                  >
                    <h3 className="font-julius text-white mb-1 lg:mb-2 uppercase tracking-wide text-sm lg:text-base">{step.title}</h3>
                    <p className="text-xs lg:text-sm text-white/70">{step.desc}</p>
                  </div>
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-secondary flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d={step.path} />
                    </svg>
                  </div>
                  <div className="flex-1 hidden lg:block" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ================= FINALE / CTA — bold type over a geometric pattern ================= */}
      <div ref={ctaSpacerRef} className="relative" style={{ height: '120vh' }}>
        <div className="sticky top-0 h-dvh overflow-hidden flex items-center justify-center">
          <div
            ref={ctaPatternRef}
            className="absolute inset-0 will-change-[opacity]"
            style={{
              opacity: 0,
              backgroundImage:
                'linear-gradient(45deg, var(--secondary) 25%, transparent 25%), linear-gradient(-45deg, var(--secondary) 25%, transparent 25%)',
              backgroundSize: '48px 48px',
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl">
            <p className="text-secondary font-julius uppercase tracking-[0.3em] mb-3 lg:mb-4 text-xs lg:text-sm">The Khaleej Way</p>
            <h2
              ref={ctaHeadingRef}
              className="text-4xl sm:text-5xl lg:text-7xl font-source font-semibold text-white mb-8 lg:mb-10 leading-[1.05] will-change-transform"
              style={{ opacity: 0.5 }}
            >
              Ready To Taste<br />Tradition?
            </h2>
            <div ref={ctaButtonRef} style={{ opacity: 0.6 }}>
              <Link
                href="/order"
                className="inline-block bg-secondary hover:bg-accent hover:text-white text-black font-semibold px-10 py-4 rounded-full transition-colors text-base lg:text-lg uppercase tracking-wider"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
