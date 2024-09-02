import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import db from "@/db/db";
import { auth } from "@/auth";
import { users } from "@/db/schema/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "APP",
  description: "TAHFIDZ APP",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  // if (session) {
  //   const user = session?.user;
  //   const user_id = user?.id;

  //   const user_data = await db
  //     .select()
  //     .from(users)
  //     .where(eq(users.id, user_id));
  //   const nis = user_data[0]?.nis;
  //   const kelas = user_data[0]?.kelas;

  //   if (!nis || !kelas) {
  //     // const detailUrl = new URL("/detail");
  //     // redirect("/detail");
  //   }
  // }

  return (
    <SessionProvider>
      <html lang="id">
        <body className={montserrat.className}>{children}</body>
      </html>
    </SessionProvider>
  );
}
