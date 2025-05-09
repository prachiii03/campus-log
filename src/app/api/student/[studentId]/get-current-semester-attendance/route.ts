
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: NextRequest, { params }: { params: { studentId: string } }) {
    const { studentId } = params;

    const semester = req.nextUrl.searchParams.get("semester");

    if (!studentId) {
        return NextResponse.json({ error: "Student ID not found" }, { status: 400 });
    }

    if (!semester) {
        return NextResponse.json({ error: "Semester not found" }, { status: 400 });
    }

    try {

        const studentAttendence = await prisma.student_attendence.findMany({
            where: {
                student_id: studentId,
                semester: semester
            }
        });
        console.log({ studentAttendence })

        let presentLectureCount = 0;
        studentAttendence.map((attendence) => {
            if (attendence.status === true) {
                presentLectureCount++;
            }
        })



        return NextResponse.json({ success: true, studentId, presentLectureCount, absentLectureCount: (Math.abs(studentAttendence.length - presentLectureCount)) });
    } catch (error) {
        console.log("Error in get-current-semester-attendance route: " + error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
