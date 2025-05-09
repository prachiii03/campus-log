"use client";
import React, { useEffect, useState } from "react";
import AllSubjects from "@/app/(components)/subject-components/AllSubjects";
import { SubjectProps } from "../../(components)/subject-components/SubjectCard";

const Page = () => {
    const [allSubjects, setAllSubjects] = useState<SubjectProps[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllSubjects();
    }, []);

    const getAllSubjects = async () => {
        try {
            const response = await fetch("/api/subject/get-all-subjects");
            if (!response.ok) {
                throw new Error("Failed to fetch subjects");
            }

            const result = await response.json();
            const data: SubjectProps[] = result.allSubjects;

            console.log("Fetched Data:", data);
            setAllSubjects(data);
        } catch (error) {
            console.error("Error fetching subjects:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 py-10">
            <div className="max-w-6xl mx-auto px-6">
                {loading ? (
                    <div className="h-10 bg-gray-300 rounded-md w-48 mx-auto animate-pulse mb-8 mt-12"></div>
                ) : (
                    <></>
                )}

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                                <div className="animate-pulse space-y-4">
                                    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                    <div className="h-10 bg-gray-300 rounded w-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <AllSubjects subjects={allSubjects || []} />
                )}
            </div>
        </div>
    );
};

export default Page;
