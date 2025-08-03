"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CatchPhrase() {
  const headRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(subRef.current, {
      transform: "translateX(-70%)",
      scrollTrigger: {
        trigger: headRef.current,
        markers: true,
        start: "-1.2% top",
        end: "-1.2% -150%",
        scrub: 1,
        pin: true,
      },
    });
  });

  return (
    <div
      ref={headRef}
      className="h-svh sm:h-screen flex overflow-hidden bg-amber-50"
    >
      <div
        ref={subRef}
        className="flex flex-col justify-center text-7xl sm:text-[15rem] font-semibold whitespace-nowrap"
      >
        Let's Build Your Dream Together
      </div>
    </div>
  );
}
