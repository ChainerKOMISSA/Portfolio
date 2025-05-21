import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const isAdmin = req.nextUrl.pathname.startsWith("/admin");
    const isAuthPage = req.nextUrl.pathname.startsWith("/auth");

    // Si on est sur /admin et pas connecté → redirect vers /auth/signin
    if (isAdmin && !token) {
        const url = req.nextUrl.clone();
        url.pathname = "/auth/signin";
        return NextResponse.redirect(url);
    }

    // Si on est sur la page login et déjà connecté → redirect vers /admin
    if (isAuthPage && token) {
        const url = req.nextUrl.clone();
        url.pathname = "/admin";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*", "/auth/signin"]
};