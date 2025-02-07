"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CurrentYearSubjectsSkeleton from "./CurrentYearSubjectsSkeleton";

// Define the subject structure based on API response
type Subject = {
  subject_id: string;
  subject_name: string;
  habe_practicals: boolean;
};

type AttendanceProps = {
  onSelectSubject: (subjectId: string, subjectName: string) => void;
};

const Attendance = ({ onSelectSubject }: AttendanceProps) => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  // Function to fetch the subjects data from the API
  const fetchSubjects = async () => {
    try {
      const userSession = JSON.parse(sessionStorage.getItem("userSession") || "{}");

      const response = await fetch(
        `/api/student/${userSession.id}/current-sem-subjects`
      );
      const data = await response.json();

      if (data.success) {
        setSubjects(data.current_year_subjects);
      } else {
        toast.error("Failed to fetch subjects.");
      }
    } catch (error) {
      toast.error("Error fetching data from the server.");
    } finally {
      setLoading(false); // Data fetching is done, stop loading
    }
  };

  useEffect(() => {
    fetchSubjects();
  }, []);

  // If data is loading, show skeleton
  if (loading) {
    return <CurrentYearSubjectsSkeleton />;
  }

  return (
    <div className="container mx-auto bg-gradient-to-br from-blue-500 to-purple-200 text-white overflow-scroll p-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 text-center">
        Current Year Subjects
      </h1>

      {/* Background applied here */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="min-w-full border-t border-blue-200">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="border-t border-blue-200 px-4 py-3">Subject Code</th>
              <th className="border-t border-blue-200 px-4 py-3">Subject Name</th>
              <th className="border-t border-blue-200 px-4 py-3">Th/Pr</th>
              <th className="border-t border-blue-200 px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr
                key={subject.subject_id}
                className={`text-gray-900 ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-200 transition-colors`}
              >
                <td className="border-t border-blue-200 px-4 py-2">
                  {subject.subject_id}
                </td>
                <td className="border-t border-blue-200 px-4 py-2">
                  {subject.subject_name}
                </td>
                <td className="border-t border-blue-200 px-4 py-2">
                  {subject.habe_practicals ? "PR" : "TH"}
                </td>
                <td className="border-t border-blue-200 px-4 py-2">
                  <button
                    className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded shadow transition-transform transform hover:scale-105"
                    onClick={() =>
                      onSelectSubject(subject.subject_id, subject.subject_name)
                    }
                  >
                    Select
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
