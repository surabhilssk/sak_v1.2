"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CatchPhrase() {
  const headRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(subRef.current, {
      transform: "translateX(-69%)",
      scrollTrigger: {
        trigger: headRef.current,
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
        LET'S BUILD YOUR DREAM TOGETHER.
      </div>
      <div
        ref={descRef}
        className="absolute bottom-40 sm:bottom-30 sm:left-85 sm:mt-16 text-center max-w-2xl px-8"
      >
        <p className="text-lg sm:text-xl text-gray-700 font-medium">
          We craft your vision into reality with passion and precision, making
          every project a personal journey.
        </p>
      </div>
    </div>
  );
}
