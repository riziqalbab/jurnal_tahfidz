import { NextRequest, NextResponse } from "next/server";
import authConfig from "./auth.config";
import NextAuth from "next-auth";
import db from "./db/db";
import { users } from "./db/schema/schema";
import { eq } from "drizzle-orm";

// Use only one of the two middleware options below
// 1. Use middleware directly
// export const { auth: middleware } = NextAuth(authConfig)

// 2. Wrapped middleware option

const { auth } = NextAuth(authConfig);
export default auth(async function middleware(req: NextRequest) {
  const session = await auth();

  if (!session && req.nextUrl.pathname !== "/login") {
    console.log("belum");

    const newUrl = new URL("/login", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
  if (session && req.nextUrl.pathname == "/login") {
    const newUrl = new URL("/", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }

  // if (session && req.nextUrl.pathname !== "/detail") {
  //   if (!session.kelas || !session.nis) {
  //     const detailUrl = new URL("/detail", req.nextUrl.origin);

  //     return Response.redirect(detailUrl);
  //   }
  // }
});

export const config = {
  matcher: ["/login/:path*", "/"],
};
