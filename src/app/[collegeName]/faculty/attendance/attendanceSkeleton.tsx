export default function AttendanceSkeleton() {
    return (
        <div className="space-y-6 py-16 px-10 pl-28 mt-6 bg-white h-screen">
            {/* Faculty Information Skeleton */}
            <div className="w-full lg:w-2/3 bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center mx-auto mt-2 animate-pulse">
            <div className="w-40 h-40 bg-gray-300 rounded-full"></div>
            </div>
    
            {/* Dropdowns and Inputs Skeleton */}
            <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-4 mt-10">
            {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="animate-pulse mt-10">
                <div className="h-10 bg-gray-300 rounded"></div>
                </div>
            ))}
            </div>
        </div>
    );
}
 