// pages/Projects.jsx
import React from "react";
import projectData from "../data/projects.json";

function Projects() {
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

      {/* Nội dung dự án */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-500">
          Dự án đã thực hiện
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((p) => (
            <div
              key={p.id}
              className="bg-[#1e293b] p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-gray-300 text-sm">{p.description}</p>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-400 hover:underline text-sm"
                >
                  Xem chi tiết →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
