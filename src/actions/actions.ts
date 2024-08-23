"use server";

import prisma from "@/lib/db";

export async function addStudent() {
    await prisma.student.create({
        data: {
            name: "saurabh",
            prn: 2021075925
        }
    });
    console.log("added")
}