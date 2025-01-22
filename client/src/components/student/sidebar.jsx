import React from "react";
import { Book, FileText, ChevronRight, Bell } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Sidebar = ({ sidebarOpen }) => {
  return (
    <div
      className={`${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 py-16 z-40 w-72 bg-indigo-700 transition-transform duration-300 ease-in-out lg:static lg:translate-x-0`}
    >
      <nav className="mt-6">
        {/* Link to the NotesPage */}
        <Link
          to="/notes" // Define the route you want to navigate to
          className="flex items-center px-6 py-3 text-white hover:bg-indigo-800"
        >
          <Book className="mr-3" size={20} />
          Notes
        </Link>
        {/* Other links */}
        <a
          href="#"
          className="flex items-center px-6 py-3 text-white hover:bg-indigo-800"
        >
          <FileText className="mr-3" size={20} />
          Assignments
        </a>
        <a
          href="#"
          className="flex items-center px-6 py-3 text-white hover:bg-indigo-800"
        >
          <ChevronRight className="mr-3" size={20} />
          Grades
        </a>
        <a
          href="#"
          className="flex items-center px-6 py-3 text-white hover:bg-indigo-800"
        >
          <Bell className="mr-3" size={20} />
          Notices
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
