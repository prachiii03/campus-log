"use client";
import React from "react";

// Skeleton Loader Component
const CurrentYearSubjectsSkeleton = () => {
  const renderSkeletonRows = (rowCount: number) => {
    return Array.from({ length: rowCount }).map((_, index) => (
      <tr
        key={index}
        className={`animate-pulse ${
          index % 2 === 0 ? "bg-gray-200" : "bg-gray-300"
        }`}
      >
        <td className="border-t border-gray-300 px-4 py-2">
          <div className="h-4 bg-gray-400 rounded"></div>
        </td>
        <td className="border-t border-gray-300 px-4 py-2">
          <div className="h-4 bg-gray-400 rounded"></div>
        </td>
        <td className="border-t border-gray-300 px-4 py-2">
          <div className="h-4 bg-gray-400 rounded"></div>
        </td>
        <td className="border-t border-gray-300 px-4 py-2">
          <div className="h-8 bg-blue-500 rounded w-24"></div>
        </td>
      </tr>
    ));
  };

  return (
    <div className="container mx-auto overflow-scroll p-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 text-center">
        Current Year Subjects
      </h1>

      <table className="min-w-full bg-white border-t border-gray-200 rounded-lg shadow-md overflow-hidden">
        <thead className="bg-gradient-to-r bg-gray-300 text-white">
          <tr>
            <th className="border-t border-gray-300 px-4 py-3">Subject Code</th>
            <th className="border-t border-gray-300 px-4 py-3">Subject Name</th>
            <th className="border-t border-gray-300 px-4 py-3">Theory/Practical</th>
            <th className="border-t border-gray-300 px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>{renderSkeletonRows(5)}</tbody>
      </table>
    </div>
  );
};

export default CurrentYearSubjectsSkeleton;
