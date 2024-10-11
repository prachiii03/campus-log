"use client";
import React from 'react';
import { useRouter } from 'next/navigation'; 

const TopLeftComponent: React.FC = () => {
  const router = useRouter(); 

  const handleBack = () => {
    router.push('/dashboard');  
  };

  return (
    <div className="flex flex-wrap justify-center items-center h-full w-full bg-white shadow-lg rounded-lg border border-gray-200"> 
      <div className='h-full w-full p-4'>
        
        <button
          onClick={handleBack}
          className="bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200 transform hover:scale-105 px-6 py-2 mb-4"
        >
          Back to Dashboard
        </button>

        {/* Academic Year Dropdown */}
        <div className="mt-4"> {/* Added margin-top to create space */}
          <label htmlFor="academic-year" className="block text-sm font-semibold text-gray-800">
            Academic Year
          </label>
          <select
            id="academic-year"
            name="academic-year"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-200"
          >
            <option>2024-2025</option>
            <option>2023-2024</option>
            <option>2022-2023</option>
          </select>
        </div>

        {/* Student Information Table */}
        <table className="min-w-full table-auto bg-gray-50 shadow-md rounded-md overflow-hidden py-4 mt-6 mx-auto" style={{ height: '300px' }}> {/* Increased height and centered table */}
          <tbody>
            <tr className="hover:bg-gray-100 transition">
              <td className="py-3 px-4 text-gray-600 font-semibold"> {/* Added font weight */}
                Name
              </td>
              <td className="py-3 px-4">Prachi Gopal Lad</td>
            </tr>
            <tr className="hover:bg-gray-100 transition">
              <td className="py-3 px-4 text-gray-600 font-semibold">PRN NO</td>
              <td className="py-3 px-4">292092776</td>
            </tr>
            <tr className="hover:bg-gray-100 transition">
              <td className="py-3 px-4 text-gray-600 font-semibold">Class</td>
              <td className="py-3 px-4">Final Year B.Tech.</td>
            </tr>
            <tr className="hover:bg-gray-100 transition">
              <td className="py-3 px-4 text-gray-600 font-semibold">Branch</td>
              <td className="py-3 px-4">Computer Science and Information Technology</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopLeftComponent;
