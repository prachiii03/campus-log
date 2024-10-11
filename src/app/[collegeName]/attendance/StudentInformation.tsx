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

    let studentCurrentClass = '';
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
    <div className="flex flex-wrap justify-center items-center h-full w-full bg-white shadow-lg rounded-lg border border-gray-200"> 
      <div className="h-full w-full p-4">
        <button
          onClick={handleBack}
          className="bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 transform hover:scale-105 px-6 py-2 mb-4"
        >
          Back to Dashboard
        </button>

        {/* Academic Year Dropdown */}
        <div className="mt-4">
          <label htmlFor="academic-year" className="block text-sm font-semibold text-gray-800">
            Academic Year
          </label>
          <select
            id="academic-year"
            name="academic-year"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-200"
          >
            <option>2024-2025</option>
          </select>
        </div>

        {/* Student Information Grid */}
        <div className="grid grid-cols-2 gap-6 mt-6 bg-gray-50 shadow-md rounded-md p-6">
          <div>
            <p className="text-gray-600 font-semibold">Name : {studentInfo?.name}</p>
            {/* <p className="py-1">{studentInfo?.name}</p> */}
          </div>
          <div>
            <p className="text-gray-600 font-semibold">PRN NO : {studentInfo?.prnNo}</p>
            {/* <p className="py-1">{studentInfo?.prnNo}</p> */}
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Class : {studentInfo?.class}</p>
            {/* <p className="py-1">{studentInfo?.class}</p> */}
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Branch :  {studentInfo?.brannch}</p>
            {/* <p className="py-1">{studentInfo?.brannch}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopLeftComponent;
