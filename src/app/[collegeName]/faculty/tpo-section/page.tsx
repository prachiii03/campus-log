'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import SkeletonFacultyTPOSection from './SkeletonFacultyTPOSection';
import { useCollege } from '@/context/college-name-provider/CollegeNameProvider';
export default function FacultyTPOSection() {
    const {collegeName} = useCollege();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a network request or delay for the skeleton loader
        const timer = setTimeout(() => {
        setIsLoading(false);
        }, 2000); // Adjust this delay as needed (2 seconds in this case)

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <SkeletonFacultyTPOSection />;
    }

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 w-96">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">TPO Section</h2>
            <p className="text-gray-600 mb-6">
            Manage company recruitment details, eligibility criteria, and more.
            </p>

            {/* Card with a button to navigate to Recruitment Form */}
            <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Add New Recruitment</h3>
            <p className="mb-4">Navigate to add company recruitment details.</p>
            <Link href={`/${collegeName}/faculty/tpo-section/add-new-company-drive`}>
                <button className="bg-white text-blue-500 px-4 py-2 rounded-md font-semibold hover:bg-blue-100 transition-colors duration-300">
                Go to Recruitment Form
                </button>
            </Link>
            </div>
        </div>
        </div>
    );
}
