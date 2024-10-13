"use client";

import facultyProtectRoute from "@/app/(components)/utils/protect-route/FacultyProtectRoute";
import React, { useEffect, useState } from "react";
import { FaUserGraduate } from "react-icons/fa";

type Faculty = {
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
  subjects: string[]; // Consider whether you need this field.
  subject: Array<{
    subject_id: string;
    subject_name: string;
  }>; // Change from [ ... ] to Array<...> for flexibility.
};

const FacultyProfile: React.FC = () => {

  const [faculty, setFaculty] = useState<Faculty>({
    faculty_id: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    gender: "",
    highest_education: "",
    address: "",
    email: "",
    contact_no: "",
    username: "",
    department_id: "",
    subjects: [""],
    subject: [
      {
        subject_id: "",
        subject_name: "",
      },
    ],
  });

  const [image, setImage] = useState<string | null>(null);

  // Load data from session storage on component mount
  useEffect(() => {
    const storedFaculty = sessionStorage.getItem("facultySession");
    if (storedFaculty) {
      const parsedFaculty = JSON.parse(storedFaculty);
      setFaculty(parsedFaculty);
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFaculty({
      ...faculty,
      [e.target.name]: e.target.value,
    });
  };

  const handleTakePhoto = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        
        const video = document.createElement("video");
        video.srcObject = stream;
        video.play();
  
        // Create a video container to manage it more effectively
        const videoContainer = document.createElement("div");
        videoContainer.id = "videoContainer";
        videoContainer.appendChild(video);
        document.body.appendChild(videoContainer); // Add to the DOM
  
        // Handle stop stream on component unmount or when video stops
        const stopStream = () => {
          stream.getTracks().forEach(track => track.stop()); // Stop camera stream
          if (videoContainer && videoContainer.parentNode) {
            videoContainer.parentNode.removeChild(videoContainer); // Safely remove the video
          }
        };
  
        video.addEventListener('ended', stopStream);
  
        // You could add a manual stop button if needed
        setTimeout(() => {
          stopStream();
        }, 5000); // Auto-stop the video after 5 seconds (example)
  
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    } else {
      alert("Camera not supported on this device.");
    }
  };
  

  const handleUploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start ml-[20%] mr-[5%] mt-[5%]">
      <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg p-10 border border-blue-500">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-gray-800 border-b-4 border-blue-500 pb-2">
          My Profile
        </h1>

        {/* Profile photo section */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative w-40 h-40 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white transform transition-transform duration-300 hover:scale-105">
            {image ? (
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
              />
            ) : (
              <FaUserGraduate className="text-white text-6xl z-10" />
            )}
            <div className="absolute inset-0 rounded-full bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          <div className="flex space-x-4 mt-4 bg-white rounded-lg">
            <label
              htmlFor="upload-image"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer flex items-center justify-center"
            >
              Upload Image
            </label>
            <input
              id="upload-image"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleUploadImage}
            />

            <button
              onClick={handleTakePhoto}
              className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center justify-center"
            >
              Take Photo
            </button>
          </div>
        </div>

        {/* Faculty details section */}
        <div className="p-6 bg-blue-50 rounded-lg shadow-lg">
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                label: "Faculty ID",
                name: "faculty_id",
                value: faculty.faculty_id,
              },
              {
                label: "First Name",
                name: "first_name",
                value: faculty.first_name,
              },
              {
                label: "Middle Name",
                name: "middle_name",
                value: faculty.middle_name || "",
              },
              {
                label: "Last Name",
                name: "last_name",
                value: faculty.last_name,
              },
              { label: "Gender", name: "gender", value: faculty.gender },
              {
                label: "Highest Education",
                name: "highest_education",
                value: faculty.highest_education,
              },
              { label: "Address", name: "address", value: faculty.address },
              { label: "Email", name: "email", value: faculty.email },
              {
                label: "Contact No",
                name: "contact_no",
                value: faculty.contact_no || "",
              },
              { label: "Username", name: "username", value: faculty.username },
              {
                label: "Department ID",
                name: "department_id",
                value: faculty.department_id,
              },
            ].map((field, index) => (
              <div key={index}>
                <label className="block text-lg font-medium text-gray-700">
                  {field.label}:
                </label>
                <input
                  type="text"
                  name={field.name}
                  className="mt-2 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  value={field.value}
                  onChange={handleInputChange}
                />
              </div>
            ))}

            <div className="col-span-3">
              <label className="block text-lg font-medium text-gray-700">
                Subjects:
              </label>
              <textarea
                name="subjects"
                className="mt-2 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                value={faculty.subject
                  .map((sub) => sub.subject_name)
                  .join(", ")} // Join subject names into a string
                onChange={(e) => {
                  // Convert textarea input back to array of objects for subjects
                  const subjectNames = e.target.value.split(", "); // Split input into array
                  const updatedSubjects = subjectNames.map(
                    (subject_name, index) => ({
                      subject_id:
                        faculty.subject[index]?.subject_id || `new-id-${index}`, // Retain existing IDs or create new ones
                      subject_name,
                    })
                  );

                  // Update the state, ensuring it's an array with the correct type
                  setFaculty((prev) => ({ ...prev, subject: updatedSubjects }));
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default facultyProtectRoute(FacultyProfile);
