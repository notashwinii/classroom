import React, { useState } from "react";

function AssignmentPage() {
  const [file, setFile] = useState(null);
  const [assignments, setAssignments] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAssignmentSubmit = () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const newAssignment = {
      fileName: file.name,
      fileType: file.type,
      fileSize: (file.size / 1024).toFixed(2) + " KB", // Convert file size to KB
      date: new Date().toLocaleString(),
    };

    setAssignments([newAssignment, ...assignments]);
    setFile(null); // Clear file input after submission
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-center text-3xl font-bold text-[#512da8] mb-6">
          Teacher's Assignment Upload
        </h1>

        {/* File Upload */}
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-4 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-[#512da8] focus:border-transparent"
        />

        <button
          onClick={handleAssignmentSubmit}
          className="w-full py-2 bg-[#512da8] text-white rounded-md hover:bg-[#6a4eaf] transition"
        >
          Upload Assignment
        </button>
      </div>

      {/* Display Assignments */}
      <div className="w-full max-w-4xl mt-10">
        {assignments.length > 0 ? (
          assignments.map((assignment, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md mb-6"
            >
              <p className="text-gray-800 text-lg mb-2">File: {assignment.fileName}</p>
              <p className="text-sm text-gray-500">Type: {assignment.fileType}</p>
              <p className="text-sm text-gray-500">Size: {assignment.fileSize}</p>
              <p className="text-sm text-gray-500">Posted on: {assignment.date}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No assignments available</p>
        )}
      </div>
    </div>
  );
}

export default AssignmentPage;

