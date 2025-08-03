"use client";
import { useRef } from "react";
import AppBar from "./AppBar";
import CatchPhrase from "./CatchPhrase";
import LandingPage from "./LandingPage";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function MainPage() {
  const smoothParentRef = useRef<HTMLDivElement>(null);
  const smoothChildRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: smoothParentRef.current,
      content: smoothChildRef.current,
      speed: 1,
      normalizeScroll: true,
      smoothTouch: 0.1,
    });
  });

  return (
    <div ref={smoothParentRef} className="bg-amber-50">
      <div ref={smoothChildRef}>
        <AppBar />
        <LandingPage />
        <CatchPhrase />
      </div>
    </div>
  );
}
