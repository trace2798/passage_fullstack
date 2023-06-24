import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  console.log("middleware page with token");
  const authToken = request.cookies.get("psg_auth_token")?.value;
  console.log(authToken, "auth token");
  if (!authToken) {
    console.log("middleware no token");
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*", "/settings/:path*"],
};
