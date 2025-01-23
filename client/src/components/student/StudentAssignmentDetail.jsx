import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const StudentAssignmentDetails = () => {
  const { assignmentId } = useParams(); // Get the assignment ID from the URL
  const [assignment, setAssignment] = useState(null);
  const [submission, setSubmission] = useState("");
  const studentClass = "CS II/II"; // Static class for now, can be dynamic

  useEffect(() => {
    const assignments = JSON.parse(localStorage.getItem(`assignments-${studentClass}`)) || [];
    const selectedAssignment = assignments.find((assgn) => assgn.id === parseInt(assignmentId));
    setAssignment(selectedAssignment);
  }, [assignmentId, studentClass]);

  const handleSubmit = () => {
    if (!submission) {
      alert("Please enter your submission");
      return;
    }

    const assignments = JSON.parse(localStorage.getItem(`assignments-${studentClass}`)) || [];
    const updatedAssignments = assignments.map((assgn) => {
      if (assgn.id === parseInt(assignmentId)) {
        assgn.submittedAssignments.push({
          studentId: "student1", // Replace with actual student ID
          submission,
        });
      }
      return assgn;
    });

    // Save the updated assignments back to localStorage
    localStorage.setItem(`assignments-${studentClass}`, JSON.stringify(updatedAssignments));

    alert("Assignment submitted successfully!");
    setSubmission(""); // Clear the submission field
  };

  return (
    <div>
      {assignment ? (
        <div>
          <h2>{assignment.title}</h2>
          <p>{assignment.description}</p>
          <p>Due: {assignment.dueDate}</p>

          <textarea
            placeholder="Enter your submission here"
            value={submission}
            onChange={(e) => setSubmission(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit Assignment</button>
        </div>
      ) : (
        <p>Assignment not found</p>
      )}
    </div>
  );
};

export default StudentAssignmentDetails;
