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
      type: "lines",
    });
    const tl = gsap.timeline();
    tl.from(headSplit.chars, {
      delay: 1.5,
      y: 100,
      autoAlpha: 0,
      stagger: 0.1,
      ease: "back.out",
    });
    tl.from(subSplit.lines, {
      y: 100,
      autoAlpha: 0,
      stagger: 0.1,
    });
  });

  return (
    <div>
      <div className="bg-amber-100 ">
        <div className="sm:p-2 h-screen">
          <div className="bg-[url('/HeroBg.jpg')] bg-cover border h-full sm:rounded-2xl flex flex-col justify-center items-center">
            <div className={`${damionFont.className} text-9xl`} ref={headRef}>
              sAk
            </div>
            <div className="text-2xl" ref={subRef}>
              Builders & Designers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
