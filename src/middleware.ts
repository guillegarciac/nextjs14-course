//always at the route level of the application

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const isLoggedIn: boolean = true;

export function middleware(req: NextRequest) {
  /* if (!isLoggedIn && req.url === 'http://localhost:3000/profile' ) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next(); */ // continue to the next middleware
  let headers = new Headers(req.headers);
  if (isLoggedIn) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/", req.url));
}

// config object is the same => if you try to enter profile it will redirect you to the home page
export const config = {
  matcher: ['/profile']
}
