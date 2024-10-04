import { NextRequest, NextResponse } from "next/server";
import { StudentIdParams } from "../attendence/route";
import prisma from "@/lib/db";

export async function GET(req: NextRequest, { params }: { params: StudentIdParams }) {
    const { studentId } = params;

    if (!studentId) {
        return NextResponse.json({ error: "Student ID not found" }, { status: 400 });
    }

    try {
        const attendanceCount = await prisma.student_attendence.groupBy({
            by: ['semester'],
            where: {
                student_id: studentId,
            },
            _count: {
                id: true,
            },
            orderBy: {
                semester: 'asc',
            },
        });

        const semesterData: Record<string, number> = {
            first_year: 0,
            second_year: 0,
            third_year: 0,
            fourth_year: 0,
        };

        attendanceCount.forEach((item) => {
            const semester = parseInt(item.semester);
            const count = item._count.id;

            if (semester === 1 || semester === 2) {
                semesterData.first_year += count;
            } else if (semester === 3 || semester === 4) {
                semesterData.second_year += count;
            } else if (semester === 5 || semester === 6) {
                semesterData.third_year += count;
            } else if (semester === 7 || semester === 8) {
                semesterData.fourth_year += count;
            }
        });

        return NextResponse.json({
            attendanceByYear: semesterData,
        });

    } catch (error) {
        console.log("Error in get-attendence-yearWise route -->  ", error);
        return NextResponse.json({
            success: false,
            message: "Internal Server Error"
        }, { status: 500 });
    }
}
