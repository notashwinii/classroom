// src/components/Sidebar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useClassroom } from '../../context/context';

const Sidebar = ({ sidebarOpen }) => {
  const { classes } = useClassroom(); // Access classes from context

  return (
    <div className={`${
      sidebarOpen ? "translate-x-0" : "-translate-x-full"
    } fixed inset-y-0 left-0 py-16 z-40 w-72 bg-indigo-700 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0`}>
      <nav className="mt-6">
        <h2 className="text-white text-lg font-bold px-6 mb-3">Classes</h2>
        {classes.map((className) => (
          <Link
            key={className}
            to={`/faculty/class/${className}`} // Link to /class/:classId
            className="flex items-center px-6 py-3 text-white hover:bg-indigo-800"
          >
            {className}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
