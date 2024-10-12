// "use client";
// import User from "@/../public/assets/user-logo.png";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import SkeletonLoader from "./StudentDetailsSkeleton";

// interface StudentDetailsProps {
//   id: string;
// }

// interface Address {
//   city: string;
//   state: string;
//   country: string;
// }

// interface Department {
//   department_name: string;
// }

// interface StudentInformation {
//   student_id: string;
//   first_name: string;
//   middle_name: string | null;
//   last_name: string;
//   prn_no: string;
//   email: string;
//   username: string;
//   department_id: string;
//   current_studing_year: string;
//   current_studing_semester: string;
//   guardian_name: string;
//   category: string;
//   blood_group: string;
//   adhar_card_no: string;
//   guardian_contact_no: string;
//   profile_pic: string | null;
//   address: Address;
//   department: Department;
//   gender: string;
//   studentDateOfBirth: string;
//   guardianEmail: string;
//   guardianDateOfBirth: string;
//   guardianRelation: string;
// }

// const Student_Details: React.FC<StudentDetailsProps> = ({ id }) => {
//   const [studentInfo, setStudentInfo] = useState<StudentInformation | null>(null);
//   const userSession = JSON.parse(sessionStorage.getItem("userSession") || "{}");
//   const studentId = userSession.id;

//   const [loading, setLoading] = useState(true);

//   // Fetch student data on mount
//   const fetchStudentData = async () => {
//     try {
//       const response = await fetch(`/api/student/${studentId}/get-student-information`);
//       if (!response.ok) {
//         throw new Error("Failed to fetch student data");
//       }
//       const res = await response.json();
//       setStudentInfo(res.studentInfo);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching student data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchStudentData();
//   }, [studentId]);

//   // Update student information when the form is submitted
//   const handleUpdate = async () => {
//     try {
//         console.log({studentInfo})
//       const response = await fetch(
//         `/api/student/${studentId}/update-student-information`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(studentInfo),
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Failed to update student information");
//       }
//       const res = await response.json();
//       console.log("Update successful:", res);
//     } catch (error) {
//       console.error("Error updating student data:", error);
//     }
//   };

//   // Handle form input changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setStudentInfo((prevInfo) => ({
//       ...prevInfo!,
//       [name]: value,
//     }));
//   };

//   const getField = (field: string | null | undefined) =>
//     field ? field : "Not Available";

//   if (loading) {
//     return <SkeletonLoader />;
//   }

//   return (
//     <div className="container mx-auto border p-8 md:mt-20 sm:-mt-12 mb-5 align-middle">
//       <h1 className="text-2xl font-bold text-center mb-6">My Profile</h1>

//       {/* Student Info */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 border p-10 rounded bg-gray-300">
//         <div className="flex justify-center items-center">
//           <Image src={User} alt="Student" className="w-40 h-40 rounded" />
//         </div>
//         <div className="flex flex-col justify-center items-center">
//           <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2">
//             Upload Image
//           </button>
//           <button className="bg-green-500 text-white px-4 py-2 rounded">
//             Take Photo
//           </button>
//         </div>
//         <div className="flex flex-col">
//           <label className="mb-2">Student Name:</label>
//           <input
//             type="text"
//             className="p-2 border rounded mb-2"
//             name="first_name"
//             value={`${studentInfo?.first_name} ${studentInfo?.last_name}`}
//             onChange={handleChange}
//           />
//           <label className="mb-2">Email ID:</label>
//           <input
//             type="email"
//             className="p-2 border rounded mb-2"
//             name="email"
//             value={getField(studentInfo?.email)}
//             onChange={handleChange}
//           />
//           <label className="mb-2">PRN No:</label>
//           <input
//             type="text"
//             className="p-2 border rounded mb-2"
//             name="prn_no"
//             value={getField(studentInfo?.prn_no)}
//             onChange={handleChange}
//           />
//         </div>
//       </div>

//       {/* Additional Student Information */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 mb-6 border bg-gray-300">
//         <div>
//           <label className="mb-2">Category:</label>
//           <input
//             type="text"
//             className="p-2 border rounded mb-2 w-full"
//             name="category"
//             value={getField(studentInfo?.category)}
//             onChange={handleChange}
//           />
//           <label className="mb-2">Blood Group:</label>
//           <input
//             type="text"
//             className="p-2 border rounded mb-2 w-full"
//             name="blood_group"
//             value={getField(studentInfo?.blood_group)}
//             onChange={handleChange}
//           />
//           <label className="mb-2">DOB:</label>
//           <input
//             type="text"
//             className="p-2 border rounded mb-2 w-full"
//             name="studentDateOfBirth"
//             value={getField(studentInfo?.studentDateOfBirth)}
//             onChange={handleChange}
//           />
//           <label className="mb-2">Gender:</label>
//           <input
//             type="text"
//             className="p-2 border rounded mb-2 w-full"
//             name="gender"
//             value={getField(studentInfo?.gender)}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label className="mb-2">Aadhar Card No:</label>
//           <input
//             type="text"
//             className="p-2 border rounded mb-2 w-full"
//             name="adhar_card_no"
//             value={getField(studentInfo?.adhar_card_no)}
//             onChange={handleChange}
//           />
//           <label className="mb-2">Guardian Contact No:</label>
//           <input
//             type="text"
//             className="p-2 border rounded mb-2 w-full"
//             name="guardian_contact_no"
//             value={getField(studentInfo?.guardian_contact_no)}
//             onChange={handleChange}
//           />
//         </div>
//       </div>

