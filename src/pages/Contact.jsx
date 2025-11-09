import React, { useState } from "react";
import axios from "axios";
import bottom from "../assets/bottom.png";
import top from "../assets/top.png";
import { toast } from "react-toastify";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Email validation
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // ✅ Required fields validation
    if (!name || !email || !message) {
      toast.warn("Please fill all required fields");
      return;
    }

    if (!validateEmail(email)) {
      toast.warn("Please enter a valid email");
      return;
    }

    try {
      const res = await axios.post(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        formData
      );

      if (res.status === 200 || res.status === 201) {
        toast.success("Form Submitted ");
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      toast.error("Error sending message ");
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen flex relative">
      {/*  top design */}
      <img
        src={top}
        alt="top decoration"
        className="fixed top-0 right-0 w-[22vw] max-w-none -z-10 pointer-events-none object-contain"
      />

      {/* left part */}
      <div className="w-1/2 flex items-start justify-center relative pt-55">
        <div>
          <p className="text-black text-lg">
            Whether you have an idea, a question, or simply want <br />
            to explore how V can work together, V’re just a <br />
            message away <br />
            Let’s catch up over coffee.
            <br />
            Great stories always begin with a good conversation
          </p>
        </div>

        <img
          src={bottom}
          alt="bottom decoration"
          className="absolute bottom-0 left-0 w-[30vw] max-w-none -z-10 pointer-events-none object-contain"
        />
      </div>

      {/* right section */}
      <div className="w-1/2 flex flex-col items-center px-10 pt-16 text-center relative">
        <h2 className="text-4xl font-serif text-black">Join the Story</h2>
        <p className="mt-2 text-black">
          Ready to bring your vision to life? Let's talk.
        </p>

        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md mt-10 flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name*"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 bg-white p-3 w-full bg-white placeholder-gray-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email*"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 bg-white p-3 w-full placeholder-gray-400"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 bg-white p-3 w-full placeholder-gray-400"
          />

          <textarea
            name="message"
            placeholder="Your message*"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="border border-gray-300 bg-white p-3 w-full placeholder-gray-400"
          />

          <button
            type="submit"
            className="bg-[#E4602C] text-white px-6 py-2 rounded-full w-32 mx-auto shadow-lg hover:bg-[#cf4b1f] transition-colors"
          >
            Submit
          </button>
        </form>

        <p className="text-[#E4602C] mt-10 tracking-wide font-bold">
          vernita@varnanfilms.co.in &nbsp; | &nbsp; +91 98736 84567
        </p>
      </div>
    </div>
  );
}

export default Contact;
