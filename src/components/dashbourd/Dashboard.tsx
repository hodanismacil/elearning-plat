import {  NavLink, Outlet } from "react-router-dom"; // 👈 Outlet kaliya ayaa lagu daray
import { BookOpen, BarChart, Settings } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#f4f6fb] ">

      {/* Sidebar */}
       <div className="w-64 bg-gradient-to-r from-yellow-700 to-yellow-400 text-white p-6 mt-16">

        <h2 className="text-2xl font-bold mb-10">EduDashboard</h2>

        <ul className="space-y-6">

  <li>
    <NavLink
      to="courses"
      className={({ isActive }) =>
        `flex items-center gap-3 transition ${
          isActive
            ? "text-yellow-300 font-bold"
            : "hover:text-purple-300"
        }`
      }
    >
      <BookOpen /> Courses
    </NavLink>
  </li>

  <li>
    <NavLink
      to="progress"
      className={({ isActive }) =>
        `flex items-center gap-3 transition ${
          isActive
            ? "text-yellow-300 font-bold"
            : "hover:text-purple-300"
        }`
      }
    >
      <BarChart /> Progress
    </NavLink>
  </li>

  <li>
    <NavLink
      to="settings"
      className={({ isActive }) =>
        `flex items-center gap-3 transition ${
          isActive
            ? "text-yellow-300 font-bold"
            : "hover:text-purple-300"
        }`
      }
    >
      <Settings /> Settings
    </NavLink>
  </li>

</ul>

      </div>

      {/* Main */}
      <div className="flex-1 p-8 mt-9">

        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        {/* 🔥 HALKAN AYAA LAGU DARAY */}
        <Outlet />

        {/* Top Card */}
        <div className="bg-gradient-to-r from-yellow-700 to-yellow-400 text-white p-6 rounded-2xl flex justify-between items-center mb-8 w-full mt-9">
          <div>
            <h2 className="text-xl font-semibold">Hello, User 👋</h2>
            <p className="text-sm opacity-80">Nice to have you back</p>
          </div>
          <div className="bg-white/20 px-4 py-2 rounded-lg">
            Scientist Boy
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Left Side */}
          <div className="md:col-span-2 space-y-6">

            {/* Small Cards */}
            <div className="grid grid-cols-3 gap-4">

              <div className="bg-white p-4 rounded-xl shadow text-center">
                ⭐⭐⭐⭐⭐
                <p className="text-sm mt-2">Discipline</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow text-center">
                ⭐⭐⭐⭐☆
                <p className="text-sm mt-2">Critical Thinking</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow text-center">
                ⭐⭐⭐⭐☆
                <p className="text-sm mt-2">Problem Solving</p>
              </div>

            </div>

            {/* Activity */}
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="font-semibold mb-4">Learning Activity</h3>

              <div className="h-40 flex items-center justify-center text-gray-400">
                Chart Coming Soon...
              </div>
            </div>

          </div>

          {/* Right Side (Progress) */}
          <div className="space-y-4">

            {[
              { name: "Mathematics", progress: "70%" },
              { name: "Art", progress: "60%" },
              { name: "Chemistry", progress: "43%" },
              { name: "Biology", progress: "50%" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">Course</p>
                </div>
                <span className="text-yellow-500 font-bold">
                  {item.progress}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;