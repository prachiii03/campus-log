'use client';

const SkeletonLoader = () => {
    return (
        <div className="animate-pulse w-full flex">
            <div className="hidden md:block w-1/2 p-10 bg-cover bg-center">
                <div className="w-full h-80 bg-gray-300 rounded"></div>
            </div>

            <div className="w-full md:w-1/2 p-8">
                <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
                </div>

                <div className="h-6 bg-gray-300 rounded mb-4 mx-auto w-3/4"></div>

                <div className="space-y-4">
                    <div className="h-8 bg-gray-300 rounded"></div>
                    <div className="h-8 bg-gray-300 rounded"></div>
                </div>

                <div className="h-10 bg-blue-300 rounded mt-4"></div>
                <div className="h-4 bg-gray-300 rounded mt-4 w-1/2 mx-auto"></div>
            </div>
        </div>
    );
};

export default SkeletonLoader;
