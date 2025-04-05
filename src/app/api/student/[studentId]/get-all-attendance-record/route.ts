import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { semester, subjectId } = await req.json();
        console.log({ semester });
        console.log({ subjectId });

        const attendance = await prisma.student_attendence.findMany({
            where: {
                subject_id: subjectId,
                semester: semester,
            },
        });

        // Convert BigInt fields to strings
        const formattedAttendance = attendance.map((record) => ({
            ...record,
            id: record.id.toString(), // Example for primary key
            student_id: record.student_id.toString(), // Convert BigInt fields
        }));

        return NextResponse.json({ data: formattedAttendance });
    } catch (error) {
        console.log("error in get-attendance-records : ", error);
        return NextResponse.json({ error: "Internal server error" });
    }
}
