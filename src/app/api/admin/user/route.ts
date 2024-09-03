import db from "@/db/db";
import { users } from "@/db/schema/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const id_user: string | null = searchParams.get("id_user");

  const data = await db
    .select()
    .from(users)
    .where(eq(users.id, id_user as string));

  return NextResponse.json({
    message: "success",
    data: data,
  });
}
