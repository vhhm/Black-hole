"use client";

import { useEffect } from "react";
import { initLenis } from "@/lib/lenis";
import { introAnimation } from "@/lib/gsap";

import Experience from "@/components/Experience";

export default function Page() {
  useEffect(() => {
    initLenis();
    introAnimation();
  }, []);

  return (
    <main>
      <Experience />
    </main>
  );
}