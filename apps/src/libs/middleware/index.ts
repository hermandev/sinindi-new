import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/libs/db";

export async function checkSession(req: NextRequest) {
  let res = NextResponse.next({
    request: {
      headers: req.headers,
    },
  });

  if (req.nextUrl.pathname === "/login") {
    db.authStore.loadFromCookie(cookies().toString());
    if (db.authStore.isValid) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return res;
  }

  const cookie = cookies();
  const request_cookie = cookie.get("pb_auth");
  if (request_cookie && request_cookie.value !== "") {
    db.authStore.loadFromCookie(cookie.toString());
    db.authStore.onChange(() => {
      res.headers.set(
        "set-cookie",
        db.authStore.exportToCookie({ httpOnly: true }),
      );
    });

    try {
      if (db.authStore.isValid) {
        await db.collection("users").authRefresh();
        return res;
      }
      return NextResponse.redirect(`${req.nextUrl.origin}/login`);
    } catch (error) {
      res.headers.set("set-cookie", "pb_auth");
      db.authStore.clear();
    }
  } else {
    return NextResponse.redirect(`${req.nextUrl.origin}/login`);
  }
}
