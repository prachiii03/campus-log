"use server";

import prisma from "@/lib/db";

export const getAllAttendenceAction = async (subjectId: string) => {
    try {
        const data = await prisma.student_attendence.findMany({
            where: {
                subject_id: subjectId
            }
        });
        return {
            success: true,
            data: data
        }
    } catch (error) {
        console.log('error in getAllAttendenceAction : ', error);
        return {
            success: false,
            error: `error in getAllAttendenceAction :  ${error}`
        }
    }
}