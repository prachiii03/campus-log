"use client";

import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface StudentInfo {
  name: string;
  prn: string;
  class: string;
  department: string;
}

const StudentInfo = () => {
  const [studentInfo, setStudentInfo] = useState<StudentInfo | null>(null);

  useEffect(() => {
    getStudentInfo();
  }, []);

  const getStudentInfo = async () => {
    const session = await getSession(); // Use getSession for client-side fetching of the session
    if (session) {
      console.log(session.user.id);

      const response = await fetch(
        `http://localhost:3000/api/student/04766c58-d0b1-4786-a9a0-3f3d8594b88d/get-student-information`
      );
      const res = await response.json();

      if (res.studentInfo) {
        const studentData = res.studentInfo;
        console.log({studentData})

        const mappedStudentInfo: StudentInfo = {
          name: `${studentData.first_name} ${studentData.last_name}`,
          prn: studentData.prn_no,
          class: studentData.current_studing_semester || "N/A", 
          department: studentData.department_name || "N/A", 
        };

        setStudentInfo(mappedStudentInfo);
        console.log(mappedStudentInfo);
      }
    } else {
      console.log("No session found");
    }
  };

  return (
    <div className="shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <div className="mb-4 flex flow-row justify-between">
        <label className="block font-medium text-gray-700">Academic Year:</label>
        <p className="text-gray-600">2023-2024</p>
      </div>

      <div className="mb-4 flex flow-row justify-between">
        <label className="block font-medium text-gray-700">Name:</label>
        <p className="text-gray-600">{studentInfo ? studentInfo.name : "John Doe"}</p>
      </div>

      <div className="mb-4 flex flow-row justify-between">
        <label className="block font-medium text-gray-700">PRN:</label>
        <p className="text-gray-600">{studentInfo ? studentInfo.prn : "N/A"}</p>
      </div>

      <div className="mb-4 flex flow-row justify-between">
        <label className="block font-medium text-gray-700">Class:</label>
        <p className="text-gray-600">{studentInfo ? studentInfo.class : "N/A"}</p>
      </div>

      <div className="mb-4 flex flow-row justify-between">
        <label className="block font-medium text-gray-700">Department:</label>
        <p className="text-gray-600">{studentInfo ? studentInfo.department : "N/A"}</p>
      </div>
    </div>
  );
};

export default StudentInfo;
