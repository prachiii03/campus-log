"use client";
import React from 'react';

const TopRightComponent: React.FC = () => {
  return (
    <div className="h-auto border-gray-200 p-4"> 
      <h2 className="text-xl font-bold text-blue-700 text-center mb-4"> {/* Added margin bottom for spacing */}
        Attendance Record
      </h2>
      <div className="overflow-x-auto px-4"> 
        <table className="min-w-full table-auto bg-white border border-blue-200 rounded-lg">
          <thead className="bg-blue-200 text-white">
            <tr>
              <th className="px-4 py-1 text-left w-1/6">Roll No</th>
              <th className="px-4 py-1 text-left w-1/6">Year</th>
              <th className="px-4 py-1 text-left w-1/6">Class</th>
              <th className="px-4 py-1 text-left w-1/3">Branch</th>
              <th className="px-4 py-1 text-left w-1/6">Attendance %</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-blue-100 transition-colors">
              <td className="px-4 py-1 border-t border-blue-200">2110064</td>
              <td className="px-4 py-1 border-t border-blue-200">2021-2022</td>
              <td className="px-4 py-1 border-t border-blue-200">First Year B.Tech.</td>
              <td className="px-4 py-1 border-t border-blue-200">Computer Science and IT</td>
              <td className="px-4 py-1 border-t border-blue-200">90.89%</td>
            </tr>
            <tr className="hover:bg-blue-100 transition-colors">
              <td className="px-4 py-1 border-t border-blue-200">2110064</td>
              <td className="px-4 py-1 border-t border-blue-200">2022-2023</td>
              <td className="px-4 py-1 border-t border-blue-200">Second Year B.Tech.</td>
              <td className="px-4 py-1 border-t border-blue-200">Computer Science and IT</td>
              <td className="px-4 py-1 border-t border-blue-200">88.32%</td>
            </tr>
            <tr className="hover:bg-blue-100 transition-colors">
              <td className="px-4 py-1 border-t border-blue-200">2110064</td>
              <td className="px-4 py-1 border-t border-blue-200">2023-2024</td>
              <td className="px-4 py-1 border-t border-blue-200">Third Year B.Tech.</td>
              <td className="px-4 py-1 border-t border-blue-200">Computer Science and IT</td>
              <td className="px-4 py-1 border-t border-blue-200">84.07%</td>
            </tr>
            <tr className="hover:bg-blue-100 transition-colors">
              <td className="px-4 py-1 border-t border-blue-200">2110064</td>
              <td className="px-4 py-1 border-t border-blue-200">2024-2025</td>
              <td className="px-4 py-1 border-t border-blue-200">Final Year B.Tech.</td>
              <td className="px-4 py-1 border-t border-blue-200">Computer Science and IT</td>
              <td className="px-4 py-1 border-t border-blue-200">90.61%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopRightComponent;
