"use server";

import prisma from "@/lib/db";

export const getAllSubjectsAction = async (facultyId: string) => {
    try {
        const data = await prisma.subject.findMany({
            where: {
                faculty_id: facultyId
            }
        });

        return {
            success: true,
            data: data
        }
    } catch (error) {
        console.log('error in getAllSubjectsAction : ', error);
        return {
            success: false,
            message: `error in getAllSubjectsAction :  ${error}`
        }
    }
}