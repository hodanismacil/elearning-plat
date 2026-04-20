import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(status === "true");
  }, []);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    setIsLoggedIn(false); // 🔥 update UI
  };

  return (
    <div className="bg-gray-100 flex items-center">

      <nav className="flex items-center justify-between flex-wrap p-6 w-full">

        <div className="text-amber-700 text-4xl font-bold">
          MYAPP-latform
        </div>

        <div className="flex gap-6 items-center">

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/course">Course</Link>
          <Link to="/contact">Contact</Link>

          {/* ✅ Dashboard */}
          {isLoggedIn && (
            <Link to="/dashboard">
              <button className="bg-amber-700 text-white px-4 py-2 rounded">
                Dashboard
              </button>
            </Link>
          )}

          {/* ❌ Login */}
          {!isLoggedIn && (
            <Link to="/login">
              <button className="bg-amber-700 text-white px-4 py-2 rounded">
                Login
              </button>
            </Link>
          )}

          {/* 🔥 Logout */}
          {isLoggedIn && (
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          )}

        </div>
      </nav>
    </div>
  );
};

export default Navbar;