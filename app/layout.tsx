import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/shared/top-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Software Engineer - Sajib Hosen",
    template: "%s | Software Engineer - Sajib Hosen",
  },
  description:
    "I'm Sajib Hosen, a full stack web developer specializing in MERN stack, Next.js, and NestJS. Explore my portfolio showcasing modern, high-performance web applications and software engineering projects.",
  keywords: [
    "Sajib Hosen",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "NestJS Developer",
    "React Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Software Engineer",
    "Portfolio",
    "Freelance Developer",
    "Bangladesh Developer",
    "Performance Optimization",
    "Web Application Developer",
    "Remote Developer",
    "Clean Code",
    "Modern Web Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark `}
      >
        <TopNav />
        {children}
      </body>
    </html>
  );
}
