import Lenis from "@studio-freight/lenis";

export const initLenis = () => {
  const lenis = new Lenis({
    duration: 1.5,
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};