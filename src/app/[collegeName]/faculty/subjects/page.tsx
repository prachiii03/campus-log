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

    const handleSubjectClick = (subjectId: string) => {
        router.push(`/sgmcoe/faculty/subjects/${subjectId}`);
    };

    return (
        <div className="xl:p-24 sm:p-8 pt-16 min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
            <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
                Welcome, {faculty.first_name} {faculty.last_name}! Here are your subjects:
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {isLoading ? (
                    Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 rounded-xl shadow-xl p-6 flex flex-col items-center animate-pulse"
                        >
                            <div className="h-6 w-32 bg-gray-300 rounded mb-4"></div>
                            <div className="h-4 w-24 bg-gray-300 rounded mb-2"></div>
                            <div className="h-4 w-20 bg-gray-300 rounded mb-2"></div>
                            <div className="h-4 w-16 bg-gray-300 rounded"></div>
                        </div>
                    ))
                ) : (
                    allSubjects.map((subject) => (
                        <div
                            key={subject.subject_id}
                            onClick={() => handleSubjectClick(subject.subject_id)}
                            className="bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center cursor-pointer"
                        >
                            <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
                                {subject.subject_name.toUpperCase()}
                            </h2>
                            <div className="w-full">
                                <p className="text-gray-600 text-lg mb-2">
                                    <strong className="text-gray-800">Semester:</strong> {subject.semester}
                                </p>
                                <p className="text-gray-600 text-lg mb-2">
                                    <strong className="text-gray-800">Required Hours:</strong> {subject.required_hours}
                                </p>
                                <p className="text-gray-600 text-lg">
                                    <strong className="text-gray-800">Has Practicals:</strong>{" "}
                                    <span
                                        className={`${subject.habe_practicals ? "text-green-500" : "text-red-500"} font-medium`}
                                    >
                                        {subject.habe_practicals ? "Yes" : "No"}
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default FacultySubjects;
