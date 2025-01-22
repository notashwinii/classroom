import React from 'react';

function AttendanceTable({ file, onClose }) {
  const [students, setStudents] = useState([
    { id: '1', name: 'John Doe', rollNo: 'R001' },
    { id: '2', name: 'Jane Smith', rollNo: 'R002' },
    // Add more students as needed
  ]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Attendance Table</h2>
        
        <form>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roll No.</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{student.rollNo}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
        <div className="mt-4 flex justify-end space-x-2">
          <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-1 rounded transition">
            Cancel
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded transition">
            Save Attendance
          </button>
        </div>
      </div>
    </div>
  );
}

export default AttendanceTable;
