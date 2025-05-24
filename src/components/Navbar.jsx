import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <ul className="flex gap-6 justify-center font-semibold">
        <li><Link to="/">Giới thiệu</Link></li>
        <li><Link to="/projects">Dự án</Link></li>
        <li><Link to="/contact">Liên hệ</Link></li>
        <li><Link to="/skills">Kỹ năng</Link></li>
      </ul>
    </nav>
  );
}
