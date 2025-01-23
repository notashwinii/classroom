import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./sidebar";

function StudentAssignmentPage() {
  const { classId, assignmentId } = useParams();
  const [assignment, setAssignment] = useState(null);
  const [file, setFile] = useState(null);
  const [submissionDate, setSubmissionDate] = useState("");

  useEffect(() => {
    fetchAssignment();
    fetchExistingSubmission();
  }, [classId, assignmentId]);

  const fetchAssignment = () => {
    const assignments = JSON.parse(localStorage.getItem(`assignments-${classId}`)) || [];
    const selectedAssignment = assignments.find((a) => a.title === assignmentId);
    setAssignment(selectedAssignment);
  };

  const fetchExistingSubmission = () => {
    const submissions = JSON.parse(localStorage.getItem(`submissions-${classId}-${assignmentId}`)) || [];
    const existingSubmission = submissions.find((s) => s.studentId === "student-123");
    if (existingSubmission) {
      setFile(existingSubmission.file);
      setSubmissionDate(existingSubmission.submissionDate);
    }
  };

  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handleSubmissionDateChange = (e) => setSubmissionDate(e.target.value);

  const handleAssignmentSubmit = () => {
    if (!file || !submissionDate) {
      alert("Please select a file and provide a submission date.");
      return;
    }

    const newSubmission = { studentId: "student-123", fileName: file.name, fileType: file.type, fileSize: `${(file.size / 1024).toFixed(2)} KB`, submissionDate, date: new Date().toLocaleString() };
    const existingSubmissions = JSON.parse(localStorage.getItem(`submissions-${classId}-${assignmentId}`)) || [];
    localStorage.setItem(`submissions-${classId}-${assignmentId}`, JSON.stringify([newSubmission, ...existingSubmissions]));

    setFile(null);
    setSubmissionDate("");
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 overflow-y-auto bg-white flex flex-col items-center py-24">
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-center text-3xl font-bold text-[#512da8] mb-6">Assignment Details</h1>
            {assignment && (
              <div>
                <p className="text-gray-800 text-lg mb-2">Title: {assignment.title}</p>
                <p className="text-sm text-gray-500">File: {assignment.fileName}</p>
                <p className="text-sm text-gray-500">Type: {assignment.fileType}</p>
                <p className="text-sm text-gray-500">Size: {assignment.fileSize}</p>
                <p className="text-sm text-gray-500">Posted on: {assignment.date}</p>
                <p className="text-sm text-gray-500">Submission Date: {assignment.submissionDate}</p>
              </div>
            )}

            <div className="mt-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload File</label>
              <input type="file" onChange={handleFileChange} value={file?.name || ""} className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#512da8] focus:border-transparent" />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Submission Date</label>
              <input type="date" value={submissionDate} onChange={handleSubmissionDateChange} className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#512da8] focus:border-transparent" />
            </div>

            <button onClick={handleAssignmentSubmit} className="w-full py-2 bg-[#512da8] text-white rounded-md hover:bg-[#6a4eaf] transition mt-4">
              Submit Assignment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentAssignmentPage;