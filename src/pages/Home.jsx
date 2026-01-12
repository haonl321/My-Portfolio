// pages/Home.jsx
import React from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white font-sans">
      {/* Navbar */}
      

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto px-6 py-20">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm tracking-widest text-blue-400 uppercase mb-2">
            CREATE YOUR SITE LIKE A PRO
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Hi, I'm <span className="text-blue-500">Hào</span>,<br /> Web Developer
          </h1>
          <p className="text-gray-300 mb-6">
            Tôi yêu thích xây dựng giao diện web hiện đại, responsive và thân thiện với người dùng.
          </p>
          <Link
            to="/projects"
            className="bg-blue-600 px-6 py-3 rounded text-white hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={`${process.env.PUBLIC_URL}/profile2.png`}
            alt="Minh hoạ"
            className="w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full shadow-lg object-contain bg-white p-2"
          />
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Home;
