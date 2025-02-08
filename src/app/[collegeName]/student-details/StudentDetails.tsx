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




// "use client";
// import User from "@/../public/assets/user-logo.png";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import SkeletonLoader from "./StudentDetailsSkeleton";
// import { toast, ToastContainer } from "react-toastify";

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
//       console.error("Error f  etching student data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchStudentData();
//   }, [studentId]);

//   // Update student information when the form is submitted
//   const handleUpdate = async () => {
//     try {
//       console.log({ studentInfo });
//       const toastId = toast.loading("Updating your information");

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
//       toast.dismiss(toastId)
//       toast.success("Information update successfully...")
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

//   if (loading) {
//     return <SkeletonLoader />;
//   }

//   return (
//     <div className="container mx-auto border p-8 md:mt-20 sm:-mt-12 mb-5 align-middle">
//       <ToastContainer />
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
//             className="p-2 border rounded mb-2 text-center"
//             name="first_name"
//             value={`${studentInfo?.first_name.toLocaleUpperCase()} ${studentInfo?.middle_name?.toLocaleUpperCase()} ${studentInfo?.last_name.toLocaleUpperCase()}` || ""}
//             placeholder="Not Available"
//             onChange={handleChange}
//           />
//           <label className="mb-2">Email ID:</label>
//           <input
//             type="email"
//             className="p-2 border rounded mb-2"
//             name="email"
//             value={studentInfo?.email || ""}
//             placeholder="Not Available"
//             onChange={handleChange}
//           />
//           <label className="mb-2">PRN No:</label>
//           <input
//             type="text"
//             className="p-2 border rounded mb-2"
//             name="prn_no"
//             value={studentInfo?.prn_no || ""}
//             placeholder="Not Available"
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
//             value={studentInfo?.category || ""}
//             placeholder="Not Available"
//             onChange={handleChange}
//           />
//           <label className="mb-2">Blood Group:</label>
//           <input
//             type="text"
//             className="p-2 border rounded mb-2 w-full"
//             name="blood_group"
//             value={studentInfo?.blood_group || ""}
//             placeholder="Not Available"
//             onChange={handleChange}
//           />
//          <label className="mb-2">DOB:</label>
// <input
//   type="date"
//   className="p-2 border rounded mb-2 w-full"
//   name="studentDateOfBirth"
//   value={studentInfo?.studentDateOfBirth
//     ? new Date(studentInfo.studentDateOfBirth).toISOString().substring(0, 10)
//     : ""}
//   placeholder="Not Available"
//   onChange={handleChange}
// />

//           <label className="mb-2">Gender:</label>
//           <input
//             type="text"
//             className="p-2 border rounded mb-2 w-full"
//             name="gender"
//             value={studentInfo?.gender || ""}
//             placeholder="Not Available"
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label className="mb-2">Aadhar Card No:</label>
//           <input
//             type="text"
//             className="p-2 border rounded mb-2 w-full"
//             name="adhar_card_no"
//             value={studentInfo?.adhar_card_no || ""}
//             placeholder="Not Available"
//             onChange={handleChange}
//           />
//           <label className="mb-2">Guardian Contact No:</label>
//           <input
//             type="text"
//             className="p-2 border rounded mb-2 w-full"
//             name="guardian_contact_no"
//             value={studentInfo?.guardian_contact_no || ""}
//             placeholder="Not Available"
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
//             value={studentInfo?.guardian_name || ""}
//             placeholder="Not Available"
//             onChange={handleChange}
//           />
//           <label className="mb-2">Relation:</label>
//           <input
//             type="text"
//             className="p-2 border rounded mb-2 w-full"
//             name="guardianRelation"
//             value={studentInfo?.guardianRelation || ""}
//             placeholder="Not Available"
//             onChange={handleChange}
//           />
//           <label className="mb-2">Guardian DOB:</label>
//           <input
//             type="text"
//             className="p-2 border rounded mb-2 w-full"
//             name="guardianDateOfBirth"
//             value={studentInfo?.guardianDateOfBirth || ""}
//             placeholder="Not Available"
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label className="mb-2">Guardian Mobile No:</label>
//           <input
//             type="tel"
//             className="p-2 border rounded mb-2 w-full"
//             name="guardian_contact_no"
//             value={studentInfo?.guardian_contact_no || ""}
//             placeholder="Not Available"
//             onChange={handleChange}
//           />
//           <label className="mb-2">Guardian Email:</label>
//           <input
//             type="email"
//             className="p-2 border rounded mb-2 w-full"
//             name="guardianEmail"
//             value={studentInfo?.guardianEmail || ""}
//             placeholder="Not Available"
//             onChange={handleChange}
//           />
//         </div>
//       </div>

