import React from "react"

const ClassCard = ({ classData }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-2">{classData.name}</h3>
      <p className="text-sm text-gray-600 mb-1">Course Code: {classData.code}</p>
      <p className="text-sm text-gray-600 mb-1">Students: {classData.studentCount}</p>
      <p className="text-sm text-gray-600">Schedule: {classData.schedule}</p>
    </div>
  )
}

export default ClassCard
