import { ValProvider } from "@valbuild/next";
import { config } from "../../../val.config";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { fetchVal } from "@/val/val.rsc";
import pageVal from "./page.val";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const pageContent = await fetchVal(pageVal);
  return {
    title: pageContent.title,
    description: pageContent.description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ValProvider config={config}>{children}</ValProvider>
      </body>
    </html>
  );
}
