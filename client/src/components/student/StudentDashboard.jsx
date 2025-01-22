import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./sidebar"
import { useAnnouncements } from "../../context/Announcements";
import WeeklyRoutineCalendar from "../shared/RoutineScheduler";


const routineEvents = [
  { id: "1", day: "Monday", startTime: "9:00 AM", endTime: "11:00 AM", subject: "COMP231",  className: 'CM II/II',room: "B9-302" },
  { id: "2", day: "Monday", startTime: "12:00 AM", endTime: "02:00 PM", subject: "COMP231",  className: 'CS II/II',room: "Lab 304" },
  { id: "3", day: "Tuesday", startTime: "10:00 AM", endTime: "12:00 AM", subject: "COMP302", className: 'CS III/I', room: "B9-202" },
  { id: "4", day: "Wednesday", startTime: "2:00 PM", endTime: "04:00 PM", subject: "COMP302",  className: 'CE III/I',room: "B(-403) 103" },
]

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
          <div className="mb-8">
            <h1 className="text-xl font-semibold mb-4">Weekly Routine</h1>
            <div className="bg-white rounded-lg shadow p-4">
              <WeeklyRoutineCalendar events={routineEvents} />
            </div>
          </div>

          {/* Announcements */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Announcements</h2>
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

