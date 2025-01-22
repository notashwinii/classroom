import React, { useState, useEffect } from "react";
import RoutineCalendar from "../shared/RoutineScheduler";
import { useClassroom } from "../../context/context";
import ClassCard from "../ClassCard";

const FacultyDashboard = () => {
  const [loading, setLoading] = useState(true);
  const { data: classroomData } = useClassroom();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        if (classroomData && classroomData.classes) {
          // No need to do anything with classroomData here
          // We're just checking if it exists
        } else {
          console.warn("Classroom data not available");
        }
      } catch (err) {
        console.error("Error fetching faculty data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [classroomData]);

  if (loading || !classroomData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Faculty Dashboard</h1>

      {/* Routine Schedule */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Weekly Schedule</h2>
        <div className="bg-white rounded-lg shadow p-4">
          <RoutineCalendar userType="faculty" />
        </div>
      </div>

      {/* Class Cards */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {classroomData.classes.map((classItem) => (
            <ClassCard key={classItem.id} classData={classItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
