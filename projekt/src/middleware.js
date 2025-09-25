import { NextResponse } from "next/server";

export default async function middleware(request) {
    if (!request.cookies.has('sh_access_token')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return;
}

export const config = {
    matcher: [
        '/propose-swap/:path*',
        '/profile/:path*',
        '/my-listings/:path*',
    ]
};