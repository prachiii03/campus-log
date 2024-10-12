import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface SubjectIdParams {
    subjectId: string;
}

export async function GET(req: NextRequest, { params }: { params: SubjectIdParams }) {
    const { subjectId } = params;
    try {
        const allStudents = await prisma.student_details.findMany({
            where: {
                current_subjects: {
                    has: subjectId, // Checks if subjectId exists in the current_subjects array
                },
            },
        });

        return NextResponse.json(allStudents)
    } catch (error) {

    }
}