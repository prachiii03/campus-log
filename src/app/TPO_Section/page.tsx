'use client';

import React, { useEffect, useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

// Define types for Company and Student
type Company = {
  name: string;
  package: number;
  min_gpa: number;
  kt_allowed: boolean;
};

type Student = {
  name: string;
  enrollmentNo: string;
  department: string;
  yearOfStudy: string;
  gpa: number;
  backlogs: number;
};

const TPO: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [student, setStudent] = useState<Student>({
    name: 'Prachi Lad',
    enrollmentNo: '1234567890',
    department: 'Computer Science',
    yearOfStudy: 'Final Year',
    gpa: 8.5,
    backlogs: 0,
  });

  useEffect(() => {
    // Example company data
    const exampleCompanies: Company[] = [
      { name: 'Tech Innovators', package: 12, min_gpa: 7.0, kt_allowed: false },
      { name: 'DataGenius', package: 15, min_gpa: 8.0, kt_allowed: true },
      { name: 'Cloud Solutions Ltd.', package: 18, min_gpa: 7.5, kt_allowed: true },
      { name: 'FinTech Corp', package: 10, min_gpa: 8.5, kt_allowed: false },
      { name: 'AI & Co.', package: 20, min_gpa: 9.0, kt_allowed: true },
    ];

    // Set the fetched example data
    setCompanies(exampleCompanies);
  }, []);

  // Check if the student is eligible for a company
  const isEligible = (company: Company): boolean => {
    return student.gpa >= company.min_gpa && (company.kt_allowed || student.backlogs === 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 py-10">
      <div className="container mx-auto px-6">
        
        {/* Student Details Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 hover:shadow-2xl hover:bg-indigo-50 transition duration-300 ease-in-out">
          <h2 className="text-3xl font-extrabold mb-6 text-gray-900">Student Details</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition duration-300">
              <p className="text-lg font-semibold text-gray-500">Name:</p>
              <p className="text-xl font-bold text-indigo-600">{student.name}</p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition duration-300">
              <p className="text-lg font-semibold text-gray-500">Enrollment No:</p>
              <p className="text-xl font-bold text-gray-600">{student.enrollmentNo}</p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition duration-300">
              <p className="text-lg font-semibold text-gray-500">Department:</p>
              <p className="text-xl font-bold text-indigo-600">{student.department}</p>
            </div>
            <div className="p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition duration-300">
              <p className="text-lg font-semibold text-gray-500">Year of Study:</p>
              <p className="text-xl font-bold text-gray-600">{student.yearOfStudy}</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition duration-300">
              <p className="text-lg font-semibold text-gray-500">Aggregate GPA:</p>
              <p className="text-xl font-bold text-green-600">{student.gpa}</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg hover:bg-red-100 transition duration-300">
              <p className="text-lg font-semibold text-gray-500">Live Backlogs:</p>
              <p className="text-xl font-bold text-red-600">{student.backlogs}</p>
            </div>
          </div>
        </div>

        {/* Company Table Section */}
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-extrabold mb-6 text-gray-900">Eligible Companies</h2>
          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                <th className="py-3 px-4 border-b-2 text-left font-semibold">Company Name</th>
                <th className="py-3 px-4 border-b-2 text-left font-semibold">Package (Lakh/Year)</th>
                <th className="py-3 px-4 border-b-2 text-left font-semibold">Minimum GPA</th>
                <th className="py-3 px-4 border-b-2 text-left font-semibold">KT Allowed</th>
                <th className="py-3 px-4 border-b-2 text-left font-semibold">Eligibility</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, index) => (
                <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-blue-50' : 'bg-purple-50'} hover:bg-indigo-100 transition duration-300`}>
                  <td className="py-3 px-4 text-gray-800">{company.name}</td>
                  <td className="py-3 px-4 text-gray-800">{company.package}</td>
                  <td className="py-3 px-4 text-gray-800">{company.min_gpa}</td>
                  <td className="py-3 px-4 text-gray-800">{company.kt_allowed ? 'Yes' : 'No'}</td>
                  <td className="py-3 px-4">
                    {isEligible(company) ? (
                      <FaCheck className="text-green-500 text-2xl" />
                    ) : (
                      <FaTimes className="text-red-500 text-2xl" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TPO;
