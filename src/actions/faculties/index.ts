"use server";

import { FacultyData } from "@/app/[collegeName]/faculty/onboard/page";
import prisma from "@/lib/db";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";

export const getAllSubjectsAction = async (facultyId: string) => {
    try {
        const data = await prisma.subject.findMany({
            where: {
                faculty_id: facultyId,
            },
        });

        return {
            success: true,
            data: data,
        };
    } catch (error) {
        console.log("error in getAllSubjectsAction : ", error);
        return {
            success: false,
            message: `error in getAllSubjectsAction :  ${error}`,
        };
    }
};

export const onboardNewFacultyAction = async (data: FacultyData) => {
    try {
        console.log("req at onboardNewFacultyAction");
        console.log("data at onboardNewFacultyAction  ", data);
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const result = await prisma.teaching_faculties.create({
            data: {
                first_name: data.firstName,
                middle_name: data.middleName,
                last_name: data.lastName,
                email: data.email,
                highest_education: data.highestEducation,
                password: hashedPassword,
                contact_no: data.contactNo,
                department_id: data.departmentId,
                gender: data.gender,
                address: data.address,
                username: data.username,
            },
            select: {
                faculty_id: true,
            },
        });
        updateSubjectFacultyAction(data.subjects, result.faculty_id);
        console.log("result after crrateing faculty : ", result);
        return result;
    } catch (error) {
        console.log("error in onboardNewFacultyAction : ", error);
        return {
            success: false,
            message: `error in onboardNewFacultyAction :  ${error}`,
        };
    }
};

const updateSubjectFacultyAction = async (
    subjectIds: string[],
    facultyId: string
) => {
    try {
        const data = await prisma.subject.updateMany({
            where: {
                subject_id: {
                    in: subjectIds,
                },
            },
            data: {
                faculty_id: facultyId,
            },
        });
    } catch (error) {
        console.log("error in updateSubjectFacultyAction : ", error);
        return {
            success: false,
            message: `error in updateSubjectFacultyAction :  ${error}`,
        };
    }
};
