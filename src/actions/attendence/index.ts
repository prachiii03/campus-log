"use server";

import prisma from "@/lib/db";

export const getAllAttendenceAction = async (
    subjectId: string,
    semester: string
) => {
    try {
        const attendance = await prisma.student_attendence.findMany({
            where: {
                subject_id: subjectId,
                semester: semester,
            },
            include: {
                student_details: true, // this includes the joined student_details data
            },
        });

        // Convert BigInt fields to strings
        const formattedAttendance = attendance.map((record) => ({
            ...record,
            id: record.id.toString(), // Example for primary key
            student_id: record.student_id.toString(), // Convert BigInt fields
        }));
        return {
            success: true,
            data: formattedAttendance,
        };
    } catch (error) {
        console.log("error in getAllAttendenceAction : ", error);
        return {
            success: false,
            error: `error in getAllAttendenceAction :  ${error}`,
        };
    }
};
