import React, { useState } from 'react';
import Navbar from '../../components/student/Navbar';  // Import the Navbar component
import Sidebar from '../../components/student/sidebar';  // Import the NavSidebar component

const StudentDashboard = () => {
   // State for controlling sidebar visibility

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar  />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar/>

        {/* Main Content Area */}
        <main className="overflow-x-hidden overflow-y-auto bg-gray-100 p-6 pt-24">
          
          {/* Class Routine Section */}
          <div className="rounded-lg bg-white p-6 shadow-md mb-6">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">Class Routine</h3>
            <div className="space-y-4">
              {/* Example Class Routine */}
              <div className="flex justify-between p-4 bg-blue-50 rounded-md">
                <span className="text-sm font-medium text-blue-800">Mathematics</span>
                <span className="text-sm text-gray-600">9:00 AM - 10:00 AM</span>
              </div>
              <div className="flex justify-between p-4 bg-green-50 rounded-md">
                <span className="text-sm font-medium text-green-800">Science</span>
                <span className="text-sm text-gray-600">10:15 AM - 11:15 AM</span>
              </div>
              <div className="flex justify-between p-4 bg-yellow-50 rounded-md">
                <span className="text-sm font-medium text-yellow-800">History</span>
                <span className="text-sm text-gray-600">11:30 AM - 12:30 PM</span>
              </div>
              <div className="flex justify-between p-4 bg-red-50 rounded-md">
                <span className="text-sm font-medium text-red-800">English</span>
                <span className="text-sm text-gray-600">1:00 PM - 2:00 PM</span>
              </div>
            </div>
          </div>

          {/* Announcements Section */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">Announcements</h3>
            <div className="space-y-4">
              <div className="rounded-md bg-blue-50 p-4">
                <p className="text-sm font-medium text-blue-800">New assignment posted for Mathematics</p>
                <p className="mt-1 text-sm text-blue-600">Due date: Next Friday</p>
              </div>
              <div className="rounded-md bg-green-50 p-4">
                <p className="text-sm font-medium text-green-800">Grades for last week's quiz are now available</p>
                <p className="mt-1 text-sm text-green-600">Check your grades section</p>
              </div>
              <div className="rounded-md bg-yellow-50 p-4">
                <p className="text-sm font-medium text-yellow-800">Reminder: Parent-Teacher meeting next week</p>
                <p className="mt-1 text-sm text-yellow-600">Please inform your parents</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
