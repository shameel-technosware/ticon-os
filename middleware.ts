import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request,
  });
  console.log("[Middleware] Path:", request.nextUrl.pathname);

  // Create a Supabase client
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(
          cookiesToSet: {
            name: string;
            value: string;
            options: CookieOptions;
          }[]
        ) {
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Get the user session
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("[Middleware] User:", user);

  // Define protected routes
  const isProtectedRoute = request.nextUrl.pathname.startsWith("/dashboard");

  // If the user is not authenticated and trying to access a protected route, redirect to login
  if (isProtectedRoute && !user) {
    const redirectUrl = new URL("/login", request.url);
    return NextResponse.redirect(redirectUrl);
  }

  // If the user is authenticated and trying to access login/signup, redirect to dashboard
  const isAuthRoute =
    request.nextUrl.pathname.startsWith("/login") ||
    request.nextUrl.pathname.startsWith("/signup");
  if (isAuthRoute && user) {
    const redirectUrl = new URL("/dashboard", request.url);
    return NextResponse.redirect(redirectUrl);
  }

  return response;
  return NextResponse.next();
}

// Define which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
