import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gray-100  flex items-center">
        <nav className=" flex items-center justify-between flex-wrap  p-6 w-full">
    <div className="flex items-center flex-shrink-0 text-amber-700 mr-6"> <span className="font-semibold text-4xl tracking-tight">MYAPP-latform</span></div>
        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-black  font-bold hover:text-yellow-500 mr-4">Home</Link>
        <Link to ="/About" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 mr-4">About</Link>
         <Link to="/course" className="block mt-4 lg:inline-block lg:mt-0 text-black font-bold hover:text-yellow-500 mr-4">Course</Link>
           
        <Link to="/Contact" className="block mt-4 lg:inline-block lg:mt-0 text-black font-bold hover:text-yellow-500">Contact</Link>
      <Link to="/dashboard">
  <button className="bg-amber-700 text-white px-4 py-2 rounded">
    Dashboard
  </button>
</Link>
        < Link to="/login">
  <button className="bg-amber-700 hover:bg-amber-200 text-white font-bold py-2 px-4 rounded">
    Login
  </button>
</Link>

        </nav>

    </div>
  )
};


   
export default Navbar;