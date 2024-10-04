import React from 'react'

const StudentInfo = () => {
  return (
    <div className=" shadow-lg rounded-lg p-6 max-w-md mx-auto">
      
      <div className="mb-4 flex flow-row justify-between">
        <label className="block font-medium text-gray-700">Academic Year:</label>
        <p className="text-gray-600">2023-2024</p>
      </div>

      <div className="mb-4 flex flow-row justify-between">
        <label className="block font-medium text-gray-700">Name:</label>
        <p className="text-gray-600">John Doe</p>
      </div>

      <div className="mb-4 flex flow-row justify-between">
        <label className="block font-medium text-gray-700">Class:</label>
        <p className="text-gray-600">12th Grade</p>
      </div>

      <div className="mb-4 flex flow-row justify-between">
        <label className="block font-medium text-gray-700">Department:</label>
        <p className="text-gray-600">Science</p>
      </div>
    </div>
  )
}

export default StudentInfo
