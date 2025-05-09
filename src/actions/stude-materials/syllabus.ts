"use server";

import prisma from "@/lib/db";
import { Syllabus } from "@/types/types";

export const createNewSyllabusAction = async (syllabusData: Syllabus) => {
    try {
        const res = await prisma.syllabus.create({
            data: syllabusData,
        });
        if (res.id == null) {
            return {
                success: false,
                message: 'unable to create new syllabus'
            }
        }
        return {
            success: true,
            data: res
        }
    } catch (error) {
        console.log('error in createNewSyllabusAction : ', error);
        return {
            success: false,
            message: `error in createNewSyllabusAction : ${error}`
        }
    }
}

export const getAllSyllabusBySubjectIdAction = async (subjectId: string) => {
    try {
        const res = await prisma.syllabus.findMany({
            where: {
                subject_id: subjectId
            },
            select: {
                doc_link: true,
                title: true
            }
        })
        return {
            success: true,
            data: res
        }
    } catch (error) {
        console.log('error in getAllSyllabusBySubjectIdAction : ', error);
        return {
            success: false,
            message: `error in getAllSyllabusBySubjectIdAction : ${error}`
        }
    }
}