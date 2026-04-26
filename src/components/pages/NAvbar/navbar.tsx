import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // 

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ State-ka menu-ga mobile-ka

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(status === "true");
  }, []);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    setMenuOpen(false); // Xir menu-ga marka uu logout sameeyo
  };

  return (
    <div className="bg-gray-100 shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-6">
        {/* Logo */}
        <div className="text-amber-700 text-3xl md:text-4xl font-bold">
          MYAPP-latform
        </div>

        {/* 🍔 Hamburger Icon (Mobile kaliya) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-amber-700">
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* 💻 Desktop Menu & 📱 Mobile Menu */}
        <div className={`
          flex-col md:flex-row md:flex items-center gap-6 
          absolute md:static top-[80px] left-0 w-full md:w-auto 
          bg-gray-100 md:bg-transparent p-6 md:p-0 transition-all duration-300 ease-in
          ${menuOpen ? "flex shadow-lg md:shadow-none" : "hidden"} 
        `}>
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-amber-700">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-amber-700">About</Link>
          <Link to="/course" onClick={() => setMenuOpen(false)} className="hover:text-amber-700">Course</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-amber-700">Contact</Link>

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            {/* ✅ Dashboard */}
            {isLoggedIn && (
              <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
                <button className="bg-amber-700 text-white px-6 py-2 rounded w-full md:w-auto">
                  Dashboard
                </button>
              </Link>
            )}

            {/* ❌ Login */}
            {!isLoggedIn && (
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                <button className="bg-amber-700 text-white px-6 py-2 rounded w-full md:w-auto">
                  Login
                </button>
              </Link>
            )}

            {/* 🔥 Logout */}
            {isLoggedIn && (
              <button
                onClick={logout}
                className="bg-red-500 text-white px-6 py-2 rounded w-full md:w-auto"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;