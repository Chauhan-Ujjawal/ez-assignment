import React from "react";

import mandalabottom from "../assets/mandalabottom.png";
import brush from "../assets/brush.png";
import tape1 from "../assets/tape1.png";
import tape2 from "../assets/tape2.png";
import tape3 from "../assets/tape3.png";
import filmproduction from "../assets/filmproduction.png";
import branding from "../assets/branding.png";
import artcuration from "../assets/artcuration.png";

function PolaroidCard({
  image,
  tape,
  title,
  rotate = 0,
  tapeRotate = 0,
  tapeLeft = "50%",
}) {
  return (
    <div className="relative inline-block text-center cursor-pointer group -mt-8">
      {/* tapes */}
      <img
        src={tape}
        alt=""
        className="absolute -top-1 pointer-events-none select-none w-40 z-20"
        style={{
          left: tapeLeft,
          transform: `translateX(-50%) rotate(${tapeRotate}deg)`,
        }}
      />

      {/* image cards */}
      <div
        className="
          inline-block transition-all duration-300 
          relative z-10 group-hover:z-30
        "
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <img
          src={image}
          alt={title}
          className="
            w-80 
            md:w-96 
            object-contain rounded-sm 
            transition-all duration-300
            group-hover:-translate-y-2 group-hover:scale-110
          "
        />
      </div>

      <p className="mt-3 text-lg font-medium">{title}</p>
    </div>
  );
}

export default function Services() {
  return (
    <div className="w-full min-h-screen relative">
      {/* Heading and paintbrush lining */}
      <div className="relative text-center ">
        <h1 className="text-3xl md:text-4xl font-semibold text-black">
          The storyboard reveals the breadth of our craft.
        </h1>

        <img
          src={brush}
          alt=""
          className="w-full max-w-[900px] mx-auto mt-2 pointer-events-none select-none"
        />
      </div>

      {/* cards row starts here */}
      <div className="w-full flex items-start justify-center gap-10 mt-12 flex-wrap">
        <PolaroidCard
          image={filmproduction}
          tape={tape1}
          rotate={-6}
          tapeRotate={-12}
          tapeLeft="46%"
        />
        <PolaroidCard
          image={branding}
          tape={tape2}
          rotate={2}
          tapeRotate={6}
          tapeLeft="50%"
        />
        <PolaroidCard
          image={artcuration}
          tape={tape3}
          rotate={-3}
          tapeRotate={3}
          tapeLeft="54%"
        />
      </div>

      {/* Bottom mandala design */}
      <img
        src={mandalabottom}
        className="
          fixed bottom-0 left-0 w-full
          object-contain pointer-events-none select-none
        "
        alt=""
      />
    </div>
  );
}
