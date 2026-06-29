"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".loader-title", {
      opacity: 1,
      duration: 1.5,
    })
      .to(".loader-title", {
        opacity: 0,
        duration: 1,
        delay: 1,
      })
      .to(".loader-bg", {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          setHide(true);
          onFinish();
        },
      });
  }, []);

  if (hide) return null;

  return (
    <div className="loader-bg fixed inset-0 bg-black flex items-center justify-center z-50">
      <h1 className="loader-title text-2xl tracking-[10px] opacity-0">
        INITIALIZING UNIVERSE
      </h1>
    </div>
  );
}