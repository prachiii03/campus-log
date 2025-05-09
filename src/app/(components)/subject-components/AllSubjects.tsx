import React from "react";
import SubjectCard, { SubjectProps } from "./SubjectCard";

interface AllSubjectsProps {
    subjects: SubjectProps[];
}

const AllSubjects: React.FC<AllSubjectsProps> = ({ subjects }) => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">All Subjects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjects.map((subject) => (
                    <SubjectCard key={subject.subject_id} {...subject} />
                ))}
            </div>
        </div>
    );
};

export default AllSubjects;
