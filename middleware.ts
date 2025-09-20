import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req: any) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const protectedPaths = ["/dashboard"];
    const isProtected = protectedPaths.some(path =>
        req.nextUrl.pathname.startsWith(path)
    );

    if (isProtected && !token) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}
