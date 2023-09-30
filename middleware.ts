import { NextRequest, NextResponse } from "next/server";
// next-auth provides middleware to check session and redirect to login
import middleware from 'next-auth/middleware';

/**
 * This gets executed on every request.
 *
 * Note: you can check the user session and redirect, but next-auth already does that for you if you're using that.
 */
export function middleware(request: NextRequest) {
  // pass the route to redirect to and the base url
  return NextResponse.redirect(new URL("/new-page", request.url));
}

// to control which routes to run middleware
// name this config - nextjs looks for this name
export const config = {
  // you can use params like '/users/:id', to do 0 or more use '/users/:id*' this will catch /users/ or /users/1 etc.
  matcher: ["/users"], // path or array of string paths. middleware only runs on these paths
};

// wildcards for path matcher:
// * 0 or more
// + one or more
// ? 0 or one
