import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./sidebar"
import { useAnnouncements } from "../../context/Announcements";
import WeeklyRoutineCalendar from "../shared/RoutineScheduler";


const routineEvents = [
  { id: "1", day: "Monday", startTime: "7:00 AM", endTime: "9:00 AM", subject: "COMP204",  room: "B9-302" },
  { id: "2", day: "Monday", startTime: "9:00 AM", endTime: "10:00 AM", subject: "COMP231",  room: "Lab 304" },
  { id: "3", day: "Friday", startTime: "10:00 AM", endTime: "12:00 PM", subject: "COMP232",  room: "B9-202" },
  { id: "4", day: "Monday", startTime: "12:00 PM", endTime: "2:00 PM", subject: "MATH207", room: "B9-103" },
  { id: "5", day: "Tuesday", startTime: "7:00 AM", endTime: "9:00 AM", subject: "MCSC202",  room: "Lab 305" },
  { id: "6", day: "Tuesday", startTime: "9:00 AM", endTime: "10:00 AM", subject: "COMP204", room: "Lab 106" },
  { id: "7", day: "Sunday", startTime: "10:00 AM", endTime: "12:00 PM", subject: "COMP231",  room: "B9-302" },
  { id: "8", day: "Tuesday", startTime: "12:00 PM", endTime: "2:00 PM", subject: "MATH207",  room: "B9-205" },
  { id: "9", day: "Wednesday", startTime: "7:00 AM", endTime: "9:00 AM", subject: "COMP232", room: "Lab 305" },
  { id: "10", day: "Wednesday", startTime: "9:00 AM", endTime: "10:00 AM", subject: "MCSC202",  room: "B9-106" },
  { id: "11", day: "Thursday", startTime: "10:00 AM", endTime: "12:00 PM", subject: "COMP231",  room: "B9-201" },
  { id: "12", day: "Wednesday", startTime: "12:00 PM", endTime: "2:00 PM", subject: "MATH207",  room: "B9-204" },
 {id: "11", day: "Friday", startTime: "10:00 AM", endTime: "12:00 PM", subject: "COMP231",  room: "B9-201" },
  { id: "12", day: "Sunday", startTime: "12:00 PM", endTime: "2:00 PM", subject: "MATH207",  room: "B9-204" }
];

const timeSlots = [
  "7:00 AM", "9:00 AM", "10:00 AM", "12:00 AM", 
  "12:00 PM", "2:00 PM"
];


const StudentDashboard = () => {
  const { announcements } = useAnnouncements()

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar />

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto  py-24 p-6">
            {/* Routine Schedule */}
            <div className="mb-8 w-full mx-auto">

<div className="bg-white rounded-lg shadow p-2 max-h-[300px] overflow-auto">
<WeeklyRoutineCalendar events={routineEvents} timeSlots={timeSlots} />
</div>
          </div>

          {/* Announcements */}
          <div>
            <h2 className="text-xl text-gray-600 font-semibold mb-4">Announcements</h2>
            <div className="bg-white rounded-lg shadow">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="p-4 border-b last:border-b-0">
                  <h3 className="font-semibold text-lg">{announcement.title}</h3>
                  <p className="text-gray-600 mt-1">{announcement.content}</p>
                  <p className="text-gray-600 mt-1">{announcement.posted_by}</p>
                  <p className="text-sm text-gray-500 mt-2">{announcement.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard

