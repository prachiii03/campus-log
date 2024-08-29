import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function registerStudent(data: any) {
    const isRegisterd = await prisma.prn_table.findUnique({
        where: {
            email: data.email
        }
    });
    if (!isRegisterd) {
        return NextResponse.json({ message: "email is already regsiterd", status: 409 })
    }


    try {
        const newStudent = await prisma.student.create({
            data: {
                student_id: data.studentId,
                first_name: data.firstName,
                middle_name: data.middleName,
                last_name: data.lastName,
                email: data.email,
                current_year: data.currentStudingYear,
                current_semester: data.currentSemister,
                username: (data.lastName.toLowerCase() + data.firstName.toLowerCase()),
                address: " data.address",
                department_id: 1
            },
        });
        console.log("this is new student : ")
        console.log(newStudent)

        return NextResponse.json({ message: "Student registered successfully", student: newStudent }, { status: 201 });
    } catch (error) {
        console.error("Error registering student:", error);
        return NextResponse.json({ message: "Error registering student", error: error }, { status: 500 });
    }

}