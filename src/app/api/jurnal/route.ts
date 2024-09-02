import { auth } from "@/auth";
import db from "@/db/db";
import { jurnal_user } from "@/db/schema/schema";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await auth();
  const req_data = await req.json();
  const user = session?.user;
  const user_id = user?.id;

  const { surah, ayat, catatan } = req_data;

  try {
    const insert = await db.insert(jurnal_user).values({
      ayat: ayat,
      id_user: user_id,
      surah: surah,
      catatan: catatan,
    });

    return NextResponse.json({
      message: "success",
    });
  } catch {
    return NextResponse.json(
      { message: "error" },
      {
        status: 500,
      }
    );
  }
}
