import React from 'react';

const SkeletonLoader: React.FC = () => {
    return (
        <div className="animate-pulse mt-16 w-full p-24">
            {/* Skeleton for the profile section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 border p-10 rounded bg-gray-300">
                <div className="flex justify-center items-center">
                    <div className="w-40 h-40 bg-gray-400 rounded"></div> {/* Skeleton for profile image */}
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-blue-400 w-32 h-10 mb-2 rounded"></div> {/* Skeleton for Upload Button */}
                    <div className="bg-green-400 w-32 h-10 rounded"></div> {/* Skeleton for Take Photo Button */}
                </div>
                <div className="flex flex-col">
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div> {/* Skeleton for Name Input */}
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div> {/* Skeleton for Email Input */}
                    <div className="bg-gray-400 h-8 rounded"></div> {/* Skeleton for Mobile No Input */}
                </div>
            </div>

            {/* Skeleton for detailed student information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 mb-6 border bg-gray-300">
                <div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div> {/* Skeleton for Full Name */}
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div> {/* Skeleton for Enroll No */}
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div> {/* Skeleton for Category */}
                </div>
                <div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div> {/* Skeleton for DOB */}
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div> {/* Skeleton for Gender */}
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div> {/* Skeleton for Aadhar No */}
                </div>
            </div>

            {/* Skeleton for parent/guardian info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 border p-10 bg-gray-300">
                <div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div> {/* Skeleton for Parent Name */}
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div> {/* Skeleton for Relation */}
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div> {/* Skeleton for Parent DOB */}
                </div>
                <div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div> {/* Skeleton for Parent Mobile No */}
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div> {/* Skeleton for Parent Email */}
                </div>
            </div>

            {/* Skeleton for address info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 border p-10 bg-gray-300">
                <div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div> {/* Skeleton for Current City */}
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div> {/* Skeleton for Current State */}
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div> {/* Skeleton for Current Country */}
                </div>
                <div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div> {/* Skeleton for Permanent City */}
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div> {/* Skeleton for Permanent State */}
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div> {/* Skeleton for Permanent Country */}
                </div>
            </div>

            {/* Skeleton for update button */}
            <div className="text-center">
                <div className="bg-indigo-400 w-32 h-10 rounded mx-auto"></div> {/* Skeleton for Update Button */}
            </div>
        </div>
    );
};

export default SkeletonLoader;