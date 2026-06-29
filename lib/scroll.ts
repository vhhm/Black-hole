import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const blackHoleScroll = () => {
  gsap.to(".canvas-wrapper", {
    scale: 1.3,
    scrollTrigger: {
      trigger: ".canvas-wrapper",
      scrub: true,
      start: "top top",
      end: "bottom top",
    },
  });

  gsap.to(".canvas-wrapper", {
    rotate: 10,
    scrollTrigger: {
      scrub: true,
    },
  });
};