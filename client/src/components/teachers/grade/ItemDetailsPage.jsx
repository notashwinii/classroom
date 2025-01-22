import React, { useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetailsPage() {
  const { id } = useParams();
  const [type, setType] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [marksObtained, setMarksObtained] = useState("");
  const [remarks, setRemarks] = useState("");

  const types = [
    { value: "internal", label: "Internal I" },
    { value: "internalII", label: "Internal II" },
    { value: "internalIII", label: "Internal III" },
    { value: "labReport", label: "Lab Report" },
    { value: "assignment", label: "Assignment" },
    { value: "attendance", label: "Attendance" },
    { value: "presentation", label: "Presentation" },
    { value: "other", label: "Other" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { type, rollNo, name, marksObtained, remarks });
    // Here you would typically send this data to your backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="p-8 bg-white shadow rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800">Item Details</h1>
        <div className="mb-4">
          <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-700">
            Type:
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-600 sm:text-sm"
          >
            <option value="">Select type</option>
            {types.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="rollNo" className="block mb-2 text-sm font-medium text-gray-700">
              Roll No:
            </label>
            <input
              type="text"
              id="rollNo"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-600 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-600 sm:text-sm"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="marksObtained" className="block mb-2 text-sm font-medium text-gray-700">
            Marks Obtained:
          </label>
          <input
            type="number"
            id="marksObtained"
            value={marksObtained}
            onChange={(e) => setMarksObtained(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-600 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="remarks" className="block mb-2 text-sm font-medium text-gray-700">
            Remarks:
          </label>
          <textarea
            id="remarks"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-600 sm:text-sm resize-none"
            rows={3}
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ItemDetailsPage;