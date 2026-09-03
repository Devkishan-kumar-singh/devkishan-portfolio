import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Devkishan Kumar Singh | Web Developer & CSE Student",
  description:
    "Portfolio of Devkishan Kumar Singh, a Computer Science Engineering student building web applications and learning backend development and databases.",
  keywords: ["Devkishan Kumar Singh", "web developer", "computer science student", "Silicon University", "Synapse"],
  authors: [{ name: "Devkishan Kumar Singh" }],
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
