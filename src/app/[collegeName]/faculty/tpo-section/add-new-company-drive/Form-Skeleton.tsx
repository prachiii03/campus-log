// Skeleton.tsx
export default function RecruitmentFormSkeleton() {
    return (
        <div className="space-y-6 py-11 px-10 md:px-28 md:py-16 lg:px-28 lg:py-20 mt-6 bg-gray-100 animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                
                {/* Skeleton for Company Name */}
                <div>
                    <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                </div>

                {/* Skeleton for Job Position */}
                <div>
                    <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                </div>

                {/* Skeleton for Date of Recruitment */}
                <div>
                    <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                </div>

                {/* Skeleton for Eligibility Criteria */}
                <div className="md:col-span-2">
                    <div className="h-6 bg-gray-300 rounded w-1/4 mb-2"></div>
                    <div className="h-24 bg-gray-200 rounded"></div>
                </div>

                {/* Skeleton for Package Offered */}
                <div>
                    <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                </div>

                {/* Skeleton for Application Deadline */}
                <div>
                    <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                </div>

                {/* Skeleton for Aggregate GPA */}
                <div>
                    <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                </div>

                {/* Skeleton for Live Backlogs */}
                <div>
                    <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                </div>

                {/* Skeleton for Minimum GPA */}
                <div>
                    <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                </div>

                {/* Skeleton for KT Allowed */}
                <div className="flex items-center space-x-4">
                    <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-10 w-10 bg-gray-200 rounded"></div>
                </div>

                {/* Skeleton for Submit Button */}
                <div className="md:col-span-2">
                    <div className="h-12 bg-gray-400 rounded"></div>
                </div>
            </div>
        </div>
    );
}
