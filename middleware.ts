import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This is a simplified example. In a real app, you would use a proper authentication system.
export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.has("auth")
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin")

  if (isAdminRoute && !isAuthenticated) {
    // In a real app, you would redirect to a login page
    // For this example, we'll simulate authentication with a cookie
    const response = NextResponse.redirect(new URL("/", request.url))
    response.cookies.set("auth", "true", { maxAge: 60 * 60 * 24 }) // 1 day
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/admin/:path*",
}

