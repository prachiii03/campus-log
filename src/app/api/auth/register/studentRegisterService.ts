import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function registerStudent(data: any) {
    let isRegisterd;
    try {
        if (data.prn) {
            isRegisterd = await prisma.prn_list.findUnique({
                where: {
                    prn: data.prn
                }
            });
            if (isRegisterd?.is_registerd === true) {
                console.log("in is registerd student")
                return ({ message: "email is already regsiterd", status: 409 })
            }
        }
    } catch (error) {
        console.log({ error })
    }

    try {

        const hashedPassword = await bcrypt.hash(data.password, 10);
        const newStudent = await prisma.student_details.create({
            data: {
                first_name: data.firstName,
                middle_name: data.middleName,
                last_name: data.lastName,
                email: data.email,
                prn_no: data.prn,
                username: (data.lastName.toLowerCase() + data.firstName.toLowerCase()) + Math.floor(Math.random() * 100),
                address: data.address,
                department_id: data.departmentId,
                current_studing_year: data.currentStudingYear,
                current_studing_semester: data.currentSemister,
                guardian_name: data.guardianName,
                category: data.category,
                cast: data.cast,
                blood_group: data.bloodGroup,
                adhar_card_no: parseInt(data.adharCardNo),
                material_status: data.materialStatus,
                guardian_contact_no: data.guardianContactNo,
                password: hashedPassword
            },
        });

        if (!newStudent) {
            return ({ message: "Unable to register", success: false, staus: 500 })
        }

        if (data.prn) {
            await prisma.prn_list.update({
                where: {
                    prn: data.prn
                },
                data: {
                    is_registerd: true
                }
            });
        }

        return ({ message: "Student registered successfully", success: true, status: 201 });
    } catch (error) {
        console.error("Error registering student:", error);
        return ({ message: "Error registering student", error: error, status: 500 });
    }

}