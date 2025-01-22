import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../sidebar";
import ItemDetailsPage from "./ItemDetailsPage";

function TeacherGradingPage() {
  const [grades, setGrades] = useState(
    Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
      date: new Date().toLocaleDateString(),
      title: `Assignment ${index + 1}`,
    }))
  );

  const handleAddNew = () => {
    const newId = grades.length + 1;
    setGrades([
      ...grades,
      { id: newId, date: new Date().toLocaleDateString(), title: `New Item ${newId}` },
    ]);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />
        <div className="min-h-screen flex flex-col py-24 p-8 bg-gray-50">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800">Grades</h1>
            <button
              onClick={handleAddNew}
              className="px-4 py-2 bg-white text-black border border-gray-300 rounded hover:bg-gray-100 transition"
            >
              Add New Item
            </button>
          </div>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="w-full border-collapse text-left">
              <thead className="bg-indigo-800 text-white">
                <tr>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Title</th>
                  <th className="py-3 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {grades.map((item) => (
                  <tr
                    key={item.id}
                    className="even:bg-gray-100 hover:bg-gray-200 transition"
                  >
                    <td className="py-3 px-4">{item.date}</td>
                    <td className="py-3 px-4">
                      <Link
                        to={`/items/${item.id}`}
                        className="text-blue-600 hover:underline"
                      >
                        {item.title}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-center">
                      {/* Add actions like update/delete if needed */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherGradingPage;