//       {/* Guardian Information */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 border p-10 bg-gray-300">
//         <div>
//           <label className="mb-2">Guardian Name:</label>
//           <input
//             type="text"
//             className="p-2 border rounded mb-2 w-full"
//             name="guardian_name"
//             value={getField(studentInfo?.guardian_name)}
//             onChange={handleChange}
//           />
//           <label className="mb-2">Relation:</label>
//           <input
//             type="text"
//             className="p-2 border rounded mb-2 w-full"
//             name="guardianRelation"
//             value={getField(studentInfo?.guardianRelation)}
//             onChange={handleChange}
//           />
//           <label className="mb-2">Guardian DOB:</label>
//           <input
//             type="text"
//             className="p-2 border rounded mb-2 w-full"
//             name="guardianDateOfBirth"
//             value={getField(studentInfo?.guardianDateOfBirth)}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label className="mb-2">Guardian Mobile No:</label>
//           <input
//             type="tel"
//             className="p-2 border rounded mb-2 w-full"
//             name="guardian_contact_no"
//             value={getField(studentInfo?.guardian_contact_no)}
//             onChange={handleChange}
//           />
//           <label className="mb-2">Guardian Email:</label>
//           <input
//             type="email"
//             className="p-2 border rounded mb-2 w-full"
//             name="guardianEmail"
//             value={getField(studentInfo?.guardianEmail)}
//             onChange={handleChange}
//           />
//         </div>
//       </div>

//       {/* Address Information */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 mb-6 border bg-gray-300">
//         <div>
//           <label className="mb-2">City:</label>
//           <input
//             type="text"
//             className="p-2 border rounded mb-2 w-full"
//             name="city"
//             value={studentInfo?.address?.city || ""}
//             // onChange={(e) =>
//             //   setStudentInfo({
//             //     ...studentInfo!,
//             //     address: { ...studentInfo?.address, city: e.target.value },
//             //   })
//             // }
//           />
//           <label className="mb-2">State:</label>
//           <input
//             type="text"
//             className="p-2 border rounded mb-2 w-full"
//             name="state"
//             value={studentInfo?.address?.state || ""}
//             // onChange={(e) =>
//             //   setStudentInfo({
//             //     ...studentInfo!,
//             //     address: { ...studentInfo?.address, state: e.target.value },
//             //   })
//             // }
//           />
//           <label className="mb-2">Country:</label>
//           <input
//             type="text"
//             className="p-2 border rounded mb-2 w-full"
//             name="country"
//             value={studentInfo?.address?.country || ""}
//             // onChange={(e) =>
//             //   setStudentInfo({
//             //     ...studentInfo!,
//             //     address: { ...studentInfo?.address, country: e.target.value },
//             //   })
//             // }
//           />
//         </div>
//       </div>

//       <div className="flex justify-center">
//         <button
//           className="bg-blue-500 text-white px-6 py-2 rounded"
//           onClick={handleUpdate}
//         >
//           Update Profile
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Student_Details;




"use client";
import User from "@/../public/assets/user-logo.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SkeletonLoader from "./StudentDetailsSkeleton";
import { toast, ToastContainer } from "react-toastify";

interface StudentDetailsProps {
  id: string;
}

interface Address {
  city: string;
  state: string;
  country: string;
}

interface Department {
  department_name: string;
}

interface StudentInformation {
  student_id: string;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  prn_no: string;
  email: string;
  username: string;
  department_id: string;
  current_studing_year: string;
  current_studing_semester: string;
  guardian_name: string;
  category: string;
  blood_group: string;
  adhar_card_no: string;
  guardian_contact_no: string;
  profile_pic: string | null;
  address: Address;
  department: Department;
  gender: string;
  studentDateOfBirth: string;
  guardianEmail: string;
  guardianDateOfBirth: string;
  guardianRelation: string;
}

