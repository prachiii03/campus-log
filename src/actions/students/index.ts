"use server";
import { StudentData } from "@/app/[collegeName]/faculty/onboard/page";
import prisma from "@/lib/db";
import bcrypt from "bcryptjs";

export const onBoardNewStudentAction = async (data: StudentData) => {
    try {
        console.log("req at onBoardNewStudentAction");
        console.log("data at onBoardNewStudentAction  ", data);
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const dateOfBirth = new Date(data.dob);

        const res = await prisma.student_details.create({
            data: {
                first_name: data.firstName,
                middle_name: data.middleName,
                last_name: data.lastName,
                email: data.email,
                password: hashedPassword,
                prn_no: data.prnNo,
                address: data.address,
                username: data.firstName + data.lastName,
                department_id: data.departmentId,
                current_studing_year: data.currentStudingYear,
                current_studing_semester: data.currentSemister,
                guardian_name: data.middleName,
                current_gpa: data.currentGPA,
                active_backlogs: data.activeBacklog,
                blood_group: data.bloodGroup,
                category: data.category,
                adhar_card_no: data.adharNO,
                gender: data.gender,
                date_of_birth: dateOfBirth,
                course: data.course,
                class: data.class,
                state: data.state,
                district: data.district,
                current_subjects: data.subjects,
            },
        });
        console.log("result after creating student : ", res);
    } catch (error) {
        console.error("Error in onBoardNewStudentAction:", error);
        return {
            success: false,
            message: `Error in onBoardNewStudentAction: ${error}`,
        };
    }
};
