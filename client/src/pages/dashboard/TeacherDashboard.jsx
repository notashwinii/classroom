import React, { useState } from 'react';
import Navbar from '../../components/teachers/Navbar';
import Sidebar from '../../components/teachers/sidebar';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const classes = [
    { id: 1, name: 'BSc. Computer Science 4th Sem', icon: 'computer-icon' },
    { id: 2, name: 'BSc. Computational Maths 4th Sem', icon: 'math-icon' },
    { id: 3, name: 'BSc. Information Technology 3rd Sem', icon: 'it-icon' },
    { id: 4, name: 'BSc. Cyber Security 2nd Sem', icon: 'security-icon' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="overflow-x-hidden overflow-y-auto bg-gray-100 p-6 pt-24">
          {/* Class Routine Section */}
          <div className="rounded-lg bg-white p-6 shadow-md mb-6">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">My Routine</h3>
            <div className="space-y-4">
              {/* Example Class Routine */}
              <div className="flex justify-between p-4 bg-blue-50 rounded-md">
                <span className="text-sm font-medium text-blue-800">Mathematics</span>
                <span className="text-sm text-gray-600">9:00 AM - 10:00 AM</span>
              </div>
              <div className="flex justify-between p-4 bg-green-50 rounded-md">
                <span className="text-sm font-medium text-green-800">Computer Science</span>
                <span className="text-sm text-gray-600">10:15 AM - 11:15 AM</span>
              </div>
              <div className="flex justify-between p-4 bg-yellow-50 rounded-md">
                <span className="text-sm font-medium text-yellow-800">Information Technology</span>
                <span className="text-sm text-gray-600">11:30 AM - 12:30 PM</span>
              </div>
              <div className="flex justify-between p-4 bg-red-50 rounded-md">
                <span className="text-sm font-medium text-red-800">Cyber Security</span>
                <span className="text-sm text-gray-600">1:00 PM - 2:00 PM</span>
              </div>
            </div>
          </div>

          {/* Dashboard Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {classes.map((cls) => (
              <Link key={cls.id} to={`/teacher-dashboard/${cls.name}`}>
                <div className={`rounded-lg bg-white p-6 shadow-md hover:shadow-xl transition-shadow duration-300 ${cls.icon}-bg`}>
                  <h3 className="text-xl font-semibold text-gray-800">{cls.name}</h3>
                  <p className="text-gray-600">Manage notes, assignments, and grades for this class</p>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;
