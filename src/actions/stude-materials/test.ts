"use server";




import prisma from '@/lib/db';
import { Test } from '@/types/types';


export const createNewTestAction = async (testData: Test) => {
    try {
        const data = await prisma.tests.create({
            data: {

                subject: { connect: { subject_id: testData.subject_id } }, // Correct way
                faculty_id: undefined,
                title: testData.title,
                test_link: testData.test_link,
                start_ts: new Date(testData.start_ts),
                duration: testData.duration,
                teaching_faculties: { connect: { faculty_id: testData.faculty_id } }
            }
        })

        if (data.id == null) {
            return {
                success: false,
                message: 'test was not created successfully'
            }
        }

        return {
            success: true,
            data: data
        }

    } catch (error) {
        console.log('error in createNewTestAction :', error);
        return {
            success: false,
            message: `error in createNewTestAction : ${error}`
        }
    }
}


export const getAllTestlinkForSUbjectAction = async (subjectId: string) => {
    try {
        const res = await prisma.tests.findMany({
            where: {
                subject_id: subjectId
            },
            select: {
                test_link: true,
                duration: true,
                start_ts: true,
                title: true

            }
        })

        return {
            success: true,
            data: res
        }
    } catch (error) {
        console.log('error in getAllTestlinkForSUbjectAction :', error);
        return {
            success: false,
            message: `error in getAllTestlinkForSUbjectAction : ${error}`
        }
    }
}