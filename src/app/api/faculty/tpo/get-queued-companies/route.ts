import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const today = new Date(); // Get today's date

        const upCommingCompanies = await prisma.upcoming_companies.findMany({
            where: {
                application_deadline: {
                    gt: today,  // Only fetch companies where the application deadline is after today
                },
            },
        });

        return NextResponse.json({ upCommingCompanies })
    } catch (error) {
        console.error("Error fetching upcoming companies:", error);
        return new Response("Error fetching data", { status: 500 });
    }
}
