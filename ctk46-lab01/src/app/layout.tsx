import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
 title: "CTK46 - Lab 01",
 description: "Bài thực hành 1 - Các công nghệ mới trong PTPM",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html lang="vi">
 <body>{children}</body>
 </html>
 );
}
