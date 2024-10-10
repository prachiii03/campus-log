import { NextResponse } from "next/server"
import { registerStudent } from "./studentRegisterService";

export async function POST(req: Request) {
    const data = await req.json();
    console.log("request reached")
    console.log(data);
    try {

        if (data.profession == 0) {
            const res = await registerStudent(data);
            console.log(res)
            return NextResponse.json(res);
        }

        return NextResponse.json({ message: "hi" })
    } catch (error) {
        console.log({ error })
    }
}