import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Passage from "@passageidentity/passage-node";

export async function middleware(request: NextRequest) {
  //console.log("middleware page with token");
  const authToken = request.cookies.get("psg_auth_token")?.value;
  //console.log(authToken, "auth token");
  if (!authToken) {
    //console.log("middleware no token");
    return NextResponse.redirect(new URL("/", request.url));
  }
  const passage = new Passage({
    appID: process.env.NEXT_PUBLIC_PASSAGE_APP_ID!,
  });

  const userID = await passage.validAuthToken(authToken as string);
  // console.log(userID, "user token sdk middleware");
  if (!userID) {
    // console.log("token invalid ");
    return NextResponse.redirect(new URL("/auth", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*", "/settings/:path*"],
};
