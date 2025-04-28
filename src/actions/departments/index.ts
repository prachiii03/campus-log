"use server";
import prisma from "@/lib/db";

export const getAllSubjects = async () => {
    try {
        const data = await prisma.subject.findMany({});
        if (data.length == 0) {
            return {
                success: false,
                message: "No departments found",
            };
        }
        return {
            success: true,
            data: data,
        };
    } catch (error) {
        console.log("error in getAllDepartmentAction : ", error);
        return {
            succes: false,
            message: `error in getAllDepartmentAction : ${error}`,
        };
    }
};

export const getAllDepartmentsAction = async () => {
    try {
        const data = await prisma.department.findMany();
        if (data.length == 0) {
            return {
                success: false,
                message: "No departments found",
            };
        }
        console.log("data in getAllDepartmentsAction : ", data);
        return {
            success: true,
            data: data,
        };
    } catch (error) {
        console.log("error in getAllDepartmentsAction : ", error);
        return {
            success: false,
            message: `error in getAllDepartmentsAction : ${error}`,
        };
    }
};
