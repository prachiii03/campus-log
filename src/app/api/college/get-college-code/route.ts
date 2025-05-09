import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const collegeCode = await prisma.college_info.findFirst();

        if (!collegeCode) {
            return NextResponse.json({ error: "No college information found." }, { status: 404 });
        }

        return NextResponse.json(collegeCode.college_code, { status: 200 });
    } catch (error) {
        console.error("Error in get-college-code route:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
