import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-[#0f172a] text-white p-6 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-500">
          HAO LACOSTE
        </Link>
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><Link to="/" className="hover:text-blue-400">Giới thiệu</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400">Dự án</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Liên hệ</Link></li>
          <li><Link to="/skills" className="hover:text-blue-400">Kỹ năng</Link></li>
        </ul>
        <Link
          to="/contact"
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Hire Me
        </Link>
      </div>
    </nav>
  );
}
