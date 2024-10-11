"use client";
import React from "react";

type Subject = {
  subjectCode: string;
  subjectName: string;
  theoryPractical: string;
};

// Mock subjects data
const mockSubjects: Subject[] = [
  { subjectCode: "C1401", subjectName: "CLOUD COMPUTING", theoryPractical: "TH" },
  { subjectCode: "C4071", subjectName: "SOFTWARE TESTING", theoryPractical: "PR" },
  { subjectCode: "C4131", subjectName: "DATA ANALYTICS", theoryPractical: "TH" },
  { subjectCode: "C4191", subjectName: "WEB TECHNOLOGY LAB", theoryPractical: "PR" },
];

// Props type definition
type AttendanceProps = {
  onSelectSubject: (subjectCode: string) => void;
};

const Attendance = ({ onSelectSubject }: AttendanceProps) => {
  const handleSelect = async (subjectCode: string) => {
    onSelectSubject(subjectCode);
  };

  return (
    <div className="container mx-auto overflow-scroll p-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 text-center">Current Year Subjects</h1>

      <table className="min-w-full bg-white border-t border-blue-200 rounded-lg shadow-md overflow-hidden">
        <thead className="bg-gradient-to-r bg-blue-200 text-white">
          <tr>
            <th className="border-t border-blue-200 px-4 py-3">Subject Code</th>
            <th className="border-t border-blue-200 px-4 py-3">Subject Name</th>
            <th className="border-t border-blue-200 px-4 py-3">Theory/Practical</th>
            <th className="border-t border-blue-200 px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {mockSubjects.map((subject, index) => (
            <tr key={index} className={`text-gray-900 ${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-gray-200 transition-colors`}>
              <td className="border-t border-blue-200 px-4 py-2">{subject.subjectCode}</td>
              <td className="border-t border-blue-200 px-4 py-2">{subject.subjectName}</td>
              <td className="border-t border-blue-200 px-4 py-2">{subject.theoryPractical}</td>
              <td className="border-t border-blue-200 px-4 py-2">
                <button
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded shadow transition-transform transform hover:scale-105"
                  onClick={() => handleSelect(subject.subjectCode)}
                >
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
