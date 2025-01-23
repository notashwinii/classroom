import React, { useState, useEffect } from "react";
import WeeklyRoutineCalendar from "../shared/RoutineScheduler";

import Navbar from "./Navbar";
import Sidebar from "./sidebar";

const routineEvents = [
  { id: "1", day: "Monday", startTime: "9:00 AM", endTime: "11:00 AM", subject: "COMP231",  className: 'CM II/II',room: "B9 302" },
  { id: "2", day: "Monday", startTime: "12:00 PM", endTime: "2:00 PM", subject: "COMP231",  className: 'CS II/II',room: "Lab 304" },
  { id: "3", day: "Tuesday", startTime: "10:00 AM", endTime: "12:00 PM", subject: "COMP302", className: 'CS III/I', room: "B 9202" },
  { id: "4", day: "Wednesday", startTime: "2:00 PM", endTime: "4:00 PM", subject: "COMP302",  className: 'CE III/I',room: "B9 303" },
];
const timeSlots = [
  "9:00 AM", "11:00 AM", 
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"
];

const FacultyDashboard = () => {
  
  return (
    <div className="flex h-screen bg-gray-100">
    {/* Sidebar */}
    <Sidebar />

    {/* Main Content */}
    
      {/* Navbar */}
      <Navbar />

      {/* Content Area */}
      
      <div className="flex-1 overflow-y-auto  py-20 p-2">
          {/* Routine Schedule */}
          <div className="mb-8 w-full mx-auto">

  <div className="bg-white rounded-lg shadow p-2 max-h-[500px] overflow-auto">
  <WeeklyRoutineCalendar events={routineEvents} timeSlots={timeSlots} />
  </div>
</div>

     
     

     
       
      
    </div>
    </div>
  );
};

export default FacultyDashboard;
