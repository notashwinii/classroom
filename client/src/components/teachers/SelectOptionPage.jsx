// src/components/teachers/SelectOptionPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Sidebar and Navbar components
import Sidebar from './sidebar';
import Navbar from './Navbar';

const SelectOptionPage = () => {
  const { classId } = useParams(); // Extract classId from the URL

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 bg-white p-6">
        <Navbar />
        <div className="mt-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-8 mt-20 mb-2">Class: {classId}</h1>
         
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Button Cards for different options */}
            <Link to={`/faculty/assignments/${classId}`} className="card">
              <div className="p-6 bg-indigo-600 text-white rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-semibold mb-2">Assignments</h2>
                <p>Assign assignments to your class</p>
              </div>
            </Link>

            <Link to={`/faculty/announcements/${classId}`} className="card">
              <div className="p-6 bg-green-600 text-white rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-semibold mb-2">Announcements</h2>
                <p>Announce something to your class</p>
              </div>
            </Link>

            <Link to={`/faculty/attendance/${classId}`} className="card">
              <div className="p-6 bg-yellow-600 text-white rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-semibold mb-2">Attendance</h2>
                <p>Mark attendance for your class</p>
              </div>
            </Link>

            <Link to={`/faculty/notes/${classId}`} className="card">
              <div className="p-6 bg-blue-600 text-white rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-semibold mb-2">Notes</h2>
                <p>Share notes with your class</p>
              </div>
            </Link>

            <Link to={`/faculty/grades/${classId}`} className="card">
              <div className="p-6 bg-purple-600 text-white rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-semibold mb-2">Grades</h2>
                <p>Manage your class grades</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectOptionPage;
