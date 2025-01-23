import React, { useState, useEffect } from "react";

const TeacherViewSubmitted = () => {
  const classId = "CS II/II"; // Static class for now, can be dynamic
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchedAssignments = JSON.parse(localStorage.getItem(`assignments-${classId}`)) || [];
    setAssignments(fetchedAssignments);
  }, [classId]);

  return (
    <div>
      <h2>Submitted Assignments for {classId}</h2>
      {assignments.length > 0 ? (
        assignments.map((assignment) => (
          <div key={assignment.id}>
            <h3>{assignment.title}</h3>
            <p>{assignment.description}</p>
            <p>Due: {assignment.dueDate}</p>
            {assignment.submittedAssignments.length > 0 ? (
              assignment.submittedAssignments.map((submission, index) => (
                <div key={index}>
                  <p>Student: {submission.studentId}</p>
                  <p>Submission: {submission.submission}</p>
                </div>
              ))
            ) : (
              <p>No submissions yet</p>
            )}
          </div>
        ))
      ) : (
        <p>No assignments available</p>
      )}
    </div>
  );
};

export default TeacherViewSubmitted;
