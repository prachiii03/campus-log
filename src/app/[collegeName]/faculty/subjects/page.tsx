"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Faculty {
    faculty_id: string;
    first_name: string;
    middle_name?: string;
    last_name: string;
    gender: string;
    highest_education: string;
    address: string;
    email: string;
    contact_no?: string;
    username: string;
    department_id: string;
}

export interface Subject {
    subject_id: string;
    subject_name: string;
    required_hours: number;
    habe_practicals: boolean;
    faculty_id: string;
    semester: string;
}

const FacultySubjects = () => {
    const [allSubjects, setAllSubjects] = useState<Subject[]>([]);
    const [faculty, setFaculty] = useState<Faculty>({
        faculty_id: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        gender: "",
        highest_education: "",
        address: "",
        email: "",
        contact_no: "",
        username: "",
        department_id: "",
    });
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        const storedFaculty = sessionStorage.getItem("facultySession");
        if (storedFaculty) {
            const parsedFaculty = JSON.parse(storedFaculty);
            setFaculty(parsedFaculty);
        }
    }, []);

    useEffect(() => {
        if (faculty.faculty_id) {
            getAllSemesterAndSubjects();
        }
    }, [faculty.faculty_id]);

    const getAllSemesterAndSubjects = async () => {
        try {
            const response = await fetch(`/api/faculty/${faculty.faculty_id}/get-all-subjects`);
            const res = await response.json();
            setAllSubjects(res.allSubjects || []);
        } catch (error) {
            console.error("Failed to fetch semesters and subjects:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleAddSource = (subjectId: string) => {
        router.push(`/sgmcoe/faculty/subjects/${subjectId}/add-source`);
    };

    return (
        <div className="xl:p-20 sm:p-8 pt-16 min-h-screen bg-gradient-to-r from-indigo-50 to-purple-100 mt-12">
            <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
                Welcome, {faculty.first_name} {faculty.last_name}! 🎓 Here are your subjects
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Loading Skeleton Effect */}
                {isLoading ? (
                    Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 rounded-xl shadow-xl p-6 flex flex-col animate-pulse"
                        >
                            <div className="h-6 w-3/4 bg-gray-300 rounded mb-4"></div>
                            <div className="h-4 w-1/2 bg-gray-300 rounded mb-2"></div>
                            <div className="h-4 w-1/3 bg-gray-300 rounded mb-2"></div>
                            <div className="h-4 w-1/4 bg-gray-300 rounded mb-2"></div>
                            <div className="mt-4 h-10 bg-gray-400 rounded"></div>
                        </div>
                    ))
                ) : (
                    allSubjects.map((subject) => (
                        <div
                            key={subject.subject_id}
                            className="bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 p-6 flex flex-col border border-gray-200"
                        >
                            <h1 className="text-2xl font-bold text-indigo-700 mb-4">
                                {subject.subject_name.toUpperCase()}
                            </h1>
                            <div className="w-full">
                                <p className="text-gray-600 text-lg mb-2">
                                    📌 <strong className="text-gray-800">Semester:</strong> {subject.semester}
                                </p>
                                <p className="text-gray-600 text-lg mb-2">
                                    ⏳ <strong className="text-gray-800">Required Hours:</strong> {subject.required_hours}
                                </p>
                                <p className="text-gray-600 text-lg">
                                    🛠  <strong className="text-gray-800">Has Practicals:</strong>{" "}
                                    <span className={`${subject.habe_practicals ? "text-green-600" : "text-red-600"} font-medium`}>
                                        {subject.habe_practicals ? "Yes ✅" : "No ❌"}
                                    </span>
                                </p>
                            </div>
                            <button
                                className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-indigo-600 transition transform hover:scale-105"
                                onClick={() => handleAddSource(subject.subject_id)}
                            >
                                ➕ Add Source
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default FacultySubjects;
