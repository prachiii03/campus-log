// import React, { useEffect, useState } from "react";
// import SkeletonLoader from "./YearWiseAttendanceSkeleton";

// interface AttendanceData {
//   first_year: number;
//   first_year_present: number;
//   second_year: number;
//   second_year_present: number;
//   third_year: number;
//   third_year_present: number;
//   fourth_year: number;
//   fourth_year_present: number;
// }

// const TopRightComponent: React.FC = () => {
//   const [attendance, setAttendance] = useState<AttendanceData | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const userSession = JSON.parse(sessionStorage.getItem("userSession") || "{}");

//   useEffect(() => {
//     const fetchAttendance = async () => {
//       const userSession = JSON.parse(sessionStorage.getItem("userSession") || "{}");

//       try {
//         const response = await fetch(`/api/student/${userSession.id}/get-attendence-yearWise`);
//         const data = await response.json();
//         if (response.ok) {
//           setAttendance(data.attendanceByYear);
//         } else {
//           setError("Failed to load attendance data");
//         }
//       } catch (err) {
//         setError("Error fetching data");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchAttendance();
//   }, []);

//   if (loading) return <SkeletonLoader />;
//   if (error) return <div>Error: {error}</div>;
//   if (!attendance) return <div>No attendance data available</div>;

//   const calculateAttendancePercentage = (total: number, present: number) => {
//     return total > 0 ? ((present / total) * 100).toFixed(2) : "N/A";
//   };

//   return (
//     <div className="h-auto p-4 bg-white shadow-lg rounded-lg">
//       <h2 className="text-xl font-bold text-blue-700 text-center mb-4">
//         Attendance Record
//       </h2>
//       <div className="overflow-x-auto w-full">
//         <table className="table-auto w-full bg-white border border-blue-200 rounded-lg">
//           <thead className="bg-blue-200 text-white" style={{backgroundColor: 'linear-gradient(#642bff, #ff22e6)'}}>
//             <tr>
//               <th className="px-4 py-2">Roll No</th>
//               <th className="px-4 py-2">Class</th>
//               <th className="px-4 py-2">Branch</th>
//               <th className="px-4 py-2">Attendance %</th>
//             </tr>
//           </thead>
//           <tbody>
//             {[attendance.first_year, attendance.second_year, attendance.third_year, attendance.fourth_year].map(
//               (year, index) => (
//                 <tr key={index} className="hover:bg-blue-100 transition-colors">
//                   <td className="px-4 py-2 border-t border-blue-200">{userSession.prn}</td>
//                   <td className="px-4 py-2 border-t border-blue-200">{index + 1} Year B.Tech.</td>
//                   <td className="px-4 py-2 border-t border-blue-200">Computer Science and IT</td>
//                   <td className="px-4 py-2 border-t border-blue-200">
//                     {calculateAttendancePercentage(
//                       year,
//                       index === 0 ? attendance.first_year_present : index === 1 ? attendance.second_year_present : index === 2 ? attendance.third_year_present : attendance.fourth_year_present
//                     )}%
//                   </td>
//                 </tr>
//               )
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TopRightComponent;


import React, { useEffect, useState } from "react";
import SkeletonLoader from "./YearWiseAttendanceSkeleton";

interface AttendanceData {
  first_year: number;
  first_year_present: number;
  second_year: number;
  second_year_present: number;
  third_year: number;
  third_year_present: number;
  fourth_year: number;
  fourth_year_present: number;
}

const TopRightComponent: React.FC = () => {
  const [attendance, setAttendance] = useState<AttendanceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const userSession = JSON.parse(sessionStorage.getItem("userSession") || "{}");

  useEffect(() => {
    const fetchAttendance = async () => {
      const userSession = JSON.parse(sessionStorage.getItem("userSession") || "{}");

      try {
        const response = await fetch(`/api/student/${userSession.id}/get-attendence-yearWise`);
        const data = await response.json();
        if (response.ok) {
          setAttendance(data.attendanceByYear);
        } else {
          setError("Failed to load attendance data");
        }
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchAttendance();
  }, []);

  if (loading) return <SkeletonLoader />;
  if (error) return <div>Error: {error}</div>;
  if (!attendance) return <div>No attendance data available</div>;

  const calculateAttendancePercentage = (total: number, present: number) => {
    return total > 0 ? ((present / total) * 100).toFixed(2) : "N/A";
  };

  return (
    <div className="h-auto p-4 bg-white text-black shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-blue-700 text-center mb-4">
        Attendance Record
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table-auto w-full bg-white border border-blue-200 rounded-lg">
          <thead className="bg-blue-200 text-white" style={{ backgroundColor: 'linear-gradient(#642bff, #ff22e6)' }}>
            <tr>
              <th className="px-4 py-2">Roll No</th>
              <th className="px-4 py-2">Class</th>
              <th className="px-4 py-2">Branch</th>
              <th className="px-4 py-2">Attendance %</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {[attendance.first_year, attendance.second_year, attendance.third_year, attendance.fourth_year].map(
              (year, index) => (
                <tr key={index} className="hover:bg-purple-100 transition-colors">
                  <td className="px-4 py-2 border-t border-gray-300">{userSession.prn}</td>
                  <td className="px-4 py-2 border-t border-gray-300">{index + 1} Year B.Tech.</td>
                  <td className="px-4 py-2 border-t border-gray-300">Computer Science and IT</td>
                  <td className="px-4 py-2 border-t border-gray-300 font-semibold">
                    {calculateAttendancePercentage(
                      year,
                      index === 0 ? attendance.first_year_present :
                        index === 1 ? attendance.second_year_present :
                          index === 2 ? attendance.third_year_present :
                            attendance.fourth_year_present
                    )}%
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopRightComponent;
