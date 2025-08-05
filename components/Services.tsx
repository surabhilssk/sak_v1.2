"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { WobbleCard } from "./ui/wobble-card";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Services() {
  const headRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const split = SplitText.create(headRef.current, {
      type: "chars",
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headRef.current,
        toggleActions: "play none none reset",
        start: "center 90%",
      },
    });
    tl.from(split.chars, {
      yPercent: "100",
      duration: 0.8,
      stagger: 0.05,
      autoAlpha: 0,
      ease: "back.inOut(2)",
    }).from(
      ".cards",
      {
        yPercent: "20",
        duration: 1,
        stagger: 0.05,
        autoAlpha: 0,
        ease: "back.inOut",
      },
      "-=1"
    );
  });

  return (
    <div className="h-fit sm:min-h-96 bg-amber-50">
      <div
        ref={headRef}
        className="text-center pt-3 sm:pt-8 text-3xl sm:text-4xl font-semibold"
      >
        Our Services
      </div>
      <div className="px-5 sm:px-16 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-7xl">
          <WobbleCard containerClassName="cards sm:col-span-2 group bg-gray-900">
            <div className="sm:max-w-md sm:mt-5">
              <div className="text-2xl sm:text-3xl text-center sm:text-leftr pb-3 font-medium text-amber-50 sm:pb-3">
                Civil Designing & Contracting
              </div>
              <div className="font-light text-amber-50 opacity-70 sm:text-left text-center">
                Transform your vision into enduring structures with innovative
                civil designs and expert contracting, built to stand the test of
                time.
              </div>
            </div>
            <img
              src={"/serviceAssets/civilContracting.webp"}
              alt="Civil Contracting"
              width={500}
              height={500}
              className="absolute -right-[25%] top-36 rounded-2xl hidden sm:block"
            />
          </WobbleCard>
          <WobbleCard containerClassName="cards sm:col-span-1 bg-gray-900">
            <div className="sm:max-w-md">
              <div className="text-2xl sm:text-3xl text-center sm:text-left pb-3 font-medium text-amber-50 sm:pb-2">
                Interior Designing & Contracting
              </div>
              <div className="font-light text-amber-50 opacity-70 sm:text-left text-center">
                We weave your dreams into every detail, delivering personalized
                interiors with flawless contracting for spaces that inspire and
                comfort.
              </div>
            </div>
          </WobbleCard>
          <WobbleCard containerClassName="cards sm:col-span-1 bg-gray-900">
            <div className="sm:max-w-md">
              <div className="text-2xl sm:text-3xl text-center sm:text-left pb-3 font-medium text-amber-50 sm:pb-2">
                Landscaping
              </div>
              <div className="font-light text-amber-50 opacity-70 sm:text-left text-center">
                We craft your dreams into breathtaking outdoor spaces, blending
                nature’s beauty with creative designs for a serene and inspiring
                escape.
              </div>
            </div>
          </WobbleCard>
          <WobbleCard containerClassName="cards sm:col-span-2 bg-gray-900">
            <div className="sm:max-w-md sm:mt-5">
              <div className="text-2xl sm:text-3xl text-center sm:text-left pb-3 font-medium text-amber-50 sm:pb-2">
                Home Automation
              </div>
              <div className="font-light text-amber-50 opacity-70 sm:text-left text-center">
                Experience seamless living with our cutting-edge home automation
                solutions, tailored to bring comfort and convenience to your
                fingertips.
              </div>
            </div>
            <img
              src={"/serviceAssets/homeAutomation.webp"}
              alt="Civil Contracting"
              width={500}
              height={500}
              className="absolute -right-[25%] top-28 rounded-2xl hidden sm:block"
            />
          </WobbleCard>
        </div>
      </div>
    </div>
  );
}
