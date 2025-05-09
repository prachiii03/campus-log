"use server";

import prisma from "@/lib/db";
import { Notes } from "@/types/types";

export const createNewNotesAction = async (notesData: Notes) => {
    try {
        const result = await prisma.notes.create({
            data: notesData
        })

        if (result.id == null) {
            return {
                success: false,
                message: 'unable to create new notes'
            }
        }

        return {
            success: true,
            data: result
        }

    } catch (error) {
        console.log('error in createNewNotesAction : ', error);
        return {
            success: false,
            message: `error in createNewNotesAction : ${error}`
        }
    }
}

export const getAllNotesOfSubjectAction = async (subjectId: string) => {
    try {
        const res = await prisma.notes.findMany({
            where: {
                subject_id: subjectId
            },
            select: {
                doc_url: true,
                title: true
            }
        })

        return {
            success: true,
            data: res
        }
    } catch (error) {
        console.log('error in getAllNotesOfSubjectAction : ', error);
        return {
            success: false,
            message: `error in getAllNotesOfSubjectAction ${error}`
        }
    }
}