const Student_Details: React.FC<StudentDetailsProps> = ({ id }) => {
  const [studentInfo, setStudentInfo] = useState<StudentInformation | null>(null);
  const userSession = JSON.parse(sessionStorage.getItem("userSession") || "{}");
  const studentId = userSession.id;

  const [loading, setLoading] = useState(true);

  // Fetch student data on mount
  const fetchStudentData = async () => {
    try {
      const response = await fetch(`/api/student/${studentId}/get-student-information`);
      if (!response.ok) {
        throw new Error("Failed to fetch student data");
      }
      const res = await response.json();
      setStudentInfo(res.studentInfo);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, [studentId]);

  // Update student information when the form is submitted
  const handleUpdate = async () => {
    try {
      console.log({ studentInfo });
      const toastId = toast.loading("Updating your information");
      
      const response = await fetch(
        `/api/student/${studentId}/update-student-information`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(studentInfo),
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to update student information");
      }
  
      const res = await response.json();
      console.log("Update successful:", res);
      toast.dismiss(toastId)
      toast.success("Information update successfully...")
    } catch (error) {
      console.error("Error updating student data:", error);
    }
  };
  

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudentInfo((prevInfo) => ({
      ...prevInfo!,
      [name]: value,
    }));
  };

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="container mx-auto border p-8 md:mt-20 sm:-mt-12 mb-5 align-middle">
      <ToastContainer />
      <h1 className="text-2xl font-bold text-center mb-6">My Profile</h1>

      {/* Student Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 border p-10 rounded bg-gray-300">
        <div className="flex justify-center items-center">
          <Image src={User} alt="Student" className="w-40 h-40 rounded" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2">
            Upload Image
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Take Photo
          </button>
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Student Name:</label>
          <input
            type="text"
            className="p-2 border rounded mb-2 text-center"
            name="first_name"
            value={`${studentInfo?.first_name.toLocaleUpperCase()} ${studentInfo?.middle_name?.toLocaleUpperCase()} ${studentInfo?.last_name.toLocaleUpperCase()}` || ""}
            placeholder="Not Available"
            onChange={handleChange}
          />
          <label className="mb-2">Email ID:</label>
          <input
            type="email"
            className="p-2 border rounded mb-2"
            name="email"
            value={studentInfo?.email || ""}
            placeholder="Not Available"
            onChange={handleChange}
          />
          <label className="mb-2">PRN No:</label>
          <input
            type="text"
            className="p-2 border rounded mb-2"
            name="prn_no"
            value={studentInfo?.prn_no || ""}
            placeholder="Not Available"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Additional Student Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 mb-6 border bg-gray-300">
        <div>
          <label className="mb-2">Category:</label>
          <input
            type="text"
            className="p-2 border rounded mb-2 w-full"
            name="category"
            value={studentInfo?.category || ""}
            placeholder="Not Available"
            onChange={handleChange}
          />
          <label className="mb-2">Blood Group:</label>
          <input
            type="text"
            className="p-2 border rounded mb-2 w-full"
            name="blood_group"
            value={studentInfo?.blood_group || ""}
            placeholder="Not Available"
            onChange={handleChange}
          />
         <label className="mb-2">DOB:</label>
<input
  type="date"
  className="p-2 border rounded mb-2 w-full"
  name="studentDateOfBirth"
  value={studentInfo?.studentDateOfBirth
    ? new Date(studentInfo.studentDateOfBirth).toISOString().substring(0, 10)
    : ""}
  placeholder="Not Available"
  onChange={handleChange}
/>

          <label className="mb-2">Gender:</label>
          <input
            type="text"
            className="p-2 border rounded mb-2 w-full"
            name="gender"
            value={studentInfo?.gender || ""}
            placeholder="Not Available"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="mb-2">Aadhar Card No:</label>
          <input
            type="text"
            className="p-2 border rounded mb-2 w-full"
            name="adhar_card_no"
            value={studentInfo?.adhar_card_no || ""}
            placeholder="Not Available"
            onChange={handleChange}
          />
          <label className="mb-2">Guardian Contact No:</label>
          <input
            type="text"
            className="p-2 border rounded mb-2 w-full"
            name="guardian_contact_no"
            value={studentInfo?.guardian_contact_no || ""}
            placeholder="Not Available"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Guardian Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 border p-10 bg-gray-300">
        <div>
          <label className="mb-2">Guardian Name:</label>
          <input
            type="text"
            className="p-2 border rounded mb-2 w-full"
            name="guardian_name"
            value={studentInfo?.guardian_name || ""}
            placeholder="Not Available"
            onChange={handleChange}
          />
          <label className="mb-2">Relation:</label>
          <input
            type="text"
            className="p-2 border rounded mb-2 w-full"
            name="guardianRelation"
            value={studentInfo?.guardianRelation || ""}
            placeholder="Not Available"
            onChange={handleChange}
          />
          <label className="mb-2">Guardian DOB:</label>
          <input
            type="text"
            className="p-2 border rounded mb-2 w-full"
            name="guardianDateOfBirth"
            value={studentInfo?.guardianDateOfBirth || ""}
            placeholder="Not Available"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="mb-2">Guardian Mobile No:</label>
          <input
            type="tel"
            className="p-2 border rounded mb-2 w-full"
            name="guardian_contact_no"
            value={studentInfo?.guardian_contact_no || ""}
            placeholder="Not Available"
            onChange={handleChange}
          />
          <label className="mb-2">Guardian Email:</label>
          <input
            type="email"
            className="p-2 border rounded mb-2 w-full"
            name="guardianEmail"
            value={studentInfo?.guardianEmail || ""}
            placeholder="Not Available"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="text-center">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleUpdate}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Student_Details;
