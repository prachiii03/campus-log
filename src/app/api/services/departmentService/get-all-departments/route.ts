import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(req: Request) {
    if (req.method === 'GET') {
        try {
            const response = await prisma.department.findMany();
            let departments: Array<{ departmentId: string, hodId: string }> = [];

            response.forEach(dept => {
                let department = {
                    departmentId: dept.department_id,
                    hodId: dept.hod_id ? dept.hod_id : ''
                };
                departments.push(department);
            });

            console.log({ departments });
            return NextResponse.json({ data: departments });
        } catch (error) {
            console.error('Error fetching departments:', error);
            return NextResponse.json({ error: 'Error fetching departments' });
        }
    } else {
        return NextResponse.json({ error: 'Method not allowed' });
    }
}
