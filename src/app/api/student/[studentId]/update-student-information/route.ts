import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, { params }: { params: { studentId: string } }) {
    const { studentId } = params;

    console.log("Request received at update info");

    if (!studentId) {
        return NextResponse.json({ error: "Student ID not found" }, { status: 400 });
    }

    try {
        // Parse the request body to get the updated student information
        const body = await req.json();
        const {
            address,
            adhar_card_no,
            blood_group,
            cast,
            category,
            current_studing_semester,
            current_studing_year,
            current_subjects,
            date_of_birth,
            department_id,
            email,
            first_name,
            gender,
            guardian_contact_no,
            guardian_date_of_birth,
            guardian_name,
            guardian_relation,
            last_name,
            material_status,
            middle_name,
            prn_no,
            username,
        } = body;

        // Find the existing student record by studentId
        const student = await prisma.student_details.findUnique({
            where: {
                student_id: studentId,
            },
        });

        if (!student) {
            return NextResponse.json({ error: "Student not found" }, { status: 404 });
        }

        // Update the student information in the database
        const updatedStudent = await prisma.student_details.update({
            where: {
                student_id: studentId,
            },
            data: {
                address,
                adhar_card_no,
                blood_group,
                cast,
                category,
                current_studing_semester,
                current_studing_year,
                current_subjects,
                date_of_birth,
                department_id,
                email,
                first_name,
                gender,
                guardian_contact_no,
                guardian_date_of_birth,
                guardian_name,
                guardian_relation,
                last_name,
                material_status,
                middle_name,
                prn_no,
                username,
            },
        });

        // Return the updated student as a JSON response
        return NextResponse.json({ message: "Student information updated successfully", updatedStudent });

    } catch (error) {
        console.error("Error updating student information:", error);
        return NextResponse.json({ error: "Failed to update student information" }, { status: 500 });
    }
}
