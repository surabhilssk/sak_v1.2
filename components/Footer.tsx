"use client";
import { Damion } from "next/font/google";

const damionFont = Damion({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div className="h-[80vh] flex">
      <div className="bg-indigo-500 m-2 flex-1 rounded-2xl">
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-3 h-full">
          <div className="flex flex-col justify-center items-center">
            <div
              className={`${damionFont.className} text-9xl sm:text-[10rem] text-white`}
            >
              sAk
            </div>
            <div className="sm:text-4xl font-medium text-white">
              Builders & Designers
            </div>
          </div>
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-4 sm:p-20 overflow-x-hidden">
            <div>
              <div className="text-base mt-9 sm:mt-0 bg-amber-100 w-fit px-3 py-1 rounded-t-2xl rounded-br-2xl">
                office
              </div>
              <div className="text-white font-semibold text-xl sm:text-2xl mt-1.5 sm:mt-5 sm:w-sm">
                Lower, Yoji-Yora, Aalo, Arunachal Pradesh 791001
              </div>
              <div
                className="text-white text-base underline font-medium mt-2 sm:mt-3 hover:font-bold cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://maps.app.goo.gl/a9SZgwBRpFBTeiyD9",
                    "_blank"
                  );
                }}
              >
                Google Maps
              </div>
            </div>
            <div className="mt-14">
              <div className="flex justify-end">
                <div className="text-base bg-amber-100 w-fit px-3 py-1 rounded-t-2xl rounded-bl-2xl">
                  contact
                </div>
              </div>
              <div className="text-white break-all text-right font-semibold text-xl sm:text-xl mt-1.5 sm:mt-5">
                sakbuildersanddesigners2024@gmail.com
              </div>
              <div
                className="text-white text-right font-semibold text-xl sm:text-2xl mt-1.5 sm:mt-1 cursor-pointer hover:font-bold"
                onClick={() => {
                  window.open("https://wa.me/+919366269257", "_blank");
                }}
              >
                send us a <span className="underline">whatsapp</span>*
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
