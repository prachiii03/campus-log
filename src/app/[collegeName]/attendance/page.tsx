"use client";
import React, { useState } from "react";
import StudentInfo from "./StudentInformation";
import CurrentYearSubjects from "./CurrentYearSubjects";
import SubjectWiseAttendance from "./SubjectWiseAttendance";
import YearWiseAttendance from "./YearWiseAttendance";

const DashboardPage = () => {
  const [selectedSubject, setSelectedSubject] = useState<{ subjectId: string; subjectName: string } | null>(null);

  return (
    <div className="grid grid-rows-3 h-screen p-8 bg-blue-50 gap-2 mt-12 ml-12">
      {/* 1/3rd height for this section */}
      <div className="grid grid-cols-2 row-span-1 gap-2">
        {/* Top-left: Student Info */}
        <div className="rounded-lg">
          <StudentInfo />
        </div>

        {/* Top-right: Year Wise Attendance */}
        <div className="bg-white shadow-lg rounded-lg">
          <YearWiseAttendance />
        </div>
      </div>

      {/* 2/3rd height for this section */}
      <div className="grid grid-cols-3 row-span-2 gap-2">
        {/* Bottom-left: Current Year Subjects */}
        <div className="bg-white shadow-lg rounded-lg col-span-1">
          <CurrentYearSubjects onSelectSubject={(subjectId, subjectName) => setSelectedSubject({ subjectId, subjectName })} />
        </div>

        {/* Bottom-right: Subject Wise Attendance */}
        <div className="bg-white shadow-lg rounded-lg col-span-2">
          {selectedSubject ? (
            <SubjectWiseAttendance subjectId={selectedSubject.subjectId} subjectName={selectedSubject.subjectName} />
          ) : (
            <p className="text-gray-600 text-center">Please select a subject to view attendance.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
