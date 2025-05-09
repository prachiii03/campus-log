"use server";

import prisma from "@/lib/db";

export const getSubjectNameBySubjectIsAction = async (subjectId: string) => {
    try {
        const res = await prisma.subject.findUnique({
            where: {
                subject_id: subjectId
            },
            select: {
                subject_name: true
            }
        })
        return {
            success: true,
            data: res?.subject_name
        }

    } catch (error) {
        console.log('error in getSubjectNameBySubjectIsAction : ', error);
        return {
            success: false,
            message: `error in getSubjectNameBySubjectIsAction : ${error}`
        }
    }
}