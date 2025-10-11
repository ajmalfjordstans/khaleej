// Module: applyScrollAnimation
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const applyScrollAnimation = async (scroll, trigger) => {
  if (typeof window === 'undefined') return;

  const { gsap } = await import('gsap');
  const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger');

  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(scroll, { y: 150, opacity: 0 }, {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger,
      start: "top 100%",
      end: "top 100%",
      toggleActions: "restart none none reset",
    },
  });
};

export default applyScrollAnimation;
