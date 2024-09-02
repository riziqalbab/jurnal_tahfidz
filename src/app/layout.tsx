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
  title: "JURNAL",
  description: "TAHFIDZ APP",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider>
      <html lang="id">
        <body className={montserrat.className}>{children}</body>
      </html>
    </SessionProvider>
  );
}
