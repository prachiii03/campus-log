import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export interface StudentIdParams {
    studentId: string;
}

interface Body {
    subject: string;
}

export async function POST(req: NextRequest, { params }: { params: StudentIdParams }) {
    const { studentId } = params;

    if (!studentId) {
        return NextResponse.json({ error: "Student ID not found" }, { status: 400 });
    }

    const reqBody: Body = await req.json();

    const attendanceRecords = await prisma.student_attendence.findMany({
        where: {
            student_id: studentId,
            subject_id: reqBody.subject,
        },
        include: {
            subject: {
                select: {
                    subject_name: true, // Include the subject name from the related subject model
                },
            },
            teaching_faculties: {
                select: {
                    first_name: true // Include the faculty name from the related teaching_faculty model
                }
            },

        },
    });

    if (attendanceRecords.length === 0) {
        return NextResponse.json({ message: "No attendance records found" }, { status: 404 });
    }

    const serializedAttendanceRecords = attendanceRecords.map(record => ({
        ...record,
        id: record.id.toString(),
        subject_name: record.subject?.subject_name || 'N/A',
    }));

    return NextResponse.json({
        studentId,
        attendanceRecords: serializedAttendanceRecords,
    });
}
