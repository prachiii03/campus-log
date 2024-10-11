"use client";
import { useEffect, useState } from "react";

type AttendanceRecord = {
  date: string;
  time: string;
  status: string;
  type: "Theory" | "Practical";
};

const mockAttendanceData: { [key: string]: AttendanceRecord[] } = {
  C1401: [
    { date: "20/09/2024", time: "11:00 am to 12:00 pm", status: "Present", type: "Theory" },
    { date: "19/09/2024", time: "11:00 am to 12:00 pm", status: "Present", type: "Theory" },
  ],
  C4071: [
    { date: "18/09/2024", time: "10:00 am to 11:00 am", status: "Present", type: "Practical" },
  ],
  C4131: [
    { date: "12/09/2024", time: "12:45 pm to 01:45 pm", status: "Present", type: "Theory" },
  ],
};

const SubjectWiseAttendance = ({ subjectCode }: { subjectCode: string }) => {
  const [attendanceData, setAttendanceData] = useState<AttendanceRecord[]>([]);

  useEffect(() => {
    // Fetch real data from the backend instead of using mock data
    const data = mockAttendanceData[subjectCode] || [];
    setAttendanceData(data);
  }, [subjectCode]);

  return (
    <div className="p-4 ">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
        Attendance for <span className="text-blue-600">{subjectCode}</span>
      </h2>
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
        <tbody>
          {attendanceData.length > 0 ? (
            attendanceData.map((record, index) => (
              <tr key={index} className={`text-gray-900 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-200 transition-colors`}>
                <td className="border-t border-blue-200 px-4 py-3">{subjectCode}</td>
                <td className="border-t border-blue-200 px-4 py-3">{record.type}</td>
                <td className="border-t border-blue-200 px-4 py-3">{record.date}</td>
                <td className="border-t border-blue-200 px-4 py-3">{record.time}</td>
                <td className="border-t border-blue-200 px-4 py-3">{record.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="border-t border-blue-200 px-4 py-3 text-center text-gray-600">
                No attendance records available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectWiseAttendance;
