import { NextRequest, NextResponse } from "next/server";
import { StudentIdParams } from "../attendence/route";
import prisma from "@/lib/db";

export async function GET(req: NextRequest, { params }: { params: StudentIdParams }) {
    const { studentId } = params;

    if (!studentId) {
        return NextResponse.json({ error: "Student ID not found" }, { status: 400 });
    }

    try {


        const student = await prisma.student_details.findFirst({
            where: {
                student_id: studentId
            }
        });
        return NextResponse.json({
            studentInfo: student
        }, { status: 201 })
    }
    catch (error) {
        console.log("Error in get-student-information route --> ", error);
        return NextResponse.json({
            success: false,
            message: "Internal server error"
        }, { status: 500 })
    }

}