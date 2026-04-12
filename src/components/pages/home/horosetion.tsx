import { Button } from "../../ui/button";
import sawir from "../../../assets/sawir.png";
import { BookOpen,  Stamp, Star, Users } from "lucide-react";

const Horosetion = () => {
  const courses = [
  {
    title: "Frontend Development",
    instructor: "Frontend Development",
    price: "$49",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    description: "Learn HTML, CSS, JavaScript and React from scratch."
  },
  {
    title: "UI/UX Design",
    instructor: "UI/UX Design",
    image: "https://plus.unsplash.com/premium_photo-1733306548826-95daff988ae6?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$39",
    description: "Master the art of user interface and user experience design."

  },
  {
    title: "Digital Marketing",
    instructor: "Digital Marketing",
    price: "$29",
    image: "https://media.istockphoto.com/id/1148508378/photo/abstract-blue-and-orange-digital-binary-code-matrix-background-with-flare-futuristic-big-data.jpg?s=2048x2048&w=is&k=20&c=fDIzXxiVk_R4TMReSAwtSWZX4eSqH5yLf7a6UJdu3J0=",
    description: "Learn SEO, social media marketing, and online advertising strategies."
  },
];
  return (
    <div className="bg-gray-100 min-h-screen  items-center">
  <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Left Side */}
    <div className="flex flex-col justify-center text-center md:text-left">
      <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit mx-auto md:mx-0">
        #1 Online Learning Platform
      </span>

      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
        Learn New Skills Online with Expert Instructors
      </h1>

      <p className="text-gray-600 text-lg leading-8 mb-8 max-w-xl">
        Join thousands of students and explore top-quality courses in web
        development, design, business, and more.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl">
          Explore Courses
        </Button>

        <Button className="bg-amber-100 hover:bg-amber-200 text-amber-700 px-6 py-3 rounded-xl">
          Get Started
        </Button>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-8 mt-10 justify-center md:justify-start">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
          <p className="text-gray-500">Students</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">500+</h3>
          <p className="text-gray-500">Courses</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">4.9</h3>
          <p className="text-gray-500">Rating</p>
        </div>
      </div>
    </div>

    {/* Right Side */}
    <div className="flex justify-center">
      <img
        src={sawir}
        alt="Students learning"
        className="w-full max-w-lg  rounded-lg  object-cover"
      />
    </div>
  </section>
  <section className="bg-amber-200  text-white py-16  w-11/12 mx-auto rounded-lg mt-16">
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Platform?</h2>
      <p className="text-gray-700 text-center max-w-2xl mx-auto">
        We provide a unique learning experience with expert instructors, interactive content, and a supportive community.
      </p>
    </div>
    
    

<div className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">

    {/* Title */}
    <h2 className="text-3xl font-bold text-center mb-12">
      Popular Courses
    </h2>

    {/* Courses Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {courses.map((course, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition"
        >
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover"
          />

          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">
              {course.title}

            </h3>

            <p className="text-gray-500 text-sm mb-4">
               {course.instructor}
            </p>
            <p className="text-gray-700 mb-6">
              {course.description}
            </p>

            <div className="flex justify-between items-center">
              <span className="text-purple-600 font-bold">
               
                {course.price}

              </span>

              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                Enroll
              </button>
            </div>
          </div>
        </div>
      ))}

    </div>
  </div>
</div>

  </section>
<section className="bg-gray-100 py-16">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">"This platform has transformed my career! The courses are top-notch and the instructors are amazing."</p>
          <h3 className="text-lg font-semibold text-gray-900">Jane Doe</h3>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">"I love the variety of courses available. I've learned so much and can't wait to take more!"</p>
          <h3 className="text-lg font-semibold text-gray-900">John Smith</h3>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">"The support team is incredibly helpful and responsive. They go above and beyond to ensure students succeed."</p>
          <h3 className="text-lg font-semibold text-gray-900">Sarah Johnson</h3>
        </div>
      </div>
    </div>

    {/* Case Study Section */}
 <h2 className="text-3xl font-bold text-center mb-12 mt-20">Case Study</h2>

    <div className="max-w-7xl mx-auto px-6 py-16 flex items-center mt-9 gap-12">
     
      <div className="bg-yellow-100 p-6 rounded-lg  w-full flex flex-col items-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 mb-4">
          "This is a brief overview of a successful student's journey through our platform. They were able to achieve their career goals thanks to the quality education and support they received."
        </p>
        <h3 className="text-lg font-semibold text-gray-900">Emily Davis</h3>
      </div>
      <div className="bg-gray-200 p-6 rounded-lg shadow-md mt-8">
        <p className="text-gray-600 mb-4">
         ' studant's journey through our platform. They were able to achieve their career goals thanks to the quality education and support they received."
        </p>
        <h3 className="text-lg font-semibold text-gray-900">John Doe</h3>

      </div>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md w-full flex flex-col items-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-600 mb-4">
          "This is a brief overview of a successful student's journey through our platform. They were able to achieve their career goals thanks to the quality education and support they received."
        </p>
        <h3 className="text-lg font-semibold text-gray-900">Emily Davis</h3>
      </div>
      <div className="bg-gray-200 p-6 rounded-lg shadow-md mt-8">
        <p className="text-gray-600 mb-4">
          "Emily started with no prior experience in web development. After completing several courses and receiving mentorship from our instructors, she landed her dream job at a top tech company within six months!"
        </p>
        <h3 className="text-lg font-semibold text-gray-900">Emily Davis</h3>


      </div>
        </div>
    </div>


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

<div className="bg-gray-100 py-16 mt-16 flex-col items-center">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
    <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
  <BookOpen className="mx-auto mb-4 text-purple-600 w-10 h-10 animate-bounce" />
  <h4 className="text-xl font-semibold">Learn Courses</h4>
  <p className="text-gray-500">Access hundreds of courses online.</p>
  < Stamp className="text-green-500 w-5 h-5 mt-2" />
  <span>100+ Courses</span>
  
</div>

<div className="bg-white rounded-2xl shadow-lg p-6 text-center">
  <Users className="mx-auto mb-4 text-purple-600 w-10 h-10 animate-bounce" />
  <h4 className="text-xl font-semibold">10K+ Students</h4>
  <p className="text-gray-500 text-sm">
    Thousands of students trust our platform.
  </p>
  <Star className="text-yellow-500 w-5 h-5 mt-2" />
  <span>4.9 Rating</span>
  </div>
  <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
  <Users className="mx-auto mb-4 text-purple-600 w-10 h-10 animate-bounce" />
  <h4 className="text-xl font-semibold">10K+ Students</h4>
  <p className="text-gray-500 text-sm">
    Thousands of students trust our platform.
  </p>
  <Star className="text-yellow-500 w-5 h-5 mt-2" />
  <span>4.9 Rating</span>
  </div>

</div>
  
</div>

  </section>
</div>
    
  );
};

export default Horosetion;