// pages/Skills.jsx
import React from "react";
import { Link } from "react-router-dom";
import skills from "../data/skills.json";
import certs from "../data/certificates.json";
import exps from "../data/experiences.json";

export default function Skills() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      

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
