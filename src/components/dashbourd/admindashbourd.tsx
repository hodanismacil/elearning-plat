import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {

  const navigate = useNavigate();

  // 🔐 Protect
  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== "admin") {
      navigate("/login");
    }
  }, []);

  const [courses, setCourses] = useState([
    "Frontend Development",
    "UI/UX Design"
  ]);

  const [newCourse, setNewCourse] = useState("");

  // ➕ Add Course
  const addCourse = () => {
    if (newCourse.trim() === "") return;
    setCourses([...courses, newCourse]);
    setNewCourse("");
  };

  // ❌ Delete Course
  const deleteCourse = (index: number) => {
    const updated = courses.filter((_, i) => i !== index);
    setCourses(updated);
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Add Course */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Course name"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={addCourse}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* Course List */}
      <div className="space-y-3">
        {courses.map((course, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 p-3 rounded"
          >
            <span>{course}</span>

            <button
              onClick={() => deleteCourse(index)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AdminDashboard;