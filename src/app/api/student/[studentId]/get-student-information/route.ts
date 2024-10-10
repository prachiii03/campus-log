import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db"; // Assuming this is your Prisma client

export async function GET(req: NextRequest, { params }: { params: { studentId: string } }) {
    const { studentId } = params;

    if (!studentId) {
        return NextResponse.json({ error: "Student ID not found" }, { status: 400 });
    }

    try {
        // Fetch the student details and include the department_name from the related department model
        const student = await prisma.student_details.findFirst({
            where: {
                student_id: studentId
            },
            include: {
                department: {
                    select: {
                        department_name: true, // Select only the department_name from the department

                    },
                },
            },
        });

        if (!student) {
            return NextResponse.json({ error: "Student not found" }, { status: 404 });
        }

        // Convert BigInt values to strings if necessary (for example, if you have BigInt fields in the database)
        const studentInfo = {
            ...student,
            department_name: student.department.department_name, // Accessing department_name from the department relation
        };
        console.log({ studentInfo })

        return NextResponse.json({
            studentInfo
        }, { status: 200 });
    } catch (error) {
        console.error("Error in get-student-information route --> ", error);
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 });
    }
}
