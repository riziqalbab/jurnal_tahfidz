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

    if (user_data.length > 0) {
      return NextResponse.json({
        message: "success",
        data: user_data[0],
      });
    } else {
      return NextResponse.json(
        {
          message: "Not found",
        },
        {
          status: 400,
        }
      );
    }
  }
}

export async function POST(req: NextRequest) {
  try {
    // Autentikasi user

    const user = await auth();

    // Pastikan user sudah terautentikasi
    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Parse JSON body
    const req_data = await req.json();

    // Validasi data
    const { nis, nama_lengkap, kelas, whatsapp } = req_data;

    if (!nis || !nama_lengkap || !kelas || !whatsapp) {
      return NextResponse.json({ message: "Invalid input" }, { status: 400 });
    }

    // Update data di database
    const update = await db
      .update(users)
      .set({
        name: nama_lengkap,
        nis,
        kelas,
        whatsapp,
      })
      .where(eq(users.id, user?.user.id as undefined | string));

    // Cek hasil update
    if (update.rowCount === 0) {
      return NextResponse.json(
        { message: "User not found or no changes made" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Update successful" });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
