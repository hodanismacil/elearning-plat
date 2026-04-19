
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-amber-700 text-white mt-16">

      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3">MYAPP-latform</h2>
          <p className="text-gray-400">
            Learn new skills online with expert instructors and grow your career.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">

            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/course" className="hover:text-white">Courses</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-gray-400">Email: support@edu.com</p>
          <p className="text-gray-400">Phone: +252 63 0000000</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-500">
        © 2026 EduPlatform. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;