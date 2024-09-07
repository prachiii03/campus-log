"use client"
import User from '@/Logos/user-logo.png';
import Image from "next/image";
import React, { useEffect, useState } from 'react';
import SkeletonLoader from './Skeleton';

const Student_Details: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <SkeletonLoader />;
    }

    return (
        <div className="container mx-auto border p-8 md:mt-20 sm:-mt-12 mb-5 ml-16">
        <h1 className="text-2xl font-bold text-center mb-6">My Profile</h1>

        {/* First Part: Student Info */}
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
            <input type="text" className="p-2 border rounded mb-2" />
            <label className="mb-2">Email ID:</label>
            <input type="email" className="p-2 border rounded mb-2" />
            <label className="mb-2">Mobile No:</label>
            <input type="tel" className="p-2 border rounded" />
            </div>
        </div>

        {/* Second Part: Detailed Student Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 mb-6 border bg-gray-300">
            <div>
            <label className="mb-2">Full Name:</label>
            <input type="text" className="p-2 border rounded mb-2 w-full" />
            <label className="mb-2">Enroll No:</label>
            <input type="text" className="p-2 border rounded mb-2 w-full" />
            <label className="mb-2">Category:</label>
            <input type="text" className="p-2 border rounded mb-2 w-full" />
            {/* Add more fields as needed */}
            </div>
            <div>
            <label className="mb-2">DOB:</label>
            <input type="date" className="p-2 border rounded mb-2 w-full" />
            <label className="mb-2">Gender:</label>
            <input type="text" className="p-2 border rounded mb-2 w-full" />
            <label className="mb-2">Aadhar Card No:</label>
            <input type="text" className="p-2 border rounded mb-2 w-full" />
            {/* Add more fields as needed */}
            </div>
        </div>

        {/* Third Part: Parent/Guardian Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 border p-10 bg-gray-300">
            <div>
            <label className="mb-2">Parent/Guardian Name:</label>
            <input type="text" className="p-2 border rounded mb-2 w-full" />
            <label className="mb-2">Relation:</label>
            <input type="text" className="p-2 border rounded mb-2 w-full" />
            <label className="mb-2">Parent/Guardian DOB:</label>
            <input type="date" className="p-2 border rounded mb-2 w-full" />
            </div>
            <div>
            <label className="mb-2">Mobile No:</label>
            <input type="tel" className="p-2 border rounded mb-2 w-full" />
            <label className="mb-2">Email ID:</label>
            <input type="email" className="p-2 border rounded mb-2 w-full" />
            </div>
        </div>

        {/* Fourth Part: Address Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 border p-10 bg-gray-300">
            <div>
            <h2 className="font-bold mb-2">Current Address</h2>
            <label className="mb-2">City:</label>
            <input type="text" className="p-2 border rounded mb-2 w-full" />
            <label className="mb-2">State:</label>
            <input type="text" className="p-2 border rounded mb-2 w-full" />
            <label className="mb-2">Country:</label>
            <input type="text" className="p-2 border rounded mb-2 w-full" />
            </div>
            <div>
            <h2 className="font-bold mb-2">Permanent Address</h2>
            <label className="mb-2">City:</label>
            <input type="text" className="p-2 border rounded mb-2 w-full" />
            <label className="mb-2">State:</label>
            <input type="text" className="p-2 border rounded mb-2 w-full" />
            <label className="mb-2">Country:</label>
            <input type="text" className="p-2 border rounded mb-2 w-full" />
            </div>
        </div>

        {/* Update Button */}
        <div className="text-center">
            <button className="bg-indigo-500 text-white px-6 py-2 rounded">Update</button>
        </div>
        </div>
    );
};

export default Student_Details;
