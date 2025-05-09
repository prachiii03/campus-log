import React from 'react';

const DashboardSkeleton: React.FC = () => {
    return (
        <div className="p-8 min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 shadow-md animate-pulse w-auto mt-16">
            <div className="flex justify-evenly mb-8">
                <div className="w-64 h-56 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                <div className="w-64 h-56 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
            </div>
            <div className="w-full h-72 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
    );
};

export default DashboardSkeleton;