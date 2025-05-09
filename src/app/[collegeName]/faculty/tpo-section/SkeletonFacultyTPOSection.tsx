export default function SkeletonFacultyTPOSection() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 w-96 animate-pulse">
            <div className="h-8 bg-gray-300 rounded-md mb-4"></div>
            <div className="h-4 bg-gray-300 rounded-md mb-6"></div>
    
            <div className="bg-blue-300 h-40 rounded-lg p-6">
                <div className="h-4 bg-blue-200 rounded-md mb-2"></div>
                <div className="h-3 bg-blue-200 rounded-md mb-4"></div>
                <div className="h-10 bg-blue-200 rounded-md"></div>
            </div>
            </div>
        </div>
    );
}