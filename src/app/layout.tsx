import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/app/_utils/providers";

export const metadata: Metadata = {
  title: "수빈의 crud",
  description: "게시판 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