//       <div className="text-center">
//         <button
//           className="bg-green-500 text-white px-4 py-2 rounded"
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
import React, { useEffect, useState, useRef } from "react";
import SkeletonLoader from "./StudentDetailsSkeleton";
import { toast, ToastContainer } from "react-toastify";

interface StudentDetailsProps {
  id: string;
}

interface Address {
  city: string;
  state: string;
  district: string;
  taluka: string;
}

interface AcademicPerformance {
  academicYear: string;
  studyYear: string;
  marksObtained: number;
  outOf: number;
  percentage: number;
  resultStatus: string;
}

interface SemesterPerformance {
  academicYear: string;
  studyYear: string;
  semester: string;
  marksObtained: number;
  outOf: number;
  percentage: number;
  resultStatus: string;
}

interface StudentInformation {
  applicationId: string;
  candidateFullName: string;
  fathersFullName: string;
  mothersFullName: string;
  dateOfBirth: string;
  gender: string;
  bloodGroup: string;
  religion: string;
  category: string;
  caste: string;
  mobileNumber: string;
  parentContactNumber: string;
  emailId: string;
  address: Address;
  motherTongue: string;
  familyIncome: string;
  ebcScholarshipMinority: string;
  prnNo: string;
  academicYear: string;
  program: string;
  course: string;
  class: string;
  sscPerformance: AcademicPerformance[];
  hscPerformance: AcademicPerformance[];
  diplomaPerformance: AcademicPerformance[];
  semesterPerformance: SemesterPerformance[];
  profilePic: string | null; // Add profilePic to the interface
}

