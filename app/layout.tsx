import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YouTube Automation Agent - Grow Your Channel",
  description: "AI-powered tools to help you create and manage a successful YouTube channel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        {children}
      </body>
    </html>
  );
}
