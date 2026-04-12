import { Navigate } from "react-router-dom";

const Course = () => {
  const courses = [
  {
    id: 1,
    title: "Frontend Development",
   image: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Learn to build stunning websites.",
   
    instructor: "Ahmed Ali",
     
    price: "$49",
    desc: "Learn HTML, CSS, JavaScript and React."
  },
  {
    id: 2,
    title: "UI/UX Design",
    image:"https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Design beautiful user interfaces.",
    instructor: "Hodan Xasan",
    price: "$39",
    desc: "Master design and Figma tools."
  },
  {
    id: 3,
    title: "Digital Marketing",
    image:"https://plus.unsplash.com/premium_vector-1725566543157-14be3990eaf9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Grow your business with marketing skills.",
    instructor: "Mohamed Cabdi",
    price: "$29",
    desc: "Grow your business with marketing skills."
  },
];
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <section className=" ">
       <div className="max-w-3xl mx-auto py-16 px-6 text-center">
  <h1 className="text-4xl font-bold mb-6">
    Course Title
  </h1>
  <p className="text-lg text-gray-600 leading-8">
    This is a detailed description of the course. It covers the topics that will be taught, the learning outcomes, and any prerequisites for enrolling in the course. Students will gain valuable knowledge and skills that can be applied in real-world scenarios.
  </p>

</div>
  {/* {cards course content here} */}
        <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-10">
          All Courses
        </h1>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => Navigate(`/course/${course.id}`)}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl cursor-pointer transition"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                {course.title}
              </h3>

              <p className="text-gray-500 text-sm mb-3">
                By {course.instructor}
              </p>

              <p className="text-gray-600 text-sm mb-4">
                {course.desc}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-yellow-600 font-bold">
                  {course.price}
                </span>

                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
                  View
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
      </section>

      <section>
        {/* {cards for course content here} */}
        <div className="max-w-3xl mx-auto py-16 px-6 text-center">
  <h2 className="text-3xl font-bold mb-6">
    Course Curriculum

  </h2>

  <p className="text-lg text-gray-600 leading-8">
    This section outlines the curriculum of the course, including the modules and lessons that will be covered. Each module focuses on a specific topic, providing students with a structured learning path to follow throughout the course.
  </p>
      
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 mt-16">

  {/* Card 1 */}
  <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
    <p className="text-gray-600 leading-8">
      This course is designed to help students build a strong foundation in their chosen field. Whether you are a beginner or someone looking to improve your existing skills, this course provides step-by-step guidance to help you succeed.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
    <p className="text-gray-600 leading-8">
      Throughout the course, you will explore important topics in depth, supported by examples and hands-on exercises. The goal is not only to teach theory but also to ensure that you can apply what you learn in real-life situations.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
    <p className="text-gray-600 leading-8">
      By the end of the course, you will feel confident in your abilities and ready to take on new challenges. This course prepares you for real-world projects and career opportunities.
    </p>
    
  </div>


</div>
        



  
<div className="max-w-3xl mx-auto py-16 px-6 text-center">
  <div className="mt-12">
  <h2 className="text-2xl font-bold mb-4">Course Content</h2>

  <ul className="space-y-3 flex   items-start gap-7">
    <li className="bg-amber-100 text-black p-4 rounded-lg shadow">Introduction to Course</li>
    <li className="bg-yellow-100 text-black p-4 rounded-lg shadow">HTML Basics</li>
    <li className="bg-amber-100 p-4 rounded-lg shadow">CSS Fundamentals</li>
    <li className="bg-amber-100 text- p-4 rounded-lg shadow">JavaScript Basics</li>
  </ul>
  <div className="flex gap-6 mt-6 bg-amber-100 p-4 rounded-lg shadow justify-center">
  <span>⭐ 4.9 Rating</span>
  <span>👨‍🎓 1200 Students</span>
  <span>⏱️ 10 Hours</span>
</div>
<div className="mt-20 bg-amber-50 rounded-lg p-6 shadow">
  <h2 className="text-xl font-bold mb-3">What You Will Learn</h2>
  <ul className="list-disc ml-6 text-gray-600">
    <li>Build responsive websites</li>
    <li>Understand JavaScript fundamentals</li>
    <li>Create real-world projects</li>
  </ul>
</div>
</div>

</div>



        
      </section>


      <div className="bg-amber-50 py-16  mt-16">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* Title */}
    <h2 className="text-3xl font-bold text-center mb-12">
      Our Successful Students
    </h2>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Card 1 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          alt="student"
          className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
        />
        <h4 className="text-xl font-semibold">Ahmed Ali</h4>
        <p className="text-gray-500 text-sm mt-2">
          Learned Web Development and got his first job in 3 months.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          alt="student"
          className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
        />
        <h4 className="text-xl font-semibold">Hodan Xasan</h4>
        <p className="text-gray-500 text-sm mt-2">
          Became a UI/UX designer after completing our design courses.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">
        <img
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
          alt="student"
          className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
        />
        <h4 className="text-xl font-semibold">Mohamed Cabdi</h4>
        <p className="text-gray-500 text-sm mt-2">
          Improved his skills and started freelancing online successfully.
        </p>
      </div>

    </div>
  </div>
    </div>
    </div>
  );
};

export default Course;