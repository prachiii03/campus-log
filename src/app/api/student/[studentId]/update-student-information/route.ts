import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, { params }: { params: { studentId: string } }) {
    const { studentId } = params;

    if (!studentId) {
        return NextResponse.json({ error: "Student ID not found" }, { status: 400 });
    }

    try {
        const student = await prisma.student_details.findFirst({
            where: {
                student_id: studentId
            }
        })
        console.log(student)
        return NextResponse.json({ student })
    } catch (error) {

    }
}