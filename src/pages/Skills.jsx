// pages/Skills.jsx
import React from "react";
import skills from "../data/skills.json";
import certs from "../data/certificates.json";
import exps from "../data/experiences.json";

export default function Skills() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
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
          href="#contact"
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Hire Me
        </a>
      </nav>

      {/* Nội dung */}
      <section className="px-6 py-16 max-w-6xl mx-auto space-y-16">
        {/* Kỹ năng */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-500">🧠 Kỹ năng</h2>
          <ul className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <li
                key={i}
                className="bg-[#1e293b] p-4 rounded shadow hover:shadow-lg transition"
              >
                <strong className="text-white">{skill.name}</strong>{" "}
                <span className="text-blue-400">– {skill.level}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Chứng chỉ */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-500">📜 Chứng chỉ</h2>
          <ul className="space-y-3">
            {certs.map((cert, i) => (
              <li key={i} className="text-white">
                <span className="font-semibold">{cert.title}</span> –{" "}
                <em className="text-gray-400">{cert.issuer}</em>{" "}
                <span className="text-sm text-gray-400">({cert.year})</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Kinh nghiệm */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-500">💼 Kinh nghiệm</h2>
          <div className="space-y-6">
            {exps.map((exp, i) => (
              <div
                key={i}
                className="bg-[#1e293b] p-6 border-l-4 border-blue-500 rounded shadow"
              >
                <h3 className="text-xl font-semibold text-white">
                  {exp.position} – {exp.company}
                </h3>
                <p className="text-sm text-gray-400">{exp.time}</p>
                <p className="mt-2 text-gray-200">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
