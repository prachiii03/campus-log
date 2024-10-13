"use client";
import { useEffect, useState } from "react";

// Define the structure of an attendance record
type AttendanceRecord = {
  id: string;
  date: string;
  lecture_start_time: string;
  lecture_end_time: string;
  status: boolean;
  type: "Theory" | "Practical";
  subject_name: string;
  first_name: string;
};

// Define the props for SubjectWiseAttendance
interface SubjectWiseAttendanceProps {
  subjectName: string;
  subjectId: string;
}

// Skeleton component to show loading placeholders
const SkeletonLoader = () => {
  const skeletonRows = Array.from({ length: 5 }); // Render 5 skeleton rows

  return (
    <tbody>
      {skeletonRows.map((_, index) => (
        <tr
          key={index}
          className={`text-gray-900 ${
            index % 2 === 0 ? "bg-gray-50" : "bg-white"
          } hover:bg-gray-200 transition-colors`}
        >
          <td className="border-t border-blue-200 px-4 py-3">
            <div className="animate-pulse bg-gray-200 h-4 w-24 rounded"></div>
          </td>
          <td className="border-t border-blue-200 px-4 py-3">
            <div className="animate-pulse bg-gray-200 h-4 w-24 rounded"></div>
          </td>
          <td className="border-t border-blue-200 px-4 py-3">
            <div className="animate-pulse bg-gray-200 h-4 w-32 rounded"></div>
          </td>
          <td className="border-t border-blue-200 px-4 py-3">
            <div className="animate-pulse bg-gray-200 h-4 w-40 rounded"></div>
          </td>
          <td className="border-t border-blue-200 px-4 py-3">
            <div className="animate-pulse bg-gray-200 h-4 w-16 rounded"></div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const SubjectWiseAttendance: React.FC<SubjectWiseAttendanceProps> = ({
  subjectId,
  subjectName,
}) => {
  const [attendanceData, setAttendanceData] = useState<AttendanceRecord[]>([]);
  const [loading, setLoading] = useState(true); // Loading state

  const userSession = JSON.parse(sessionStorage.getItem("userSession") || "{}");

  useEffect(() => {
    const fetchAttendanceData = async () => {
      setLoading(true); // Start loading
      try {
        const response = await fetch(
          `/api/student/${userSession.id}/attendence`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              subject: subjectId, // Send subjectId in request body
            }),
          }
        );

        const data = await response.json();
        setAttendanceData(data.attendanceRecords || []); // Set fetched attendance data
      } catch (error) {
        console.error("Error fetching attendance data:", error);
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    };

    fetchAttendanceData();
  }, [subjectId]); // Fetch attendance data when subjectId changes

  return (
    <div className="p-4">
      {/* Header */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
        Attendance for <span className="text-blue-600">{subjectName}</span>
      </h2>

      {/* Attendance Table */}
      <table className="table-auto w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
        <thead className="bg-blue-200 text-white">
          <tr>
            <th className="border-t border-blue-200 px-4 py-3">Subject Code</th>
            <th className="border-t border-blue-200 px-4 py-3">Type</th>
            <th className="border-t border-blue-200 px-4 py-3">Date</th>
            <th className="border-t border-blue-200 px-4 py-3">Time</th>
            <th className="border-t border-blue-200 px-4 py-3">Status</th>
          </tr>
        </thead>
        {loading ? (
          <SkeletonLoader /> // Show skeleton while loading
        ) : (
          <tbody>
            {/* Map through attendance data */}
            {attendanceData.length > 0 ? (
              attendanceData.map((record, index) => (
                <tr
                  key={record.id}
                  className={`text-gray-900 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-200 transition-colors`}
                >
                  {/* Table row data */}
                  <td className="border-t border-blue-200 px-4 py-3">
                    {subjectId}
                  </td>
                  <td className="border-t border-blue-200 px-4 py-3">
                    {record.type}
                  </td>
                  <td className="border-t border-blue-200 px-4 py-3">
                    {new Date(record.date).toLocaleDateString()}
                  </td>
                  <td className="border-t border-blue-200 px-4 py-3">
                    {new Date(record.lecture_start_time).toLocaleTimeString()} to{" "}
                    {new Date(record.lecture_end_time).toLocaleTimeString()}
                  </td>
                  <td className="border-t border-blue-200 px-4 py-3">
                    {record.status ? "Present" : "Absent"}
                  </td>
                </tr>
              ))
            ) : (
              // Display when no attendance records are available
              <tr>
                <td colSpan={5} className="text-center p-4 text-gray-600">
                  No attendance records found for this subject.
                </td>
              </tr>
            )}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default SubjectWiseAttendance;
