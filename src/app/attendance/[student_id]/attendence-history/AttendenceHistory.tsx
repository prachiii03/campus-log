import React, { useEffect, useState } from 'react';

interface StudentAttendenceYearWise {
  first_year: number;
  second_year: number;
  third_year: number;
  fourth_year: number;
}

const AttendenceHistory = () => {
  const [studentAttendenceYearWise, setStudentAttendenceYearWise] = useState<StudentAttendenceYearWise | null>(null);

  useEffect(() => {
    getStudentAttendence();
  }, []);

  const getStudentAttendence = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/student/04766c58-d0b1-4786-a9a0-3f3d8594b88d/get-attendence-yearWise');
      const res = await response.json();
      console.log(res.attendanceByYear);  
      setStudentAttendenceYearWise(res.attendanceByYear); // Update the state
    } catch (error) {
      console.error("Error fetching attendance data:", error);
    }
  };

  useEffect(() => {
    // Log the updated state
    if (studentAttendenceYearWise) {
      console.log("Updated attendance data:", studentAttendenceYearWise);
    }
  }, [studentAttendenceYearWise]); // Observe changes to studentAttendenceYearWise

  // Mock data (replace this with actual data from API in the table if needed)
  const data = [
    { prn: '123456', year: '2023', class: '12th', branch: 'Science', attendance: '95%' },
    { prn: '654321', year: '2023', class: '11th', branch: 'Commerce', attendance: '89%' },
    { prn: '789012', year: '2023', class: '12th', branch: 'Arts', attendance: '92%' },
    { prn: '345678', year: '2023', class: '10th', branch: 'Science', attendance: '87%' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance Percentage</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((student, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.prn}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.year}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.class}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.branch}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendenceHistory;
