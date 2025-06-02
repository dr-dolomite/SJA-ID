import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth
  
  // Skip middleware for static assets
  if (
    nextUrl.pathname.includes('.') && 
    (nextUrl.pathname.endsWith('.png') || 
     nextUrl.pathname.endsWith('.jpg') || 
     nextUrl.pathname.endsWith('.jpeg') || 
     nextUrl.pathname.endsWith('.gif') || 
     nextUrl.pathname.endsWith('.svg') || 
     nextUrl.pathname.endsWith('.ico') || 
     nextUrl.pathname.endsWith('.webp') ||
     nextUrl.pathname.endsWith('.css') ||
     nextUrl.pathname.endsWith('.js') ||
     nextUrl.pathname.endsWith('.woff') ||
     nextUrl.pathname.endsWith('.woff2') ||
     nextUrl.pathname.endsWith('.ttf'))
  ) {
    return NextResponse.next()
  }
  
  // Define public routes that don't require authentication
  const publicRoutes = [
    "/auth/login",
    "/auth/signup", // Initially public for first admin setup
    "/auth/reset-password",
    "/legal/terms",
    "/legal/privacy",
    "/api/auth/signup", // Initially public for first admin
    "/api/auth/reset-password",
  ]
  // Define auth routes (redirect to dashboard if already logged in)
  const authRoutes = ["/auth/login", "/auth/reset-password", "/auth/signup"]

  // Check if the current route is public
  const isPublicRoute = publicRoutes.some(route => 
    nextUrl.pathname.startsWith(route)
  )

  // Check if the current route is an auth route
  const isAuthRoute = authRoutes.some(route => 
    nextUrl.pathname.startsWith(route)
  )

  // If user is logged in and trying to access auth routes, redirect to dashboard
  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl))
  }

  // If user is not logged in and trying to access protected routes, redirect to login
  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname
    if (nextUrl.search) {
      callbackUrl += nextUrl.search
    }
    
    const encodedCallbackUrl = encodeURIComponent(callbackUrl)
    return NextResponse.redirect(
      new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl)
    )
  }

  // If user is not logged in and accessing root, redirect to login
  if (!isLoggedIn && nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/auth/login", nextUrl))
  }

  // If user is logged in and accessing root, redirect to dashboard
  if (isLoggedIn && nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/dashboard", nextUrl))
  }

  return NextResponse.next()
})

// Configure which routes this middleware runs on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.gif|.*\\.svg|.*\\.ico|.*\\.webp).*)"]
}