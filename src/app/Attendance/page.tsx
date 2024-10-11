"use client";
import React, { useState } from "react";
import StudentInfo from "../../app/Attendance/Student_info";
import CurrentYearSubjects from "../../app/Attendance/Currentyear_subject";
import SubjectWiseAttendance from "../../app/Attendance/subjectwise_attendance";
import YearWiseAttendance from "../../app/Attendance/Yearwise_attendence";

const DashboardPage = () => {
  const [selectedSubjectCode, setSelectedSubjectCode] = useState<string | null>(null);

  return (
    <div className="grid grid-rows-2 h-fit p-8 bg-blue-50 gap-2">
    <div className="grid grid-cols-2 row-span-1 gap-2">
      {/* Top-left: Student Info */}
      <div className="rounded-lg">
        {/* <h2 className="text-lg font-semibold text-gray-800">Student Information</h2 */}
        <StudentInfo />
      </div>

      {/* Top-right: Year Wise Attendance */}
      <div className="bg-white shadow-lg rounded-lg">
        <YearWiseAttendance />
      </div>
          </div>

<div className="grid grid-cols-3 row-span-1 gap-2">

      {/* Bottom-left: Current Year Subjects */}
      <div className="bg-white shadow-lg rounded-lg col-span-1 ">
        {/* <h2 className="text-lg font-semibold text-gray-800">Current Year Subjects</h2> */}
        <CurrentYearSubjects onSelectSubject={(subjectCode) => setSelectedSubjectCode(subjectCode)} />
      </div>

      {/* Bottom-right: Subject Wise Attendance */}
      <div className="bg-white shadow-lg rounded-lg col-span-2">
        {/* <h2 className="text-lg font-semibold  text-gray-800">Subject Wise Attendance</h2> */}
        {selectedSubjectCode ? (
          <SubjectWiseAttendance subjectCode={selectedSubjectCode} />
        ) : (
          <p className="text-gray-600  text-center">Please select a subject to view attendance.</p>
        )}
      </div>
        </div>
        </div>
  );
};

export default DashboardPage;
