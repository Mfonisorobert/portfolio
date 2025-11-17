import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50">
      <div className="container py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 
          transform transition-transform duration-300 ">Mfoniso</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Desktop Button */}
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white 
          hidden md:inline transform transition-transform duration-300 
          hover:scale-105 px-4 py-2 rounded-full">
          Connect Me
        </button>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col space-y-4 py-4 bg-black text-center">
          <a href="#home" className="hover:text-gray-400" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" className="hover:text-gray-400" onClick={() => setOpen(false)}>About Me</a>
          <a href="#services" className="hover:text-gray-400" onClick={() => setOpen(false)}>Services</a>
          <a href="#project" className="hover:text-gray-400" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" className="hover:text-gray-400" onClick={() => setOpen(false)}>Contact</a>

          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white
            px-4 py-2 rounded-full mx-auto w-[150px]">
            Connect Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;











// import React from 'react'

// const Navbar = () => {
//   return (
//     <nav className='bg-black text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50'>
//         <div className='container py-2 flex justify-center md:justify-between items-center'>
//             <div className='text-2xl font-bold hidden md:inline'>Mfoniso</div>
//             <div className='space-x-6'>
//                 <a href="#home" className='hover:text-gray-400'>Home</a>
//                 <a href="#about" className='hover:text-gray-400'>About Me</a>
//                 <a href="#services" className='hover:text-gray-400'>Services</a>
//                 <a href="#project" className='hover:text-gray-400'>Projects</a>
//                 <a href="#contact" className='hover:text-gray-400'>Contact</a>
//             </div>
//             <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
//             transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
//         </div>
//     </nav>
//   )
// }

// export default Navbar
