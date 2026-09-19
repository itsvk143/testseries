import { NextResponse } from 'next/server';

const SESSION_COOKIE_NAMES = [
    'authjs.session-token',
    '__Secure-authjs.session-token',
    'next-auth.session-token',
    '__Secure-next-auth.session-token',
];

export function middleware(request) {
    const { pathname, search } = request.nextUrl;

    const hasSessionCookie = SESSION_COOKIE_NAMES.some(name => 
        request.cookies.has(name) && !!request.cookies.get(name)?.value
    );

    // If attempting to access admin API routes without a session cookie, reject immediately
    if (pathname.startsWith('/api/admin')) {
        if (!hasSessionCookie) {
            return NextResponse.json(
                { error: 'Unauthorized. Session required.' },
                { status: 401 }
            );
        }
    }

    // If attempting to access admin page routes without any session cookie, redirect to signin
    if (pathname.startsWith('/admin')) {
        if (!hasSessionCookie) {
            const callbackUrl = encodeURIComponent(`${pathname}${search}`);
            const signInUrl = new URL(`/auth/signin?callbackUrl=${callbackUrl}`, request.url);
            return NextResponse.redirect(signInUrl);
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/admin/:path*',
        '/api/admin/:path*',
    ],
};
