import React from "react";

import sticky from "../assets/sticky.png";
import clip from "../assets/clip.png";
import group from "../assets/group.png";
import indiaGate from "../assets/indiagate.png";
import arrow1 from "../assets/arrow1.png";
import arrow2 from "../assets/arrow2.png";
import arrow3 from "../assets/arrow3.png";

function OurStory() {
  return (
    <div className="w-full min-h-screen relative">
      {/*  20% / 80% split of viewport */}
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-[20%_80%]">
        {/* left section */}
        <div className="relative">
          <img
            src={indiaGate}
            className="
              fixed left-4 bottom-4
              w-[20vw]
            "
            alt="India Gate"
          />
        </div>
        {/* right section */}
        <div className=" relative flex flex-col items-center justify-center min-h-screen px-4 py-8">
          <img
            src={sticky}
            alt="sticky"
            className="
    fixed
    top-1
    left-[10vw]
    ml-2
    w-[31vw]
    pointer-events-none
    object-contain
  "
          />
          <img
            src={clip}
            alt="clip"
            className="
    fixed
    top-0.5
    left-[32vw]
    ml-2
    w-[3vw]
    pointer-events-none
    object-contain
  "
          />
          <img
            src={arrow1}
            alt="arrow1"
            className="
    fixed
    top-100
    left-[32vw]
    ml-2
    w-[10vw]
    pointer-events-none
    object-contain
  "
          />
          <p
            className="
    fixed
    top-145
    left-[29vw]
    ml-2
    text-black
    text-xl
  "
            style={{
              fontFamily: "Allura, cursive",
              fontSize: "25px",
              color: "#003153",
            }}
          >
            Branding experts
          </p>
          <p
            className="
    fixed
    top-22
    right-[35vw]
    ml-2
    text-black
    text-xl
  "
            style={{
              fontFamily: "Allura, cursive",
              fontSize: "25px",
              color: "#003153",
            }}
          >
            Branding experts
          </p>
          <img
            src={arrow2}
            alt="arrow2"
            className="
    fixed
    top-30
    right-[32vw]
    ml-2
    w-[10vw]
    pointer-events-none
    object-contain
  "
          />

          {/* ✅ Image responsive to viewport */}
          <img
            src={group}
            alt="group"
            className="
    
      w-[40vw]          /* 40% of viewport width */
      h-[40vh]          /* 40% of viewport height */
      object-contain
      transition-transform
      duration-300
      hover:scale-105   /* zoom on hover */
    "
          />
          <p
            className="
    fixed
    top-48
    right-[14vw]
    ml-2
    text-black
    text-xl
  "
            style={{
              fontFamily: "Allura, cursive",
              fontSize: "25px",
              color: "#003153",
            }}
          >
            Branding experts
          </p>
          <img
            src={arrow3}
            alt="arrow3"
            className="
    fixed
    top-55
    right-[17vw]
    w-[6vw]
    pointer-events-none
    object-contain
  "
          />

          {/* ✅ Text + Button Below Image */}
          <div
            className="
      mt-6
      flex
      flex-col
      items-center
      text-center
      text-black
      max-w-[80vw]
      px-3
    "
          >
            <p className="text-lg md:text-2xl">
              Take a closer look at the stories we bring to life.
            </p>

            <button
              className="
        mt-3
        bg-[#d46a45]
        hover:bg-[#c65f3c]
        text-white
        px-6 py-2
        text-sm md:text-base
        rounded-full
        shadow-md
        transition-all
        cursor-pointer
      "
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
