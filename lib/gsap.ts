import gsap from "gsap";

export const introAnimation = () => {
  gsap.fromTo(
    "h1",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
  );

  gsap.fromTo(
    "p",
    { opacity: 0 },
    { opacity: 1, delay: 1, duration: 1 }
  );
};