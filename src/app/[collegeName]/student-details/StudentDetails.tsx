"use client";
import User from '@/../public/assets/user-logo.png';
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import SkeletonLoader from './StudentDetailsSkeleton';

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
    const [loading, setLoading] = useState(true);

    // Fetching the student data
    const fetchStudentData = async () => {
        try {
            const response = await fetch(`/api/student/${id}/get-student-information`);
            if (!response.ok) {
                throw new Error('Failed to fetch student data');
            }
            const res = await response.json();
            const data: StudentInformation = res.studentInfo;
            console.log(data);
            setStudentInfo(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching student data:", error);
        }
    };

    useEffect(() => {
        fetchStudentData();
    }, [id]);

    if (loading) {
        return <SkeletonLoader />;
    }

    const getField = (field: string | null | undefined) => field ? field : 'Not Available';

    return (
        <div className="container mx-auto border p-8 md:mt-20 sm:-mt-12 mb-5 align-middle">
            <h1 className="text-2xl font-bold text-center mb-6">My Profile</h1>

            {/* Student Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 border p-10 rounded bg-gray-300">
                <div className="flex justify-center items-center">
                    <Image src={User} alt="Student" className="w-40 h-40 rounded" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2">Upload Image</button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded">Take Photo</button>
                </div>
                <div className="flex flex-col">
                    <label className="mb-2">Student Name:</label>
                    <input type="text" className="p-2 border rounded mb-2" value={getField(`${studentInfo?.first_name} ${studentInfo?.last_name}`)} readOnly />
                    <label className="mb-2">Email ID:</label>
                    <input type="email" className="p-2 border rounded mb-2" value={getField(studentInfo?.email)} readOnly />
                    <label className="mb-2">PRN No:</label>
                    <input type="text" className="p-2 border rounded mb-2" value={getField(studentInfo?.prn_no)} readOnly />
                </div>
            </div>

            {/* Additional Student Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 mb-6 border bg-gray-300">
                <div>
                    <label className="mb-2">Category:</label>
                    <input type="text" className="p-2 border rounded mb-2 w-full" value={getField(studentInfo?.category)} readOnly />
                    <label className="mb-2">Blood Group:</label>
                    <input type="text" className="p-2 border rounded mb-2 w-full" value={getField(studentInfo?.blood_group)} readOnly />
                    <label className="mb-2">DOB:</label>
                    <input type="text" className="p-2 border rounded mb-2 w-full" value={getField(studentInfo?.studentDateOfBirth)} readOnly />
                    <label className="mb-2">Gender:</label>
                    <input type="text" className="p-2 border rounded mb-2 w-full" value={getField(studentInfo?.gender)} readOnly />
                </div>
                <div>
                    <label className="mb-2">Aadhar Card No:</label>
                    <input type="text" className="p-2 border rounded mb-2 w-full" value={getField(studentInfo?.adhar_card_no)} readOnly />
                    <label className="mb-2">Guardian Contact No:</label>
                    <input type="text" className="p-2 border rounded mb-2 w-full" value={getField(studentInfo?.guardian_contact_no)} readOnly />
                </div>
            </div>

            {/* Guardian Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 border p-10 bg-gray-300">
                <div>
                    <label className="mb-2">Guardian Name:</label>
                    <input type="text" className="p-2 border rounded mb-2 w-full" value={getField(studentInfo?.guardian_name)} readOnly />
                    <label className="mb-2">Relation:</label>
                    <input type="text" className="p-2 border rounded mb-2 w-full" value={getField(studentInfo?.guardianRelation)} readOnly />
                    <label className="mb-2">Guardian DOB:</label>
                    <input type="text" className="p-2 border rounded mb-2 w-full" value={getField(studentInfo?.guardianDateOfBirth)} readOnly />
                </div>
                <div>
                    <label className="mb-2">Guardian Mobile No:</label>
                    <input type="tel" className="p-2 border rounded mb-2 w-full" value={getField(studentInfo?.guardian_contact_no)} readOnly />
                    <label className="mb-2">Guardian Email:</label>
                    <input type="email" className="p-2 border rounded mb-2 w-full" value={getField(studentInfo?.guardianEmail)} readOnly />
                </div>
            </div>

            {/* Address Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 border p-10 bg-gray-300">
                <div>
                    <h2 className="font-bold mb-2">Current Address</h2>
                    <label className="mb-2">City:</label>
                    <input type="text" className="p-2 border rounded mb-2 w-full" value={getField(studentInfo?.address?.city)} readOnly />
                    <label className="mb-2">State:</label>
                    <input type="text" className="p-2 border rounded mb-2 w-full" value={getField(studentInfo?.address?.state)} readOnly />
                    <label className="mb-2">Country:</label>
                    <input type="text" className="p-2 border rounded mb-2 w-full" value={getField(studentInfo?.address?.country)} readOnly />
                </div>
                <div>
                    <h2 className="font-bold mb-2">Permanent Address</h2>
                    <label className="mb-2">City:</label>
                    <input type="text" className="p-2 border rounded mb-2 w-full" value={getField(studentInfo?.address?.city)} readOnly />
                    <label className="mb-2">State:</label>
                    <input type="text" className="p-2 border rounded mb-2 w-full" value={getField(studentInfo?.address?.state)} readOnly />
                    <label className="mb-2">Country:</label>
                    <input type="text" className="p-2 border rounded mb-2 w-full" value={getField(studentInfo?.address?.country)} readOnly />
                </div>
            </div>

            <div className="text-center">
                <button className="bg-indigo-500 text-white px-6 py-2 rounded">Update</button>
            </div>
        </div>
    );
};

export default Student_Details;
