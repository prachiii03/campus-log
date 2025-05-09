
"use client"
import studentProtectRoute from '@/app/(components)/utils/protect-route/StudentProtectRoute';
import React, { useEffect, useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

// Define types for Company and Student
type Company = {
  company_name: string;
  job_roll: string;
  job_description: string;
  offering_ctc: number;
  minimu_gpa: number;
  kt_allow: boolean;
  application_deadline: string;
  registration_link: string;
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
  const userSession = JSON.parse(sessionStorage.getItem("userSession") || "{}");

  let year = "";
  if (parseInt(userSession.current_semester) === 1 || parseInt(userSession.current_semester) === 2) {
    year = "First Year";
  } else if (parseInt(userSession.current_semester) === 3 || parseInt(userSession.current_semester) === 4) {
    year = "Second Year";
  } else if (parseInt(userSession.current_semester) === 5 || parseInt(userSession.current_semester) === 6) {
    year = "Third Year";
  } else {
    year = "Final Year";
  }

  const [companies, setCompanies] = useState<Company[] | null>(null); // Initially set companies as null to indicate loading
  const [student, setStudent] = useState<Student>({
    name: userSession.username,
    enrollmentNo: userSession.prn,
    department: userSession.department,
    yearOfStudy: year,
    gpa: userSession.currentGPA,
    backlogs: userSession.activeBacklogs,
  });

  useEffect(() => {
    // Make the API call to fetch companies
    const fetchCompanies = async () => {
      try {
        const response = await fetch("/api/faculty/tpo/get-queued-companies");
        if (!response.ok) {
          throw new Error("Failed to fetch companies");
        }
        const data = await response.json();
        setCompanies(data.upCommingCompanies); // Set companies from API response
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  const isEligible = (company: Company): boolean => {
    return student.gpa >= company.minimu_gpa && (company.kt_allow || student.backlogs === 0);
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
          <h2 className="text-3xl font-extrabold mb-6 text-gray-900">Queued Companies</h2>

          <table className="min-w-full bg-white border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
                <th className="py-3 px-4 border-b-2 text-left font-semibold">Company Name</th>
                <th className="py-3 px-4 border-b-2 text-left font-semibold">Job Roll</th>
                <th className="py-3 px-4 border-b-2 text-left font-semibold">Description</th>
                <th className="py-3 px-4 border-b-2 text-left font-semibold">Package (CTC)</th>
                <th className="py-3 px-4 border-b-2 text-left font-semibold">Minimum GPA</th>
                <th className="py-3 px-4 border-b-2 text-left font-semibold">KT Allowed</th>
                <th className="py-3 px-4 border-b-2 text-left font-semibold">Application Deadline</th>
                <th className="py-3 px-4 border-b-2 text-left font-semibold">Registration Link</th>
                <th className="py-3 px-4 border-b-2 text-left font-semibold">Eligibility</th>
              </tr>
            </thead>
            <tbody>
              {companies === null ? (
                // Render skeleton loading state
                Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-blue-50' : 'bg-purple-50'} hover:bg-indigo-100 transition duration-300`}>
                    <td className="py-3 px-4 text-gray-800">
                      <div className="h-4 bg-gray-300 rounded"></div>
                    </td>
                    <td className="py-3 px-4 text-gray-800">
                      <div className="h-4 bg-gray-300 rounded"></div>
                    </td>
                    <td className="py-3 px-4 text-gray-800">
                      <div className="h-4 bg-gray-300 rounded"></div>
                    </td>
                    <td className="py-3 px-4 text-gray-800">
                      <div className="h-4 bg-gray-300 rounded"></div>
                    </td>
                    <td className="py-3 px-4 text-gray-800">
                      <div className="h-4 bg-gray-300 rounded"></div>
                    </td>
                    <td className="py-3 px-4 text-gray-800">
                      <div className="h-4 bg-gray-300 rounded"></div>
                    </td>
                    <td className="py-3 px-4 text-gray-800">
                      <div className="h-4 bg-gray-300 rounded"></div>
                    </td>
                    <td className="py-3 px-4 text-indigo-500 underline">
                      <div className="h-4 bg-gray-300 rounded"></div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                    </td>
                  </tr>
                ))
              ) : (
                // Render actual company data
                companies.map((company, index) => (
                  <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-blue-50' : 'bg-purple-50'} hover:bg-indigo-100 transition duration-300`}>
                    <td className="py-3 px-4 text-gray-800">{company.company_name}</td>
                    <td className="py-3 px-4 text-gray-800">{company.job_roll}</td>
                    <td className="py-3 px-4 text-gray-800">{company.job_description}</td>
                    <td className="py-3 px-4 text-gray-800">{company.offering_ctc}</td>
                    <td className="py-3 px-4 text-gray-800">{company.minimu_gpa}</td>
                    <td className="py-3 px-4 text-gray-800">{company.kt_allow ? 'Yes' : 'No'}</td>
                    <td className="py-3 px-4 text-gray-800">{new Date(company.application_deadline).toLocaleDateString()}</td>
                    <td className="py-3 px-4 text-indigo-500 underline">
                      <a href={company.registration_link} target="_blank" rel="noopener noreferrer">
                        Apply Here
                      </a>
                    </td>
                    <td className="py-3 px-4">
                      {isEligible(company) ? (
                        <FaCheck className="text-green-500 text-2xl" />
                      ) : (
                        <FaTimes className="text-red-500 text-2xl" />
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default studentProtectRoute(TPO);
