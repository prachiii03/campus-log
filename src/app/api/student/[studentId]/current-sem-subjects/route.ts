import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { StudentIdParams } from "../attendence/route";

export async function GET(req: NextRequest, { params }: { params: StudentIdParams }) {
    const { studentId } = params;

    if (!studentId) {
        return NextResponse.json({ error: "Student ID not found" }, { status: 400 });
    }

    const response = await prisma.student_details.findFirst({
        where: {
            student_id: studentId,
        },
    });

    if (!response) {
        return NextResponse.json({ error: "Student not found" }, { status: 404 });
    }

    const subjects = response?.current_subjects; // Assuming this is an array of subject IDs

    if (!subjects || subjects.length === 0) {
        return NextResponse.json({ message: "No subjects found for this student" }, { status: 404 });
    }

    // Fetch subject names where subject_id is in the `subjects` array
    const subjectNames = await prisma.subject.findMany({
        where: {
            subject_id: {
                in: subjects, // Use `in` to match multiple IDs
            },
        },
        select: {
            subject_name: true, // Select only the subject_name field
            subject_id: true,
            habe_practicals: true

        },
    });

    return NextResponse.json({
        success: true,
        current_year_subjects: subjectNames, // Return the subject names
    });
}
