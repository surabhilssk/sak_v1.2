"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Services() {
  const headRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let split = SplitText.create(headRef.current, {
      type: "chars",
    });
    gsap.from(split.chars, {
      yPercent: "100",
      mask: "chars",
      duration: 1,
      stagger: 0.05,
      autoAlpha: 0,
      ease: "back.inOut(2)",
      scrollTrigger: {
        trigger: headRef.current,
        toggleActions: "play none none reset",
        start: "center 90%",
      },
    });
  });

  return (
    <div className="h-screen bg-black">
      <div
        ref={headRef}
        className="text-center pt-14 text-5xl font-semibold text-amber-50"
      >
        Our Services
      </div>
    </div>
  );
}
