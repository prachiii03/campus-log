import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const allSubjects = await prisma.subject.findMany({
            include: {
                teaching_faculties: {
                    select: {
                        first_name: true,
                        middle_name: true,
                        last_name: true,
                    },
                },
            },
        });

        // Map the results to include faculty name instead of faculty_id
        const formattedSubjects = allSubjects.map(subject => ({
            subject_id: subject.subject_id,
            subject_name: subject.subject_name,
            required_hours: subject.required_hours,
            have_practicals: subject.habe_practicals,
            semester: subject.semester,
            faculty_name: `${subject.teaching_faculties.first_name} ${subject.teaching_faculties.middle_name || ''} ${subject.teaching_faculties.last_name}`.trim(),
        }));

        return NextResponse.json({ allSubjects: formattedSubjects });
    } catch (error) {
        console.error("Error fetching subjects:", error);
        return NextResponse.json({ error: "Failed to fetch subjects" }, { status: 500 });
    }
}
