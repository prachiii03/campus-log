import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export interface FacultyIdParams {
    facultyId: string;
}
export async function GET(req: NextRequest, { params }: { params: FacultyIdParams }) {
    try {

        const { facultyId } = params;
        // Fetch all subjects from the database
        const subjects = await prisma.subject.findMany({
            where: {
                faculty_id: facultyId
            }
        });

        // Group subjects by semester
        const groupedBySemester = subjects.reduce((acc: any, subject: any) => {
            const semester = subject.semester;

            // If this semester key doesn't exist, initialize it with an empty array
            if (!acc[semester]) {
                acc[semester] = [];
            }

            // Push the current subject to the respective semester's array
            acc[semester].push(subject);

            return acc;
        }, {});

        // Prepare the response format with semesters and corresponding subjects
        const groupedResponse = Object.keys(groupedBySemester).map(semester => ({
            semester,
            subjects: groupedBySemester[semester]
        }));

        // Return the grouped data
        return NextResponse.json({ groupedResponse });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch subjects" }, { status: 500 });
    }
}
