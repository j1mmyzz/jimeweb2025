import "./globals.css";
import { Karla } from "next/font/google";
import type React from "react";

const karla = Karla({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Jimmy Zheng",
  description: "Jimmy's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${karla.className}  bg-slate-950 text-white absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]`}
      >
        {children}
      </body>
    </html>
  );
}
