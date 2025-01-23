import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./sidebar";

function AssignmentPage() {
  const { classId } = useParams();
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [submissionDate, setSubmissionDate] = useState("");
  const [assignments, setAssignments] = useState(() => {
    return JSON.parse(localStorage.getItem(`assignments-${classId}`)) || [];
  });
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetchSubmissions();
  }, [classId, title]);

  const fetchSubmissions = () => {
    const fetchedSubmissions = JSON.parse(localStorage.getItem(`submissions-${classId}-${title}`)) || [];
    setSubmissions(fetchedSubmissions);
  };

  const handleFileChange = (e) => setFile(e.target.files[0]);
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleSubmissionDateChange = (e) => setSubmissionDate(e.target.value);

  const handleAssignmentSubmit = () => {
    if (!file || !title || !submissionDate) {
      alert("Please fill in all fields and select a file.");
      return;
    }

    const newAssignment = { title, fileName: file.name, fileType: file.type, fileSize: `${(file.size / 1024).toFixed(2)} KB`, submissionDate, date: new Date().toLocaleString() };
    setAssignments([newAssignment, ...assignments]);
    localStorage.setItem(`assignments-${classId}`, JSON.stringify([newAssignment, ...assignments]));

    setFile(null);
    setTitle("");
    setSubmissionDate("");
  };

  const handleViewSubmissions = (assignment) => {
    navigate(`/teacher/assignments/${classId}/${assignment.title}`);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 overflow-y-auto bg-white flex flex-col items-center py-24">
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-center text-3xl font-bold text-[#512da8] mb-6">Assignments for {classId}</h1>
            <AssignmentForm onSubmit={handleAssignmentSubmit} onFileChange={handleFileChange} onTitleChange={handleTitleChange} onSubmissionDateChange={handleSubmissionDateChange} />
            <AssignmentList assignments={assignments} onViewSubmissions={handleViewSubmissions} />
          </div>
        </div>
      </div>
    </div>
  );
}

function AssignmentForm({ onSubmit, onFileChange, onTitleChange, onSubmissionDateChange }) {
  return (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Assignment Title</label>
        <input type="text" onChange={onTitleChange} className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#512da8] focus:border-transparent" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Submission Date</label>
        <input type="date" onChange={onSubmissionDateChange} className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#512da8] focus:border-transparent" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Upload File</label>
        <input type="file" onChange={onFileChange} className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#512da8] focus:border-transparent" />
      </div>
      <button onClick={onSubmit} className="w-full py-2 bg-[#512da8] text-white rounded-md hover:bg-[#6a4eaf] transition">
        Upload Assignment
      </button>
    </>
  );
}

function AssignmentList({ assignments, onViewSubmissions }) {
  return (
    <div className="w-full max-w-4xl mt-10">
      {assignments.length > 0 ? (
        assignments.map((assignment, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6 flex justify-between items-center">
            <div>
              <p className="text-gray-800 text-lg mb-2">Title: {assignment.title}</p>
              <p className="text-sm text-gray-500">File: {assignment.fileName}</p>
              <p className="text-sm text-gray-500">Type: {assignment.fileType}</p>
              <p className="text-sm text-gray-500">Size: {assignment.fileSize}</p>
              <p className="text-sm text-gray-500">Posted on: {assignment.date}</p>
              <p className="text-sm text-gray-500">Submission Date: {assignment.submissionDate}</p>
            </div>
            <button onClick={() => onViewSubmissions(assignment)} className="bg-[#512da8] text-white px-4 py-2 rounded-md hover:bg-[#6a4eaf] transition">
              View Submissions
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No assignments available</p>
      )}
    </div>
  );
}

export default AssignmentPage;