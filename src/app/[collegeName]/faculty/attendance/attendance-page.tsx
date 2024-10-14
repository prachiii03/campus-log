"use client";
import { FormEvent, useEffect, useState } from 'react';
import AttendanceSkeleton from './attendanceSkeleton';
import facultyProtectRoute from '@/app/(components)/utils/protect-route/FacultyProtectRoute';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from "next/navigation";
import { useCollege } from '@/context/college-name-provider/CollegeNameProvider';
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

const AttendancePage:React.FC = ()=> {
  const {collegeName} = useCollege();
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

  const [semesters, setSemesters] = useState<SemesterSubjects[]>([]); 
  const [students, setStudents] = useState<Student[]>([]); 
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSubjectId, setSelectedSubjectId] = useState(''); // Store selected subject ID
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(true);

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

    console.log('Attendance data:', attendanceData);

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
        router.push(`${collegeName}/faculty`);
            router.refresh();
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
    <div className="space-y-6 py-16 px-10 lg:pl-28 mt-6 sm:pl-24 bg-white h-screen">
      {/* Faculty Information */}
      <div className="w-full lg:w-2/3 bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-center mx-auto mt-2">
        <img src="/images/testimonials/author-02.png" alt="Faculty Photo" className="w-40 h-40 rounded-full shadow-md" />
        <div className="mt-6 md:mt-0 md:ml-8 text-black text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-2 text-blue-700">
            {faculty.first_name} {faculty.last_name}
          </h2>
          <p className="text-gray-700 mb-1">Faculty ID: <span className="font-medium">{faculty.faculty_id}</span></p>
          <p className="text-gray-700 mb-1">Designation: <span className="font-medium">Professor</span></p>
          <p className="text-gray-700 mb-1">Email: <a href={`mailto:${faculty.email}`} className="text-blue-500 hover:underline">{faculty.email}</a></p>
          <p className="text-gray-700">Contact No: <span className="font-medium">{faculty.contact_no}</span></p>
        </div>
      </div>

      {/* Dropdowns and Inputs */}
      <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Semester Dropdown */}
        <div>
          <label className="block mb-2">Select Semester</label>
          <select
            className="w-full p-2 border rounded-md"
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
        <div>
          <label className="block mb-2">Select Subject</label>
          <select
            className="w-full p-2 border rounded-md"
            value={selectedSubjectId} // Use subjectId as value
            onChange={handleSubjectChange}
            disabled={!selectedSemester}
          >
            <option value="">Select Subject</option>
            {filteredSubjects.map((subject) => (
              <option key={subject.subject_id} value={subject.subject_id}> {/* Use subject_id as the value */}
                {subject.subject_name}
              </option>
            ))}
          </select>
        </div>

        {/* Start Time */}
        <div>
          <label className="block mb-2">Start Time</label>
          <input
            type="time"
            className="w-full p-2 border rounded-md"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            disabled={!selectedSubjectId} // Disable if no subject selected
          />
        </div>

        {/* End Time */}
        <div>
          <label className="block mb-2">End Time</label>
          <input
            type="time"
            className="w-full p-2 border rounded-md"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            disabled={!selectedSubjectId} // Disable if no subject selected
          />
        </div>

        {/* Date */}
        <div>
          <label className="block mb-2">Date</label>
          <input
            type="date"
            className="w-full p-2 border rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            disabled={!selectedSubjectId} // Disable if no subject selected
          />
        </div>
      </div>

      {/* Student Attendance */}
      {/* Student Attendance Table or Message */}

    <div className="w-full overflow-x-auto mt-6">
        <h3 className="text-lg font-semibold mb-4">Students Attendance</h3>
        <table className="min-w-full bg-white border">
            <thead>
                <tr className="bg-gray-200 text-black">
                    <th className="p-4 border">PRN No</th>
                    <th className="p-4 border">Student Id</th>
                    <th className="p-4 border">Student Name</th>
                    <th className="p-4 border">Attendance</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr key={student.student_id} className="text-center text-black">
                        <td className="p-4 border">{student.prn_no}</td>
                        <td className="p-4 border">{student.student_id}</td>
                        <td className="p-4 border">{`${student.first_name} ${student.last_name}`}</td>
                        <td className="p-4 border">
                            <input
                                type="checkbox"
                                id={`checkbox-${student.student_id}`}
                                className='w-6 h-6'
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>



      {/* Update Attendance Button */}
      <div className="mt-6">
        <button
          onClick={handleUpdateAttendance}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 disabled:opacity-50"
          disabled={!selectedSubjectId || !date || !startTime || !endTime}
        >
          Update Attendance
        </button>
      </div>
    </div>
  );
}


export default facultyProtectRoute(AttendancePage)