const Student_Details: React.FC<StudentDetailsProps> = ({ id }) => {
  const [studentInfo, setStudentInfo] = useState<StudentInformation | null>(null);
  const [profilePic, setProfilePic] = useState<string | null>(null); // State for profile picture
  const fileInputRef = useRef<HTMLInputElement>(null); // Ref for file input
  const videoRef = useRef<HTMLVideoElement>(null); // Ref for video element (camera)
  const [isCameraOpen, setIsCameraOpen] = useState(false); // State to manage camera visibility
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
      setProfilePic(res.studentInfo.profilePic || User.src); // Set profile picture from API or default
      setLoading(false);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, [studentId]);

  // Handle file input change (choose image from system)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfilePic(event.target.result as string); // Set the selected image as profile picture
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Open camera for taking a photo
  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraOpen(true);
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      toast.error("Failed to access camera. Please ensure permissions are granted.");
    }
  };

  // Capture photo from camera
  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const context = canvas.getContext("2d");
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const photo = canvas.toDataURL("image/png");
        setProfilePic(photo); // Set the captured photo as profile picture
        setIsCameraOpen(false); // Close the camera
        if (videoRef.current.srcObject) {
          const stream = videoRef.current.srcObject as MediaStream;
          stream.getTracks().forEach((track) => track.stop()); // Stop the camera stream
        }
      }
    }
  };

  // Close camera without capturing
  const closeCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop()); // Stop the camera stream
    }
    setIsCameraOpen(false);
  };

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
          body: JSON.stringify({
            ...studentInfo,
            profilePic, // Include the updated profile picture
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update student information");
      }

      const res = await response.json();
      console.log("Update successful:", res);
      toast.dismiss(toastId);
      toast.success("Information updated successfully...");
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
      <h1 className="text-2xl font-bold text-center mb-6 text-black">My Profile</h1>

      {/* Student Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 border p-10 rounded bg-gray-300 text-black">
        <div className="flex justify-center items-center">
          {/* Profile Picture */}
          <div className="relative">
            <Image
              src={profilePic || User.src}
              alt="Student"
              className="w-40 h-40 rounded"
              width={160}
              height={160}
            />
            {/* Camera Icon for Upload */}
            <button
              className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full"
              onClick={() => fileInputRef.current?.click()}
            >
              📷
            </button>
            {/* Hidden File Input */}
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          {/* Upload Image Button */}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
            onClick={() => fileInputRef.current?.click()}
          >
            Upload Image
          </button>
          {/* Take Photo Button */}
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
          // onClick={openCamera}
          >
            Take Photo
          </button>
        </div>
        <div className="flex flex-col">
          <label className="mb-2">Candidate Full Name:</label>
          <input
            type="text"
            className="p-2 border rounded mb-2 bg-white"
            name="candidateFullName"
            value={studentInfo?.candidateFullName || ""}
            placeholder="Not Available"
            onChange={handleChange}
          />
          <label className="mb-2">Email ID:</label>
          <input
            type="email"
            className="p-2 border rounded mb-2 bg-white"
            name="emailId"
            value={studentInfo?.emailId || ""}
            placeholder="Not Available"
            onChange={handleChange}
          />
          <label className="mb-2">PRN No:</label>
          <input
            type="text"
            className="p-2 border rounded mb-2 bg-white"
            name="prnNo"
            value={studentInfo?.prnNo || ""}
            placeholder="Not Available"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Camera Modal */}
      {/* {isCameraOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <video ref={videoRef} autoPlay className="w-full h-auto" />
            <div className="flex justify-center gap-4 mt-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={capturePhoto}
              >
                Capture
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={closeCamera}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )} */}

      {/* Additional Student Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 mb-6 border bg-gray-300 text-black">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <label className="mb-2">Academic Year:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="academicYear"
              value={studentInfo?.academicYear || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2">Program:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="program"
              value={studentInfo?.program || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2">Course:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="course"
              value={studentInfo?.course || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2">Class:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="class"
              value={studentInfo?.class || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2">Father Full Name:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="fathersFullName"
              value={studentInfo?.fathersFullName || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2">Mother Full Name:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="mothersFullName"
              value={studentInfo?.mothersFullName || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2">Date of Birth:</label>
            <input
              type="date"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="dateOfBirth"
              value={studentInfo?.dateOfBirth || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2">Gender:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="gender"
              value={studentInfo?.gender || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2">Blood Group:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="bloodGroup"
              value={studentInfo?.bloodGroup || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2">Religion:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="religion"
              value={studentInfo?.religion || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2">Category:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="category"
              value={studentInfo?.category || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <label className="mb-2">Caste:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="caste"
              value={studentInfo?.caste || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2">Mobile Number:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="mobileNumber"
              value={studentInfo?.mobileNumber || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2">Parent Contact Number:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="parentContactNumber"
              value={studentInfo?.parentContactNumber || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2">Email ID:</label>
            <input
              type="email"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="emailId"
              value={studentInfo?.emailId || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2">Address:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="address"
              value={studentInfo?.address.city || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2">City:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="city"
              value={studentInfo?.address.city || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2">State:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="state"
              value={studentInfo?.address.state || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2">District:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="district"
              value={studentInfo?.address.district || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2">Taluka:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="taluka"
              value={studentInfo?.address.taluka || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2">Mother Tongue:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="motherTongue"
              value={studentInfo?.motherTongue || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2">Family Income:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="familyIncome"
              value={studentInfo?.familyIncome || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="mb-2">EBC/Scholarship/Minority:</label>
            <input
              type="text"
              className="p-2 border rounded mb-2 w-full bg-white"
              name="ebcScholarshipMinority"
              value={studentInfo?.ebcScholarshipMinority || ""}
              placeholder="Not Available"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* Academic Performance Table (SSC, HSC, Diploma) */}
      <div className="mb-6 border p-10 bg-gray-300 text-black">
        <h2 className="text-xl font-bold mb-4">Academic Performance (SSC, HSC, Diploma)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Sr. No.</th>
                <th className="border p-2">Academic Year</th>
                <th className="border p-2">Study Year</th>
                <th className="border p-2">Marks Obtained</th>
                <th className="border p-2">Out Of</th>
                <th className="border p-2">Percentage</th>
                <th className="border p-2">Result Status</th>
              </tr>
            </thead>
            <tbody>
              {studentInfo?.sscPerformance && studentInfo?.sscPerformance.length > 0 &&
                <>
                  {studentInfo?.sscPerformance.map((performance, index) => (
                    <tr key={index}>
                      <td className="border p-2">{index + 1}</td>
                      <td className="border p-2">{performance.academicYear}</td>
                      <td className="border p-2">{performance.studyYear}</td>
                      <td className="border p-2">{performance.marksObtained}</td>
                      <td className="border p-2">{performance.outOf}</td>
                      <td className="border p-2">{performance.percentage}</td>
                      <td className="border p-2">{performance.resultStatus}</td>
                    </tr>
                  ))}
                </>
              }
              {studentInfo?.hscPerformance && studentInfo?.hscPerformance.length > 0 &&
                <>
                  {studentInfo?.hscPerformance.map((performance, index) => (
                    <tr key={index}>
                      <td className="border p-2">{index + 1}</td>
                      <td className="border p-2">{performance.academicYear}</td>
                      <td className="border p-2">{performance.studyYear}</td>
                      <td className="border p-2">{performance.marksObtained}</td>
                      <td className="border p-2">{performance.outOf}</td>
                      <td className="border p-2">{performance.percentage}</td>
                      <td className="border p-2">{performance.resultStatus}</td>
                    </tr>
                  ))}
                </>
              }

              {studentInfo?.diplomaPerformance && studentInfo?.diplomaPerformance.length > 0 &&
                <>
                  {studentInfo?.diplomaPerformance.map((performance, index) => (
                    <tr key={index}>
                      <td className="border p-2">{index + 1}</td>
                      <td className="border p-2">{performance.academicYear}</td>
                      <td className="border p-2">{performance.studyYear}</td>
                      <td className="border p-2">{performance.marksObtained}</td>
                      <td className="border p-2">{performance.outOf}</td>
                      <td className="border p-2">{performance.percentage}</td>
                      <td className="border p-2">{performance.resultStatus}</td>
                    </tr>
                  ))}
                </>
              }
            </tbody>
          </table>
        </div>
      </div>

      {/* Semester Performance Table */}
      <div className="mb-6 border p-10 bg-gray-300 text-black">
        <h2 className="text-xl font-bold mb-4">Semester Performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Sr. No.</th>
                <th className="border p-2">Academic Year</th>
                <th className="border p-2">Study Year</th>
                <th className="border p-2">Semester</th>
                <th className="border p-2">Marks Obtained</th>
                <th className="border p-2">Out Of</th>
                <th className="border p-2">Percentage</th>
                <th className="border p-2">Result Status</th>
              </tr>
            </thead>
            <tbody>
              {studentInfo?.semesterPerformance && studentInfo?.semesterPerformance.length > 0 &&
                <>
                  {studentInfo?.semesterPerformance.map((performance, index) => (
                    <tr key={index}>
                      <td className="border p-2">{index + 1}</td>
                      <td className="border p-2">{performance.academicYear}</td>
                      <td className="border p-2">{performance.studyYear}</td>
                      <td className="border p-2">{performance.semester}</td>
                      <td className="border p-2">{performance.marksObtained}</td>
                      <td className="border p-2">{performance.outOf}</td>
                      <td className="border p-2">{performance.percentage}</td>
                      <td className="border p-2">{performance.resultStatus}</td>
                    </tr>
                  ))}
                </>
              }
            </tbody>
          </table>
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