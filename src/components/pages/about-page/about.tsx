import { BookOpen, Users, Target } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <div className=" text-black py-20 text-center  mb-16">
        <h1 className="text-5xl font-bold mb-4">About Our Platform</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We help students learn valuable skills online and build successful careers.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* INTRO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-8">
            We are an online learning platform dedicated to helping students gain real-world skills in technology, design, and business. Our goal is to make education simple, accessible, and practical for everyone.
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-xl transition">
            <BookOpen className="mx-auto text-yellow-500 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality Courses</h3>
            <p className="text-gray-600">
              Learn from well-structured and practical courses designed for real-world use.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-xl transition">
            <Users className="mx-auto text-yellow-500 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-gray-600">
              Our instructors are experienced professionals ready to guide you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-xl transition">
            <Target className="mx-auto text-yellow-500 w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
            <p className="text-gray-600">
              Build skills that help you get jobs, freelance, or start your own business.
            </p>
          </div>

        </div>

        {/* MISSION & VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-8">
              Our mission is to empower people through education by providing high-quality courses that help them succeed in their careers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-8">
              We aim to become one of the leading online learning platforms by making education accessible to everyone around the world.
            </p>
          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          <div>
            <h3 className="text-3xl font-bold text-yellow-500">10K+</h3>
            <p className="text-gray-600">Students</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-500">500+</h3>
            <p className="text-gray-600">Courses</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-yellow-500">4.9</h3>
            <p className="text-gray-600">Rating</p>
          </div>

        </div>

      </div>

        <section className="bg-gray-100 px-10 py-16 mt-9">
            {/* {cards for course content here} */}
                    
  <h2 className="text-3xl font-bold mb-6 text-center ">
    Course Curriculum
  </h2>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    <div className="bg-amber-50 rounded-3xl p-8 shadow">
        <p className="text-2xl font-bold  md-3">
            Introduction to Programming
        </p>
        <p className="text-gray-600 leading-8">Learn the fundamentals of programming with hands-on exercises.</p>

    </div>
    <div className="bg-amber-50 rounded-3xl p-8 shadow">
        <p className="text-2xl font-bold  md-3">
            Web Development
        </p>
        <p className="text-gray-600 leading-8">Build modern websites and applications using HTML, CSS, and JavaScript.</p>

   </div>
   <div className="bg-amber-50 rounded-3xl p-8 shadow">
        <p className="text-2xl font-bold  md-3">
            Data Science
        </p>
        <p className="text-gray-600 leading-8">Learn to analyze and interpret data using Python and machine learning techniques.</p>

   </div>
     </div>

     <div className="max-w-3xl mx-auto py-16 px-6 text-center">
  <div className="mt-12">
  <h2 className="text-2xl font-bold mb-4">Course Benefits</h2>
    <p className="text-gray-600 leading-8">
      By taking our courses, you will gain valuable skills and knowledge that will help you advance in your career.
    </p>
  </div>
</div>

        </section>
     
    </div>
  );
};

export default About;