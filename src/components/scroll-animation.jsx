// scrollAnimation.ts
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const applyScrollAnimation = (scroll, trigger) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(scroll, {
    y: 150,
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: trigger,
      start: "top 100%",
      end: "top 100%",
      // toggleActions: "restart none reverse reset",
      // onenter onleave onreenter 
      toggleActions: "restart none none reset",
      // markers: true,
    },
  });
};

export default applyScrollAnimation;
