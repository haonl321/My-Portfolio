// components/Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-400 text-sm py-6 mt-12 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Hào Lacoste. All rights reserved.</p>

        <div className="flex gap-4">
          <a
            href="https://github.com/haonl321"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href="mailto:haolacoste2222@gmail.com"
            className="hover:text-blue-400"
          >
            Email
          </a>
          <a
            href="https://facebook.com/nguyen.hao.484843"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
