import { NextRequest, NextResponse } from 'next/server';
import { FacultyIdParams } from '../get-all-sem-and-subjects/route';
import prisma from '@/lib/db';
export async function GET(req: NextRequest, { params }: { params: FacultyIdParams }) {
    const { facultyId } = params;
    const allSubjects = await prisma.subject.findMany({
        where: {
            faculty_id: facultyId
        }
    });
    return NextResponse.json({ allSubjects })
}