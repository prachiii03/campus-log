import React from 'react';

const SkeletonLoader: React.FC = () => {
    return (
        <div className="animate-pulse mt-16 w-full p-24">
            {/* Skeleton for the profile section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 border p-10 rounded bg-gray-300">
                <div className="flex justify-center items-center">
                    <div className="w-40 h-40 bg-gray-400 rounded"></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="bg-blue-400 w-32 h-10 mb-2 rounded"></div>
                    <div className="bg-green-400 w-32 h-10 rounded"></div>
                </div>
                <div className="flex flex-col">
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div>
                    <div className="bg-gray-400 h-8 rounded"></div>
                </div>
            </div>

            {/* Skeleton for detailed student information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 mb-6 border bg-gray-300">
                <div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div>
                </div>
                <div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div>
                </div>
            </div>

            {/* Skeleton for parent/guardian info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 border p-10 bg-gray-300">
                <div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div>
                </div>
                <div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div>
                </div>
            </div>

            {/* Skeleton for address info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 border p-10 bg-gray-300">
                <div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div>
                </div>
                <div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div>
                    <div className="bg-gray-400 h-8 mb-2 rounded"></div>
                </div>
            </div>

            <div className="text-center">
                <div className="bg-indigo-400 w-32 h-10 rounded mx-auto"></div>
            </div>
        </div>
    );
};

export default SkeletonLoader;