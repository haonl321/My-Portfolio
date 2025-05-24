// pages/Home.jsx
import React from "react";
import Footer from "../components/Footer";

function Home() {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="text-2xl font-bold tracking-wide text-blue-500">HAO LACOSTE</div>
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><a href="/" className="hover:text-blue-400">Giới thiệu</a></li>
          <li><a href="/projects" className="hover:text-blue-400">Dự án</a></li>
          <li><a href="/contact" className="hover:text-blue-400">Liên hệ</a></li>
          <li><a href="/skills" className="hover:text-blue-400">Kỹ năng</a></li>
        </ul>
        <a
          href="/contact"
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Hire Me
        </a>
      </nav>

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
          <a
            href="#projects"
            className="bg-blue-600 px-6 py-3 rounded text-white hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>

        {/* Hero Image */}
        <div className="flex-1">
          <img
            src="/profile.png"
            alt="Minh hoạ"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
      <Footer />
    </section>
  );
}


export default Home;
