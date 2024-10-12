import { NextRequest, NextResponse } from "next/server";
import { FacultyIdParams } from "../get-all-sem-and-subjects/route";
import { v4 as isUUID } from 'uuid';  // Import the UUID validator
import prisma from "@/lib/db";

export async function POST(req: NextRequest, { params }: { params: FacultyIdParams }) {
    const { facultyId } = params;
    const body = await req.json();

    // Destructure the common fields from the body
    const { date, startTime, endTime, semester, subject, students } = body;

    console.log("Request to update attendance received:");
    console.log({ body });

    try {


        // Prepare attendance records
        const attendanceRecords = students.map((student: any) => {


            return {
                student_id: student.student_id,
                faculty_id: facultyId,
                subject_id: subject, // Assuming you are sending subject ID; otherwise, change as needed
                date: new Date(date),
                lecture_start_time: new Date(`${date}T${startTime}:00Z`),
                lecture_end_time: new Date(`${date}T${endTime}:00Z`),
                status: student.isPresent,
                semester,
            };
        });

        console.log({ attendanceRecords })
        // Insert all attendance records into the student_attendence table
        await prisma.student_attendence.createMany({
            data: attendanceRecords,
        });

        return NextResponse.json({ message: "Attendance updated successfully!" });
    } catch (error) {
        console.error("Error updating attendance:", error);
        return NextResponse.json({ message: "Error updating attendance", error: error }, { status: 500 });
    }
}
