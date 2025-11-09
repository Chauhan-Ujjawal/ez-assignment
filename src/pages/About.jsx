import React from "react";
import note1 from "../assets/note1.png";
import note2 from "../assets/note2.png";
import note3 from "../assets/note3.png";
import mountain from "../assets/mountain.png";
import circle from "../assets/circle.png";
function About() {
  return (
    <div className="w-full h-screen flex">
      {/* left ection */}
      <div className="w-1/2 h-full flex flex-col px-10 ">
        {/* header and para  */}
        <div className="flex flex-col items-center justify-center text-center mt-34">
          <h2 className="text-3xl md:text-3xl  text-black heading-font">
            A montage of familiar faces and names.
          </h2>

          <p className="mt-4 text-xl text-black leading-relaxed font-sans paragraph-font">
            Some stories come from the biggest names.
            <br />
            Others begin with bold, rising voices.
            <br />
            We’ve been fortunate to walk alongside both – <br />
            listening, creating, and building stories that matter.
            <br />
          </p>
        </div>

        {/* sticky notes img */}
        <div className="flex justify-center mt-10">
          <img
            src={note1}
            alt="Note1"
            className="w-58 h-auto rotate-[-4deg] -mr-10 z-10"
          />
          <img
            src={note2}
            alt="Note2"
            className="w-58 h-auto rotate-[2deg] -ml-10 -mr-10 z-20"
          />
          <img
            src={note3}
            alt="Note3"
            className="w-58 h-auto rotate-[1deg] -ml-10 z-30"
          />
        </div>
      </div>

      {/* right section */}
      <div className="w-1/2 h-full  flex flex-col justify-start items-center px-10 py-12">
        <h2
          className="text-2xl text-black heading-font text-center  leading-tight"
          style={{
            fontFamily: "Allura, cursive",
            fontSize: "45px",
            color: "#003153",
          }}
        >
          Every project is more than just a brief – <br />
          it’s a new chapter waiting to be written.
          <br />
          Together, we've crafted tales that inspire, <br />
          connect, and endure.
        </h2>
        <img
          src={mountain}
          alt="mountain decoration"
          className="fixed w-[30vw] bottom-0 w-[25vw] max-w-none  pointer-events-none object-contain"
        />
        <img
          src={circle}
          alt="circle"
          className="fixed w-[50vw] bottom-0 w-[25vw] max-w-none -z-10 pointer-events-none object-contain"
        />
      </div>
    </div>
  );
}

export default About;
