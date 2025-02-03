"use client";
import React, { useEffect, useState } from 'react';
import AllSubjects from '@/app/(components)/subject-components/AllSubjects';
import { SubjectProps } from '../../(components)/subject-components/SubjectCard';

const subjects = [
    {
        subject_id: 'CS101',
        subject_name: 'Introduction to Computer Science',
        required_hours: 60,
        have_practicals: true,
        faculty_name: 'FAC001',
        semester: 1,
    },
    {
        subject_id: 'CS102',
        subject_name: 'Data Structures',
        required_hours: 70,
        have_practicals: true,
        faculty_name: 'FAC002',
        semester: 2,
    },
    {
        subject_id: 'CS103',
        subject_name: 'Algorithms',
        required_hours: 75,
        have_practicals: false,
        faculty_name: 'FAC003',
        semester: 3,
    },
];

const Page = () => {
    const [allSubjects, setAllSubjects] = useState<SubjectProps[]>();

    useEffect(() => {
        getAllSubject();
    }, [])

    const getAllSubject = async () => {
        try {
            const response = await fetch('/api/subject/get-all-subjects');
            if (!response.ok) {
                throw new Error('Failed to fetch subjects');
            }

            const result = await response.json();
            const data: SubjectProps[] = result.allSubjects;

            console.log('Fetched Data:', data);
            setAllSubjects(data); // Correctly setting state
        } catch (error) {
            console.error('Error fetching subjects:', error);
        }
    }
    return (
        <div className="min-h-screen bg-gray-50">
            <h1 className="text-2xl font-bold text-center text-gray-800 py-4">
                All Subjects

            </h1>
            <AllSubjects subjects={allSubjects ? allSubjects : subjects} />
        </div>
    );
};

export default Page;
