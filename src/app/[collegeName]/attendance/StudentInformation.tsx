"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface StudentInformation {
  name: string;
  prnNo: string;
  class: string;
  brannch: string;
}

const TopLeftComponent: React.FC = () => {
  const [studentInfo, setStudentInfo] = useState<StudentInformation>();

  const router = useRouter();

  const handleBack = () => {
    router.push('/dashboard');
  };

  const userSession = JSON.parse(sessionStorage.getItem("userSession") || "{}");

  const getStudentInfo = async () => {
    if (!userSession) {
      toast.error("User not found.. please login");
    }

    let studentCurrentClass = "";
    if (parseInt(userSession.current_semester) === 1 || parseInt(userSession.current_semester) === 2) {
      studentCurrentClass = "First Year";
    } else if (parseInt(userSession.current_semester) === 3 || parseInt(userSession.current_semester) === 4) {
      studentCurrentClass = "Second Year";
    } else if (parseInt(userSession.current_semester) === 5 || parseInt(userSession.current_semester) === 6) {
      studentCurrentClass = "Third Year";
    } else {
      studentCurrentClass = "Final Year";
    }

    const currUser: StudentInformation = {
      name: userSession.username,
      prnNo: userSession.prn,
      class: studentCurrentClass,
      brannch: userSession.department,
    };

    setStudentInfo(currUser);
  };

  useEffect(() => {
    getStudentInfo();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center h-full w-full text-black bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="h-full w-full p-4">
        <button
          onClick={handleBack}
          className="bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition duration-300 px-6 py-2 mb-6 transform hover:scale-110"
        >
          Back to Dashboard
        </button>

        {/* Academic Year Dropdown */}
        <div className="mt-4">
          <label htmlFor="academic-year" className="block text-sm font-semibold text-black">
            Academic Year
          </label>
          <select
            id="academic-year"
            name="academic-year"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white text-gray-800 rounded-md shadow-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-200"
          >
            <option>2024-2025</option>
          </select>
        </div>

        {/* Student Information Grid */}
        <div className="grid grid-cols-2 gap-6 mt-6 bg-white shadow-lg rounded-md p-6 transform transition-transform hover:scale-105">
          <div className="flex items-center space-x-2">
            <p className="text-gray-600 font-semibold">Name:</p>
            <p className="text-gray-800">{studentInfo?.name}</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-gray-600 font-semibold">PRN No:</p>
            <p className="text-gray-800">{studentInfo?.prnNo}</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-gray-600 font-semibold">Class:</p>
            <p className="text-gray-800">{studentInfo?.class}</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-gray-600 font-semibold">Branch:</p>
            <p className="text-gray-800">{studentInfo?.brannch}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopLeftComponent;
