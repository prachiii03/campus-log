import React from "react";
import Link from "next/link";
import { useCollege } from "@/context/college-name-provider/CollegeNameProvider";

export interface SubjectProps {
    college_name: string;
    subject_id: string;
    subject_name: string;
    required_hours: number;
    have_practicals: boolean;
    faculty_name: string;
    semester: number;
}

const SubjectCard: React.FC<SubjectProps> = ({
    college_name,
    subject_id,
    subject_name,
    required_hours,
    have_practicals,
    faculty_name,
    semester,
}) => {

    const { collegeName } = useCollege();
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {subject_name}
                </h2>
                <p className="text-gray-600 mb-4">
                    <span className="font-medium">Faculty:</span> {faculty_name}
                </p>
                <div className="flex flex-wrap gap-4 mb-4">
                    <div className="bg-gray-100 text-gray-800 text-sm px-4 py-2 rounded">
                        Required Hours: {required_hours}
                    </div>
                    <div
                        className={`${have_practicals
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                            } text-sm px-4 py-2 rounded`}
                    >
                        {have_practicals ? "Has Practicals" : "No Practicals"}
                    </div>
                    <div className="bg-blue-100 text-blue-700 text-sm px-4 py-2 rounded">
                        Semester: {semester}
                    </div>
                    <Link href={`/${collegeName}/subjects/${subject_id}`}>
                        <button className="w-full text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md transition duration-300">
                            View Source
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SubjectCard;
