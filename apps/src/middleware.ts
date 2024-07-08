import { NextRequest } from "next/server";
import { checkSession } from "@/libs/middleware";

export async function middleware(request: NextRequest) {
  return await checkSession(request);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|image|favicon.ico|img|file|$).*)",
  ],
};
