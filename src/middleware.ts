// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as cookie from "cookie";

export function middleware(req: NextRequest) {
  // Parse cookies from the request headers
  const cookies = cookie.parse(req.headers.get("cookie") || "");
  const token = cookies.authToken;

  const { pathname } = req.nextUrl;

  if (pathname === '/auth') {
    const loginUrl = new URL("auth/login", req.url);
    return NextResponse.redirect(loginUrl);
  }
  // Redirect from /auth/* to /overview if the user is authenticated
  if (pathname.startsWith("/auth") && token) {
    const dashboardUrl = new URL("/overview", req.url);
    return NextResponse.redirect(dashboardUrl);
  }

  // Redirect unauthenticated users trying to access protected routes to /auth/login
  const protectedRoutes = ["/overview",]; // Add more routes as needed
  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

  if (isProtectedRoute && !token) {
    const loginUrl = new URL("/auth/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // Allow the request to proceed as usual
  return NextResponse.next();
}

// Define middleware configuration
export const config = {
  matcher: ['/((?!api|_next/static|.*\svg|.*\png|.*\jpg|.*\jpeg|.*\gif|.*\webp|_next/image|favicon.ico).*)',],
};
