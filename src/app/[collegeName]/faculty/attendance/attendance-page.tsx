"use client";
import { FormEvent, useEffect, useState } from 'react';
import AttendanceSkeleton from './attendanceSkeleton';
import facultyProtectRoute from '@/app/(components)/utils/protect-route/FacultyProtectRoute';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from "next/navigation";
import { useCollege } from '@/context/college-name-provider/CollegeNameProvider';
import { getAllAttendenceAction } from '@/actions/attendence';

import { useRef } from "react";
import AttendanceReportTable from './AttendanceReportTable';
import MonthlyAttendanceSummary from './MonthlyAttendanceSummary';

interface Faculty {
  faculty_id: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  gender: string;
  highest_education: string;
  address: string;
  email: string;
  contact_no?: string;
  username: string;
  department_id: string;
}

interface Subject {
  subject_id: string;
  subject_name: string;
  required_hours: number;
  habe_practicals: boolean;
  faculty_id: string;
  semester: string;
}

interface Student {
  student_id: string;
  first_name: string;
  middle_name?: string;
  last_name: string;
  prn_no: string;
  email: string;
  username: string;
  department_id: string;
  current_studing_year: string;
  current_studing_semester: string;
}

interface SemesterSubjects {
  semester: string;
  subjects: Subject[];
}

interface PreviousAttendance {
  createdAt: string;
  date: string | null;
  id: string;
  lecture_start_time: string;
  lecture_end_time: string;
  semester: string;
  status: boolean;
  student_id: string;
  subject_id: string | null;
  student_details: Student
  presentCount: number | null
  absentCount: number | null


}

export interface AttendanceRow {
  prn: string;
  name: string;
  student_id: string;
  attendance: Record<string, boolean>; // date -> status
}

