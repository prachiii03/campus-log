import { NextRequest, NextResponse } from "next/server";
export { default } from 'next-auth/middleware';
import { getToken } from "next-auth/jwt";
export async function middleware(request: NextRequest) {

    const token = await getToken({ req: request });
    const url = request.nextUrl;

    if (token && (
        url.password.startsWith('/register') ||
        url.password.startsWith('/log-in') ||
        url.password.startsWith('/')
    )) {
        console.log(token)
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    return NextResponse.redirect(new URL('/', request.url));
}
export const config = {
    matcher: ['/dashboard', '/student', '/sign-in'],
}