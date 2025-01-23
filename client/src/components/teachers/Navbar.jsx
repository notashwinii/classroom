import React from 'react';
import {Link} from "react-router-dom";
import Logo from "/KU-CMS.webp";

const Navbar = ({ isOpen, setIsOpen }) => {
  return (
   
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-4 flex justify-between items-center">
      
    {/* Left Side: Logo and Name */}

        <Link to="/faculty/dashboard">
    <div className="flex items-center space-x-4">
      <img src={Logo} alt="KU-CMS Logo" className="h-10 w-auto" />
      <h1 className="ml-3 text-xl font-semibold text-gray-800">KU-CMS</h1>
    </div>
    </Link>

    {/* Right Side: "Hello, Teacher" */}
    <div className="flex items-center text-gray-800">
      <p className="text-sm">Hello, Faculty</p>
    </div>
</div>
  );
};

export default Navbar;
