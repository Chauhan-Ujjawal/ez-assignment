import React from "react";
import mandala from "../assets/Mandala.png";
import vfilms from "../assets/vfilms.png";

function LandingPage() {
  return (
    <div className="w-full min-h-screen flex">
      {/* left section */}
      <div className="w-1/2 flex items-center justify-center relative">
        {/* mandala design */}
        <img
          src={mandala}
          alt="mandala"
          className="w-full max-w-[550px] object-contain brightness-75"
        />

        {/* v films log at center of mandla*/}
        <img
          src={vfilms}
          alt="vfilms logo"
          className="absolute inset-0 m-auto w-[35%] max-w-[260px] object-contain"
        />
      </div>

      {/*  right section */}
      <div className="w-1/2 flex flex-col items-center  px-10 text-center mt-20">
        {/* heading */}
        <p
          style={{
            fontFamily: "Allura, cursive",
            fontSize: "65px",
            color: "#003153",
          }}
          className="mb-10"
        >
          Varnan is where stories find <br /> their voice and form
        </p>

        <p className="text-2xl text-[#E4602C] tracking-widest mb-20">
          Films • Brands • Art
        </p>

        <p className="max-w-md text-base leading-relaxed text-[#333] text-center">
          Since 2009, V has been telling stories — stories of people, their
          journeys, and the places that shape them. Some begin in polished
          boardrooms, others in humble village squares. But every story starts
          the same way — by listening with intention. V believes it takes trust,
          patience, and an eye for the unseen to capture what truly matters.
          <br />
          <br />V doesn’t just tell stories — V honors them.
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
