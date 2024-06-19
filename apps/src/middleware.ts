import { NextRequest } from "next/server";
import { checkSession } from "@/libs";

export async function middleware(request: NextRequest) {
  return await checkSession(request);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|image|favicon.ico|login|img|file|$).*)",
  ],
};
