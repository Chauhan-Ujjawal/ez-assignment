import React, { useState } from "react";
import { Link } from "react-router-dom";
import bars from "./bars.png";
import "./Navbar.css";
import { SlEnvolopeLetter } from "react-icons/sl";
import vfilms from "../assets/vfilms.png";

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const toggleMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav className="w-full h-15 flex items-center justify-between bg-white/50 px-8 mt-4 relative">
      {/* left side  logo */}
      <img src={vfilms} className="w-[12vh] ml-4" alt="vfilms logo" />

      {/* nav links visible only when hamburger clicked */}
      <div
        className={`${isMenuClicked ? "flex" : "hidden"} 
          gap-8 text-black text-[1.05rem]
          absolute right-20 top-1/2 -translate-y-1/2 items-center`}
      >
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/about" onClick={toggleMenu}>
          About
        </Link>
        <Link to="/services" onClick={toggleMenu}>
          Services
        </Link>
        <Link to="/theirstories" onClick={toggleMenu}>
          Their Stories
        </Link>
        <Link to="/ourstory" onClick={toggleMenu}>
          Our Story
        </Link>
        <Link to="/varnan" onClick={toggleMenu}>
          Varnan
        </Link>

        <Link
          to="/contact"
          onClick={toggleMenu}
          className="bg-[#e4602c] text-white px-5 py-2 rounded-[1.5em] font-medium flex items-center gap-2"
        >
          Let's Talk <SlEnvolopeLetter />
        </Link>
      </div>

      {/* putting hamburger button on right */}
      <button
        onClick={toggleMenu}
        className={`burger-menu ${isMenuClicked ? "clicked" : ""} 
          flex flex-col justify-center gap-[0.2rem] cursor-pointer`}
      >
        <div
          className="burger w-11 h-3 transition-all duration-300"
          style={{
            backgroundImage: `url(${bars})`,
            backgroundSize: "100% 100%",
          }}
        ></div>
        <div
          className="burger w-11 h-3 transition-all duration-300"
          style={{
            backgroundImage: `url(${bars})`,
            backgroundSize: "100% 100%",
          }}
        ></div>
      </button>
    </nav>
  );
};

export default Navbar;
