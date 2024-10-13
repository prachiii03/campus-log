
import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log({ body })
        const newCompany = await prisma.upcoming_companies.create({
            data: body
        })
        console.log("this is upcoming company", { newCompany })
        return NextResponse.json({ message: "ok" })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "ok" })
    }
}