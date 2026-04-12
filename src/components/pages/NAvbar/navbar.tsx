import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gray-100  flex items-center">
        <nav className=" flex items-center justify-between flex-wrap  p-6 w-full">
    <div className="flex items-center flex-shrink-0 text-black mr-6"> <span className="font-semibold text-4xl tracking-tight">My App</span></div>
        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-black  font-bold hover:text-yellow-500 mr-4">Home</Link>
        <Link to ="/about" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-yellow-500 mr-4">About</Link>
         <Link to="/course" className="block mt-4 lg:inline-block lg:mt-0 text-black font-bold hover:text-yellow-500 mr-4">Course</Link>

        <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-black font-bold hover:text-yellow-500">Contact</Link>
        <button className="bg-amber-700 hover:bg-amber-200 text-white font-bold py-2 px-4 rounded">Sign Up</button>
        <button className="bg-amber-700 hover:bg-amber-200 text-white font-bold py-2 px-4 rounded">Sign In</button>
        </nav>

    </div>
  )
};


   
export default Navbar;