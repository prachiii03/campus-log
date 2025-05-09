import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';
export async function POST(req: NextRequest) {
    const body = await req.json();
    try {
        const { first_name, middle_name, last_name, gender, highest_education, address, email, contact_no, department_id, password } = body;

        const isPresent = await prisma.teaching_faculties.findFirst({
            where: {
                email: email
            }
        });

        if (isPresent) {
            return NextResponse.json({
                message: "Provided email is already used"
            }, { status: 500 })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newFaculty = await prisma.teaching_faculties.create({
            data: {
                first_name: first_name,
                middle_name,
                last_name,
                gender,
                highest_education,
                address,
                email,
                contact_no,
                username: last_name + first_name,
                department_id,
                password: hashedPassword
            }
        });

        if (newFaculty) {
            return NextResponse.json({
                message: "New faculty registerd successfully",
                facuty: {
                    username: newFaculty.username,
                    id: newFaculty.faculty_id,
                    email: newFaculty.email,
                    department: newFaculty.department_id,
                    profession: "faculty"
                }
            })
        }

    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({
            message: "Internal server error",
            error: error
        }, { status: 500 });
    }
}