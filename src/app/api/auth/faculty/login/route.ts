import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json(); // Parse the request body to get the password
        const { id, password } = body; // Destructure the password from the body
        console.log({ id, password })
        const faculty = await prisma.teaching_faculties.findUnique({
            where: {
                faculty_id: id
            },
            include: {
                subject: {
                    select: {
                        subject_id: true,
                        subject_name: true,

                    }
                },


            }
        });

        if (!faculty) {
            return NextResponse.json({
                message: "Faculty not found"
            });
        }

        // Verify the password (assuming passwords are hashed in the database)
        const isPasswordCorrect = await bcrypt.compare(password, faculty.password); // Adjust based on your hashing method
        if (!isPasswordCorrect) {
            return NextResponse.json({
                message: "Invalid password"
            });
        }

        const newFaculty = {
            ...faculty,
            profession: "faculty"
        }
        return NextResponse.json({
            message: "Logged in successfully",
            newFaculty

        });

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({
            message: "Internal server error",
            error: error
        }, { status: 500 });
    }
}
