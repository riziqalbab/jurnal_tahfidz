import { NextRequest, NextResponse } from "next/server";
import db from "@/db/db";
import { users } from "@/db/schema/schema";
import { auth } from "@/auth";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const session = await auth();

  if (session) {
    const user = session?.user;
    const user_id = user?.id;

    const user_data = await db
      .select()
      .from(users)
      .where(eq(users.id, user_id));

    const nis = user_data[0].nis;
    const kelas = user_data[0].kelas;

    if (!nis || !kelas) {
      // console.log("sf");

      const newUrl = new URL("/detail", req.nextUrl.origin);
      return Response.redirect(newUrl);
    }
  }

  return NextResponse.json({ message: "df" });
}
