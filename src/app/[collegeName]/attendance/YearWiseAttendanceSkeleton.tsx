// import React from 'react';

// const SkeletonLoader: React.FC = () => {
//   const rows = [1, 2, 3, 4];

//   return (
//     <div className="h-auto p-4 bg-white shadow-lg rounded-lg">
//       <h2 className="text-xl font-bold text-blue-700 text-center mb-4">
//         Attendance Record
//       </h2>
//       <div className="overflow-x-auto w-full">
//         <table className="table-auto w-full bg-white border border-blue-200 rounded-lg">
//           <thead className="bg-blue-200 text-white">
//             <tr>
//               <th className="px-4 py-2">Roll No</th>
//               <th className="px-4 py-2">Class</th>
//               <th className="px-4 py-2">Branch</th>
//               <th className="px-4 py-2">Attendance %</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rows.map((_, index) => (
//               <tr key={index} className="hover:bg-blue-100 transition-colors">
//                 <td className="px-4 py-2 border-t border-blue-200">
//                   <div className="bg-gray-300 h-4 rounded animate-pulse"></div>
//                 </td>
//                 <td className="px-4 py-2 border-t border-blue-200">
//                   <div className="bg-gray-300 h-4 rounded animate-pulse"></div>
//                 </td>
//                 <td className="px-4 py-2 border-t border-blue-200">
//                   <div className="bg-gray-300 h-4 rounded animate-pulse"></div>
//                 </td>
//                 <td className="px-4 py-2 border-t border-blue-200">
//                   <div className="bg-gray-300 h-4 rounded animate-pulse"></div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default SkeletonLoader;


import React from 'react';

const SkeletonLoader: React.FC = () => {
  const rows = [1, 2, 3, 4];

  return (
    <div className="h-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-blue-700 text-center mb-4">
        Attendance Record
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table-auto w-full bg-white border border-blue-200 rounded-lg">
          <thead className="bg-blue-200 text-white">
            <tr>
              <th className="px-4 py-2">Roll No</th>
              <th className="px-4 py-2">Class</th>
              <th className="px-4 py-2">Branch</th>
              <th className="px-4 py-2">Attendance %</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((_, index) => (
              <tr key={index} className="hover:bg-blue-100 transition-colors">
                <td className="px-4 py-2 border-t border-blue-200">
                  <div className="bg-gray-300 h-4 rounded animate-pulse"></div>
                </td>
                <td className="px-4 py-2 border-t border-blue-200">
                  <div className="bg-gray-300 h-4 rounded animate-pulse"></div>
                </td>
                <td className="px-4 py-2 border-t border-blue-200">
                  <div className="bg-gray-300 h-4 rounded animate-pulse"></div>
                </td>
                <td className="px-4 py-2 border-t border-blue-200">
                  <div className="bg-gray-300 h-4 rounded animate-pulse"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SkeletonLoader;
