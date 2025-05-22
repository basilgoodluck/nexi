import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CMS-Powered App",
  description: "A sleek CMS-powered application with AI assistant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` bg-white text-gray-900 antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}