const AttendancePage: React.FC = () => {
  const { collegeName } = useCollege();
  const router = useRouter();
  const [faculty, setFaculty] = useState<Faculty>({
    faculty_id: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    gender: '',
    highest_education: '',
    address: '',
    email: '',
    contact_no: '',
    username: '',
    department_id: '',
  });

  const tableRef = useRef<HTMLDivElement>(null);

  const [semesters, setSemesters] = useState<SemesterSubjects[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSubjectId, setSelectedSubjectId] = useState(''); // Store selected subject ID
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(true);
  const [viewAttendance, setViewAttendance] = useState<boolean>(false)
  const [fillAttendance, setFillAttendance] = useState<boolean>(true)
  const [previousAttendance, setpreviousAttendance] = useState<PreviousAttendance[]>()
  const [filterDate, setFilterDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [statusFilter, setStatusFilter] = useState(""); // 'present' or 'absent'
  const [filteredAttendance, setFilteredAttendance] = useState<PreviousAttendance[]>([]);
  const [isFilterApplied, setIsFilterApplied] = useState<boolean>(false)


  const [attendanceData, setAttendanceData] = useState<AttendanceRow[]>([]);
  const [filteredData, setFilteredData] = useState(attendanceData);
  const [viewByMonth, setViewByMonth] = useState(false);

  const getAllSemesterAndSubjects = async () => {
    try {
      const response = await fetch(`/api/faculty/${faculty.faculty_id}/get-all-sem-and-subjects`);
      const res = await response.json();
      setSemesters(res.groupedResponse);
    } catch (error) {
      console.error('Failed to fetch semesters and subjects:', error);
    }
  };

  const getAllStudentsOfSelectedSubject = async (subjectId: string) => {
    try {
      const response = await fetch(`/api/subject/${subjectId}/get-all-students-of-this-subject`);
      const studentsOfSubjects = await response.json();
      setStudents(studentsOfSubjects);
    } catch (error) {
      console.error('Failed to fetch students:', error);
    }
  };

  // useEffect(() => {
  //   getAllAttendence();
  // }, [selectedSemester])

  const filterByDateRange = (startDate: Date, endDate: Date) => {
    const filtered: typeof attendanceData = attendanceData.map((student) => {
      const filteredAttendance: Record<string, boolean> = {};

      Object.entries(student.attendance).forEach(([date, status]) => {
        const current = new Date(date.split('/').reverse().join('-')); // "dd/mm/yyyy" → Date
        if (current >= startDate && current <= endDate) {
          filteredAttendance[date] = status;
        }
      });

      return {
        ...student,
        attendance: filteredAttendance,
      };
    }).filter((s) => Object.keys(s.attendance).length > 0); // remove students with no records

    return filtered;
  };

  // On filter button click
  const handleDateFilter = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const result = filterByDateRange(start, end);
    setFilteredData(result);
    setIsFilterApplied(true);
  };
  const getAllAttendence = async () => {
    const data = await getAllAttendenceAction(selectedSubjectId, selectedSemester)
    console.log("data in getAllAttendence : ", data)
    if (data.success && data.data && data.data.length > 0) {
      setpreviousAttendance(data.data.map((item: any) => ({
        createdAt: item.createdAt || '', // Provide default value if missing
        date: item.date || null,
        id: item.id || '',
        lecture_start_time: item.lecture_start_time || '',
        lecture_end_time: item.lecture_end_time || '',
        semester: item.semester || '',
        status: item.status || false,
        student_id: item.student_id || '',
        subject_id: item.subject_id || null,
        presentCount: null,
        absentCount: null,
        student_details: item.student_details || {} as Student,
      })));
      //setAttendanceData(data.data);

      const formattedAttendance: PreviousAttendance[] = data.data.map((item: any) => ({
        createdAt: item.createdAt || '',
        date: item.date || null,
        id: item.id || '',
        lecture_start_time: item.lecture_start_time || '',
        lecture_end_time: item.lecture_end_time || '',
        semester: item.semester || '',
        status: item.status || false,
        student_id: item.student_id || '',
        subject_id: item.subject_id || null,
        presentCount: null,
        absentCount: null,
        student_details: item.student_details || {} as Student,
      }));
      // Grouping attendance by PRN
      const grouped: Record<string, AttendanceRow> = {};

      formattedAttendance.forEach((entry) => {
        const prn = entry.student_details?.prn_no;
        const fullName = `${entry.student_details.first_name || ''} ${entry.student_details.middle_name || ''} ${entry.student_details.last_name || ''}`.trim();
        const formattedDate = entry.date ? new Date(entry.date).toLocaleDateString('en-GB') : '';

        if (!prn || !formattedDate) return;

        if (!grouped[prn]) {
          grouped[prn] = {
            prn,
            name: fullName,
            student_id: entry.student_id,
            attendance: {},
          };
        }

        grouped[prn].attendance[formattedDate] = entry.status;
      });

      setAttendanceData(Object.values(grouped));

    }
  }
  // const applyFilters = () => {
  //   if (!previousAttendance || previousAttendance.length === 0) return;

  //   let filtered = [...previousAttendance];

  //   // Filter by specific date
  //   if (filterDate) {
  //     const selectedDate = new Date(filterDate).toDateString();
  //     filtered = filtered.filter(item =>
  //       item.date && new Date(item.date).toDateString() === selectedDate
  //     );
  //   }

  //   // Filter by date range
  //   if (startDate && endDate) {
  //     const start = new Date(startDate);
  //     const end = new Date(endDate);
  //     filtered = filtered.filter(item => {
  //       const itemDate = new Date(item.date || '');
  //       return itemDate >= start && itemDate <= end;
  //     });
  //   }

  //   // Filter by status
  //   if (statusFilter) {
  //     filtered = filtered.filter(item =>
  //       statusFilter === "present" ? item.status === true : item.status === false
  //     );
  //   }

  //   // Group and count records by student_id and date, with present/absent counts
  //   const grouped = filtered.reduce((acc: Record<string, PreviousAttendance>, curr) => {
  //     const dateKey = new Date(curr.date || '').toDateString();
  //     const key = `${curr.student_id}-${dateKey}`;

  //     if (!acc[key]) {
  //       acc[key] = {
  //         ...curr,
  //         presentCount: curr.status ? 1 : 0,
  //         absentCount: curr.status ? 0 : 1,

  //       };
  //     } else {
  //       acc[key].presentCount! += curr.status ? 1 : 0;
  //       acc[key].absentCount! += curr.status ? 0 : 1;
  //     }

  //     return acc;
  //   }, {});

  //   setFilteredAttendance(Object.values(grouped));
  //   setIsFilterApplied(true);
  // };

  // const downloadPDF = () => {
  //   if (tableRef.current) {
  //     const element = tableRef.current;

  //     import("html2pdf.js").then(module => {
  //       const html2pdf = module.default; // ✅ get the default export

  //       const opt = {
  //         margin: 0.5,
  //         filename: `attendance-report-${new Date().toISOString().split("T")[0]}.pdf`,
  //         image: { type: 'jpeg', quality: 0.98 },
  //         html2canvas: { scale: 2 },
  //         jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  //       };

  //       html2pdf().set(opt).from(element).save();
  //     });
  //   }
  // };



  useEffect(() => {
    const storedFaculty = sessionStorage.getItem('facultySession');
    if (storedFaculty) {
      const parsedFaculty = JSON.parse(storedFaculty);
      setFaculty(parsedFaculty);
    }
    getAllSemesterAndSubjects();
  }, [faculty.faculty_id]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <AttendanceSkeleton />;
  }

  const handleSemesterChange = (e: FormEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;
    setSelectedSemester(target.value);
    setSelectedSubjectId(''); // Reset subject ID when semester changes
  };

  const handleSubjectChange = async (e: FormEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLSelectElement;
    const subjectId = target.value; // Use subjectId instead of subject name

    setSelectedSubjectId(subjectId);

    if (subjectId) {
      await getAllStudentsOfSelectedSubject(subjectId); // Fetch students for the selected subject
    }
  };

  const handleUpdateAttendance = async () => {
    const attendanceData = {
      semester: selectedSemester,
      subject: selectedSubjectId, // Pass selectedSubjectId
      startTime: startTime,
      endTime: endTime,
      date: date,
      faculty_id: faculty.faculty_id,
      students: students.map((student) => ({
        student_id: student.student_id,
        prn_no: student.prn_no,
        name: `${student.first_name} ${student.last_name}`,
        isPresent: (document.getElementById(`checkbox-${student.student_id}`) as HTMLInputElement)?.checked || false,
      })),
    };

    console.log('Attendance data after filling :', attendanceData);

    try {
      const toastId = toast.loading("Updating attendance ...");
      const response = await fetch(`/api/faculty/${faculty.faculty_id}/update-attendance`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(attendanceData),
      });

      toast.dismiss(toastId)
      if (response.ok) {
        toast.success("Attendance updated successfully.");
        getAllAttendence();
        setViewAttendance(true);

        console.log('Attendance updated successfully');
      } else {
        toast.error("Oops.. Failed to update attendance.. \n Try again!");
        console.error('Failed to update attendance');
      }
    } catch (error) {
      toast.error("Internal Server Error.. Try again");
      console.error('Error updating attendance:', error);
    }
  };

  const filteredSubjects = selectedSemester
    ? semesters.find((sem) => sem.semester === selectedSemester)?.subjects || []
    : [];

  return (
    <div className="space-y-8 py-8 px-4 lg:px-8 mt-4 bg-white min-h-screen">
      {/* Faculty Information Card */}
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg ring-1 ring-black/5 flex flex-col md:flex-row items-center gap-6">
        <div className="relative">
          <img
            src="/images/testimonials/author-02.png"
            alt="Faculty Photo"
            className="w-32 h-32 rounded-full shadow-lg border-4 border-white bg-gray-100"
          />
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
        </div>
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900">
            {faculty.first_name} {faculty.last_name}
          </h2>
          <p className="text-lg text-gray-600">Professor</p>
          <div className="space-y-1 text-sm text-gray-600">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-medium">Faculty ID:</span>
              <span className="font-mono">{faculty.faculty_id}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
              </svg>
              <a href={`mailto:${faculty.email}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                {faculty.email}
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>{faculty.contact_no}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-gray-50 p-4 rounded-xl shadow-sm">
          {/* Semester Dropdown */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Semester</label>
            <select
              className="w-full pl-3 pr-8 py-2 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-lg shadow-sm"
              value={selectedSemester}
              onChange={handleSemesterChange}
            >
              <option value="">Select Semester</option>
              {semesters.map((semester) => (
                <option key={semester.semester} value={semester.semester}>
                  Semester {semester.semester}
                </option>
              ))}
            </select>
          </div>

          {/* Subject Dropdown */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Subject</label>
            <select
              className="w-full pl-3 pr-8 py-2 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-lg shadow-sm disabled:opacity-50"
              value={selectedSubjectId}
              onChange={handleSubjectChange}
              disabled={!selectedSemester}
            >
              <option value="">Select Subject</option>
              {filteredSubjects.map((subject) => (
                <option key={subject.subject_id} value={subject.subject_id}>
                  {subject.subject_name}
                </option>
              ))}
            </select>
          </div>

          {/* Time/Date Inputs */}
          {['Start Time', 'End Time', 'Date'].map((label, idx) => (
            <div className="space-y-1" key={label}>
              <label className="text-sm font-medium text-gray-700">{label}</label>
              <input
                type={idx < 2 ? 'time' : 'date'}
                className="w-full px-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent rounded-lg shadow-sm disabled:opacity-50"
                value={[startTime, endTime, date][idx]}
                onChange={(e) => [setStartTime, setEndTime, setDate][idx](e.target.value)}
                disabled={!selectedSubjectId}
              />
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => {
              setFillAttendance(true);
              setViewAttendance(false);
            }}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${fillAttendance
              ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700'
              : 'bg-white text-blue-600 ring-1 ring-blue-600 hover:bg-blue-50'
              }`}
          >
            Fill Attendance
          </button>
          <button
            onClick={() => {
              setFillAttendance(false);
              setViewAttendance(true);
              getAllAttendence();
            }}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${viewAttendance
              ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700'
              : 'bg-white text-blue-600 ring-1 ring-blue-600 hover:bg-blue-50'
              }`}
          >
            View Attendance
          </button>
        </div>

        {/* Attendance Tables */}
        {fillAttendance && !viewAttendance && (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden ring-1 ring-black/5">
            <div className="px-6 py-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Student Attendance</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {['PRN No', 'Student ID', 'Student Name', 'Attendance'].map((header) => (
                      <th
                        key={header}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {students.map((student) => (
                    <tr key={student.student_id}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{student.prn_no}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{student.student_id}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{`${student.first_name} ${student.last_name}`}</td>
                      <td className="px-6 py-4">
                        <label className="inline-flex items-center">
                          <input
                            id={`checkbox-${student.student_id}`}
                            type="checkbox"
                            className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 transition"
                          />
                        </label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* {viewAttendance && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 ring-1 ring-black/5 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Filter Attendance</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  { label: 'Specific Date', value: filterDate, setter: setFilterDate, type: 'date' },
                  { label: 'Start Date', value: startDate, setter: setStartDate, type: 'date' },
                  { label: 'End Date', value: endDate, setter: setEndDate, type: 'date' },
                ].map((input, idx) => (
                  <div key={input.label} className="space-y-1">
                    <label className="text-sm font-medium text-gray-700">{input.label}</label>
                    <input
                      type={input.type}
                      value={input.value}
                      onChange={(e) => input.setter(e.target.value)}
                      className="w-full px-3 py-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                    />
                  </div>
                ))}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Status</label>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="w-full px-3 py-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                  >
                    <option value="">All Statuses</option>
                    <option value="present">Present</option>
                    <option value="absent">Absent</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <button
                  onClick={applyFilters}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Apply Filters
                </button>
                {previousAttendance && previousAttendance.length > 0 &&
                  <button
                    onClick={() => {
                      setFilterDate('');
                      setStartDate('');
                      setEndDate('');
                      setStatusFilter('');
                      setFilteredAttendance(previousAttendance);
                      setIsFilterApplied(false);
                    }}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Reset Filters
                  </button>
                }
                <button
                  onClick={downloadPDF}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors ml-auto"
                >
                  Download PDF
                </button>
              </div>
            </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {['PRN No', 'Student Name', 'Date', 'Status', ...(isFilterApplied ? ['Absent', 'Present'] : [])].map(
                        (header) => (
                          <th
                            key={header}
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            {header}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {(isFilterApplied ? filteredAttendance ?? [] : previousAttendance ?? []).map((student, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{student.student_details.prn_no}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{`${student.student_details.first_name} ${student.student_details.last_name}`}</td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {student.date
                            ? new Date(student.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })
                            : 'N/A'}
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${student.status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                              }`}
                          >
                            {student.status ? 'Present' : 'Absent'}
                          </span>
                        </td>
                        {isFilterApplied && (
                          <>
                            <td className="px-6 py-4 text-sm text-gray-500">{student.absentCount}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{student.presentCount}</td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div> 
          </div>
        )} */}

        {/* Update Attendance Button */}
        {fillAttendance && (
          <div className="flex justify-end">
            <button
              onClick={handleUpdateAttendance}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              disabled={!selectedSubjectId || !date || !startTime || !endTime}
            >
              Update Attendance
            </button>
          </div>
        )}

        {viewAttendance &&
          <div className="p-6 text-black bg-gray-100 min-h-screen">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Start Date</label>
                <input
                  type="date"
                  className="px-3 py-2 rounded-md border border-gray-300 bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">End Date</label>
                <input
                  type="date"
                  className="px-3 py-2 rounded-md border border-gray-300 bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1 invisible">Filter</label>
                <button
                  onClick={handleDateFilter}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 shadow"
                >
                  Apply Filter
                </button>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1 invisible">Toggle View</label>
                <button
                  onClick={() => setViewByMonth(!viewByMonth)}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 shadow"
                >
                  {viewByMonth ? "View by Date" : "View by Month"}
                </button>


              </div>
            </div>
            <button
              onClick={() => setIsFilterApplied(false)}
              className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-700 shadow"
            >
              Reset Filter
            </button>

            <h1 className="text-3xl font-bold mb-6 text-gray-800">Attendance Report</h1>
            {`isFilterApplied : ${isFilterApplied}`}
            <div className="bg-white rounded-lg shadow p-4">
              <div className="bg-white rounded-lg shadow p-4">
                {viewByMonth ? (
                  <MonthlyAttendanceSummary data={isFilterApplied ? filteredData : attendanceData} />
                ) : (
                  <AttendanceReportTable attendanceData={isFilterApplied ? filteredData : attendanceData} />
                )}
              </div>


            </div>

          </div>

        }
      </div>
    </div>
  );
}


export default facultyProtectRoute(AttendancePage)



