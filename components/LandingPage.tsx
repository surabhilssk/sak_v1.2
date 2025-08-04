"use client";
import { useRef } from "react";
import { Damion } from "next/font/google";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const damionFont = Damion({
  weight: "400",
  subsets: ["latin"],
});

export default function LandingPage() {
  const headRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let headSplit = SplitText.create(headRef.current, {
      type: "chars",
    });
    let subSplit = SplitText.create(subRef.current, {
      type: "words",
    });
    const tl = gsap.timeline();
    tl.from(headSplit.chars, {
      delay: 0.3,
      yPercent: "random(-100, 100)",
      rotation: "random(0, 30)",
      autoAlpha: 0,
      stagger: 0.1,
      duration: 0.6,
      mask: "chars",
      ease: "back.out",
    });
    tl.from(subSplit.words, {
      yPercent: 100,
      mask: "words",
      autoAlpha: 0,
      duration: 0.5,
      stagger: 0.1,
    });
  });

  return (
    <div>
      <div className="bg-amber-50">
        <div className="sm:p-3 h-svh sm:h-screen relative">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover sm:p-2 sm:rounded-3xl"
            autoPlay
            loop
            muted
          >
            <source src="/landingVideo.mp4" type="video/mp4" />
            Your browser doesn't support the video tag.
          </video>
          <div className="relative z-10 flex flex-col justify-center items-center h-full sm:rounded-2xl backdrop-blur-sm">
            <div
              className={`${damionFont.className} text-9xl text-white`}
              ref={headRef}
            >
              sAk
            </div>
            <div className="text-3xl font-medium text-white" ref={subRef}>
              Builders & Designers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
