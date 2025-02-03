"use client";

import React, { useEffect, useState } from "react";
import { Subject } from "../page";
import FileUploadForm from "@/app/(components)/FileUploadForm";

interface IndividualSubjectInfoProps {
    params: {
        subjectId: string;
    };
}

const IndividualSubjectInfo = ({ params }: IndividualSubjectInfoProps) => {
    const { subjectId } = params;

    const [subjectDetails, setSubjectDetails] = useState<Subject | null>(null);

    useEffect(() => {
        if (subjectId) {
            fetchSubjectDetails();
        }
    }, [subjectId]);

    const fetchSubjectDetails = async () => {
        try {
            const response = await fetch(`/api/subjects/${subjectId}`);
            if (!response.ok) {
                throw new Error("Failed to fetch subject details");
            }
            const data = await response.json();
            setSubjectDetails(data);
        } catch (error) {
            console.error("Error fetching subject details:", error);
        }
    };

    // if (!subjectDetails) {
    //     return (
    //         <div className="flex items-center justify-center min-h-screen">
    //             <p>Loading subject details...</p>
    //         </div>
    //     );
    // }

    return (
        <div className="p-8 min-h-screen bg-gray-100">
            <FileUploadForm />
        </div>
    );
};

export default IndividualSubjectInfo;
