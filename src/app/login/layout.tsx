import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "LOGIN",
  description: "TAHFIDZ APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
