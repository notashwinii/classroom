import React, { createContext, useContext, useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Create context
const ClassroomContext = createContext();

// Custom hook for using the context
export const useClassroom = () => {
  const context = useContext(ClassroomContext);
  if (!context) {
    throw new Error('useClassroom must be used within a ClassroomProvider');
  }
  return context;
};

// Provider component
export const ClassroomProvider = ({ children }) => {
    // Initial mock data
    const initialData = {
      courses: [
        {
          id: '1',
          code: 'COMP 232',
          className: 'CS I/II',
          room: 'B9-302',
          schedule: {
            day: 'Monday',
            time: '10:00 AM'
          }
        },
        {
          id: '2',
          code: 'COMP 232',
          className: 'CM II/III',
          room: 'E-05',
          schedule: {
            day: 'Tuesday',
            time: '11:00 AM'
          }
        },
        {
          id: '3',
          code: 'COMP 301',
          className: 'CS III/I',
          room: 'B9-304',
          schedule: {
            day: 'Wednesday',
            time: '12:00 PM'
          }
        },
        {
          id: '4',
          code: 'MCSC 202',
          name: 'Database Management Systems',
          className: 'MCSC II/III',
          room: 'B9-305',
          schedule: {
            day: 'Thursday',
            time: '1:00 PM'
          }
        },
        {
          id: '5',
          code: 'MATH 207',
          name: 'Discrete Mathematics',
          className: 'Mathematics III/IV',
          room: 'B9-306',
          schedule: {
            day: 'Friday',
            time: '2:00 PM'
          }
        }
      ],
      students: [
        {
          id: '1',
          rollNo: 'CS2021001',
          name: 'John Doe',
          attendance: {}
        },
        // Add more students as needed
      ],
      grades: {},
      attendance: {},
      announcements: []
    };
  
    const [data, setData] = useState(initialData);


  
  const getRoutine = useCallback(() => {
    return data.courses.flatMap(course => 
      course.schedule && Array.isArray(course.schedule) ? 
        course.schedule.map(schedule => ({
          id: uuidv4(),
          title: `${course.className} - ${schedule.day}`,
          start: new Date(2025, schedule.time.split('-')[0].slice(-2) - 1, 7, parseInt(schedule.time.split('-')[1].split(':')[0]), 0),
          end: new Date(2025, schedule.time.split('-')[0].slice(-2) - 1, 7, parseInt(schedule.time.split('-')[1].split(':')[1]) + 1, 0),
          room: course.room,
          allDay: false
        })) : []
    );
  }, [data]);
  

  const getClassList = useCallback((courseId) => {
    return data.students.map(student => ({
      rollNo: student.rollNo,
      name: student.name
    }));
  }, [data]);

  const takeAttendance = useCallback((courseId, attendanceData) => {
    const newData = {
      ...data,
      attendance: {
        ...data.attendance,
        [courseId]: {
          ...(data.attendance[courseId] || {}),
          [new Date().toISOString()]: attendanceData
        }
      }
    };
    setData(newData);
    return true;
  }, [data]);

  const submitGrades = useCallback((courseId, gradeData) => {
    const newData = {
      ...data,
      grades: {
        ...data.grades,
        [courseId]: {
          ...(data.grades[courseId] || {}),
          [gradeData.title]: gradeData.grades
        }
      }
    };
    setData(newData);
    return true;
  }, [data]);

  const getClasses = useCallback(() => {
    return data.courses.map(course => ({
      id: course.id,
      className: `${course.className.replace(/\s+/g, '')} ${course.code}`,
      code: course.code
    }));
  }, [data]);

  // Provide the context value
  const value = {
    getRoutine,
    getClassList,
    takeAttendance,
    submitGrades,
    getClasses
  };

  return (
    <ClassroomContext.Provider value={value}>
      {children}
    </ClassroomContext.Provider>
  );
};